/**
 * Cloudflare Workers（静的アセット配信）の前段。
 *
 * 目的1: 既定の workers.dev サブドメインへのアクセスを、正規ドメイン
 *        https://santaworks.net へ 301（恒久リダイレクト）で寄せる。
 *        正規URLと同じ内容が2箇所に存在する重複を解消し、SEOの評価を
 *        正規ドメインに集約する。canonical タグ（宣言）に加えて実転送を行う。
 * 目的2: プロフィール常設リンク用の短縮パス（/x・/note・/youtube）を、
 *        面別UTM付きでトップへ 302。X/note/YouTube のプロフィール欄に
 *        santaworks.net/x のように貼れる（GA4 が utm_source/campaign を拾う）。
 *
 * それ以外のホスト/パスは素通しで静的アセット（out/）をそのまま配信する。
 */
const CANONICAL_HOST = "santaworks.net";

// 短縮パス → utm_source。宛先は常にトップ（屋号＝全事業の入口）。campaign=profile。
// 面を増やすときはここに1行足す（例 "/insta": "instagram"）。
const SHORTLINKS = {
  "/x": "x",
  "/note": "note",
  "/youtube": "youtube",
};

// 個別の宛先を持つ短縮（プロダクト直行など）。宛先は絶対URLで指定。
// 面別UTMは宛先URL側に含めておく（プロダクトLPで /px ビーコンが拾う）。
const SHORTLINKS_TO = {
  // X固定ツイート → ポケメモLP（campaign=pin で固定経由の追加を計測）
  "/pm": "https://pokememo.santaworks.net/?utm_source=x&utm_campaign=pin",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 既定の *.workers.dev アクセスは正規ドメインへ 301
    if (url.hostname.endsWith(".workers.dev")) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      url.port = ""; // 念のため（workers.dev 側のポートを引き継がない）
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.replace(/\/+$/, ""); // 末尾スラッシュ有無を吸収

    // 短縮パス（/x・/note・/youtube）→ 面別UTM付きでトップ（屋号＝全事業の入口）へ 302
    const src = SHORTLINKS[path];
    if (src) {
      const dest = new URL(url.toString());
      dest.hostname = CANONICAL_HOST;
      dest.protocol = "https:";
      dest.port = "";
      dest.pathname = "/";
      dest.search = `?utm_source=${src}&utm_campaign=profile`;
      return Response.redirect(dest.toString(), 302);
    }

    // 個別宛先の短縮（/pm＝ポケメモLP直行 など）→ 宛先URLへ 302
    const to = SHORTLINKS_TO[path];
    if (to) {
      return Response.redirect(to, 302);
    }

    // 通常は静的アセットをそのまま配信
    return env.ASSETS.fetch(request);
  },
};

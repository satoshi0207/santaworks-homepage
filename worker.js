/**
 * Cloudflare Workers（静的アセット配信）の前段。
 *
 * 目的: 既定の workers.dev サブドメインへのアクセスを、正規ドメイン
 *       https://santaworks.net へ 301（恒久リダイレクト）で寄せる。
 *       正規URLと同じ内容が2箇所に存在する重複を解消し、SEOの評価を
 *       正規ドメインに集約する。canonical タグ（宣言）に加えて実転送を行う。
 *
 * それ以外のホスト（santaworks.net 本番、独自ドメイン等）は素通しで
 * 静的アセット（out/）をそのまま配信する。
 */
const CANONICAL_HOST = "santaworks.net";

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

    // 通常は静的アセットをそのまま配信
    return env.ASSETS.fetch(request);
  },
};

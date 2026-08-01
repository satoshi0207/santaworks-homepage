import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";
import CopyPassword from "@/components/CopyPassword";
import ExifSortProArt from "@/components/ExifSortProArt";
import { samples } from "../samples";

const WORKS_DESCRIPTION =
  "Santa Works の実績・プロダクト。LINEで使える記憶サポート「ポケメモ」と、写真・動画をメタデータで整理する Mac アプリ「ExifSortPro」。";

export const metadata: Metadata = {
  title: "Works",
  description: WORKS_DESCRIPTION,
  alternates: { canonical: "/works/" },
  openGraph: {
    title: "Works｜Santa Works",
    description: WORKS_DESCRIPTION,
    url: "/works/",
  },
};

const POKEMEMO_URL = "https://pokememo.santaworks.net";

/* ExifSortPro は招待制のβテスト中。DMG の直リンクは載せず、導線は必ず応募ページへ送る
   （配布は5〜10名にURLを個別送付しているため、ここから直接落とせると前提が崩れる）。 */
const EXIFSORT_URL = "https://exifsort.web.app/";
const EXIFSORT_BETA_URL = "https://exifsort.web.app/details/#beta";

const features: { img: string; title: string; body: string }[] = [
  {
    img: "/pokememo/feat-people.webp",
    title: "会った人を登録",
    body: "名前とちょっとしたメモで相手を登録。専用アプリは不要、LINEの友だち追加だけで始められます。",
  },
  {
    img: "/pokememo/feat-record.webp",
    title: "会話を記録",
    body: "その日話したこと・出来事をLINEでそのまま記録。ボタン操作が中心で、書くのは新しい情報のときだけ。",
  },
  {
    img: "/pokememo/feat-search.webp",
    title: "次に会う前に見返す",
    body: "名前で検索、最後に話した順に一覧。会う前にさっと見返せば、会話がもっとスムーズに。",
  },
];

/* LP で明言している「3つの約束」をそのまま持ってくる。
   言い方を変えると、製品サイトと言っていることがズレる。 */
const promises: { title: string; body: string; note: string }[] = [
  {
    title: "壊さない",
    body: "作るのはコピーだけ。元のファイルは移動もリネームもしません。整理をやり直しても、元の場所はそのままです。",
    note: "コピーのみ・元ファイル無破壊",
  },
  {
    title: "漏らさない",
    body: "写真には撮った場所の座標が埋まっています。フォルダを決めるために読みますが、読むだけで、どこへも送りません。アカウント登録もありません。",
    note: "ネットワーク送信なし・機内モードで動く",
  },
  {
    title: "なくさない",
    body: "いつ・何を・どこへコピーしたかを記録します。やり直したくなったら、履歴からまるごと巻き戻せます。",
    note: "全操作を巻き戻せる",
  },
];

export default function Works() {
  return (
    <div className="pt-16">
      {/* プロダクト */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal plain className="mx-auto max-w-5xl">
          <SectionLabel>Products</SectionLabel>
          <h1 className="mb-10 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            プロダクト
          </h1>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-accent">
                看板プロダクト
              </span>
              <h2 className="mb-3 text-2xl font-extrabold">
                ポケットメモリー（ポケメモ）
              </h2>
              <p
                className="mb-5 text-[1.05rem] font-bold leading-snug"
                style={{ color: "#e86a54" }}
              >
                会って、話して、忘れてく。
                <br />
                それ、ポケメモにお任せ。
              </p>
              <p className="mb-6 text-[0.95rem] text-muted [word-break:keep-all] [overflow-wrap:anywhere]">
                会った人のことや話した内容を、LINEでそっと記録。次に会う前に見返せば、会話がもっとスムーズに。接客・商談・対人業務のための記憶サポートサービスです。アプリのインストール不要、LINEの友だち追加だけで始められます。
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={POKEMEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-[0.9rem] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
                >
                  ポケメモの公式サイトを見る →
                </a>
                <div className="flex items-center gap-3">
                  <div className="rounded-md border border-line bg-white p-1.5 shadow-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/pokememo/line-qr.png"
                      alt="ポケメモのLINE友だち追加用QRコード"
                      width={680}
                      height={680}
                      className="h-24 w-24"
                    />
                  </div>
                  <p className="text-[0.78rem] leading-snug text-muted">
                    カメラで読み取ると
                    <br />
                    LINEで友だち追加
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-[#ffe9e2] to-[#fff6f2] p-8 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pokememo/hero.webp"
                alt="ポケットメモリーのイメージ。スマホと会話の吹き出し。"
                width={684}
                height={661}
                className="h-auto w-full max-w-[340px]"
              />
            </div>
          </div>

          {/* 3つの特長 */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-md border border-line bg-surface p-6 text-center shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt=""
                  width={200}
                  height={200}
                  aria-hidden="true"
                  className="mx-auto mb-4 h-20 w-20"
                />
                <h3 className="mb-2 text-[1.02rem] font-bold">{f.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>

          {/* 商品2: ExifSortPro。ポケメモ（人を憶える）と対になる「写真を憶える」側 */}
          <div
            id="exifsortpro"
            className="mt-20 scroll-mt-24 border-t border-line pt-16"
          >
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-accent">
                    Mac アプリ
                  </span>
                  <span className="inline-block rounded-full bg-line/60 px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-muted">
                    βテスト中
                  </span>
                </div>
                {/* ワードマークは LP と同じ組み方 —「Pro」だけブランドの藍(#4F46E5)。
                    ダークだと沈むので、そのときだけ indigo-400 相当に振る */}
                <h2 className="mb-3 text-2xl font-extrabold">
                  ExifSort
                  <span className="text-[#4F46E5] dark:text-[#818cf8]">Pro</span>
                </h2>
                <p className="mb-5 text-[1.05rem] font-bold leading-snug text-[#4F46E5] dark:text-[#818cf8]">
                  「撮る楽しみ」を、
                  <br />
                  「見返す喜び」に。
                </p>
                <p className="mb-6 text-[0.95rem] text-muted [word-break:keep-all] [overflow-wrap:anywhere]">
                  撮ったその瞬間のデータを手がかりに、散らばった写真と動画を本棚のように並べ直す
                  Mac アプリ。撮影日・カメラ・拡張子などのメタデータを読んで、フォルダの形をドラッグで組み立てられます。
                </p>
                <dl className="mb-7 space-y-1.5 text-[0.85rem]">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-bold">動作環境</dt>
                    <dd className="text-muted">
                      macOS 12 Monterey 以降／Apple Silicon・Intel 両対応
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-bold">価格</dt>
                    <dd className="text-muted">
                      正式版は ¥1,280（買い切り・税込）を予定
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={EXIFSORT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-[0.9rem] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
                  >
                    ExifSortPro の公式サイトを見る →
                  </a>
                  <a
                    href={EXIFSORT_BETA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] font-bold text-accent transition-colors hover:text-accent-strong"
                  >
                    テスターに応募する →
                  </a>
                </div>
                <p className="jp-flow mt-4 text-[0.78rem] leading-relaxed text-muted/80">
                  いまは招待制のβテスト中です。Apple の Developer ID
                  で署名・公証を済ませているので、開いたときに警告は出ません。
                </p>
              </div>
              {/* 絵が自前で地を持っているので、パネルは付けずに敷き詰める */}
              <div className="overflow-hidden rounded-md shadow-card">
                <ExifSortProArt />
              </div>
            </div>

            {/* 3つの約束 */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {promises.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col rounded-md border border-line bg-surface p-6 shadow-card"
                >
                  <h3 className="mb-2 text-[1.02rem] font-bold">{p.title}</h3>
                  {/* 長めなので keep-all を切る。切らないと句点が行頭に落ちる */}
                  <p className="jp-flow text-[0.86rem] leading-relaxed text-muted">
                    {p.body}
                  </p>
                  <p className="mt-auto pt-3 text-[0.7rem] tracking-tight text-muted/70">
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* デザインサンプル */}
      <section
        id="samples"
        className="scroll-mt-24 border-t border-line bg-surface/55 px-6 py-20 sm:px-10 md:py-28"
      >
        <Reveal plain className="mx-auto max-w-5xl">
          <SectionLabel>Design Samples</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.4rem,3.2vw,2rem)] font-extrabold">
            デザインサンプル
          </h2>
          <p className="max-w-2xl text-muted">
            {/* PCは読点なしで文単位に改行。スマホは長文の文中で折り返して「。」の孤立を防ぐ */}
            架空のお店・企業を想定したデモサイト集。
            <br />
            「頼んだらこうなる」を<br className="md:hidden" />実際に触って確かめられます。
            <br />
            本デザインはテンプレートではなく、
            <br className="md:hidden" />
            もちろん細かな要望にも対応致します。
            <br />
            順次公開予定です。
          </p>
          <p className="jp-flow mt-4 max-w-2xl text-[0.8rem] text-muted/80">
            ※
            写真はすべて商用利用可のフリー素材です。肖像権・プライバシー保護の観点から、人物の顔が写る素材は使用していません。店名・住所等はすべて架空です。
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {samples.map((s, i) =>
              s.href ? (
                <div
                  key={s.label}
                  className="group relative flex flex-col overflow-hidden rounded border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/45"
                >
                  {s.badge ? (
                    <span className="absolute right-3 top-3 z-20 rounded-full bg-accent px-2.5 py-1 text-[0.66rem] font-bold tracking-[0.1em] text-white shadow-card">
                      {s.badge}
                    </span>
                  ) : null}
                  {s.password ? <CopyPassword password={s.password} /> : null}
                  {/* カード全面をリンクに（stretched link）。コピーボタンは前面(z-20)で遷移しない */}
                  <a
                    href={s.href}
                    {...(s.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex flex-1 flex-col after:absolute after:inset-0 after:z-0"
                  >
                    {/* サンプルは増え続けるので、最初の2枚以外は遅延読み込みにする
                        （一覧を開いた時点で全サムネを取りに行かせない）。
                        サムネは実画面のスクリーンショット（4:3）。帯状に切ると見出しが
                        横一文字に切れて「デザインを見せる」役目を果たさないため、
                        元の比率のまま出す */}
                    <img
                      src={s.thumb}
                      alt=""
                      aria-hidden="true"
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      width={600}
                      height={450}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-1 line-clamp-2 min-h-[2.75em] text-[1.05rem] font-bold leading-snug">
                        {s.icon} {s.label}「{s.name}」
                      </h3>
                      <p className="mb-4 line-clamp-2 min-h-[2.7em] text-[0.9rem] leading-snug text-muted">
                        {s.tone}
                      </p>
                      <span className="mt-auto block text-[0.85rem] font-bold text-accent">
                        {s.external ? "デモを見る（別タブ）→" : "デモを見る →"}
                      </span>
                    </div>
                  </a>
                </div>
              ) : (
                <div
                  key={s.label}
                  className="rounded border border-dashed border-line bg-surface/60 p-7"
                >
                  <div className="mb-3 text-2xl" aria-hidden="true">
                    {s.icon}
                  </div>
                  <h3 className="mb-1 text-[1.05rem] font-bold">{s.label}</h3>
                  <p className="mb-3 text-[0.9rem] text-muted">{s.tone}</p>
                  <span className="inline-block rounded-full bg-line/50 px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-muted">
                    準備中
                  </span>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

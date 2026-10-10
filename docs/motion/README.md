# 動きの見本帳（public/motion）

Webサイトで使える動きを、実際に動くデモと短い説明で集めた見本帳。2026-10-09 着手。
**用途は2つ**：受託の打ち合わせで「どの動きが好みか」を選んでもらう道具／Satoshiさんの学習帳。

- 本番：**`https://santaworks.net/motion/`**（2026-10-10 公開。**`noindex` のまま**＝検索には出さず、リンクを渡した人だけが見る。sitemap にも入れていない）
- 手元の確認：`http://100.80.244.15:8925/`（tailnet 内だけ。user サービス `web-motion` が `scripts/motion-serve.py` を起動）。**push の前にここで見る**
- 置き場所：公開するファイルは **`public/motion/`**（ここに置いたものは全部インターネットに出る）。
  この README・Claude Design の原本・撮影スクリプトは **`docs/motion/`**（公開されない）。2026-10-10 に本社リポジトリの `web/motion/` から**移した**（コピーではない）
- サイトからの導線：**Works のデザインサンプルの下**に1枚（2026-10-11〜。`app/(site)/works/page.tsx`・絵はマーキーの録画）。トップの「Web制作」カードからはまだ無い
- 料金：**書かない**（重さと手間の3段階だけ）。料金表はまだサイトに出していないため（→ `web/CLAUDE.md`）

## 構成

ことわりが無ければ `public/motion/` の中。

| | |
|---|---|
| `public/motion/effects.json` | 🔑 **真実源。**全効果（2026-10-10 に41個）の名前・分類・重さ・手間・作り方・説明・つまみ。一覧も詳細もこれだけを読む。**`name` は制作の現場での呼び名（見出し）、`alias` はお客様向けの言い換え、`en` は調べるときの英語**（2026-10-10〜） |
| `index.html` + `assets/index.js` | 一覧（よく出る8つ・分類ごとのカード・分類の絞り込み）。カードは録画した動画が画面に入ると流れる |
| `effect.html?id=…` + `assets/effect.js` | 詳細（デモ枠・動くきっかけ・この動きについて・仕組みを見る・前後の動き・お問い合わせ） |
| `assets/site.css` `assets/site.js` | 両ページ共通（見た目・テーマ・動きを止める）。**見た目は santaworks.net 本体の1ページに見えるように**（同じヘッダー・生成りの地・赤1色。2026-10-10 に Claude Design の v2 で一新） |
| `demos/*.html` | **1効果1ファイルのデモ。**単独でも開ける、ふつうの Web ページ |
| `demos/_lab.js` `demos/_stage.css` | 見本帳とデモの橋渡し・デモ共通の舞台。コード欄には出ない |
| `scripts/motion-serve.py` | 手元の配信（user サービス `web-motion` が起動）。`no-cache` を付けるだけの http.server。本番には関係しない |
| `media/` | まなリーフの画像（WebP）・スクロール連動動画のコマ（`media/scrub/`）・背景動画 `bg-hero.mp4`（hero の絵を寄って戻す8秒ループ。ffmpeg の zoompan で作った）・一覧カードの動画 `clips/`。合計約12MB |
| `media/clips/` | **一覧カードの動画**（`<id>.mp4`・960×600・3秒前後・音なし）と poster（`<id>.webp`・「動きを止める」の間に見える）。合計約8MB。デモから機械で撮る（下の「デモを1つ足す手順」の3） |
| `docs/motion/design/` | Claude Design の原本。`動きの見本帳.dc.html`＋`support.js` は v1（10/09）。v2（10/10・今の見た目）は `claude-design-prompt-v2.md` と、git 外の `materials/claude-design-v2/`。`capture/` は撮影スクリプト |

ビルドは無い（`next build` は `public/motion/` をそのまま `out/` に写すだけ）。手元では、ファイルを直せば再読み込みで反映される（配信が `no-cache` を付ける）。
本番は homepage の main へ push すると Cloudflare が自動で載せる（1〜2分）。
⚠️ 2026-10-10 より前に開いたブラウザは古いファイルを持っていることがあるので、共通ファイルは `?v=4` のように版を付けて読んでいる（見た目を大きく変えたら上げる）。

## デモを1つ足す手順

1. `public/motion/demos/<id>.html` を書く。先頭に次の2行（見本帳専用）
   ```html
   <script src="_lab.js?v=3" data-lab></script>
   <link rel="stylesheet" href="_stage.css" data-lab>
   ```
2. `effects.json` のその効果に、説明6項目（`oneLine` `goodFor` `badFor` `weightNote` `effortNote` `reduceNote`）、
   `reduceBadge`、`pitfalls`（3つ）、`demos`（`file` `label` `height` `drive` `principle` `sliders`）を書く。
   `drive` は**動くきっかけ**：`kind` は「スクロール量／時間／カーソル／操作／ずっと」のどれか、`text` は一言（デモ枠の下に出る。CSS 版と JS 版の違いが一番出るところ）。
   `demos` は**1つ以上必ず書く**（空のままだと詳細ページが組めない）
3. **一覧カードの動画を撮る**：`docs/motion/design/capture/clips.mjs` の `PLANS` に、その id の撮り方（どのデモを開き、何秒目に何をするか）を1行足して
   `node docs/motion/design/capture/clips.mjs <id>`（見本帳が :8925 で動いていること）。`public/motion/media/clips/<id>.mp4` と `.webp` ができる。
   デモを直したときも、その id だけ撮り直す
4. スマホ幅（390px）で、一覧・詳細・仕組みを開いた状態を見る

## 「最小のコード」の決めごと（コード欄はデモのソースを読んで自動で作る）

コードは**書き写さない**。詳細ページがデモのファイルを読み、次の決めごとで切り出す。

- `data-lab` の付いた要素は見本帳専用 → **コード欄に出さない**（舞台の飾り・ヒント・メニューなど）
- `data-lab-more` の付いた要素は → 「同じ形の要素が、あとNつ続く」に**畳む**
- **複数行の要素は、開きタグと同じ字下げで閉じタグを書く**（切り出しは行単位で、閉じタグを字下げで探す）
- `<style>` → CSS タブ、`<script>`（src なし）→ JS タブ、`<body>` の中と importmap → HTML タブ

### つまみ（`sliders`）

デモ本体のコードを汚さないよう、つまみは**値の置き場所を外から書き換える**だけにする。

| キー | 意味 |
|---|---|
| `target` | 書き換える要素の CSS セレクタ（`:root` 可） |
| `cssVar` ／ `attr` | CSS 変数（例 `--rise`）か、属性（例 `data-speed`）のどちらか |
| `unit` | CSS 変数に付ける単位（`px` `%` `s`） |
| `code` | コード欄の書き戻し用。**ソースに逐語で在る文字列**で、値の場所を `{v}` にする |

デモ側は、その値を**毎回読む**書き方にする（例：`Number(el.dataset.speed)` を毎フレーム読む）。
読み込んだ瞬間に1回だけ読むデモ（GSAP の設定・Lottie の速さ・CSS の登場アニメーション）は、
`demos[]` に **`"reload": true`** を付ける。つまみや「動きを止める」を変えると、デモを読み込み直す。
読み込み直すときの値は iframe の URL の `#lab=…` で渡り、`_lab.js` が**デモのスクリプトより先に**書き込む。

つまみが無いデモは `sliders` を空にする（詳細ページが「つまみはありません」と出す）。

### 「動きを止める」

`_lab.js` が、デモの `@media (prefers-reduced-motion: reduce)` と
`matchMedia('(prefers-reduced-motion: reduce)').matches` を、その場で「当てはまる」に切り替える。
**デモは OS の設定だけを見る、ふつうの書き方でよい。**`.matches` は使うたびに読む（最初に1回だけ読まない）。

## 守ること

- 題材は **Santa Works の商品「まなリーフ」の素材**（2026-10-10〜。キャラクター・物語の絵・ロゴ・小3の画面録画）。3Dのマグだけは架空（立体の素材が無いため）
  - 物語の絵は**各キャラクターの第1章（無料の範囲）だけ**を使う。有料の章の絵は出さない
  - 元の画像は Mac（`~/dev/study/rika/grade4/assets/images/`）。ここにあるのは WebP に縮めた写し
- 人物の顔が写る素材を使わない
- 外部のライブラリは jsDelivr から**版を固定**して読む（three.js 0.186.1・GSAP 3.15.0・lottie-web 5.13.0・Swiper 14.3.0）

## 画像の置き場所を変えるとき（Cloudinary など）

デモは画像を `../media/…` という相対パスで読む。**デモのコードは書き換えない**で、
公開するときの配信側で `/media/*` を画像配信サービスへ振り向ける（1か所の設定で済む）。
置き場所を選ぶのは公開を決めるとき（2026-10-10 の判断：いまはリポジトリ）。

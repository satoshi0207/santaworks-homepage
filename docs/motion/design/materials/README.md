# Claude Design に渡す素材（2026-10-10 撮影）

プロンプトは `../claude-design-prompt-v2.md`。説明文の中身は `../../effects.json`（呼び名・言い換え・英語名・一文の説明）。

🔴 **このフォルダは git に入れない**（`.gitignore`）。デモから撮り直せる派生物で、真実源は `demos/` と `effects.json`。
撮り直すときは `../capture/clips.mjs`（動画）と `../capture/shots.mjs`（静止画）。デモを直したら、その id だけ `node docs/motion/design/capture/clips.mjs <id>`（homepage リポジトリの根っこで） で撮り直せる。

## 中身

| フォルダ | 中身 |
|---|---|
| `site/` | santaworks.net の見本。`site-top-1440-firstview`（最初の1画面）／`site-top-1440-full`／`site-works-1440-full`／`site-top-390-full`（スマホ幅）。`motion-detail-now` は今の見本帳の詳細ページ（構成の参考。見た目は作り直す） |
| `demos/` | デモの静止画 8枚（1280×800）。まなリーフの絵の色味を伝える用 |
| `clips/` | 一覧カード用の動画 41本（Claude Design に渡した版。**サイトが使うのは `media/clips/`** で、こちらを少し軽くしたもの）（`<id>.mp4`・960×600・30fps・音なし・H.264）と、同名の `.jpg`（3/4 の時点の1コマ・poster 用） |

撮り方：ヘッドレス Chrome で各デモを 640×400 の画面に開き、1.5倍の解像度で録画。
「DEMO · …」のヒント文は消してある。マウスで動く効果は、録画に映らないカーソルの代わりに矢印を描き足してある（`cursor` だけは自前のカーソルなので描かない）。
スクロール・クリック・ホイールは機械で操作しているので、毎回同じ動きになる。
`morph` は 3倍速、`gradient` は 2倍速（ゆっくりすぎて3秒では形が変わって見えないため）。

## 動画の一覧（★ = 打ち合わせでよく出る8つ。一覧で大きく見せる）

| id | 分類 | 呼び名 | 言い換え | 英語 | 長さ |
|---|---|---|---|---|---|
| `fade` | スクロール | フェードイン ★ | ふわっと出る | Fade-in on scroll | 3.0秒 |
| `parallax` | スクロール | パララックス | 奥と手前がずれて動く | Parallax | 3.0秒 |
| `pin` | スクロール | スクロール固定 | 画面に固定して中身が替わる | Pinning / Sticky scroll | 3.0秒 |
| `hscroll` | スクロール | 横スクロール | 縦に進むと、横に流れる区間 | Horizontal scroll | 3.0秒 |
| `video` | スクロール | スクロール連動動画 | スクロールで動画が進む | Scroll-scrubbing video | 3.0秒 |
| `header` | スクロール | 追従ヘッダー ★ | 下へ進むと隠れて、上へ戻すと出てくる見出し帯 | Hide-on-scroll header | 3.0秒 |
| `maskreveal` | スクロール | マスクアニメーション | カーテンが開くように現れる | Clip-path reveal | 3.0秒 |
| `progress` | スクロール | スクロール進捗バー | 読んだ分だけ、上の線が伸びる | Scroll progress bar | 3.0秒 |
| `bgcolor` | スクロール | 背景色の切り替え | 区間ごとに、背景の色が変わる | Background color change on scroll | 3.0秒 |
| `textfill` | スクロール | テキストの塗り | 読み進めると、文字が色で塗られていく | Text fill on scroll | 3.0秒 |
| `zoom` | スクロール | ズームスクロール | 画像が、画面いっぱいまで広がる | Zoom on scroll | 3.0秒 |
| `snap` | スクロール | スクロールスナップ | 1画面ずつ、ぴたっと止まる | Scroll snap | 3.0秒 |
| `magnet` | マウス操作 | マグネティックボタン | 磁石のように寄るボタン | Magnetic button | 3.0秒 |
| `tilt` | マウス操作 | チルト | カードが3Dに傾く | Tilt effect | 3.0秒 |
| `cursor` | マウス操作 | カスタムカーソル | 丸いカーソルが、少し遅れて付いてくる | Custom cursor (cursor follower) | 3.0秒 |
| `hoverimg` | マウス操作 | ホバーで画像が出る | 一覧の文字に乗ると、写真が浮かぶ | Hover image reveal | 3.0秒 |
| `mparallax` | マウス操作 | マウスパララックス | カーソルに合わせて、奥と手前がずれる | Mouse parallax | 3.0秒 |
| `chars` | 文字・数字 | テキストアニメーション | 1文字ずつ現れる | Split text | 2.2秒 |
| `count` | 文字・数字 | カウントアップ | 数字が数え上がる | Count up | 3.0秒 |
| `marquee` | 文字・数字 | マーキー ★ | 文字やロゴの帯が、横に流れ続ける | Marquee (infinite ticker) | 3.0秒 |
| `typing` | 文字・数字 | タイピング | 1文字ずつ、打たれていく | Typewriter effect | 3.0秒 |
| `lines` | 文字・数字 | 行のスライドイン | 行が、下からスッと出てくる | Line reveal (text mask) | 3.0秒 |
| `draw` | 図形 | 線画アニメーション | 線が描かれていく | SVG line drawing | 4.5秒 |
| `lottie` | 図形 | Lottie | デザインツールの動きを、そのまま再生 | Lottie | 3.0秒 |
| `morph` | 図形 | モーフィング | 形が、ゆるやかに別の形へ変わる | Shape morphing (blob) | 3.0秒 |
| `vt` | ページ全体 | ページトランジション | 画面が滑らかにつながる | View Transitions | 3.4秒 |
| `loading` | ページ全体 | ローディング画面 ★ | 開いたとき、ロゴを見せてから本編へ | Loading screen (opening animation) | 3.6秒 |
| `bgvideo` | ページ全体 | 背景動画 ★ | ページの一番上に、動画を敷く | Background video (hero video) | 3.0秒 |
| `slider` | UI・小さな動き | スライダー ★ | 写真が、横に切り替わる | Carousel (slider) | 3.0秒 |
| `hover` | UI・小さな動き | ホバーエフェクト ★ | ボタンや画像に乗ったときの、小さな変化 | Hover effects | 3.0秒 |
| `hamburger` | UI・小さな動き | ハンバーガーメニュー | 三本線が、×に変わる | Hamburger menu icon | 3.0秒 |
| `fullmenu` | UI・小さな動き | 全画面メニュー ★ | メニューが、画面いっぱいに開く | Fullscreen overlay menu | 3.0秒 |
| `accordion` | UI・小さな動き | アコーディオン | よくある質問が、なめらかに開け閉めできる | Accordion | 3.0秒 |
| `lightbox` | UI・小さな動き | ライトボックス | 写真が、一覧の位置から大きく開く | Lightbox (zoom from thumbnail) | 3.4秒 |
| `micro` | UI・小さな動き | マイクロインタラクション | 押すと、小さく返事をする | Micro-interactions | 3.0秒 |
| `skeleton` | UI・小さな動き | スケルトンスクリーン | 読み込み中に、形だけ先に見せる | Skeleton screen | 3.6秒 |
| `particles` | WebGL | パーティクル | 粒子 | Particles | 3.0秒 |
| `wave` | WebGL | ディストーション | 画像が波打つ | Image distortion | 3.0秒 |
| `model` | WebGL | 3Dビューア | 3Dモデルを回す | 3D product viewer | 3.0秒 |
| `gradient` | WebGL | メッシュグラデーション | うねるグラデーション背景 | Animated mesh gradient | 3.0秒 |
| `imgtrans` | WebGL | 画像トランジション | 画像が、溶けるように次へ替わる | WebGL image transition (displacement) | 3.0秒 |

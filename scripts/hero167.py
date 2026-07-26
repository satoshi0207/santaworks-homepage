"""167-children のヒーロー。写真は使わない（子どもを被写体にしない／悲しさを演出しない）。
記事の主役である数字そのものを図版にする。

■ 文字サイズの決め方（ここを外すと読めない図になる）
   記事のヒーローは `.journal .wrap`（max-width 760px − padding 48px ＝ 712px）に
   `aspect-ratio: 21/9` で入るので、**実際の表示は 712×305px**。
   この画像は 1600×686 なので、**0.445倍に縮んで表示される**。
   → 画像内の pt × 0.445 が、画面上の見かけの大きさ。
     例）30pt の年号ラベル → 画面で約13px。20pt では約9pxで読めない。
   サイズを変えるときは、必ずこの係数で逆算する。

■ 背景を暗色にしている理由
   ヒーローには写真用の暗幕（下方向に42%の黒）が重なる仕様だが、この記事では
   `.herofig.chart` で外している（journal.css）。地色はサイト既定のダークに寄せる。
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 686
SCALE = 712 / W                      # 表示時の縮小率（約0.445）
BG = (23, 26, 33)
PANEL = (31, 35, 45)
GRID = (38, 43, 54)
CORAL = (242, 107, 84)
DIM = (92, 99, 113)
TX = (234, 228, 225)
MUTED = (156, 148, 145)

BOLD = "/home/santa/.fonts/ZenMaruGothic-Bold.ttf"
MED = "/home/santa/.fonts/ZenMaruGothic-Medium.ttf"

im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)

# 見出し（54pt → 画面で約24px）
d.text((84, 50), "SNSがきっかけで被害にあった小学生",
       font=ImageFont.truetype(BOLD, 54), fill=TX)
d.text((86, 122), "警察庁「少年非行及び子供の性被害の状況」より（各年・人）",
       font=ImageFont.truetype(MED, 29), fill=MUTED)

years = [("H28", 43), ("H29", 41), ("H30", 55), ("R元", 72), ("R2", 84),
         ("R3", 83), ("R4", 114), ("R5", 139), ("R6", 136), ("R7", 167)]
mx = 167
base_y = 588
bar_max = 372
bw, gap = 76, 28                     # 10本で1012px。右の要点パネル（1180〜）に触れない
x0 = 84
chart_r = x0 + len(years) * (bw + gap) - gap

vf = ImageFont.truetype(BOLD, 36)    # 値（→ 画面で約16px）
lf = ImageFont.truetype(MED, 30)     # 年号（→ 画面で約13px）
lf_on = ImageFont.truetype(BOLD, 30)

for v in (50, 100, 150):             # 目盛りは線だけ（数字は各棒に付ける）
    yy = base_y - int(bar_max * v / mx)
    d.line([(x0, yy), (chart_r, yy)], fill=GRID, width=3)

for i, (lb, v) in enumerate(years):
    bx = x0 + i * (bw + gap)
    h = int(bar_max * v / mx)
    last = i == len(years) - 1
    d.rounded_rectangle([bx, base_y - h, bx + bw, base_y], radius=10,
                        fill=CORAL if last else DIM)
    vs = str(v)
    d.text((bx + bw / 2 - d.textlength(vs, font=vf) / 2, base_y - h - 46), vs,
           font=vf, fill=CORAL if last else TX)
    f = lf_on if last else lf
    d.text((bx + bw / 2 - d.textlength(lb, font=f) / 2, base_y + 16), lb,
           font=f, fill=CORAL if last else MUTED)

# 右の要点
d.rounded_rectangle([1180, 212, 1524, 452], radius=20, fill=PANEL)
d.text((1222, 246), "9年で", font=ImageFont.truetype(MED, 32), fill=MUTED)
d.text((1222, 288), "約3.9倍", font=ImageFont.truetype(BOLD, 74), fill=CORAL)
d.text((1222, 386), "43人 → 167人", font=ImageFont.truetype(MED, 33), fill=TX)

im.save("/mnt/dev/santaworks/web/homepage/public/blog/167-children/hero.webp",
        "WEBP", quality=90, method=6)
print(f"saved (表示 712x305 / 縮小率 {SCALE:.3f})")

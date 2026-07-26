"""167-children のヒーロー（スマホ用）。
モバイルでは `.herofig .ph` が `aspect-ratio: 16/10` になるため、21/9 の
デスクトップ用画像を出すと cover で左右が切れる（グラフでは致命的）。
そこで 16/10 の専用図版を用意し、CSS変数 --hero-sp で差し替える。

■ 文字サイズの逆算
   390px幅の端末では表示 358x224。この画像は 1120x700 なので **0.32倍**。
   → 画像内の pt × 0.32 が画面上の大きさ。38pt の年号 ≒ 12px。
   年数はデスクトップの10年から6年に絞る（狭い画面で10本は読めない）。
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1120, 700
BG, PANEL, GRID = (23, 26, 33), (31, 35, 45), (38, 43, 54)
CORAL, DIM, TX, MUTED = (242, 107, 84), (92, 99, 113), (234, 228, 225), (156, 148, 145)
BOLD = "/home/santa/.fonts/ZenMaruGothic-Bold.ttf"
MED = "/home/santa/.fonts/ZenMaruGothic-Medium.ttf"

im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)

tf = ImageFont.truetype(BOLD, 46)
d.text((84, 40), "SNSがきっかけで", font=tf, fill=TX)
d.text((84, 102), "被害にあった小学生", font=tf, fill=TX)
d.text((84, 172), "警察庁「少年非行及び子供の性被害の状況」より（各年・人）",
       font=ImageFont.truetype(MED, 26), fill=MUTED)

d.rounded_rectangle([760, 36, 1044, 158], radius=16, fill=PANEL)
d.text((792, 54), "9年で", font=ImageFont.truetype(MED, 26), fill=MUTED)
d.text((792, 86), "約3.9倍", font=ImageFont.truetype(BOLD, 52), fill=CORAL)

years = [("R2", 84), ("R3", 83), ("R4", 114), ("R5", 139), ("R6", 136), ("R7", 167)]
mx, base_y, bar_max = 167, 618, 336
bw, gap = 108, 46
x0 = (W - (len(years) * bw + (len(years) - 1) * gap)) / 2
vf = ImageFont.truetype(BOLD, 44)
lf = ImageFont.truetype(MED, 38)
lf_on = ImageFont.truetype(BOLD, 38)

for v in (50, 100, 150):
    yy = base_y - int(bar_max * v / mx)
    d.line([(x0, yy), (x0 + len(years) * (bw + gap) - gap, yy)], fill=GRID, width=3)

for i, (lb, v) in enumerate(years):
    bx = x0 + i * (bw + gap)
    h = int(bar_max * v / mx)
    last = i == len(years) - 1
    d.rounded_rectangle([bx, base_y - h, bx + bw, base_y], radius=12,
                        fill=CORAL if last else DIM)
    vs = str(v)
    d.text((bx + bw / 2 - d.textlength(vs, font=vf) / 2, base_y - h - 54), vs,
           font=vf, fill=CORAL if last else TX)
    f = lf_on if last else lf
    d.text((bx + bw / 2 - d.textlength(lb, font=f) / 2, base_y + 14), lb,
           font=f, fill=CORAL if last else MUTED)

im.save("public/blog/167-children/hero-sp.webp", "WEBP", quality=90, method=6)
print("saved 1120x700 (表示 358x224 / 縮小率 0.320)")

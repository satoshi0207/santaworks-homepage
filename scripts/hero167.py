"""167-children のヒーロー。写真は使わない（子どもを被写体にしない／悲しさを演出しない）。
記事の主役である数字そのものを図版にする。

背景を暗色にしている理由：記事ページのヒーローには上から
`linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.42))` が重なる仕様なので、
明るい図版だと下半分が濁る。暗色で作れば重なっても崩れず、白いチップも読める。
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 686
BG = (23, 26, 33)          # サイト既定のダークに寄せた地色
PANEL = (30, 34, 43)
CORAL = (242, 107, 84)
DIM = (86, 92, 105)        # 過年度の棒
TX = (232, 226, 223)
MUTED = (150, 143, 140)

BOLD = "/home/santa/.fonts/ZenMaruGothic-Bold.ttf"
MED = "/home/santa/.fonts/ZenMaruGothic-Medium.ttf"

im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)

# 見出し（図版の中の説明。記事本文の見出しとは重複させない）
d.text((92, 74), "SNSがきっかけで被害にあった小学生", font=ImageFont.truetype(BOLD, 40), fill=TX)
d.text((92, 132), "警察庁「少年非行及び子供の性被害の状況」より（各年）",
       font=ImageFont.truetype(MED, 22), fill=MUTED)

# 棒グラフ
years = [("H28", 43), ("H29", 41), ("H30", 55), ("R元", 72), ("R2", 84),
         ("R3", 83), ("R4", 114), ("R5", 139), ("R6", 136), ("R7", 167)]
mx = 167
base_y = 560
bw, gap = 64, 40          # 右側の要点パネル（x1190〜）に触れない幅にする
x0 = 92
chart_r = x0 + len(years) * (bw + gap) - gap     # = 1092
sm = ImageFont.truetype(MED, 20)
vf = ImageFont.truetype(BOLD, 24)

# 目盛りの薄い横線（数字は各棒に付けてあるので、線だけ）
for v in (50, 100, 150):
    yy = base_y - int(330 * v / mx)
    d.line([(x0, yy), (chart_r, yy)], fill=PANEL, width=2)

for i, (lb, v) in enumerate(years):
    bx = x0 + i * (bw + gap)
    h = int(330 * v / mx)
    last = i == len(years) - 1
    d.rounded_rectangle([bx, base_y - h, bx + bw, base_y], radius=9,
                        fill=CORAL if last else DIM)
    vs = str(v)
    d.text((bx + bw / 2 - d.textlength(vs, font=vf) / 2, base_y - h - 36), vs,
           font=vf, fill=CORAL if last else TX)
    d.text((bx + bw / 2 - d.textlength(lb, font=sm) / 2, base_y + 16), lb,
           font=sm, fill=CORAL if last else MUTED)

# 右の要点（棒グラフの右端 1092 より内側に入らない位置に置く）
d.rounded_rectangle([1190, 210, 1508, 420], radius=18, fill=PANEL)
d.text((1228, 246), "9年で", font=ImageFont.truetype(MED, 24), fill=MUTED)
d.text((1228, 280), "約3.9倍", font=ImageFont.truetype(BOLD, 56), fill=CORAL)
d.text((1228, 362), "43人 → 167人", font=ImageFont.truetype(MED, 25), fill=TX)

im.save("/mnt/dev/santaworks/web/homepage/public/blog/167-children/hero.webp",
        "WEBP", quality=88, method=6)
print("saved")

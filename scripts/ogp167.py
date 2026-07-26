"""167-children のOGP。被害の話なので写真・イラスト・絵文字は使わず、数字だけで出す。
配色は Santa Works のクリーム×コーラルのまま（別トーンにすると屋号と結びつかない）。"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
CREAM_A, CREAM_B = (255, 248, 244), (255, 231, 223)
INK, CORAL, MUTED = (70, 53, 47), (242, 107, 84), (166, 145, 137)
BOLD = "/home/santa/.fonts/ZenMaruGothic-Bold.ttf"
MED = "/home/santa/.fonts/ZenMaruGothic-Medium.ttf"

bg = Image.new("RGB", (W, H), CREAM_A)
grad = Image.new("L", (W, H))
gd = ImageDraw.Draw(grad)
for i in range(W + H):
    gd.line([(i, 0), (0, i)], fill=int(255 * i / (W + H)))
im = Image.composite(Image.new("RGB", (W, H), CREAM_B), bg, grad).convert("RGB")
d = ImageDraw.Draw(im)

# ラベル
lab = ImageFont.truetype(BOLD, 21)
d.rounded_rectangle([80, 74, 86, 104], radius=3, fill=CORAL)
x = 104
for ch in "SANTA WORKS JOURNAL":
    d.text((x, 76), ch, font=lab, fill=MUTED)
    x += d.textlength(ch, font=lab) + 3.4

# 主役の数字
num = ImageFont.truetype(BOLD, 168)
unit = ImageFont.truetype(BOLD, 62)
d.text((78, 148), "167", font=num, fill=CORAL)
nw = d.textlength("167", font=num)
d.text((78 + nw + 14, 258), "人", font=unit, fill=CORAL)

# 説明
sub = ImageFont.truetype(BOLD, 33)
d.text((80, 358), "SNSがきっかけで被害にあった小学生", font=sub, fill=INK)
sub2 = ImageFont.truetype(MED, 26)
d.text((80, 412), "令和7年・前年より22.8%増（警察庁）", font=sub2, fill=MUTED)

d.rounded_rectangle([80, 470, 80 + 62, 476], radius=3, fill=CORAL)

foot = ImageFont.truetype(MED, 25)
d.text((80, 506), "定義と母数まで揃えて整理しました。出典から直接お使いください。",
       font=foot, fill=INK)
d.text((80, 556), "santaworks.net", font=ImageFont.truetype(MED, 23), fill=CORAL)

# 右側：年次の推移を最小限の棒で（43人→167人）
base_y, bh, bx = 470, 250, 690
years = [("H28", 43), ("R2", 84), ("R4", 114), ("R5", 139), ("R6", 136), ("R7", 167)]
mx = 167
sm = ImageFont.truetype(MED, 17)
for i, (lb, v) in enumerate(years):
    bxx = bx + i * 76
    h = int(bh * v / mx)
    col = CORAL if i == len(years) - 1 else (240, 205, 196)
    d.rounded_rectangle([bxx, base_y - h, bxx + 44, base_y], radius=6, fill=col)
    d.text((bxx + 22 - d.textlength(lb, font=sm) / 2, base_y + 10), lb, font=sm, fill=MUTED)
    vs = str(v)
    d.text((bxx + 22 - d.textlength(vs, font=sm) / 2, base_y - h - 26), vs, font=sm,
           fill=CORAL if i == len(years) - 1 else MUTED)
d.text((690, 148), "小学生の被害児童数（人）", font=ImageFont.truetype(BOLD, 22), fill=INK)
d.text((690, 182), "9年で約3.9倍", font=sm, fill=MUTED)

im.save("/mnt/dev/santaworks/web/homepage/public/blog/167-children/ogp.png")
print("saved")

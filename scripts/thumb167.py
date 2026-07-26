# 一覧カード用。デスクトップは縦長・モバイルは16:9に中央トリミングされるので、
# 要素は中央だけに置き、文字は切れても意味が壊れない最小限にする。
from PIL import Image, ImageDraw, ImageFont
W, H = 1200, 900
BG, PANEL, CORAL, TX, DIM = (23,26,33), (30,34,43), (242,107,84), (232,226,223), (86,92,105)
BOLD = "/home/santa/.fonts/ZenMaruGothic-Bold.ttf"
MED = "/home/santa/.fonts/ZenMaruGothic-Medium.ttf"
im = Image.new("RGB", (W,H), BG); d = ImageDraw.Draw(im)
# 中央上：数字だけ
nf = ImageFont.truetype(BOLD, 150); uf = ImageFont.truetype(BOLD, 58)
n = "167"; nw = d.textlength(n, font=nf); uw = d.textlength("人", font=uf)
x = (W - (nw + 12 + uw)) / 2
d.text((x, 152), n, font=nf, fill=CORAL)
d.text((x + nw + 12, 246), "人", font=uf, fill=CORAL)
lf = ImageFont.truetype(MED, 34)
lab = "SNS起因の被害・小学生"
d.text(((W - d.textlength(lab, font=lf))/2, 340), lab, font=lf, fill=TX)
# 中央下：棒（直近6年）
years = [("R2",84),("R3",83),("R4",114),("R5",139),("R6",136),("R7",167)]
bw, gap, mx, base = 76, 34, 167, 760   # 合計626px。240x290の中央トリミング(744px)に余白を残す
total = len(years)*bw + (len(years)-1)*gap
x0 = (W - total)/2
# 一覧は 744px幅の中央トリミングを240pxで表示＝0.32倍。26ptだと画面で約8pxで読めない
sf = ImageFont.truetype(MED, 34)
for i,(lb,v) in enumerate(years):
    bx = x0 + i*(bw+gap); h = int(300*v/mx); last = i == len(years)-1
    d.rounded_rectangle([bx, base-h, bx+bw, base], radius=12, fill=CORAL if last else DIM)
    d.text((bx+bw/2 - d.textlength(lb, font=sf)/2, base+16), lb, font=sf,
           fill=CORAL if last else (150,143,140))
im.save("/mnt/dev/santaworks/web/homepage/public/blog/167-children/thumb.webp","WEBP",quality=88,method=6)
print("saved")

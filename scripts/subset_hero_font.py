#!/usr/bin/env python3
"""ヒーロー見出し用 Noto Sans JP 900 のサブセット woff2 を作る。

見出しは固定文言なので、必要なグリフだけを含む1ファイル（数KB）に絞る。
next/font/google に任せると unicode-range 分割で 3,000+ ファイル・87MB が
out/ に入ってしまう（2026-08-16 実測）。見出しの文言を変えたら再実行すること。

使い方:
  python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip install fonttools brotli
  /tmp/fontenv/bin/python scripts/subset_hero_font.py

出力: components/fonts/noto-sans-jp-900-hero.woff2
"""

import io
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

# 見出しに登場する文字＋予備（読点・鉤括弧は現行文言に含む）。ここを増やしたら再実行
HERO_TEXT = "「忘れたくない」を、かたちに。"

# Google Fonts 公式リポジトリの可変フォント（OFL-1.1）
SRC_URL = (
    "https://github.com/google/fonts/raw/main/ofl/notosansjp/"
    "NotoSansJP%5Bwght%5D.ttf"
)

OUT = Path(__file__).resolve().parent.parent / "components/fonts/noto-sans-jp-900-hero.woff2"


def main() -> None:
    print(f"downloading {SRC_URL} ...")
    with urllib.request.urlopen(SRC_URL) as res:
        data = res.read()
    print(f"  {len(data) / 1e6:.1f} MB")

    font = TTFont(io.BytesIO(data))
    instantiateVariableFont(font, {"wght": 900}, inplace=True)

    options = subset.Options(flavor="woff2", layout_features=["*"], hinting=False)
    subsetter = subset.Subsetter(options)
    subsetter.populate(text=HERO_TEXT)
    subsetter.subset(font)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    font.save(OUT)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1e3:.1f} KB, {len(set(HERO_TEXT))} chars)")


if __name__ == "__main__":
    main()

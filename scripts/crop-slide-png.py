"""Crop browser chrome from SWR slide PNG for cleaner OCR."""
import sys
from PIL import Image

src, dest = sys.argv[1], sys.argv[2]
im = Image.open(src)
w, h = im.size
left, top = int(w * 0.06), int(h * 0.11)
right, bottom = int(w * 0.94), int(h * 0.90)
im.crop((left, top, right, bottom)).save(dest)

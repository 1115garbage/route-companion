#!/bin/bash
set -e

SRC="public/assets/aistudio/6e7b8089fea9910a922c550128600ea0ae0655239faecd8111e524a6f4acf3c5_05fc168f.png"
if [ ! -f "$SRC" ]; then
  echo "Error: source image not found at $SRC"
  exit 1
fi

echo "Source image verified: $SRC"

# Densities and sizes:
# Density | ic_launcher.png (48dp) | ic_launcher_foreground.png (108dp canvas, ~80dp art centered)
# mdpi    | 48x48                 | 108x108 (art ~80x80)
# hdpi    | 72x72                 | 162x162 (art ~120x120)
# xhdpi   | 96x96                 | 216x216 (art ~160x160)
# xxhdpi  | 144x144               | 324x324 (art ~240x240)
# xxxhdpi | 192x192               | 432x432 (art ~320x320)

declare -A LEGACY_SIZES=( ["mdpi"]=48 ["hdpi"]=72 ["xhdpi"]=96 ["xxhdpi"]=144 ["xxxhdpi"]=192 )
declare -A ADAPTIVE_CANVAS=( ["mdpi"]=108 ["hdpi"]=162 ["xhdpi"]=216 ["xxhdpi"]=324 ["xxxhdpi"]=432 )
declare -A ADAPTIVE_ART=( ["mdpi"]=80 ["hdpi"]=120 ["xhdpi"]=160 ["xxhdpi"]=240 ["xxxhdpi"]=320 )

for DENSITY in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  TARGET_DIR="android/app/src/main/res/mipmap-$DENSITY"
  mkdir -p "$TARGET_DIR"
  
  LEGACY_SZ=${LEGACY_SIZES[$DENSITY]}
  CANVAS_SZ=${ADAPTIVE_CANVAS[$DENSITY]}
  ART_SZ=${ADAPTIVE_ART[$DENSITY]}
  
  # Standard launcher icon
  convert "$SRC" -resize "${LEGACY_SZ}x${LEGACY_SZ}" "$TARGET_DIR/ic_launcher.png"
  convert "$SRC" -resize "${LEGACY_SZ}x${LEGACY_SZ}" "$TARGET_DIR/ic_launcher_round.png"
  
  # Adaptive foreground: resized art centered on transparent canvas of size CANVAS_SZ
  convert -size "${CANVAS_SZ}x${CANVAS_SZ}" xc:transparent \
    \( "$SRC" -resize "${ART_SZ}x${ART_SZ}" \) -gravity center -composite \
    "$TARGET_DIR/ic_launcher_foreground.png"
    
  echo "Generated $DENSITY icons: legacy=${LEGACY_SZ}x${LEGACY_SZ}, foreground=${CANVAS_SZ}x${CANVAS_SZ}"
done

# Also generate web & PWA icons
convert "$SRC" -resize 192x192 public/icon-192.png
convert "$SRC" -resize 512x512 public/icon-512.png
convert "$SRC" -resize 180x180 public/apple-touch-icon.png
convert "$SRC" -resize 32x32 public/favicon.png
convert "$SRC" -resize 32x32 public/favicon.ico

echo "All Android launcher icons and PWA icons generated successfully!"

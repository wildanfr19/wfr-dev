"""Re-export only the three reviewed galleries from private source material.

Usage: python scripts/redact-gallery.py
Originals stay in git-ignored bahan-portfolio; public files contain baked-in blur.
"""
import runpy
from pathlib import Path

from PIL import Image, ImageOps

from gallery_redactions import REGIONS, redact

builder = runpy.run_path(str(Path(__file__).with_name('build-gallery.py')))


def main():
    # Validate all sources before replacing any public file.
    for slug in REGIONS:
        for _, source, _ in builder['MANIFEST'][slug]:
            if source not in REGIONS[slug]:
                raise ValueError(f'Missing privacy review: {source}')
            if not (builder['SRC'] / source).is_file():
                raise FileNotFoundError(source)

    for slug in REGIONS:
        for index, (_, source, _) in enumerate(builder['MANIFEST'][slug], 1):
            target = builder['OUT'] / slug / f'{index:02d}.webp'
            with Image.open(builder['SRC'] / source) as raw:
                image = ImageOps.exif_transpose(raw).convert('RGB')
            image.thumbnail((builder['FULL_MAX_W'], builder['FULL_MAX_H']), Image.Resampling.LANCZOS)
            image = redact(slug, source, image)
            builder['save'](image, target, builder['FULL_MAX_W'], builder['FULL_MAX_H'], 82)
            builder['save'](image, target.parent / 'thumbs' / target.name, builder['THUMB_MAX'], builder['THUMB_MAX'], 74)
        print(f'{slug}: {len(builder["MANIFEST"][slug])} full-size images and thumbnails exported')


if __name__ == '__main__':
    main()

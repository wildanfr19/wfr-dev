"""Re-export reviewed galleries from private source material.

Usage: python scripts/redact-gallery.py
       python scripts/redact-gallery.py inspection-room incoming-qa robot-problem
Originals stay in git-ignored bahan-portfolio; public files contain baked-in blur.
"""
import argparse
import json
import runpy
from contextlib import ExitStack
from pathlib import Path
from zipfile import ZipFile

from PIL import Image, ImageOps

from gallery_redactions import REGIONS, redact

builder = runpy.run_path(str(Path(__file__).with_name('build-gallery.py')))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('slugs', nargs='*', help='Reviewed galleries to export (default: all)')
    slugs = parser.parse_args().slugs or list(REGIONS)
    for slug in slugs:
        if slug not in REGIONS:
            parser.error(f'Unknown or unreviewed gallery: {slug}')

    gallery_marker = 'export const gallery: Record<string, Shot[]> = '
    gallery_prefix, gallery_json = builder['TS_OUT'].read_text(encoding='utf-8').split(gallery_marker, 1)
    gallery = json.loads(gallery_json.strip().removesuffix(';'))

    with ExitStack() as stack:
        # Robot source screenshots live inside the private presentation. Read
        # them directly so regeneration never leaves extracted originals behind.
        robot_archive = None
        if 'robot-problem' in slugs:
            robot_archive = stack.enter_context(ZipFile(builder['SRC'] / 'Input Problem Robot/Input Problem Robot Apps.pptx'))

        # Validate all sources before replacing any public file.
        for slug in slugs:
            for _, source, _ in builder['MANIFEST'][slug]:
                if source not in REGIONS[slug]:
                    raise ValueError(f'Missing privacy review: {source}')
                if source.startswith('__pptx__/robot/'):
                    robot_archive.getinfo(f'ppt/media/{Path(source).name}')
                elif not (builder['SRC'] / source).is_file():
                    raise FileNotFoundError(source)

        for slug in slugs:
            for index, (_, source, _) in enumerate(builder['MANIFEST'][slug], 1):
                target = builder['OUT'] / slug / f'{index:02d}.webp'
                with ExitStack() as image_stack:
                    original = builder['SRC'] / source
                    if source.startswith('__pptx__/robot/'):
                        original = image_stack.enter_context(robot_archive.open(f'ppt/media/{Path(source).name}'))
                    raw = image_stack.enter_context(Image.open(original))
                    image = ImageOps.exif_transpose(raw).convert('RGB')
                image.thumbnail((builder['FULL_MAX_W'], builder['FULL_MAX_H']), Image.Resampling.LANCZOS)
                image = redact(slug, source, image)
                width, height = builder['save'](image, target, builder['FULL_MAX_W'], builder['FULL_MAX_H'], 82)
                builder['save'](image, target.parent / 'thumbs' / target.name, builder['THUMB_MAX'], builder['THUMB_MAX'], 74)
                gallery[slug][index - 1]['w'] = width
                gallery[slug][index - 1]['h'] = height
            print(f'{slug}: {len(builder["MANIFEST"][slug])} full-size images and thumbnails exported')

    builder['TS_OUT'].write_text(gallery_prefix + gallery_marker + json.dumps(gallery, indent=2, ensure_ascii=False) + ';\n', encoding='utf-8')


if __name__ == '__main__':
    main()

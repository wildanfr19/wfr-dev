"""Apply reviewed privacy regions before generating public gallery images."""
import json
import math
from pathlib import Path

from PIL import Image, ImageFilter

REGIONS = json.loads(Path(__file__).with_name('gallery-redactions.json').read_text(encoding='utf-8'))


def validate_source(slug: str, source: str) -> None:
    if slug in REGIONS and source not in REGIONS[slug]:
        raise ValueError(f'Review privacy regions before publishing new screenshot: {source}')


def redact(slug: str, source: str, image: Image.Image) -> Image.Image:
    validate_source(slug, source)
    if slug not in REGIONS:
        return image
    image = image.copy()
    for left, top, right, bottom in REGIONS[slug][source]:
        if not (0 <= left < right <= 1 and 0 <= top < bottom <= 1):
            raise ValueError(f'Invalid privacy region for {source}')
        box = (math.floor(left * image.width), math.floor(top * image.height),
               math.ceil(right * image.width), math.ceil(bottom * image.height))
        crop = image.crop(box)
        # Remove fine text/QR detail before blurring; apply to actual pixels.
        reduced = crop.resize((max(1, crop.width // 24), max(1, crop.height // 24)), Image.Resampling.BOX)
        blurred = reduced.resize(crop.size, Image.Resampling.BILINEAR).filter(ImageFilter.GaussianBlur(14))
        image.paste(blurred, box)
    return image

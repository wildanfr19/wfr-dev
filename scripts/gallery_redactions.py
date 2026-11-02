"""Apply reviewed privacy regions before generating public gallery images."""
import json
import hashlib
import math
from pathlib import Path

from PIL import Image, ImageFilter

REGIONS = json.loads(Path(__file__).with_name('gallery-redactions.json').read_text(encoding='utf-8'))


def versioned_url(path: Path, public_url: str) -> str:
    """Refresh image URLs whenever the exported pixels change."""
    revision = hashlib.sha256(path.read_bytes()).hexdigest()[:12]
    return f'{public_url.split("?", 1)[0]}?v={revision}'


def validate_source(slug: str, source: str) -> None:
    if slug in REGIONS and source not in REGIONS[slug]:
        raise ValueError(f'Review privacy regions before publishing new screenshot: {source}')


def redact(slug: str, source: str, image: Image.Image) -> Image.Image:
    validate_source(slug, source)
    if slug not in REGIONS:
        return image
    image = image.copy()
    for region in REGIONS[slug][source]:
        # Four normalized coordinates, optionally followed by a stronger blur
        # radius for CCTV images and plots whose overall shapes are private.
        if len(region) not in (4, 5):
            raise ValueError(f'Invalid privacy region for {source}')
        left, top, right, bottom = region[:4]
        radius = region[4] if len(region) == 5 else 14
        if not (0 <= left < right <= 1 and 0 <= top < bottom <= 1):
            raise ValueError(f'Invalid privacy region for {source}')
        if not 0 < radius <= 256:
            raise ValueError(f'Invalid privacy blur radius for {source}')
        box = (math.floor(left * image.width), math.floor(top * image.height),
               math.ceil(right * image.width), math.ceil(bottom * image.height))
        crop = image.crop(box)
        # Remove fine text/QR detail before blurring; apply to actual pixels.
        sample_step = max(24, round(radius * 2)) if len(region) == 5 else 24
        reduced = crop.resize((max(1, crop.width // sample_step), max(1, crop.height // sample_step)), Image.Resampling.BOX)
        blurred = reduced.resize(crop.size, Image.Resampling.BILINEAR).filter(ImageFilter.GaussianBlur(radius))
        image.paste(blurred, box)
    return image

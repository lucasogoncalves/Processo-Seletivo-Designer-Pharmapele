from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf._page import PageObject
from pypdf.generic import RectangleObject


ROOT = Path(__file__).resolve().parents[2]
DELIVERY = ROOT / "ENTREGA_DRIVE_PHARMAPELE"


def resize_if_needed(path: Path, size: tuple[int, int]) -> None:
    with Image.open(path) as source:
        if source.size == size:
            print(f"OK image {path.relative_to(ROOT)} {source.size[0]}x{source.size[1]}")
            return
        resized = source.resize(size, Image.Resampling.LANCZOS)
        save_args = {}
        if path.suffix.lower() in {".jpg", ".jpeg"}:
            save_args = {"quality": 95, "subsampling": 0, "dpi": (96, 96)}
        elif path.suffix.lower() == ".png":
            save_args = {"optimize": True}
        resized.save(path, **save_args)
        print(f"RESIZED {path.relative_to(ROOT)} {source.size[0]}x{source.size[1]} -> {size[0]}x{size[1]}")


def add_bleed(source_pdf: Path, output_pdf: Path) -> None:
    reader = PdfReader(str(source_pdf))
    writer = PdfWriter()
    bleed_pt = 72 * 3 / 25.4
    trim_w = 72 * 210 / 25.4
    trim_h = 72 * 297 / 25.4
    media_w = trim_w + 2 * bleed_pt
    media_h = trim_h + 2 * bleed_pt

    for source_page in reader.pages:
        source_w = float(source_page.mediabox.width)
        source_h = float(source_page.mediabox.height)
        scale = max(media_w / source_w, media_h / source_h)
        offset_x = (media_w - source_w * scale) / 2
        offset_y = (media_h - source_h * scale) / 2
        output_page = PageObject.create_blank_page(width=media_w, height=media_h)
        output_page.merge_transformed_page(
            source_page,
            Transformation().scale(scale).translate(offset_x, offset_y),
        )
        output_page.mediabox = RectangleObject((0, 0, media_w, media_h))
        output_page.bleedbox = RectangleObject((0, 0, media_w, media_h))
        output_page.trimbox = RectangleObject(
            (bleed_pt, bleed_pt, bleed_pt + trim_w, bleed_pt + trim_h)
        )
        output_page.artbox = RectangleObject(
            (bleed_pt, bleed_pt, bleed_pt + trim_w, bleed_pt + trim_h)
        )
        output_page.cropbox = RectangleObject((0, 0, media_w, media_h))
        writer.add_page(output_page)

    writer.add_metadata(
        {
            "/Title": f"{source_pdf.parent.parent.name} - Lamina A4 frente e verso - sangria 3 mm",
            "/Subject": "Arquivo de impressao com sangria de 3 mm e area de corte A4",
        }
    )
    with output_pdf.open("wb") as stream:
        writer.write(stream)
    print(f"PDF {output_pdf.relative_to(ROOT)} pages={len(reader.pages)}")


for product in ("BREEZE", "LOVELY", "CHIC", "GLOW"):
    final_dir = DELIVERY / "01_FINAIS_PARA_AVALIACAO" / product
    for prefix, size in {
        "01_KV_A_Lifestyle_1080x1350": (1080, 1350),
        "02_KV_B_Conceitual_1080x1350": (1080, 1350),
        "03_Feed_1080x1350": (1080, 1350),
        "04_Story_1080x1920": (1080, 1920),
        "05_Social_Extra_1080x1350": (1080, 1350),
    }.items():
        candidates = list(final_dir.glob(f"{prefix}.*"))
        if len(candidates) != 1:
            raise RuntimeError(f"Expected one image for {product}/{prefix}, found {len(candidates)}")
        resize_if_needed(candidates[0], size)

    source_pdf = next((ROOT / product / "Finalizados").glob("*.pdf"))
    output_pdf = final_dir / "08_Lamina_A4_Impressao_3mm.pdf"
    add_bleed(source_pdf, output_pdf)

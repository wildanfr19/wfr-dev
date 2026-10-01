"""
Build project galleries from ./bahan-portfolio into ./public/projects and lib/gallery.ts.

Usage:  python scripts/build-gallery.py

- Every image is converted to WebP (full size + small thumbnail) so the site stays light.
- Edit MANIFEST to add, remove or reorder screenshots, then re-run the script.
- bahan-portfolio is git-ignored; only the generated WebP files are committed.
"""
import json
import shutil
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "bahan-portfolio"
OUT = ROOT / "public" / "projects"
TS_OUT = ROOT / "lib" / "gallery.ts"

FULL_MAX_W, FULL_MAX_H = 1920, 1600
THUMB_MAX = 520

RFID = "RFID Inventory System"
INSP_UPD = "inspection-apps/SS Inspection Room Update"
INCOMING = "Incoming-Apps"
KAL = "Kalibrasi Dashboard Apps/Doc Kalibrasi"
SKILL = "SkillMap Matriks"
# Images inside the .pptx are extracted to a temp folder first (see extract_pptx)
ROBOT = "__pptx__/robot"

MANIFEST = {
    "rfid-warehouse": [
        ("Web Dashboard", f"{RFID}/Ilustration RFID flow.png", "End-to-end flow: warehouse picking, RFID gate, auto IT/IR, assembly"),
        ("Web Dashboard", f"{RFID}/Landing Dashboard.png", "Landing dashboard: live picking, gate and IT status per shift"),
        ("Web Dashboard", f"{RFID}/Main Dashboard New.png", "Main admin dashboard"),
        ("Web Dashboard", f"{RFID}/Monitoring Wh to Assy.png", "Monitoring Warehouse to Assembly process"),
        ("Web Dashboard", f"{RFID}/Kanban Menu Proses IT&IR.png", "Kanban process with Inventory Transfer & Receipt"),
        ("Web Dashboard", f"{RFID}/Kanban Menu Proses IT&IR - 1.png", "Kanban detail per line"),
        ("Web Dashboard", f"{RFID}/IT Transfer menu.png", "Inventory Transfer (IT) documents"),
        ("Web Dashboard", f"{RFID}/Aktivitas Pengguna.png", "User activity log for traceability"),
        ("Web Dashboard", f"{RFID}/Print STB.png", "Printable transfer document with QR code"),
        ("Web Dashboard", f"{RFID}/Login New.png", "Web admin login"),
        ("Mobile App", f"{RFID}/1.1 Login NFC.png", "Login by tapping the NFC employee card"),
        ("Mobile App", f"{RFID}/1.2 Login Nik but new LOGO.png", "Fallback login with NIK & password"),
        ("Mobile App", f"{RFID}/WH to Assy/Wh to Assy Picking Scan/1. List Kanban.png", "Kanban list per assembly line"),
        ("Mobile App", f"{RFID}/WH to Assy/Wh to Assy Picking Scan/2. Page Scan RFID Tag IN LORY.png", "Scan the RFID tag on the lorry"),
        ("Mobile App", f"{RFID}/WH to Assy/Wh to Assy Picking Scan/3. Scan RFID Tag Terbaca.png", "RFID tag detected"),
        ("Mobile App", f"{RFID}/WH to Assy/Wh to Assy Picking Scan/4. After Scan RFID Tag Success next Picking Item from Breakdown Item.png", "Item breakdown to pick"),
        ("Mobile App", f"{RFID}/WH to Assy/Wh to Assy Picking Scan/5. Scan Rack QR Item.png", "Scan rack QR to validate the location"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/1.jpeg", "Assembly to Delivery: operator menu"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/2.jpeg", "Start a delivery booking"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/3.jpeg", "Scan part card & packaging RFID"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/4.jpeg", "Booking progress per customer"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/5.jpeg", "Scan booking ID"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/6.jpeg", "Confirm the load"),
        ("Mobile App", f"{RFID}/Mobile Apps Assy to Delivery/7.jpeg", "Booking saved"),
        ("On the Floor", f"{RFID}/Human Actor/1.List Kanban.png", "Operator opens the kanban list"),
        ("On the Floor", f"{RFID}/Human Actor/2.Proses Scan RFID tag.png", "Scanning the RFID tag on the lorry"),
        ("On the Floor", f"{RFID}/Human Actor/3.Scan QR Rack.png", "Scanning the rack QR code"),
        ("On the Floor", f"{RFID}/Human Actor/5.Auto Fill from System and Confirm.png", "Auto-filled item, operator confirms"),
        ("On the Floor", f"{RFID}/Human Actor/6. Konfirmasi QTY ke Muatan Sukses ( Qty Terpenuhi Next Item ).png", "Quantity fulfilled, next item"),
        ("On the Floor", f"{RFID}/Human Actor/7. User Pindahkan Item Fisik Ke Lory.png", "Moving parts onto the lorry"),
        ("On the Floor", f"{RFID}/Human Actor/8. ketika picking item sudah semua sesuai kanban totalnya, tekan lory siap kirim.png", "Kanban complete, lorry ready to ship"),
    ],
    "inspection-room": [
        ("Web Dashboard", f"{INSP_UPD}/Dashboard Inspection Apps.png", "QA dashboard with KPI cards and filters"),
        ("Web Dashboard", f"{INSP_UPD}/Input item Masuk.png", "Register items entering the inspection room"),
        ("Web Dashboard", f"{INSP_UPD}/Progress List.png", "Progress list with start / complete check actions"),
        ("Reports", f"{INSP_UPD}/Daily Report.png", "Daily report per shift"),
        ("Reports", f"{INSP_UPD}/Monthly Report Activity.png", "Monthly inspection activity"),
        ("Reports", f"{INSP_UPD}/Report Grafik Monthly.png", "Monthly charts per machine"),
        ("Master Data", f"{INSP_UPD}/Master Mesin.png", "Machine master data"),
        ("Master Data", f"{INSP_UPD}/User Role Master Data.png", "User roles"),
        ("Master Data", f"{INSP_UPD}/Login.png", "Login page"),
    ],
    "incoming-qa": [
        ("Dashboard", f"{INCOMING}/Dashboard.png", "Dashboard: today's arrivals, pending checks, open problems, OK/NG per part"),
        ("Arrivals", f"{INCOMING}/List Kedatangan.png", "Incoming goods list per supplier"),
        ("Arrivals", f"{INCOMING}/Check Kedatangan .png", "Record check result: visual / dimension, mill sheet, qty OK & NG"),
        ("Problem NG", f"{INCOMING}/Input problem NG.png", "Log an NG problem with supplier, part and photos"),
        ("Problem NG", f"{INCOMING}/Detail Problem.png", "Problem detail"),
        ("Problem NG", f"{INCOMING}/Analisa Perbaikan.png", "Corrective analysis; closed problems are locked"),
        ("Login", f"{INCOMING}/Login.png", "Login page"),
    ],
    "calibration": [
        ("Dashboard", f"{KAL}/Dashboard Utama.png", "Main dashboard: KPIs, plan vs actual, priority list"),
        ("Dashboard", f"{KAL}/Notifikasi/Menu Notifikasi.png", "Automatic due-date notifications"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/0.List Data Kalibrasi Internal.png", "Internal calibration list"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/1.Buat Schedule Kalibrasi Internal.png", "Create a schedule"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/2. Setelah buat schedule lalu Input Hasil Kalibrasi Per alat.png", "Pick an instrument to input"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/3.Tampilan Detail dan Input Hasil Kalibrasi Internal.png", "Input calibration results"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/4.Setelah Input Hasil Kalibrasi Selesai maka tekan button review.png", "Submit for review"),
        ("Internal Calibration", f"{KAL}/Kalibrasi Internal/5.Tekan Review - Notif Setujui - Klik yes ( Selesai ).png", "Supervisor approval"),
        ("External Calibration", f"{KAL}/Kalibrasi External/0. List Data Kalibrasi External.png", "External calibration list"),
        ("External Calibration", f"{KAL}/Kalibrasi External/1. Buat Schedule Kalibrasi External.png", "Create an external schedule"),
        ("External Calibration", f"{KAL}/Kalibrasi External/2.Setelah Buat Schedule Kalibrasi External Tekan Button Proses.png", "Open the process page"),
        ("External Calibration", f"{KAL}/Kalibrasi External/3.Lakukan Step-step proses kalibrasi external.png", "10-step process: PP, PO, shipping, certificate"),
        ("External Calibration", f"{KAL}/Kalibrasi External/4.Setelah step semua selesai tinggal setujui kalibrasi external.png", "Approval once all steps are done"),
        ("External Calibration", f"{KAL}/Kalibrasi External/5.Selesai Step by Step dan Approved Kalibrasi Notifikasi Success.png", "Completed and locked for audit trail"),
        ("Reports", f"{KAL}/Menu Report/1. Report Master Alat Ukur.png", "Instrument master report"),
        ("Reports", f"{KAL}/Menu Report/2. Report Due Data dan Overdue.png", "Due date & overdue report"),
        ("Reports", f"{KAL}/Menu Report/3. Report Achievement Plan & Actial.png", "Plan vs actual achievement"),
        ("Reports", f"{KAL}/Menu Report/4. Report Performance Supplier.png", "Supplier performance"),
        ("Master Data", f"{KAL}/Overview Master Data.png", "Master data overview"),
        ("Master Data", f"{KAL}/Master Data - Alat Ukur.png", "Measuring instruments"),
        ("Master Data", f"{KAL}/Master Data - Kategori alat.png", "Instrument categories & intervals"),
        ("Master Data", f"{KAL}/Master Data - Supplier.png", "Calibration suppliers"),
    ],
    "skill-matrix": [
        ("Web Dashboard", f"{SKILL}/2. Display NFC After Scan.jpeg", "Web display after an NFC scan"),
        ("Web Dashboard", f"{SKILL}/1. Display NFC Scan - Web.png", "Web NFC scan display"),
        ("Web Dashboard", f"{SKILL}/4. Dashboard Admin - Web.png", "Admin dashboard"),
        ("Web Dashboard", f"{SKILL}/5. Karyawan Skill.png", "Employee skill list"),
        ("Web Dashboard", f"{SKILL}/6. Karyawan Skill input.png", "Skill score input"),
        ("Web Dashboard", f"{SKILL}/7. Knowledge Karyawan.png", "Employee knowledge"),
        ("Web Dashboard", f"{SKILL}/8. Training Karyawan.png", "Employee training"),
        ("Web Dashboard", f"{SKILL}/9. Training Karyawan Input Nilai.png", "Training score input"),
        ("Web Dashboard", f"{SKILL}/10.NilaiSkill.png", "Skill scores"),
        ("Web Dashboard", f"{SKILL}/11.Nilai Knowledge.png", "Knowledge scores"),
        ("Web Dashboard", f"{SKILL}/3. Login as User - Web.png", "Login"),
        ("Mobile App", f"{SKILL}/Screenshot_20260417-171929.png", "Waiting for an NFC employee card"),
        ("Mobile App", f"{SKILL}/Screenshot_20260417-170317.png", "Employee profile and skill map after scan"),
        ("Mobile App", f"{SKILL}/Screenshot_20260422-180456.png", "Inspector requirements"),
        ("Mobile App", f"{SKILL}/Screenshot_20260422-180515.png", "Basic training quality scores"),
        ("Mobile App", f"{SKILL}/Screenshot_20260422-180541.png", "Skill quality detail"),
        ("Mobile App", f"{SKILL}/Screenshot_20260422-180600.png", "Evaluation result and skill level"),
    ],
    "robot-problem": [
        ("Admin Dashboard", f"{ROBOT}/image14.png", "Admin dashboard: lines, production and problems today"),
        ("Admin Dashboard", f"{ROBOT}/image15.png", "Production chart: summary vs target"),
        ("Admin Dashboard", f"{ROBOT}/image16.png", "Daily production pivot per line"),
        ("Admin Dashboard", f"{ROBOT}/image17.png", "Problem summary and lost time"),
        ("Admin Dashboard", f"{ROBOT}/image18.png", "Production records"),
        ("Admin Dashboard", f"{ROBOT}/image19.png", "Problem records"),
        ("Admin Dashboard", f"{ROBOT}/image20.png", "Line master with daily target"),
        ("Admin Dashboard", f"{ROBOT}/image22.png", "Machine master"),
        ("Mobile App", f"{ROBOT}/image1.png", "Login with employee NIK"),
        ("Mobile App", f"{ROBOT}/image2.png", "Home: shift info and main menu"),
        ("Mobile App", f"{ROBOT}/image3.png", "Production per robot line"),
        ("Mobile App", f"{ROBOT}/image4.png", "Input a robot problem; lost time auto-calculated"),
        ("Mobile App", f"{ROBOT}/image5.png", "Problem detail and corrective action"),
        ("Mobile App", f"{ROBOT}/image6.png", "Problem history"),
        ("Mobile App", f"{ROBOT}/image9.png", "Input production"),
        ("Mobile App", f"{ROBOT}/image10.png", "Production history"),
        ("Mobile App", f"{ROBOT}/image12.png", "Edit production record"),
    ],
    "control-room": [
        ("Dashboard", "Dashboard Control Room/dashboard.png", "Plant performance overview with CCTV AI events and live alerts"),
    ],
}


def extract_pptx(tmp: Path):
    import zipfile
    tmp.mkdir(parents=True, exist_ok=True)
    pptx = SRC / "Input Problem Robot" / "Input Problem Robot Apps.pptx"
    with zipfile.ZipFile(pptx) as z:
        for name in z.namelist():
            if name.startswith("ppt/media/"):
                (tmp / Path(name).name).write_bytes(z.read(name))


def save(im: Image.Image, path: Path, max_w: int, max_h: int, quality: int):
    im = im.copy()
    im.thumbnail((max_w, max_h), Image.LANCZOS)
    im.save(path, "WEBP", quality=quality, method=6)
    return im.size


def main():
    tmp = SRC / "__pptx__" / "robot"
    extract_pptx(tmp)
    if OUT.exists():
        shutil.rmtree(OUT)

    gallery = {}
    total = 0
    for slug, items in MANIFEST.items():
        (OUT / slug / "thumbs").mkdir(parents=True, exist_ok=True)
        entries = []
        for i, (group, rel, caption) in enumerate(items, 1):
            src = SRC / rel
            im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
            name = f"{i:02d}.webp"
            w, h = save(im, OUT / slug / name, FULL_MAX_W, FULL_MAX_H, 82)
            save(im, OUT / slug / "thumbs" / name, THUMB_MAX, THUMB_MAX, 74)
            entries.append({
                "src": f"/projects/{slug}/{name}",
                "thumb": f"/projects/{slug}/thumbs/{name}",
                "w": w,
                "h": h,
                "group": group,
                "caption": caption,
            })
        gallery[slug] = entries
        total += len(entries)
        print(f"{slug}: {len(entries)} images")

    shutil.rmtree(SRC / "__pptx__")
    TS_OUT.parent.mkdir(exist_ok=True)
    TS_OUT.write_text(
        "// Generated by scripts/build-gallery.py. Do not edit by hand.\n"
        "export type Shot = { src: string; thumb: string; w: number; h: number; group: string; caption: string };\n\n"
        f"export const gallery: Record<string, Shot[]> = {json.dumps(gallery, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    size = sum(f.stat().st_size for f in OUT.rglob("*.webp"))
    print(f"total {total} images, {size / 1e6:.1f} MB")


if __name__ == "__main__":
    main()

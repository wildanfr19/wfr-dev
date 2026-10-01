import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wfr-dev.vercel.app"),
  title: "Wildan Fathur Rohman — Fullstack Engineer",
  description:
    "Fullstack engineer with 5+ years building production systems for automotive manufacturing and FMCG: RFID warehouse automation, Oracle JD Edwards integration, ERP and HRIS. Laravel, Flutter, React.",
  keywords: ["Fullstack Engineer", "Laravel", "Flutter", "React", "RFID", "NFC", "Oracle JD Edwards", "Portfolio"],
  openGraph: {
    title: "Wildan Fathur Rohman — Fullstack Engineer",
    description: "Production systems for automotive manufacturing and FMCG: RFID, NFC, ERP and HRIS.",
    images: ["/projects/rfid-warehouse/01.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

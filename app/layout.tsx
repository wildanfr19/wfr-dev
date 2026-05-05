import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wildan Fathur Rohman — Full Stack Developer",
  description: "Full Stack Web Developer specializing in Laravel, React, and enterprise systems.",
  keywords: ["Full Stack Developer", "Laravel", "React", "Web Developer", "Portfolio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

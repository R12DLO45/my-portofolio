import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio | Web & Software Developer",
  description: "Portofolio mahasiswa semester akhir dan Web Developer yang berfokus pada Next.js, React, dan arsitektur web modern.",
  openGraph: {
    title: "Portofolio | Web & Software Developer",
    description: "Koleksi proyek web modern, tech stack, dan informasi kontak.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090d16]`}>
        {children}
      </body>
    </html>
  );
} 
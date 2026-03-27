import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Timothy Jordy Weley | Portfolio",
  description: "Computer Science student at UNKLAB focused on web, mobile, multimedia, and AI orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-white font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}

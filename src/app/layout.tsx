import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Qasim | Full Stack Developer | portfolio",
  description: "Hey there! 👋 I'm Abdullah Qasim, a Full-Stack Developer and Computer Science student with a passion for turning ideas into scalable applications.",
  keywords: "abdullah qasim, abdullah, abdullah portfolio, abdullah web developer, abdullah developer, abdullah automtion bot expert, abfullah bot developer, abdullah qasim portfolio, web developer, python developer, automation bot developer, web designer, abdullah web designer, python developer near me, web developer near me, python developer in lahore, web developer in lahore"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

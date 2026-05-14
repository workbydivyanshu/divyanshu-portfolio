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
  title: "Divyanshu Ganeshwani | Full Stack Developer & Security Engineer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, and Python. Passionate about building secure, performant web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Security",
    "Web Development",
  ],
  openGraph: {
    title: "Divyanshu Ganeshwani | Full Stack Developer & Security Engineer",
    description:
      "Building secure, performant web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0a192f] text-[#8892b0]">{children}</body>
    </html>
  );
}

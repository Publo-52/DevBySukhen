import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhen — Software Developer",
  description: "Portfolio of Sukhen, a software developer specializing in modern web development, backend systems, databases, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans min-h-screen bg-background text-primary selection:bg-accent selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

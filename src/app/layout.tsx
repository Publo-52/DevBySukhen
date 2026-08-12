import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhen Das | DevBySukhen — Web Designer & Full-Stack Developer",
  description: "Portfolio of Sukhen Das (DevBySukhen), a software developer & web designer specializing in modern web apps, cloud-native DevSecOps, and AI security platforms.",
  icons: {
    icon: [
      { url: "/images/final-logo_selected.png", type: "image/png" },
      { url: "/images/logo_selected-portfolio.png", type: "image/png" }
    ],
    shortcut: "/images/final-logo_selected.png",
    apple: "/images/final-logo_selected.png",
  },
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

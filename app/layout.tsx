import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Explore the digital world of Dharyl Almora's portfolio, where creativity meets innovation. With a passion for design and development, Dharyl showcases a diverse range of projects, from sleek web designs to interactive user experiences. Dive into a world of captivating visuals and seamless functionality, crafted with meticulous attention to detail and a drive for excellence.",
  authors: [{
    name: 'Dharyl Carry S. Almora'
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tl from-slate-200 via-sky-100 to-orange-100 bg-cover`}>
        {children}
        <SpeedInsights />
        <Footer />
      </body>

    </html>
  );
}

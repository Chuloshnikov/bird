import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

const font = Outfit({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Bird",
  description: "Improve your startup with Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

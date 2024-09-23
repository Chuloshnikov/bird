import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

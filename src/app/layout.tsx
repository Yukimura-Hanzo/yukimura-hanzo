//? METADATA | [S.E.O] Search Engine Optimization
import type { Metadata } from "next";
//? FONTS | Google Optimised Fonts
import { Geist, Geist_Mono } from "next/font/google";
//? STYLESHEET | Globals css
import "@/styles/css/globals.css";
import "@/styles/scss/globals.scss";
//? UI
import Navbar from "./(ui)/navbar";
import Footer from "./(ui)/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//? METADATA | Tags
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

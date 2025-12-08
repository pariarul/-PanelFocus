import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Panel Focus - Real People. Trusted Data.",
  description: "Panel Focus is a global market research panel provider offering high-quality, reliable data collection services across 40+ countries. Join us for trusted insights.",
  icons: {
    icon: "/logo-removebg-preview.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
<Navbar />
<Footer />
<WhatsAppButton />
      </body>
    </html>
  );
}

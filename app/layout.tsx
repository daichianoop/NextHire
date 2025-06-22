import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nexthire.ai",
  description: "An AI powered platform for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} antialiased pattern`}
      >
        {children}
      <Toaster/>
      </body>
    </html>
  );
}

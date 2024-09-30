import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import { geistMono, geistSans } from "./fonts";
import Footer from "@/components/common/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: {
    template: "%s | Inglo",
    default: "Inglo",
  },
  description: "Inglo 팀을 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="text-[16px]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

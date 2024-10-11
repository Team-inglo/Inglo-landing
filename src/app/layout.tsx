import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import { pretendard } from "./fonts";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

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
    <html lang="ko" className={`text-[16px] ${pretendard.variable}`}>
      <body
        className={`${pretendard.className} antialiased min-h-screen w-full`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

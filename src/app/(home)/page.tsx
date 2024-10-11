"use client";
import AboutusHeader from "@/components/aboutus/header/AboutusHeader";
import HomeAboutUs from "@/components/home/about/HomeAboutUs";
import HomeBlog from "@/components/home/blog/HomeBlog";
import HomeContact from "@/components/home/contact/HomeContact";
import HomeIntro from "@/components/home/intro/HomeIntro";
import HomeProject from "@/components/home/services/HomeProject";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <AboutusHeader />
      <main>
        <HomeIntro />
        <HomeAboutUs />
        <HomeProject />
        <HomeBlog />
        <HomeContact />
      </main>
    </>
  );
};

export default HomePage;

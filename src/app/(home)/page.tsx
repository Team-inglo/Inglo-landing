"use client";
import AboutusHeader from "@/components/aboutus/header/AboutusHeader";
import ContactCard from "@/components/common/contact_card/ContactCard";
import HomeAboutUs from "@/components/home/about/HomeAboutUs";
import HomeBlog from "@/components/home/blog/HomeBlog";
import HomeIntro from "@/components/home/intro/HomeIntro";
import HomeProject from "@/components/home/services/HomeProject";
import { useRouter } from "next/navigation";

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
        <ContactCard
          bgColor="bg-primary"
          boxColor="bg-light_green"
          titleColor="text-green_400"
          buttonLabel="Contact us"
          titleLabel="Inglo와 함께 나아갈 팀원을 찾습니다"
          descriptionLabel={
            <>
              저희와 함께 불가능을 가능으로 만들어갈 준비가 되셨나요?
              <br />
              열정과 아이디어가 넘치는 당신을 기다립니다!
            </>
          }
        />
      </main>
    </>
  );
};

export default HomePage;

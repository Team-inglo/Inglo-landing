import React from "react";
import Image from "next/image";
import LogoImg from "@/images/home/landing_logo.png";
import Title from "@/images/home/title_box.svg";
import HeadText from "@/images/home/head_text.png";

const BgLogo = () => (
  <Image src={LogoImg} alt="Logo" className="bottom-0 z-0 w-[620px]" />
);

const TitleSection = () => (
  <div className="relative">
    <Title />
    <div className="text-primary absolute top-[10px] left-[28px] text-[20px]">
      ✦ Team Inglo ✦
    </div>
  </div>
);

const MainText = () => (
  <div className="text-white text-[24px] leading-[32px] text-center">
    작은 꿈에서 시작된 우리의 여정, <br />
    이제는 세상을 변화시키는 큰 꿈으로
  </div>
);

const HomeIntro = () => {
  return (
    <section className="flex flex-col items-center gap-[32px] pt-[194px] h-[100vh] bg-custom_gradient">
      <TitleSection />
      <Image src={HeadText} alt="꿈꾸는 개발자들의 아름다운 여정" />
      <MainText />
      <BgLogo />
    </section>
  );
};

export default HomeIntro;

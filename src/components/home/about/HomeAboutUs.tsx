import React from "react";
import Image from "next/image";
import TagImg from "@/images/home/aboutus_tag.png";
import Button from "@/components/common/button/Button";

const AboutUsTextBlock = () => {
  return (
    <div className="w-[576px] text-white_900 text-[18px] font-normal leading-[28px] whitespace-pre-wrap">
      대학 동아리에서 만난 열정 넘치는 개발자들이 모여 시작한 저희 팀은,
      <br />
      우리가 가진 기술의 힘으로 세상을 더 나은 곳으로 만들고자 하는 꿈을 가지고
      있습니다. <br />
      Inglo는 'Insight Global'의 약자로, <br />
      글로벌 시야를 넓히고 문제를 해결하자는 의미를 가지고 있습니다. <br />
      순수한 열정과 호기심, 그리고 '가치를 위한 새로운 도전'이라는 <br />
      공통된 바람으로 활동하고 있습니다.
    </div>
  );
};

const HomeAboutUs = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[1440px] flex items-center justify-start p-card_padding">
        <div className="flex flex-col items-start w-[576px] gap-[30px]">
          <div>
            <h1 className="text-green_200 text-[48px] leading-[60px] font-extrabold">
              Insight Global
            </h1>
            <h1 className="text-black text-[48px] leading-[60px] font-extrabold">
              Hi, We are Inglo!
            </h1>
          </div>
          <AboutUsTextBlock />
          <Button
            bgColor="bg-primary"
            textColor="text-white_900"
            label="About us"
          />
        </div>
        <Image src={TagImg} alt="tag" className="w-[576px] h-[345px]" />
      </div>
    </section>
  );
};

export default HomeAboutUs;

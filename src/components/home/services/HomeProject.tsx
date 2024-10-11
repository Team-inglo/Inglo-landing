import React from "react";
import Image from "next/image";
import GiggleCard from "@/images/home/giggle_card.png";
import Giggle from "@/images/home/giggle.png";
import TitleBox from "@/images/home/project_title.png";
import Button from "@/components/common/button/Button";

const TitleSection = () => (
  <div className="relative">
    <Image src={TitleBox} alt="title box" className="w-[199px] h-[41px]" />
    <div className="text-white_800 absolute top-[10px] left-[28px] text-[20px]">
      ✦ first project ✦
    </div>
  </div>
);

const TextSection = () => (
  <div className="text-light_brown text-[48px] font-normal leading-[60px]">
    Unlock Your
    <br />
    Job Opportunities
  </div>
);

const HomeProject = () => {
  return (
    <section className="flex items-center justify-center bg-yellow_50">
      <div className="w-[1440px] flex items-center justify-start p-card_padding">
        <div className="flex items-center gap-[50px]">
          <Image
            src={GiggleCard}
            alt="giggle"
            className="w-[588px] h-[588px]"
          />
          <div className="flex flex-col">
            <div className="flex flex-col justify-center gap-[24px] py-[24px]">
              <TitleSection />
              <TextSection />
              <Image src={Giggle} alt="Giggle" className="w-[187px] h-[61px]" />
            </div>
            <Button
              bgColor="bg-secondary"
              textColor="text-black"
              label="서비스 보러가기"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProject;

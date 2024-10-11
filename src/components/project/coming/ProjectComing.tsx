import Image from "next/image";
import React from "react";
import Title from "@/images/project/project_title.svg";
import GiggleCard1 from "@/images/project/giggle_card_1.png";
import GiggleCard2 from "@/images/project/giggle_card_2.png";

const ProjectComing = () => {
  return (
    <section className="py-[100px] px-[144px] flex flex-col items-center">
      <div className="w-[1152px] p-[50px] flex flex-col items-center gap-[24px]">
        <div className="relative">
          <Title />
          <p className="text-dark_yellow text-[20px] absolute top-[10px] left-[28px]">
            ✦ our value ✦
          </p>
        </div>
        <div className="w-[808px] text-center text-white_900 text-[28px] leading-[40px]">
          Giggle은 외국인 유학생들에게 아르바이트 신청 및 관리를 위한 최적의
          솔루션을 제공하며, 곧 출시될 예정입니다. 편리하고 효율적인 아르바이트
          경험을 통해 유학생들이 새로운 기회를 찾을 수 있도록 지원하겠습니다.
        </div>
      </div>
      <div className="w-[1152px] py-[50px] flex gap-[12px]">
        <Image src={GiggleCard1} alt="giggle" className="w-[552px]" />
        <Image src={GiggleCard2} alt="giggle" className="w-[582px]" />
      </div>
    </section>
  );
};

export default ProjectComing;

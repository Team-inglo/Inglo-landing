import Image from "next/image";
import React from "react";
import BackgroundImg from "@/images/project/background.png";
import Title from "@/images/project/project_title.svg";

const ProjectBackground = () => {
  return (
    <section className="py-[100px]">
      <div className="py-[100px] px-[144px] flex justify-center items-center">
        <Image src={BackgroundImg} alt="img" className="w-[450px]" />
        <div className="flex flex-col justify-center items-end gap-[24px] p-[50px]">
          <div className="relative">
            <Title />
            <p className="text-dark_yellow text-[20px] absolute top-[10px] left-[28px]">
              ✦ backgound ✦
            </p>
          </div>
          <h1 className="text-secondary text-[48px]">Giggle의 탄생배경</h1>
          <div className="w-[558px] text-white_800 text-[28px] leading-[40px] whitespace-normal text-right">
            외국인 유학생 20만 시대에, 아르바이트를 희망하는 유학생들이 증가하고
            있습니다. 그러나 불법 취업 건수 증가, 시간제 취업허가 미비, 정보
            부족 등의 문제로 어려움을 겪고 있는 학생들이 많습니다. 이를 해결하기
            위해 Giggle 서비스가 탄생했습니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBackground;

import Image from "next/image";
import React from "react";
import ValueImg from "@/images/project/value.png";
import Title from "@/images/project/project_title.svg";

const ProjectValue = () => {
  return (
    <section className="py-[100px]">
      <div className="py-[100px] px-[144px] flex justify-center items-center">
        <div className="flex flex-col justify-center items-start gap-[24px] p-[50px]">
          <div className="relative">
            <Title />
            <p className="text-dark_yellow text-[20px] absolute top-[10px] left-[28px]">
              ✦ our value ✦
            </p>
          </div>
          <h1 className="text-secondary text-[48px] font-semibold">
            Giggle의 가치
          </h1>
          <div className="w-[558px] text-white_800 text-[28px] font-semibold leading-[40px] whitespace-normal">
            Giggle은 외국인 유학생 맞춤형 아르바이트 플랫폼입니다. 기존
            플랫폼에서 매칭만 도와주는 것이 아닌, 사회초년생처럼 한국에 막
            들어온 유학생들도 앱 하나만으로 아르바이트를 할 수 있도록 더욱
            섬세하고 직접적으로 도와줍니다.
          </div>
        </div>
        <Image src={ValueImg} alt="img" className="w-[450px]" />
      </div>
    </section>
  );
};

export default ProjectValue;

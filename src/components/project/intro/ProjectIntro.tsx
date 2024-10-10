import React from "react";
import Image from "next/image";
import GiggleMockup from "@/images/project/giggle_mockup.png";
import Title from "@/images/project/project_title.svg";
import GigleText from "@/images/project/gigle_text.svg";

const ProjectIntro = () => {
  const tech = [
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
    "Visible pores",
  ];

  return (
    <section className="flex flex-col justify-center items-center py-[100px] px-[144px]">
      <div className="flex flex-col justicy-center items-center gap-[24px]">
        <div className="relative">
          <Title />
          <p className="text-dark_yellow text-[20px] absolute top-[10px] left-[28px]">
            ✦ first project ✦
          </p>
        </div>
        <GigleText />
        <div className="text-white_800 text-[22px] leading-[32px]">
          외국인 유학생을 위한 아르바이트 신청 및 관리 서비스
        </div>
      </div>
      <Image src={GiggleMockup} alt="Giggle service" />
      <div className="w-[1152px] flex flex-col items-center justify-center gap-[36px] bg-yellow_100 rounded-[64px] pt-[64px] pb-[32px]">
        <p className="text-white_900 text-[28px] font-[400]">
          Giggle만의 독자적인 기술을 소개할게요
        </p>
        <div className="flex flex-col gap-[24px] py-[20px]">
          <div className="flex justify-end w-[736px] gap-[4px]">
            {tech.slice(0, 5).map((item, id) => (
              <div
                key={id}
                className={`py-[14px] px-[20px] bg-white shadow-tech_card rounded-[22px]  text-[16px] ${
                  [2, 6, 8].includes(id) ? "text-secondary" : "text-yellow_200"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-center w-[736px] gap-[4px]">
            {tech.slice(5, 10).map((item, id) => (
              <div
                key={id}
                className={`py-[14px] px-[20px] bg-white shadow-tech_card rounded-[22px]  text-[16px] ${
                  [2, 6, 8].includes(id) ? "text-secondary" : "text-yellow_200"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;

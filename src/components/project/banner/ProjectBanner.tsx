import React from "react";
import LogoImg from "@/images/inglo_logo.svg";

const ProjectBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-light_green pt-[168px] pb-[68px] gap-[8px]">
      <LogoImg width="70px" />
      <h1 className="text-light_black text-[60px] font-[400] leading-[60px]">
        Projects
      </h1>
      <h2 className="text-light_black text-[22px] font-[400] leading-[32px]">
        Inglo만의 독창적인 프로젝트를 만나보세요
      </h2>
    </section>
  );
};

export default ProjectBanner;

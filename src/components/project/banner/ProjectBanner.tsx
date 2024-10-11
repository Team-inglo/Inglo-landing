import React from "react";
import LogoImg from "@/images/inglo_logo.svg"; // SVG를 컴포넌트로 임포트

const ProjectBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-light_green pt-[168px] pb-[68px] gap-[8px]">
      <LogoImg width={70} height={70} />
      <h1 className="text-light_black text-[60px] font-semibold leading-[60px]">
        Projects
      </h1>
      <h2 className="text-light_black text-[22px] font-normal leading-[32px]">
        Inglo만의 독창적인 프로젝트를 만나보세요
      </h2>
    </section>
  );
};

export default ProjectBanner;

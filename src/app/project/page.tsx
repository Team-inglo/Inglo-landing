import ContactCard from "@/components/common/contactCard/ContactCard";
import ProjectBackground from "@/components/project/background/ProjectBackground";
import ProjectBanner from "@/components/project/banner/ProjectBanner";
import ProjectComing from "@/components/project/coming/ProjectComing";
import ProjectIntro from "@/components/project/intro/ProjectIntro";
import ProjectValue from "@/components/project/value/ProjectValue";
import React from "react";

export const metadata = {
  title: "project",
};

const ProjectPage = () => {
  return (
    <>
      <main>
        <ProjectBanner />
        <ProjectIntro />
        <ProjectBackground />
        <ProjectValue />
        <ProjectComing />
        <ContactCard
          bgColor="bg-secondary"
          boxColor="bg-yellow_50"
          titleColor="text-neutral_black"
          buttonLabel="Contact us"
          titleLabel="Giggle 서비스와 함께하고 싶다면?"
          descriptionLabel=""
        />
      </main>
    </>
  );
};

export default ProjectPage;

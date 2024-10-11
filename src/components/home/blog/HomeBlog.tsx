import React from "react";
import Image from "next/image";
import Icons from "@/images/home/blog_icons.svg";
import Button from "@/components/common/button/Button";

const BlogTextSection = () => (
  <>
    <h1 className="text-light_blue text-[48px] font-normal">
      Come to Inglo’s Blog!
    </h1>
    <h1 className="text-white_900 text-[48px] font-semibold">
      Inglo의 자세한 이야기가 궁금하신가요?
    </h1>
  </>
);

const HomeBlog = () => {
  return (
    <section className="flex items-center justify-center bg-light_green">
      <div className="w-[1440px] flex flex-col items-center justify-start p-card_padding">
        <div className="w-[1152px] rounded-[80px] flex flex-col justify-center items-center py-[80px] bg-white gap-[40px]">
          <BlogTextSection />

          <Icons />

          <Button
            bgColor="bg-primary"
            textColor="text-white_900"
            label="블로그 보러가기"
            marginTop="mt-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;

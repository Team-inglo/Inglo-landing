import React from "react";
import Image from "next/image";
import Icons from "@/images/home/blog_icons.png";
import Button from "@/components/common/button/Button";

const HomeBlog = () => {
  return (
    <section className="flex items-center justify-center bg-light_green">
      <div className="w-[1440px] flex flex-col items-center justify-start p-card_padding">
        <div className="w-[1152px] flex flex-col justify-center items-center pt-[80px] pb-[80px] bg-white gap-[40px]">
          <h1>Come to Inglo’s Blog!</h1>
          <h1>Inglo의 자세한 이야기가 궁금하신가요?</h1>
          <Image src={Icons} alt="icons" />
          <Button
            bgColor="bg-primary"
            textColor="text-white_900"
            label="블로그 보러가기"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;

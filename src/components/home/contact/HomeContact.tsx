import React from "react";
import Button from "@/components/common/button/Button";

const HomeContact = () => {
  return (
    <section className="flex items-center justify-center bg-primary">
      <div className="w-[1440px] flex flex-col items-center justify-start pt-[50px] px-[144px]">
        <div className="w-[1152px] flex flex-col justify-center items-start p-[80px] bg-light_green rounded-[80px_80px_0px_0px]">
          <div>
            <h1 className="text-green_200 text-[48px] leading-[60px] font-extrabold mb-[12px]">
              Join our Journey!
            </h1>
            <h1 className="text-black text-[48px] leading-[60px] font-extrabold  mb-[12px]">
              Inglo와 함께 나아갈 팀원을 찾습니다
            </h1>
            <div className="w-[576px] text-white_900 text-[18px] font-normal leading-[28px] py-[24px]">
              저희와 함께 불가능을 가능으로 만들어갈 준비가 되셨나요?
              <br />
              열정과 아이디어가 넘치는 당신을 기다립니다!
            </div>
          </div>

          <Button
            bgColor="bg-primary"
            textColor="text-white_900"
            label="Contact us"
            marginTop="mt-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

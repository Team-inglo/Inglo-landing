import React from "react";
import Button from "@/components/common/button/Button";

const HomeContact = () => {
  return (
    <section className="flex items-center justify-center bg-primary">
      <div className="w-[1440px] flex flex-col items-center justify-start p-card_padding">
        <div className="w-[1152px] flex flex-col justify-center items-center pt-[80px] pb-[80px] bg-light_green gap-[40px]">
          <h1>Join our Journey!</h1>
          <h1>Inglo와 함께 나아갈 팀원을 찾습니다</h1>
          <div>
            저희와 함께 불가능을 가능으로 만들어갈 준비가 되셨나요?
            <br />
            열정과 아이디어가 넘치는 당신을 기다립니다!
          </div>
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

export default HomeContact;

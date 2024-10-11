import React from "react";
import Button from "../button/Button";

type ContactCardProps = {
  bgColor?: string;
  boxColor?: string;
  titleColor?: string;
  buttonLabel?: string;
  titleLabel?: string;
  descriptionLabel?: React.ReactNode;
  link?: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  bgColor = "bg-primary",
  boxColor = "bg-light_green",
  titleColor = "text-green_400",
  buttonLabel = "Contact us",
  titleLabel = "Inglo와 함께 나아갈 팀원을 찾습니다",
  descriptionLabel = (
    <>
      저희와 함께 불가능을 가능으로 만들어갈 준비가 되셨나요?
      <br />
      열정과 아이디어가 넘치는 당신을 기다립니다!
    </>
  ),
  link = "/",
}) => {
  return (
    <section className={`flex items-center justify-center ${bgColor}`}>
      <div className="w-[1440px] flex flex-col items-center justify-start pt-[50px] px-[144px]">
        <div
          className={`w-[1152px] flex flex-col justify-center items-start p-[80px] ${boxColor} rounded-[80px_80px_0px_0px]`}
        >
          <div>
            <h1
              className={`${titleColor} text-[48px] leading-[60px] font-[400] mb-[12px]`}
            >
              Join our Journey!
            </h1>
            <h1 className="text-black text-[48px] leading-[60px] font-semibold mb-[12px]">
              {titleLabel}
            </h1>
            {descriptionLabel && (
              <div className="text-white_900 text-[18px] font-normal leading-[28px] py-[24px] w-[576px]">
                {descriptionLabel}
              </div>
            )}
          </div>

          <Button
            bgColor={bgColor}
            textColor="text-white_900"
            label={buttonLabel}
            marginTop="mt-[50px]"
            link={link}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCard;

import AboutusValueCard from "./AboutusValueCard";
import CreativeIcon from "@/icons/creative_icon.svg";
import ChallengeIcon from "@/icons/challenge_icon.svg";
import SocialIcon from "@/icons/social_icon.svg";
import CooperationIcon from "@/icons/cooperation_icon.svg";
import OurValueTitleImage from "@/images/our_value_title.svg";

/**
 * @description
 * about us 페이지 핵심 가치 컴포넌트
 * @component AboutusValue
 * @returns {JSX.Element} AboutusValue
 * @since 2024.09.29
 */
/**
 * Renders the value component for the aboutus section.
 * @returns The rendered value component.
 */

const valueList = [
  {
    icon: <CreativeIcon width={60} height={60} />,
    title: "창의적 문제 해결",
    content: (
      <span>
        철저한 기존 서비스 조사를 통해 시장의 현황과 <br />
        트렌드를 파악하고, 새로운 시각으로 접근합니다.
      </span>
    ),
  },
  {
    icon: <ChallengeIcon width={60} height={60} />,
    title: "기술적 도전성",
    content: (
      <span>
        최신 기술을 시도하고, 새로운 기술에 도전합니다. <br />
        차가운 코드에 온기를 불어넣어, 진정한 <br />
        'Digital Empathy'를 실현합니다.
      </span>
    ),
  },
  {
    icon: <SocialIcon width={60} height={60} />,
    title: "사회적 영향",
    content: (
      <span>
        수익성보다는 사회 문제 해결에 초점을 맞춥니다. <br />
        적극적인 유저 리서치를 통해 실제 사용자의 니즈를 <br />
        깊이 이해하고 서비스에 반영합니다.
      </span>
    ),
  },
  {
    icon: <CooperationIcon width={60} height={60} />,
    title: "협력의 시너지",
    content: (
      <span>
        다양한 배경의 팀원들이 모여 더 큰 가치를 만듭니다.
        <br />
        빠른 프로토타이핑과 지속적인 피드백 반영으로 <br />
        효율적으로 발전합니다.
      </span>
    ),
  },
];

const AboutusValue = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[3rem] py-[6.25rem] px-[9rem]">
      <div className="flex flex-col justify-center items-center gap-[1.5rem]">
        <OurValueTitleImage />
        <h3 className="text-[3rem] font-bold text-deep_gray">
          우리의 핵심 가치
        </h3>
        <p className="text-[1.5rem] font-medium  text-deep_gray">
          "작은 코드로 시작해 큰 변화를 만듭니다.함께 꿈꾸고, 함께 도전하며,
          함께 성장해요!"
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[3rem] p-[3.75rem]">
        {valueList.map((value, index) => (
          <AboutusValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            content={value.content}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutusValue;

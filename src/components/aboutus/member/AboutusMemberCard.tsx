// import GithubIcon from "@/icons/github_icon.svg";
import Image, { StaticImageData } from "next/image";

/**
 * @description
 * about us 페이지 멤버 카드 컴포넌트
 * @component AboutusMemberCard
 * @returns {JSX.Element} AboutusMemberCard
 * @since 2024.09.29
 */
/**
 * Renders the member card component for the aboutus section.
 * @returns The rendered member card component.
 */

interface memberListType {
  profile: StaticImageData;
  keyword: string;
  name: string;
  position: string;
  introduce: string;
}

const AboutusMemberCard = ({
  profile,
  keyword,
  name,
  position,
  introduce,
}: memberListType) => {
  return (
    <div className="flex flex-col w-[25rem] bg-white rounded-[0.75rem] shadow-card_green">
      <Image
        className="w-full h-[18.125rem] rounded-[0.75rem] object-cover"
        src={profile}
        alt="프로필 사진"
        priority
      />
      <div className="w-full px-[2rem] py-[1.5rem]">
        <p className=" text-primary text-sm font-semibold">{keyword}</p>
        <div className="flex justify-between items-center py-[0.5rem]">
          <h3 className="text-deep_gray font-semibold text-[1.75rem] leading-[2.5rem]">
            {name}
          </h3>
          <div className="flex justify-center items-center py-[0.75rem] px-[2rem] border border-primary border-solid rounded-[3.125rem]  text-primary font-semibold text-xs">
            {position}
          </div>
        </div>
        <p className="pb-[1.5rem] text-deep_gray text-base">{introduce}</p>
        {/* <GithubIcon /> */}
      </div>
    </div>
  );
};

export default AboutusMemberCard;

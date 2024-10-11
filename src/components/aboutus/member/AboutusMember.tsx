"use client";

import AboutusMemberCard from "./AboutusMemberCard";
import ProfileImage1 from "@/images/profile/한은서_프로필.png";
import ProfileImage2 from "@/images/profile/윤혜정_프로필.jpg";
import ProfileImage3 from "@/images/profile/박예선_프로필.png";
import ProfileImage4 from "@/images/profile/이나경_프로필.jpeg";
import ProfileImage5 from "@/images/profile/한우준_프로필.jpeg";
import ProfileImage6 from "@/images/profile/설현아_프로필.jpeg";
import ProfileImage7 from "@/images/profile/정은지_프로필.png";
import ProfileImage8 from "@/images/profile/장동겸_프로필.jpeg";
import ProfileImage9 from "@/images/profile/김현진_프로필.jpeg";
import ProfileImage10 from "@/images/profile/문지원_프로필.jpeg";
import ProfileImage11 from "@/images/profile/강승준_프로필.jpeg";
import { StaticImageData } from "next/image";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useRef } from "react";

/**
 * @description
 * about us 페이지 멤버 컴포넌트
 * @component AboutusMember
 * @returns {JSX.Element} AboutusMember
 * @since 2024.09.29
 */
/**
 * Renders the member component for the aboutus section.
 * @returns The rendered member component.
 */

interface memberListType {
  profile: StaticImageData;
  keyword: string;
  name: string;
  position: string;
  introduce: string;
}

const memberList: memberListType[] = [
  {
    profile: ProfileImage1,
    keyword: "#차나핑",
    name: "한은서",
    position: "DESIGN",
    introduce: "디자인은 나의 발자취, 나는 흔적을 남긴다",
  },
  {
    profile: ProfileImage2,
    keyword: "#다람쥐 힙합퍼",
    name: "윤혜정",
    position: "DESIGN",
    introduce: "인생사 새옹지마",
  },
  {
    profile: ProfileImage3,
    keyword: "#활기참",
    name: "박예선",
    position: "MARKETING",
    introduce: "다양한 문화를 좋아하고 도전을 즐깁니다.",
  },
  {
    profile: ProfileImage4,
    keyword: "#웃음",
    name: "이나경",
    position: "FRONT-END",
    introduce: "새로운 기회마다 즐겁게 도전하는 개발자입니다.",
  },
  {
    profile: ProfileImage5,
    keyword: "#펠리컨적 사고",
    name: "한우준",
    position: "FRONT-END",
    introduce: "연결을 통해 가치 실현을 돕는 개발자입니다.",
  },
  {
    profile: ProfileImage6,
    keyword: "#행운",
    name: "설현아",
    position: "FRONT-END",
    introduce: "불가능한 일은 없다.",
  },
  {
    profile: ProfileImage7,
    keyword: "#예술가",
    name: "정은지",
    position: "BACK-END",
    introduce: "새로운 아이디어와 협업을 좋아하는 개발자",
  },
  {
    profile: ProfileImage8,
    keyword: "#사글사글함",
    name: "장동겸",
    position: "BACK-END",
    introduce: "몸을 갈아넣는걸 좋아하는 책임감있는 개발자",
  },
  {
    profile: ProfileImage11,
    keyword: "#유쾌함",
    name: "강승준",
    position: "BACK-END",
    introduce: "언제나 재밌게 개발하는 공룡을 좋아하는 개발자",
  },
  {
    profile: ProfileImage9,
    keyword: "#도전",
    name: "김현진",
    position: "AI",
    introduce: "설명가능한 개발을 좋아합니다. ",
  },
  {
    profile: ProfileImage10,
    keyword: "#오뚝이",
    name: "문지원",
    position: "AI",
    introduce: "이야기를 개척해나가는 사람",
  },
];

const AboutusMember = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const events = useHorizontalScroll(scrollRef);

  return (
    <section className="flex flex-col justify-center items-center gap-[3rem] py-[6.25rem] bg-primary">
      <div className="flex flex-col justify-center items-center gap-[1.5rem]">
        <div className="flex justify-center items-center w-[12.438rem] h-[2.563rem] bg-cover bg-center bg-[url('/images/title_light_frame.svg')]">
          <h1 className="text-[1.25rem] font-semibold text-deep_gray">
            ✦ Members ✦
          </h1>
        </div>
        <h3 className="text-[3rem] font-bold text-deep_gray">
          Inglo 팀원들을 소개합니다
        </h3>
      </div>
      <div
        className="w-full overflow-x-scroll no-scrollbar"
        ref={scrollRef}
        {...events}
      >
        <div className="min-w-fit flex justify-center gap-[3rem] px-[9rem] py-[3.75rem]">
          {memberList.map((member, idx) => (
            <AboutusMemberCard
              key={`member_${idx}`}
              profile={member.profile}
              keyword={member.keyword}
              name={member.name}
              position={member.position}
              introduce={member.introduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutusMember;

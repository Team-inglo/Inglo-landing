"use client";

import MemberTitleImage from "@/images/members_title.svg";
import AboutusMemberCard from "./AboutusMemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
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
import { StaticImageData } from "next/image";

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

const memberList = [
  {
    profile: ProfileImage1,
    keyword: "새초롬 디자이너",
    name: "한은서",
    position: "디자인",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage2,
    keyword: "새초롬 디자이너",
    name: "윤혜정",
    position: "디자인",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage3,
    keyword: "활발한 마케터",
    name: "박예선",
    position: "마케팅",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage4,
    keyword: "웃음많은 개발자",
    name: "이나경",
    position: "프론트",
    introduce: "새로운 기회마다 즐겁게 도전하는 개발자입니다.",
  },
  {
    profile: ProfileImage5,
    keyword: "펠리컨적 사고 개발자",
    name: "한우준",
    position: "프론트",
    introduce: "연결을 통해 가치 실현을 돕는 개발자입니다.",
  },
  {
    profile: ProfileImage6,
    keyword: "행운있는 개발자",
    name: "설현아",
    position: "프론트",
    introduce: "불가능한 일은 없다.",
  },
  {
    profile: ProfileImage7,
    keyword: "똘똘한 리더",
    name: "정은지",
    position: "백엔드",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage8,
    keyword: "바쁜 개발자",
    name: "장동겸",
    position: "백엔드",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage9,
    keyword: "행복한 AI",
    name: "김현진",
    position: "AI",
    introduce: "안녕하세요!",
  },
  {
    profile: ProfileImage10,
    keyword: "오뚝이 AI",
    name: "문지원",
    position: "AI",
    introduce: "이야기를 만들어가는 사람",
  },
];

const chunkedMemberList: memberListType[][] = [];
for (let i = 0; i < memberList.length; i += 3) {
  chunkedMemberList.push(memberList.slice(i, i + 3));
}

const AboutusMember = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="flex flex-col justify-center items-center gap-[3rem] py-[6.25rem]">
      <div className="flex flex-col justify-center items-center gap-[1.5rem]">
        <MemberTitleImage />
        <h3 className="text-[3rem] font-bold text-deep_gray">
          Inglo 팀원들을 소개합니다
        </h3>
      </div>
      <div className="w-full">
        <Swiper
          loop={true} // 슬라이드 루프
          spaceBetween={0} // 슬라이스 사이 간격
          slidesPerView={1} // 보여질 슬라이스 수
          navigation={false} // prev, next button
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {chunkedMemberList.map((members, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center gap-[3rem] px-[9rem] py-[3.75rem]">
                {members.map((member, idx) => (
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutusMember;

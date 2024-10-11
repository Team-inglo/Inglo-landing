"use client";

import MEMBER_LIST from "@/constants/aboutus/memberList";
import AboutusMemberCard from "./AboutusMemberCard";
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
          {MEMBER_LIST.map((member, idx) => (
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

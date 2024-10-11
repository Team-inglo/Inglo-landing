import LogoIcon from "@/images/inglo_logo.svg";

/**
 * @description
 * about us 페이지 배너 컴포넌트
 * @component AboutusBanner
 * @returns {JSX.Element} AboutusBanner
 * @since 2024.09.29
 */
/**
 * Renders the banner component for the aboutus section.
 * @returns The rendered banner component.
 */

const AboutusBanner = () => {
  return (
    <section className="flex flex-col justify-items-center items-center gap-[0.5rem] pt-[11.75rem] pb-[4.25rem] bg-light_green">
      <LogoIcon width={70} height={70} />
      <h1 className="text-[4rem] text-light_black font-bold">About us</h1>
      <p className="text-[2rem] text-black leading-[3.75rem]">
        Inglo Team에 대해 소개합니다!
      </p>
    </section>
  );
};

export default AboutusBanner;

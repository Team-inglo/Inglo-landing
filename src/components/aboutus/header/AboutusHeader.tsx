import LogoIcon from "@/images/inglo_logo.svg";
import LogoTextIcon from "@/images/inglo_logo_text.svg";
import Link from "next/link";

/**
 * @description
 * about us 페이지 헤더 컴포넌트
 * @component AboutusHeader
 * @returns {JSX.Element} AboutusHeader
 * @since 2024.09.29
 */
/**
 * Renders the header component for the aboutus section.
 * @returns The rendered header component.
 */

const AboutusHeader = () => {
  return (
    <header className="p-[1.25rem] bg-light_green">
      <div className="py-[1.125rem] px-[2.5rem] flex justify-between items-center rounded-[1.375rem] bg-white">
        <div className="flex gap-[0.75rem]">
          <LogoIcon width={24} height={23} />
          <LogoTextIcon width={55} height={24} />
        </div>
        <nav className="flex items-center gap-[4rem]">
          <Link className="text-lg text-primary font-semibold" href="/aboutus">
            About us
          </Link>
          <Link className="text-lg text-black font-semibold" href="/">
            Project
          </Link>
          <Link className="text-lg text-black font-semibold" href="/">
            Blog
          </Link>
        </nav>
        <button className="py-[1.125rem] px-[2rem] bg-primary rounded-[2.5rem] text-base font-semibold text-light_black">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default AboutusHeader;

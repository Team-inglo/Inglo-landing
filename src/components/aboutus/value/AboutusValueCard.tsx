import { valueType } from "@/types/aboutus/valueType";

/**
 * @description
 * about us 페이지 핵심 가치의 카드 컴포넌트
 * @component AboutusValueCard
 * @returns {JSX.Element} AboutusValueCard
 * @since 2024.09.29
 */
/**
 * Renders the value card component for the aboutus section.
 * @returns The rendered value card component.
 */

const AboutusValueCard = ({ icon, title, content }: valueType) => {
  return (
    <div className="p-[4rem] flex flex-col justify-center gap-[1.5rem] rounded-[1.25rem] border-solid border-primary border-[1px]">
      {icon}
      <h6 className="text-[1.75rem] text-deep_gray font-bold">{title}</h6>
      <p className="text-base text-deep_gray">{content}</p>
    </div>
  );
};

export default AboutusValueCard;

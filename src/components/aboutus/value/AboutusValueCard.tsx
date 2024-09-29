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

interface AboutusValueCardProps {
  icon: JSX.Element;
  title: string;
  content: JSX.Element;
}

const AboutusValueCard = ({ icon, title, content }: AboutusValueCardProps) => {
  return (
    <div className="p-[4rem] flex flex-col justify-center gap-[1.5rem] rounded-[1.25rem] shadow-card_green">
      {icon}
      <h6 className="text-[1.75rem] text-deep_gray font-bold">{title}</h6>
      <p className="text-base text-deep_gray">{content}</p>
    </div>
  );
};

export default AboutusValueCard;

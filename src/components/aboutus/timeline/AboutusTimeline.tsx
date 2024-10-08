import TimelineImage from "@/images/timeline_image.svg";

/**
 * @description
 * about us 페이지 타임라인 컴포넌트
 * @component AboutusTimeline
 * @returns {JSX.Element} AboutusTimeline
 * @since 2024.09.29
 */
/**
 * Renders the timeline component for the aboutus section.
 * @returns The rendered timeline component.
 */

const AboutusTimeline = () => {
  return (
    <section className="flex justify-center bg-gradient-to-b from-[#FFFFFF] to-[#EBFFF7]">
      <TimelineImage />
    </section>
  );
};

export default AboutusTimeline;

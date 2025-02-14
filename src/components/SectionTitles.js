import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const SectionTitles = ({ title }) => {
  const sectionTitleRef = useRef(null);
  useSectionTitleReveal(sectionTitleRef);
  return (
    <div className="overflow-hidden">
      <h2 className="section-title text-8xl md:text-[128px]" ref={sectionTitleRef}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitles;

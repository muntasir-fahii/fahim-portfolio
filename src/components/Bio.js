import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef();

  useBioReveal(bioRef, 2);

  return (
    <div className="mt-20 container mx-auto overflow-hidden">
      <p className="text-xl md:text-2xl leading-loose" ref={bioRef}>
        Hi, I am a Experienced Front-End developer with a passion for building dynamic and responsive web applications. Proficient in JavaScript, React.js, Redux and Redux Toolkit. Committed to delivering clean, efficient and high-quality code to meet project requirements and exceed client expectations.
      </p>
    </div>
  );
};

export default Bio;

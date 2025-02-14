import { useRef } from "react";
import SectionTitles from "./SectionTitles";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
const data = {
  img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1739555467/pp-test/1739554758945_dktip8.jpg",
  img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1739555621/pp-test/WhatsApp_Image_2025-02-11_at_15.39.02_2d0ab28d_r5iqcj.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useProjectLeftRightReveal(aboutRefs);
  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitles title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div
          className="about-left sm:self-center md:self-start"
          ref={aboutLeftRef}
        ></div>
        <div className="about-right" ref={aboutRightRef}>
          <p className="text-xl md:text-2xl leading-loose">
            I am Muntsir Fahim. As a versatile Front-End Developer, I bring a
            unique blend of technical proficiency and leadership skills to the
            table for creating outstanding websites. My expertise in JavaScript,
            React.js, Tailwind CSS, Redux, Redux Toolkit, GSAP, WebGL, Axios,
            and Firebase allows me to craft visually appealing and interactive
            user interfaces that effectively communicate complex ideas. I am
            always up-to-date with the latest advancements in the field and
            constantly strive to improve my skills to deliver exceptional
            results.
          </p>
          <p className="mt-10 text-xl md:text-2xl leading-loose">
            In addition, I possess excellent teamwork and leadership abilities.
            I understand the importance of collaboration and communication in
            delivering successful projects and enjoy working with a team to
            bring ideas to life. I am able to manage multiple tasks and
            priorities, and always strive to exceed expectations by delivering
            top-quality work on time and within budget. My strong leadership
            skills enable me to guide and mentor junior developers, ensuring
            that projects are completed efficiently and effectively. With my
            combination of technical expertise, strong interpersonal skills, and
            leadership qualities, I am confident that I can make a valuable
            contribution to any team and drive projects to success.
          </p>
          <a
            href="https://drive.google.com/file/d/1FljByVL08CCv-_bVXeEJULGX0j7lmpzr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-xl md:text-2xl inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useRef } from "react";
import SectionTitles from "./SectionTitles";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";
const data = [
  {
    id: 1,
    skill: "Next.js",
  },
  { id: 2, skill: "Express.js" },
  { id: 3, skill: "React.js" },
  { id: 4, skill: "MongoDB" },
  { id: 5, skill: "Prisma" },
  { id: 6, skill: "Axios" },
  { id: 7, skill: "Firebase" },
  { id: 8, skill: "Redux" },
  { id: 9, skill: "Daisy UI" },
  { id: 10, skill: "JWT" },
  { id: 11, skill: "GSAP" },
  { id: 12, skill: "Node.js" },
  { id: 13, skill: "javascript" },
  { id: 14, skill: "Bootstrap" },
  { id: 15, skill: "CSS" },
  { id: 16, skill: "HTML" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitles title={"Skills"} />

      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name ">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name ">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

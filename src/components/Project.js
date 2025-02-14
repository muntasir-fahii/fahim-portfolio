import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  const projectLeftRef = useRef(null);

  const projectRefs = [projectRightRef, projectLeftRef];
  useHoverEffect(projectRightRef, project.img1, project.img2);
  useProjectLeftRightReveal(projectRefs);

  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20 overflow-hidden">
      <div
        className="project-left col-span-3 flex flex-col gap-10"
        ref={projectLeftRef}
      >
        <span className="text-6xl md:text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-4xl md:text-5xl leading-relaxed text-rose-400">
          {project.title}
        </h3>
        <p className="text-white/75 text-xl md:text-2xl leading-loose">
          {project.description}
        </p>
        <span className="text-rose-400 flex gap-5 flex-wrap uppercase text-base md:text-2xl">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-base md:text-2xl uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
          >
            Live Site
          </a>

          {project.fullstackLink ? (
            <a
              href={project.fullstackLink}
              target="_blank"
              rel="noreferrer"
              className="text-base md:text-2xl uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
            >
              Full Stack code
            </a>
          ) : (
            <>
              <a
                href={project.frontEndLink}
                target="_blank"
                rel="noreferrer"
                className="text-base md:text-2xl uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
              >
                Front-end code
              </a>
              {project.backendLink && (
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-2xl uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
                >
                  Back-end code
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="project-right col-span-2 " ref={projectRightRef}></div>
    </div>
  );
};

export default Project;

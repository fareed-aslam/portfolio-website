import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";

const Projects = () => {
  const projectRef = useRef(null);
  return (
    <section className="pt-16" id="projects" ref={projectRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              {/* // ...existing code... */}
              <div className="flex-grow flex flex-col h-full overflow-hidden rounded-lg border border-purple-300/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-pink-400/60">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong>Tech-Stack:</strong>
                    <ul>
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-end mt-auto flex items-center gap-1 rounded-full border border-pink-200/50 px-2 py-1 tracking-tighter text-xs font-semibold hover:bg-pink-100/10 transition"
                  >
                    <span>Check Live</span>
                    <RiArrowRightUpLine />
                  </a>
                </div>
              </div>
              {/* // ...existing code... */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

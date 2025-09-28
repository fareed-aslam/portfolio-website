import React, { useRef } from "react";
import { SKILLS } from "../constants";
import gsap from "gsap";

const Skills = () => {
  const skillRef = useRef(null);

  // Mouse enter/leave handlers
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const glow = card.querySelector(".skill-glow");
    gsap.to(card, {
      scale: 1.03,
      duration: 0.28,
      ease: "power2.out",
    });
    gsap.to(icon, {
      y: -2,
      scale: 1.07,
      duration: 0.28,
      ease: "back.out(2)",
    });
    gsap.to(glow, {
      opacity: 1,
      duration: 0.28,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".skill-icon");
    const glow = card.querySelector(".skill-glow");
    gsap.to(card, {
      scale: 1,
      duration: 0.28,
      ease: "power2.inOut",
    });
    gsap.to(icon, {
      y: 0,
      scale: 1,
      duration: 0.28,
      ease: "power2.inOut",
    });
    gsap.to(glow, {
      opacity: 0,
      duration: 0.28,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="py-12" id="skills" ref={skillRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Skills I have.
        </h2>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center justify-center text-center bg-gradient-to-br from-white/10 via-pink-100/10 to-purple-100/10 backdrop-blur-md border border-pink-200/30 rounded-xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden relative min-h-[100px] min-w-[80px] max-w-[100px] mx-auto group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ boxShadow: "0 4px 16px 0 rgba(236, 72, 153, 0.15)" }}
            >
              {/* Glow ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-pink-400/30 group-hover:ring-pink-400/70 opacity-0 skill-glow transition-all duration-300"></span>
              <div
                className="mb-2 skill-icon z-10 flex items-center justify-center text-2xl"
                style={{ transition: "transform 0.28s" }}
              >
                {skill.icon}
              </div>
              <h3 className="text-xs font-semibold z-10 px-1 break-words">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

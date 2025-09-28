import React, { useRef, useEffect } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import david from "../assets/fareed.jpg";
import gsap from "gsap";
import { RiLinkedinBoxLine, RiGithubLine } from "@remixicon/react";

const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const roleRef = useRef(null);
  useEffect(() => {
    // 3D tilt on mouse move
    const handleMouseMove = (e) => {
      const img = imgRef.current;
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(img, {
        rotateY: x / 20,
        rotateX: -y / 20,
        scale: 1.04,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(imgRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    gsap.fromTo(
      roleRef.current,
      { opacity: 0, y: 30, letterSpacing: "0.2em" },
      {
        opacity: 1,
        y: 0,
        letterSpacing: "0.05em",
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      }
    );

    const img = imgRef.current;
    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section
      ref={heroRef}
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
    >
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <div className="flex gap-3 mb-6">
        <a
          href="../assets/My Cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn flex gap-1 items-center rounded-full border border-pink-200/50 px-2 py-1 tracking-tighter text-xs font-semibold hover:bg-pink-100/10 transition"
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine />
        </a>
        <a
          href="https://www.linkedin.com/in/fareed-mughal-734887293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn flex gap-1 items-center rounded-full border border-pink-200/50 px-2 py-1 tracking-tighter text-xs font-semibold hover:bg-pink-100/10 transition"
        >
          <span>LinkedIn</span>
          <RiLinkedinBoxLine />
        </a>
        <a
          href="https://github.com/fareed-aslam"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn flex gap-1 items-center rounded-full border border-pink-200/50 px-2 py-1 tracking-tighter text-xs font-semibold hover:bg-pink-100/10 transition"
        >
          <span>GitHub</span>
          <RiGithubLine />
        </a>
      </div>
      <img
        ref={imgRef}
        src={david}
        alt={PROFILE.name}
        width={400}
        height={400}
        className="relative hero-img rounded-3xl border border-pink-200/50 p-1 bg-gradient-to-br from-purple-900/40 to-pink-400/10 shadow-xl transition-transform duration-300"
      />
    </section>
  );
};

export default Hero;

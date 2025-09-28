import { RiTwitterFill } from "@remixicon/react";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <section id="contact" ref={contactRef} className="py-16">
      <div className="px-4 text-center">
        <h1 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h1>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email at:{" "}
          <a href="mailto:mfareedmughalinfo@gmail.com" className="border-b">
            mfareedmughalinfo@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/fareed-mughal-734887293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my linkedin profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/fareed-aslam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my twitter profile"
          >
            <RiTwitterFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

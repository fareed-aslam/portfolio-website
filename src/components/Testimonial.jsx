import React, { useRef } from "react";
import { TESTIMONIAL } from "../constants";

const Testimonial = () => {
  const testimonialRef = useRef(null);
  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
      <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
        What My Clients Say
      </h2>
      <div className="px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name}
            className="mb-6 h-24 w-24 border-4 object-cover rounded-full"
          />
          <blockquote className="max-w-xl text-lg leading-relaxed lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>
          <div className="mt-4 text-lg">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm">{TESTIMONIAL.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;

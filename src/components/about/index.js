import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade>
      <div className="h-full">
        <div className="flex flex-col items-center justify-center relative h-full items-center">
          <div className="flex flex-col px-16 max-w-2xl">
            <div
              className={`text-4xl font-hairline pb-3 max-w-lg border-b-2 border-blue-200 border-double`}
            >
              About Me
            </div>
            <div className="pt-6 leading-relaxed font-hairline text-gray-600 text-sm md:text-base">
              I'm a CS undergrad from India, and I've been passionate about
              computers for as long as I can remember. I'm very intrigued by how
              humans evolved, specifically in terms of what the 'conscious' is,
              how creativity is born, and how one could implement these abstract
              concepts into computers.
            </div>
            <div className="pt-3 leading-relaxed font-hairline text-gray-600 text-sm md:text-base">
              I love reading about abstract ideas in general, and am a fan of
              nihilistic literature. I also enjoy speaking in public, and have
              served as the head of my university's literary club for the past 2
              years.
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;

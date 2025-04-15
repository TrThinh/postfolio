import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { FaSearch } from "react-icons/fa";

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  const title = "About Me";
  const words = title.split(" ");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      id="about"
      className="py-16 px-10 md:px-10 lg:px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">
          {words.map((word, wordIndex) => (
            <span
              key={`${inView}-${wordIndex}`}
              className="inline-block mr-4 last:mr-0"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${inView}-${wordIndex}-${letterIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.2 + letterIndex * 0.05,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                  className="inline-block text-transparent bg-clip-text 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  dark:from-purple-300 dark:to-pink-300"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        <div className="flex justify-between w-[290px] pl-2 bg-purple-200 border-2 border-purple-500 rounded-lg text-black text-3xl font-bold mb-4 h-10">
          <Typewriter
            options={{
              strings: ["Do Trong Thinh"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
              pauseFor: 1000,
            }}
          />
          <FaSearch className="p-[4px] pt-[6px]" />
        </div>

        <div className="border-2 border-purple-400 rounded-md p-4 text-white text-lg mb-6 text-justify">
          I aspire to become a .NET Backend Developer. My short-term goal is to
          grow into a Junior .NET Developer within the next year, and advance to
          a Mid-Level role in two years, contributing effectively to projects
          and optimizing business solutions.
        </div>
      </div>
    </motion.section>
  );
}

export default About;

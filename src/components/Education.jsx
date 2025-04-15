import { FaUser, FaTimes, FaClock } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "./Effect/AnimatedTitle";

function EducationItem({ title, subtitle, date, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded text-purple-100 border-purple-300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:translate-y-1 cursor-pointer"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <h2 className="flex items-center">
          <FaClock className="mr-1" />
          {date}
        </h2>
      </div>

      <div className="mt-3">
        <span className="text-sm text-gray-400">{subtitle}</span>
      </div>
    </motion.div>
  );
}

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const title = "Education & Experience";

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (selectedEducation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEducation]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      id="education"
      className="py-16 px-4 relative z-0 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center flex justify-center">
          <AnimatedTitle text={title} />
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:px-4 z-20">
          <EducationItem
            title="Greenwich University"
            subtitle="Bachelor's in Information Technology"
            date="2021 - 2026"
            delay={0.1}
          />
          <EducationItem
            title="VSTEP B2 English Certificate"
            subtitle="English Proficiency"
            date="Issued in 2024"
            delay={0.2}
          />
          <EducationItem
            title="TypeScript Certification"
            subtitle="Certified in TypeScript"
            date="Issued in 2024"
            delay={0.3}
          />
          <EducationItem
            title="Devplus Internship"
            subtitle="Intern, Software Development"
            date="Feb 2025 - Apr 2025"
            delay={0.4}
          />
        </div>
      </div>

      {selectedEducation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedEducation(null)}
        >
          <div
            className="bg-purple-500 p-6 rounded text-purple-300 font-semibold border-purple-300 shadow-purple-300 shadow-lg transform scale-0 animate-scale-in transition-transform duration-300 relative w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-purple-200 hover:text-white"
              onClick={() => setSelectedEducation(null)}
            >
              <FaTimes size={20} />
            </button>

            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">
                {selectedEducation.title}
              </h3>
              <h2 className="flex items-center">
                <FaUser className="mr-1" />
                {selectedEducation.subtitle}
              </h2>
            </div>

            <p>
              <i>{selectedEducation.description}</i>
              <br />
              <b>Role:</b> <span>{selectedEducation.roles.join(", ")}</span>
              <br />
              <b>Workflow & tools:</b>{" "}
              <span>{selectedEducation.tools.join(", ")}</span>
            </p>

            <div className="mt-3">
              <span className="text-sm text-gray-400">{selectedEducation.date}</span>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default Education;

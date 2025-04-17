import { FaGithub, FaUser, FaEye, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { projectsData } from "../../public/projectsData";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFramework, setActiveFramework] = useState("All");

  const handleFilterClick = (framework) => {
    setActiveFramework(framework);
  };

  const title = "Projects";
  const letters = title.split("");

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
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-16 px-4 relative z-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center flex justify-center">
          {letters.map((letter, index) => (
            <motion.span
              key={`${inView}-${index}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              className="inline-block text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-500 to-pink-500 
        dark:from-purple-300 dark:to-pink-300"
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        <div className="flex gap-2 m-4">
          {["All", ".Net", "React", "Tailwind Css", "Bootstrap"].map(
            (fw, idx) => (
              <p
                key={idx}
                onClick={() => handleFilterClick(fw)}
                className={`border-2 border-purple-300 w-fit py-[4px] px-4 rounded-3xl md:text-lg text-[10px] font-medium 
        ${
          activeFramework === fw
            ? "bg-purple-300 text-purple-800"
            : "text-purple-300 hover:bg-purple-300 hover:text-purple-800"
        } 
        cursor-pointer transition`}
              >
                {fw}
              </p>
            )
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:px-4 z-20">
          {projectsData
            .filter((project) => {
              if (activeFramework === "All") return true;
              return project.framework.includes(activeFramework);
            })
            .map((project, index) => (
              <div
                key={index}
                className="bg-purple500 p-6 rounded text-purple100 border-purple300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <h2 className="flex items-center">
                    <FaUser className="mr-1" />
                    {project.people}{" "}
                    {project.people === 1 ? "Person" : "People"}
                  </h2>
                </div>

                <ol className="flex items-center mt-2">
                  <li className="flex-1">
                    <div className="flex items-center">
                      <div className="z-10 w-6 h-6 bg-purple-700 rounded-full flex justify-center items-center">
                        <div className="w-2.5 h-2.5 bg-purple-300 rounded-full"></div>
                      </div>
                      <div className="flex-grow h-0.5 bg-purple-300"></div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold">Start</h3>
                      <time className="text-sm text-gray-400">
                        {project.start}
                      </time>
                    </div>
                  </li>
                  <li className="flex-1">
                    <div className="flex items-center">
                      <div className="z-10 w-6 h-6 bg-purple-700 rounded-full flex justify-center items-center">
                        <div className="w-2.5 h-2.5 bg-purple-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold">End</h3>
                      <time className="text-sm text-gray-400">
                        {project.end}
                      </time>
                    </div>
                  </li>
                </ol>

                <div className="flex justify-between items-center mt-2 space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center hover:text-purple-400"
                  >
                    <FaGithub className="text-purple100 mr-1" /> GitHub
                  </a>
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      className="flex items-center hover:text-purple-400"
                    >
                      <FaEye className="text-purple100 mr-1" /> View
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-purple500 p-6 rounded text-purple-300 font-semibold border-purple300 shadow-purple300 shadow-lg relative w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-purple200 hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes size={20} />
            </button>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4"
                loading="lazy"
              />
            )}

            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <h2 className="flex items-center">
                <FaUser className="mr-1" />
                {selectedProject.people}{" "}
                {selectedProject.people === 1 ? "Person" : "People"}
              </h2>
            </div>

            <p className="text-lg font-normal mb-2">
              <i>{selectedProject.description}</i>
              <br />
              <b>Role:</b> <span>{selectedProject.roles.join(", ")}</span>
              <br />
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProject.framework.map((fw, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-purple-200 w-fit py-2 px-4 rounded-3xl text-purple-200 text-sm font-medium"
                  >
                    {fw}
                  </div>
                ))}
              </div>
              <br />
              <b>Workflow & tools:</b>{" "}
              <span>{selectedProject.tools.join(", ")}</span>
            </p>

            <ol className="flex items-center mt-2">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">Start</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {selectedProject.start}
                  </time>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">End</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {selectedProject.end}
                  </time>
                </div>
              </li>
            </ol>

            <div className="flex justify-between items-center mt-2 space-x-4">
              <a
                href={selectedProject.github}
                className="flex items-center font-normal hover:text-purple-300"
              >
                <FaGithub className="text-purple-500 mr-1" />
                GitHub
              </a>
              {selectedProject.deploy && (
                <a
                  href={selectedProject.deploy}
                  className="flex items-center font-normal border-2 border-purple-200 py-2 px-4 rounded-xl hover:text-purple-500 hover:bg-purple-200"
                >
                  <FaEye className="text-purple-500 mr-1" />
                  View
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}

export default Projects;

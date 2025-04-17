import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";

const skills = [
  {
    icon: <SiDotnet className="text-xl" />,
    label: "C#, ASP.NET",
    bg: "bg-purple200",
    direction: { x: -100, y: 0 },
  },
  {
    icon: <FaReact className="text-xl" />,
    label: "ReactJS",
    bg: "bg-teal-400",
    direction: { x: 100, y: 0 },
  },
  {
    icon: <FaHtml5 className="text-xl" />,
    label: "HTML",
    bg: "bg-orange-500",
    direction: { x: 0, y: -100 },
  },
  {
    icon: <FaCss3Alt className="text-xl" />,
    label: "CSS",
    bg: "bg-blue-600",
    direction: { x: 0, y: 100 },
  },
  {
    icon: <FaJs className="text-xl" />,
    label: "Javascript",
    bg: "bg-yellow-400",
    direction: { x: -100, y: -100 },
  },
  {
    icon: <SiTailwindcss className="text-xl" />,
    label: "Tailwind",
    bg: "bg-blue-400",
    direction: { x: 100, y: -100 },
  },
  {
    icon: <SiFirebase className="text-xl" />,
    label: "Firebase",
    bg: "bg-yellow-500",
    direction: { x: -100, y: 100 },
  },
  {
    icon: <SiMysql className="text-xl" />,
    label: "My SQL",
    bg: "bg-white",
    direction: { x: 100, y: 100 },
  },
  {
    icon: <SiGithub className="text-xl" />,
    label: "Git, GitHub",
    bg: "bg-purple300 text-white",
    direction: { x: 0, y: -150 },
  },
];

function SkillItem({ skill, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      controls.start({
        opacity: 0,
        x: skill.direction.x,
        y: skill.direction.y,
      });
    }
  }, [inView, controls, skill.direction]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: skill.direction.x, y: skill.direction.y }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className={`${skill.bg} text-center px-2 py-2 rounded-md text-black font-bold text-medium flex flex-col items-center`}
    >
      {skill.icon}
      <span>{skill.label}</span>
    </motion.p>
  );
}

function Skills() {
  const letters = "Skills".split("");
  const titleControls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [inView, titleControls]);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    }),
  };

  return (
    <section id="skills" className="py-16 px-4 z-10">
      <div ref={ref} className="max-w-3xl mx-auto text-white mb-10 text-center">
        {letters.map((letter, index) => (
          <motion.span
            key={`letter-${index}`}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate={titleControls}
            className="inline-block text-4xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-500 to-pink-500 
              dark:from-purple-300 dark:to-pink-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 md:px-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

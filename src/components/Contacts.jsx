import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import InfiniteScroll from "./Effect/InfiniteScroll_temp";

function Contact() {
  const title = "Contact";
  const letters = title.split("");

  const items = [
    {
      content: (
        <a
          href="https://github.com/TrThinh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400"
        >
          <FaGithub /> GitHub
        </a>
      ),
    },
    {
      content: (
        <a
          href="https://www.linkedin.com/in/th%E1%BB%8Bnh-%C4%91%E1%BB%97-31866b220/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400"
        >
          <FaLinkedin /> LinkedIn
        </a>
      ),
    },
    {
      content: (
        <a
          href="mailto:trongthinh2602@gmail.com"
          className="flex items-center gap-2 hover:text-purple-400"
        >
          <FaEnvelope /> Gmail
        </a>
      ),
    },
    {
      content: (
        <a
          href="tel:+84335925074"
          className="flex items-center gap-2 hover:text-purple-400"
        >
          <FaPhone/> 033 5925 074
        </a>
      ),
    },
  ];
  

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
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:mb-2 mb-32"
    >
      <div className="max-w-3xl mx-auto text-center text-purple-300">
        <h2 className="text-3xl font-bold mb-4 flex justify-center">
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
        <p className="mb-6">
          Feel free to reach out via email or connect with me on GitHub and
          LinkedIn!
        </p>

        <div style={{ height: "500px", position: "relative" }}>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

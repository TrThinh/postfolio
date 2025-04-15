import React from "react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ text, className = "" }) => {
  const letters = text.split("");

  return (
    <h2 className={`text-3xl font-bold mb-4 text-center flex justify-center ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
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
  );
};

export default AnimatedTitle;

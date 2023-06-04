import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, isBig, delay }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'linear',
        damping: 500,
        stiffness: 5,
      },
    },
  };

  if (isBig) {
    return (
      <motion.div className="flex overflow-hidden" variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span variants={child} className="mr-2 text-2xl font-bold text-gray-300" key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  } else {
    return (
      <motion.div className="flex overflow-hidden" variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span variants={child} className="mr-1  font-semibold text-gray-700 " key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }
};

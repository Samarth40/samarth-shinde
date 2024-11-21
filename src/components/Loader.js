import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTerminal, FaRocket } from 'react-icons/fa';

const Loader = () => {
  const loadingText = "</Samarth>";
  
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const terminalVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const codeLineVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative max-w-4xl w-full mx-4">
        {/* Terminal Window */}
        <motion.div
          variants={terminalVariants}
          className="bg-surface border border-primary/20 rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-surface border-b border-primary/20 p-3 flex items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-primary/60 font-mono">
              samarth-terminal ~ initializing-portfolio
            </div>
          </div>

          {/* Terminal Content */}
          <motion.div
            variants={containerVariants}
            className="p-6 font-mono text-lg sm:text-xl"
          >
            <motion.div
              variants={codeLineVariants}
              className="flex items-center gap-2 text-yellow-400 mb-4"
            >
              <FaRocket className="text-primary" />
              <span>loading no-code tools...</span>
            </motion.div>

            <motion.div
              variants={codeLineVariants}
              className="flex items-center gap-2 text-green-400 mb-4"
            >
              <FaTerminal className="text-primary" />
              <span>initializing community projects...</span>
            </motion.div>

            <div className="flex items-center gap-2 text-primary mt-8">
              <span className="text-2xl sm:text-3xl">{loadingText}</span>
              <motion.div
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  times: [0, 0.2, 0.8, 1],
                  ease: "linear",
                }}
                className="w-3 h-8 bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default Loader;

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaCog } from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Work
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Projects Under Construction
            </p>
          </motion.div>

          {/* Creative Coming Soon Display */}
          <div className="relative max-w-3xl mx-auto">
            {/* Code Editor Style Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface/30 backdrop-blur-sm border border-primary/10 rounded-lg overflow-hidden"
            >
              {/* Editor Top Bar */}
              <div className="flex items-center gap-2 bg-background/50 px-4 py-3 border-b border-primary/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-secondary text-sm font-mono">projects.js</span>
              </div>

              {/* Code Content */}
              <div className="p-8">
                <div className="font-mono text-lg space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary"
                  >
                    <span className="text-primary">const</span> projects = {'{'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pl-8"
                  >
                    status: <span className="text-primary">'in_development'</span>,
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pl-8"
                  >
                    progress: <span className="text-primary">'loading...'</span>,
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pl-8"
                  >
                    eta: <span className="text-primary">'coming_soon'</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {'};'}
                  </motion.div>
                </div>

                {/* Loading Animation */}
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaCog className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaTools className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaCode className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-secondary/80">
                Exciting projects are in development! Check back soon to see what I'm building.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

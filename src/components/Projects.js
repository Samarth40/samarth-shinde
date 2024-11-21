import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaCog, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a project I built using React and Node.js.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/user/project1',
      demo: 'https://project1-demo.com',
    },
    {
      title: 'Project 2',
      description: 'This is another project I built using React and Node.js.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/user/project2',
      demo: 'https://project2-demo.com',
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative py-12 md:py-20 bg-background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-12"
        >
          Some Things I've Built
        </motion.h2>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative grid md:grid-cols-12 gap-4 md:gap-8 items-center"
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative group">
                  <div className="relative z-10 rounded-lg overflow-hidden transition-transform duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-lg transition-transform duration-300 transform group-hover:translate-x-4 group-hover:-translate-y-4" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{project.title}</h3>
                  <p className="text-sm md:text-base text-text">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs md:text-sm px-3 py-1 rounded-full bg-surface text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text hover:text-primary transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

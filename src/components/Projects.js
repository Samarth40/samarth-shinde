import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
    {
      title: "Vanaraksha",
      description: "An innovative platform combining AI and blockchain for digital tree adoption and environmental conservation. Features AI-powered tree information using Mistral-7B, NFT certificates on Aptos blockchain, and real-time impact tracking.",
      technologies: ["React.js", "TailwindCSS", "Firebase", "Aptos Labs", "Mistral-7B", "Firestore", "Cloudinary"],
      githubLink: "https://lnkd.in/dEh3UbsP",
      liveLink: "https://lnkd.in/dHUfC4iU",
      image: "/images/vanaraksha.png"
    },
    {
      title: "TrendForecaster",
      description: "A modern AI-powered trend forecasting platform that helps businesses stay ahead of market trends with real-time analysis and predictions. Features include AI-powered news analysis, trend detection, and an intelligent chatbot assistant.",
      technologies: ["React.js", "TailwindCSS", "Firebase Auth", "Firestore", "Shadcn/ui", "Framer Motion", "Vercel"],
      githubLink: "https://github.com/Samarth40/trendforecaster",
      liveLink: "https://trendforecaster.vercel.app/",
      image: "/images/trend-forecaster.png"
    },
    {
      title: "Sam_AI-Lucid Dream",
      description: "An innovative AI-powered dream journal and interpretation platform. Leveraging advanced AI technology to help users understand and explore their dreams through natural language processing and personalized insights.",
      technologies: ["OpenAI", "React", "TailwindCSS", "Hugging Face API", "Unsplash API"],
      githubLink: "https://github.com/Samarth40/Sam_AI-LucidDreams",
      liveLink: "https://sam-ai-lucid-dreams.vercel.app/",
      image: "/images/sam-ai-project.png"
    },
    {
      title: "Mood Lens",
      description: "A cutting-edge mood detection application that uses AI to analyze facial expressions and provide insights into emotional states.",
      technologies: ["OpenAI", "React", "TailwindCSS", "TMDB API","FACE API"],
      githubLink: "https://github.com/Samarth40/mood-to-movie",
      liveLink: "https://mood-to-movie.vercel.app/",
      image: "/images/mood-lens-project.png"
    },
    // More projects can be added here
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative flex flex-col justify-center py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Showcasing my latest work in AI and web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                layoutId={project.title}
                onClick={() => setSelectedId(project.title)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-surface/30 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex gap-3">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project Info */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-secondary/80 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal View */}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setSelectedId(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  className="bg-surface/95 backdrop-blur-lg rounded-xl p-6 w-full max-w-2xl relative z-10"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 50 }}
                >
                  {projects.map((project) => (
                    project.title === selectedId && (
                      <div key={project.title}>
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                          <button
                            onClick={() => setSelectedId(null)}
                            className="text-secondary hover:text-primary"
                          >
                            ✕
                          </button>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-secondary/80 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                          >
                            <FaGithub className="w-5 h-5" />
                            <span>View Code</span>
                          </a>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                          >
                            <FaExternalLinkAlt className="w-5 h-5" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    )
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

const Projects = () => {
  const projects = [
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
        <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-1 gap-8 px-4 sm:px-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-surface/30 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-6 p-4">
                  {/* Project Image */}
                  <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <div className="aspect-[16/9] w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-secondary/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

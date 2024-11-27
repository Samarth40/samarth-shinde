import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeBoxLine, RiTeamLine, RiLayoutLine, RiPaletteLine } from 'react-icons/ri';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: "No-Code Development",
      icon: <RiCodeBoxLine className="text-2xl" />,
      description: "Building powerful solutions without traditional coding",
      keywords: ["Automation", "Integration", "Workflow Design"]
    },
    {
      title: "Soft Skills",
      icon: <RiTeamLine className="text-2xl" />,
      description: "Communication, leadership, and emotional intelligence",
      keywords: ["Leadership", "Communication", "Teamwork"]
    },
    {
      title: "Frontend Development",
      icon: <RiLayoutLine className="text-2xl" />,
      description: "Building responsive and interactive web applications",
      keywords: ["React.js", "Tailwind CSS", "Modern UI/UX"]
    },
    {
      title: "UI/UX Design",
      icon: <RiPaletteLine className="text-2xl" />,
      description: "Creating intuitive and engaging user experiences",
      keywords: ["Design Systems", "User-Centric", "Visual Design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-col justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Transforming ideas into reality through modern solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-between sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card sm:flex-1 sm:min-w-[calc(50%-1rem)]"
            >
              <div className="p-4 sm:p-6 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="skill-icon-wrapper flex-shrink-0">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-[var(--text)] mb-3 text-sm sm:text-base">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keywords.map((keyword, kidx) => (
                        <span
                          key={kidx}
                          className="px-2 py-1 text-xs sm:text-sm bg-background/50 text-primary rounded-full border border-primary/20"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--primary)] opacity-[0.015] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[var(--primary)] opacity-[0.015] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;

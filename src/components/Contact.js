import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-primary font-mono text-2xl mb-4">Get In Touch</h2>
          <h3 className="text-6xl md:text-7xl font-bold mb-8">Let's Connect</h3>
          <p className="text-xl md:text-2xl text-secondary/80 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-xl
                           focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-xl
                           focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Your Email"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-xl
                           focus:border-primary outline-none transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-background font-bold text-xl px-8 py-4 rounded-lg
                         hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaPaperPlane className="text-xl" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="space-y-12">
              {/* Email */}
              <div>
                <h4 className="text-2xl font-bold mb-4">Email Me At</h4>
                <a
                  href="mailto:samarthshinde40@gmail.com"
                  className="inline-flex items-center gap-3 text-xl text-primary hover:text-primary/80 transition-colors"
                >
                  <HiMail className="text-2xl" />
                  <span>samarthshinde40@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Follow Me</h4>
                <div className="flex justify-center lg:justify-start gap-6">
                  {[
                    { icon: FaGithub, href: 'https://github.com/Samarth40' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/samarth-shinde-791072271/' },
                    { icon: FaTwitter, href: 'https://twitter.com/SamarthShinde40' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transform hover:-translate-y-1 transition-all"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={32} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-surface/30 backdrop-blur-sm border border-primary/10 rounded-lg p-8">
                <h4 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h4>
                <p className="text-xl text-secondary/80">
                  Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

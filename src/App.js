import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import RightSidebar from './components/RightSidebar';
import './App.css';
import './index.css';
import './styles/globals.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="relative w-full min-h-screen bg-background text-text">
          <Navbar />
          <RightSidebar />
          <main className="relative w-full overflow-x-hidden">
            <div className="flex flex-col items-center w-full">
              <div className="w-full">
                <Header key="header" />
                <About key="about" />
                <Projects key="projects" />
                <Contact key="contact" />
              </div>
            </div>
          </main>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;

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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="relative min-h-screen bg-background text-text overflow-x-hidden">
          <Navbar />
          <RightSidebar />
          <main className="relative w-full">
            <Header key="header" />
            <About key="about" />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;

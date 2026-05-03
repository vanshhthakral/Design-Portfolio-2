import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ theme }) => {
  const [isGrayscale, setIsGrayscale] = useState(true);
  const heroImage = theme === 'dark' ? '/prateek-2.png' : '/prateek-light.PNG';

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-6 uppercase dark:text-white">
              Crafting bold Narratives <br />
              <span className="text-blue-500">through</span> <br />
              Fashion &<br />
              Illustration.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 dark:text-blue-200/70 mb-10 max-w-lg font-light leading-relaxed"
          >
            I’m Prateek Mittal, a Fashion Designer specializing in couture, streetwear, and cultural heritage, blending traditional craftsmanship with modern silhouettes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.png" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white dark:bg-blue-900/20 text-black dark:text-blue-100 border border-gray-200 dark:border-blue-500/30 px-8 py-4 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-blue-900/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Resume
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="order-1 md:order-2 relative flex justify-center items-center perspective-1000"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-[3/4] pointer-events-none">
            <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-100 dark:bg-blue-900/10 relative group border border-blue-500/10 dark:border-blue-500/20 shadow-2xl pointer-events-auto">
              <motion.img
                src={heroImage}
                alt="Portrait"
                onClick={() => setIsGrayscale(!isGrayscale)}
                style={{ transform: "translateZ(75px)" }}
                className={`w-full h-full object-cover object-center scale-105 transition-all duration-1000 cursor-pointer ${isGrayscale ? 'grayscale' : 'grayscale-0'
                  }`}
              />
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-blue-400 font-medium">
              Fashion Designer & Illustrator
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

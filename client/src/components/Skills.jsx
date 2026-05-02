import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Design & Craft",
    items: [
      { name: "Couture Draping", level: 90 },
      { name: "Pattern Making", level: 85 },
      { name: "Fashion Illustration", level: 95 },


    ]
  },
  {
    category: "Digital Design",
    items: [
      { name: "Adobe Illustrator", level: 95 },
      { name: "Adobe Photoshop", level: 90 },
      { name: "Behance", level: 80 },
      { name: "InDesign", level: 85 }
    ]
  },
  {
    category: "Research & Strategy",
    items: [
      { name: "Trend Forecasting", level: 85 },
      { name: "Brand Strategy", level: 80 },
      { name: "Market Research", level: 90 },
      { name: "Consumer Behavior", level: 75 }
    ]
  },

];

const marqueeItems = [
  "Couture", "Streetwear", "Heritage", "CLO 3D", "Illustrator", "Photoshop", "Handloom", "Draping", "Sustainablity", "Bastar Roots", "Golden Hour"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Infinite Marquee */}
      <div className="absolute top-10 w-full overflow-hidden whitespace-nowrap flex py-4 opacity-5 pointer-events-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex space-x-12 px-6"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-8xl font-display font-bold uppercase">{item}</span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-center">
            Arsenal & Skills.
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="transition-colors duration-300 relative group"
            >

              <h3 className="text-2xl font-display font-bold mb-6 tracking-wide relative z-10">{category.category}</h3>

              <div className="space-y-6 relative z-10">
                {category.items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className="h-full bg-white rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

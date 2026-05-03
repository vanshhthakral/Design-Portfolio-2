import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '06+', label: 'Software Tools' },
  { value: '50+', label: 'Illustrations' },
  { value: '05+', label: 'Collections' },
  { value: '100+', label: 'Design Sketches' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase text-gray-100 absolute -top-4 md:-top-10 left-0 md:left-10 z-0 select-none">
            About Me
          </h2>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase relative z-10">
            About Me.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 relative z-10">

          {/* Text Content */}
          <div className="md:col-span-7 space-y-8 text-lg text-gray-600 font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A fashion design student driven by concept and creativity, blending cultural inspiration with modern aesthetics. I view fashion as a medium to express ideas, stories, and identity through thoughtful design and detail. My work focuses on building strong visual narratives, translating research and inspiration into wearable forms that are both expressive and relevant. I enjoy experimenting with silhouettes, textures, and concepts, constantly pushing my creative boundaries while maintaining a clear design direction. With a detail-oriented and evolving approach, I aim to create fashion that connects meaning with impact.Bold ideas. Sharper design
            </motion.p>




          </div>

          {/* Stats Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 relative">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col justify-center transition-all duration-300 group"
              >
                <h3 className="text-4xl font-display font-bold text-black mb-2 group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

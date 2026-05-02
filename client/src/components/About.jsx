import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '05+', label: 'Collections' },
  { value: '10+', label: 'Textiles Mastered' },
  { value: '02+', label: 'Design Internships' },
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
              My journey in design started with a profound curiosity for how textiles and silhouettes can tell a story. Over time, that curiosity evolved into a deep-seated passion for crafting garments that bridge the gap between traditional craftsmanship and modern avant-garde aesthetics.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With a solid foundation in <strong className="font-semibold text-black">Fashion Design and Research</strong>, I approach every collection with a narrative-driven perspective. I believe that good design goes beyond aesthetics—it's about heritage, sustainability, and the emotional connection between the wearer and the garment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Recently, I've expanded my expertise into <strong className="font-semibold text-black">Digital Fashion and 3D Prototyping</strong>, enabling me to not only conceptualize designs but also visualize and refine them with precision before they reach the atelier. This fusion of hand-crafted tradition and digital innovation defines my creative process.
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

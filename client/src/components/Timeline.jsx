import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: "experience",
    title: "Fashion Design Intern",
    organization: "Luxury Couture House",
    date: "Jun 2024 - Present",
    description: "Assisting in the development of haute couture collections. Responsible for textile research, mood board creation, and assisting in draping and pattern making.",
    icon: <Briefcase size={20} />
  },
  {
    id: 2,
    type: "freelance",
    title: "Freelance Fashion Illustrator",
    organization: "Self-Employed",
    date: "Jan 2023 - May 2024",
    description: "Collaborated with independent designers to create digital fashion illustrations and technical flats using Adobe Creative Suite and CLO 3D.",
    icon: <Briefcase size={20} />
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Design (B.Des) in Fashion",
    organization: "National Institute of Fashion Technology",
    date: "2021 - 2025",
    description: "Specializing in Couture and Sustainable Fashion. Focused on indigenous crafts and modern garment construction techniques.",
    icon: <GraduationCap size={20} />
  },
  {
    id: 4,
    type: "achievement",
    title: "Best Creative Collection Award",
    organization: "Design Showcase 2024",
    date: "Oct 2024",
    description: "Recognized for the 'Bastar Roots' collection, celebrating tribal craftsmanship and sustainable textile practices.",
    icon: <Award size={20} />
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">The Journey.</h2>
          <p className="text-gray-500 max-w-lg mx-auto">A timeline of my professional experience, education, and milestones.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon / Node */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transform -translate-x-1/2 -translate-y-2 z-10 shadow-lg border-4 border-white">
                {item.icon}
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <div className="bg-[#f5f5f5] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group">
                  <div className={`absolute top-6 w-4 h-4 bg-[#f5f5f5] transform rotate-45 hidden md:block ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                  
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full mb-4">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                  <h4 className="text-sm font-medium text-black mb-4">{item.organization}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

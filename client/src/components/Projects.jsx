import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Golden Hour",
    category: "Couture",
    tech: ["Hand Embroidery", "Petal Structure", "Silk", "Draping"],
    description: "Golden Hour is a couture-inspired collection capturing the warm glow of sunset through sunflower motifs, layered petal structures, and radiant golden hues. The designs blend fluid silhouettes with rich textures to express natural elegance, movement, and the timeless beauty of light.",
    image: "/portfolio1.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "The Captain Stays",
    category: "Conceptual",
    tech: ["Tailoring", "Corsetry", "Weathered Fabrics", "Leather"],
    description: "The Captain Stays is a pirate-inspired collection rooted in maritime adventure, blending rugged masculinity with vintage naval elegance. Structured silhouettes, corsetry details, and rich, weathered tones reflect power, rebellion, and the enduring spirit of the sea.",
    image: "/portfolio2.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "City in Motion",
    category: "Streetwear",
    tech: ["Digital Print", "Layering", "Technical Fabrics", "Oversized"],
    description: "City in Motion captures the fast-paced rhythm of urban life, inspired by movement, speed, and blurred cityscapes. Dynamic silhouettes, layered streetwear, and streak-like graphics reflect energy, transition, and the constant flow of modern streets.",
    image: "/portfolio3.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "MIN Y/01",
    category: "Streetwear",
    tech: ["Denim", "Pop Art", "Utilitarian", "Appliqué"],
    description: "MIN Y/01 is a playful streetwear collection inspired by the iconic Minions, blending humor with bold urban fashion. Vibrant yellows, denim blues, and utilitarian silhouettes reflect energy, mischief, and a fun, youthful take on contemporary style.",
    image: "/portfolio4.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Bastar Roots",
    category: "Heritage",
    tech: ["Handloom", "Indigenous Patterns", "Natural Dyes", "Tribal Art"],
    description: "Bastar Roots is a culturally rich collection inspired by the tribal heritage of Bastar, celebrating traditional motifs, craftsmanship, and deep connection to nature. Earthy tones, handloom textures, and bold indigenous patterns reflect authenticity, strength, and the timeless spirit of Chhattisgarh’s tribal identity.",
    image: "/portfolio5.png",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Couture", "Streetwear", "Heritage", "Conceptual"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#f5f5f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Featured Work.</h2>
            <p className="text-gray-500 max-w-md">A selection of my recent collections focusing on textile innovation, structural silhouettes, and cultural narratives.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black border border-gray-200 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  filteredProjects.length === 5 && idx === 4 ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden bg-gray-50 ${
                  filteredProjects.length === 5 && idx === 4 ? 'aspect-[21/9]' : 'aspect-video'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-gray-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 p-2 rounded-full backdrop-blur-md transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="relative aspect-[21/9] md:aspect-[21/9] w-full shrink-0 bg-gray-50">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>
              
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">{selectedProject.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {selectedProject.description}
                  {/* Expanded description can go here if provided in data */}
                </p>
                
                <div className="flex gap-4">
                  <a href={selectedProject.liveUrl} className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={selectedProject.githubUrl} className="flex items-center gap-2 border border-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

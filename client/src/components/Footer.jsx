import React from 'react';
import { ArrowUp, Linkedin, Instagram, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/visitor`);
        const data = await response.json();
        if (data.success) setVisitorCount(data.count);
      } catch (err) {
        console.error('Failed to fetch visitor count:', err);
      }
    };
    fetchVisitorCount();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-gray-400 py-12 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/Asset 1.png" alt="Logo" className="h-10 w-auto invert transition-transform duration-300 group-hover:scale-110" />

          </a>

          <div className="flex flex-col items-center md:items-end gap-6">
            <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-6">
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/prateekmittal11" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/prateekmittaldesign?igsh=MXgxbDE0OTZ1cWllMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.behance.net/prateekmittaldesign" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300" title="Behance">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 10.455h-4.887a.406.406 0 0 0-.406.406v.812c0 .224.182.406.406.406H22a.406.406 0 0 0 .406-.406v-.812a.406.406 0 0 0-.406-.406zM7.058 7H0v12.353h7.62c2.164 0 3.738-.707 4.195-2.73.18-.8.157-1.503-.067-2.138a2.637 2.637 0 0 0-1.638-1.776c.808-.247 1.393-.81 1.573-1.8.18-.99-.045-1.913-.854-2.857C10.02 7.022 8.358 7 7.058 7zm.224 5.176H2.603V9.117H7.17c1.033 0 1.616.427 1.616 1.058 0 .63-.516.979-1.503.979v.022zm.382 4.41H2.603V13.84h4.782c1.235 0 1.886.472 1.886 1.146 0 .899-.876 1.416-1.607 1.416v-.023zM18.81 7c-3.143 0-5.456 2.315-5.456 5.865s2.313 5.865 5.59 5.865c2.448 0 4.2-.989 5.056-2.857h-2.583c-.45.742-1.348 1.101-2.223 1.101-1.573 0-2.673-1.011-2.785-2.427h7.591V13.01C24 9.184 21.932 7 18.81 7zm-2.652 4.494c.158-1.393 1.123-2.314 2.56-2.314 1.416 0 2.336.876 2.538 2.314h-5.098z" /></svg>
                </a>
                <a href="tel:9098499823" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                  <Phone size={20} />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 pt-8 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Prateek. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 group hover:border-white/30 transition-all duration-300">
            <MapPin size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-gray-500 group-hover:text-white transition-colors">Dehradun, India</span>          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

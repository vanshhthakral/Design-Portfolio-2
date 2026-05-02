import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send, Loader2, CheckCircle, XCircle, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvzlzovy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ show: true, message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setToast({ show: true, message: 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Contact error:', error);
      setToast({ show: true, message: 'Network error. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#111111] text-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Text and Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 leading-none">
              Let's Build <br/><span className="text-gray-500">Something</span> <br/>Amazing.
            </h2>
            <p className="text-gray-400 text-lg max-w-md mb-12">
              Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. Let's create something impactful together.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/prateekmittal11" },
                { icon: <Mail size={24} />, href: "mailto:prateekmittal.design@gmail.com" },
                { icon: <Instagram size={24} />, href: "https://www.instagram.com/prateekmittaldesign?igsh=MXgxbDE0OTZ1cWllMQ%3D%3D&utm_source=qr" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 10.455h-4.887a.406.406 0 0 0-.406.406v.812c0 .224.182.406.406.406H22a.406.406 0 0 0 .406-.406v-.812a.406.406 0 0 0-.406-.406zM7.058 7H0v12.353h7.62c2.164 0 3.738-.707 4.195-2.73.18-.8.157-1.503-.067-2.138a2.637 2.637 0 0 0-1.638-1.776c.808-.247 1.393-.81 1.573-1.8.18-.99-.045-1.913-.854-2.857C10.02 7.022 8.358 7 7.058 7zm.224 5.176H2.603V9.117H7.17c1.033 0 1.616.427 1.616 1.058 0 .63-.516.979-1.503.979v.022zm.382 4.41H2.603V13.84h4.782c1.235 0 1.886.472 1.886 1.146 0 .899-.876 1.416-1.607 1.416v-.023zM18.81 7c-3.143 0-5.456 2.315-5.456 5.865s2.313 5.865 5.59 5.865c2.448 0 4.2-.989 5.056-2.857h-2.583c-.45.742-1.348 1.101-2.223 1.101-1.573 0-2.673-1.011-2.785-2.427h7.591V13.01C24 9.184 21.932 7 18.81 7zm-2.652 4.494c.158-1.393 1.123-2.314 2.56-2.314 1.416 0 2.336.876 2.538 2.314h-5.098z"/></svg>, href: "https://www.behance.net/prateekmittaldesign" },
                { icon: <Phone size={24} />, href: "tel:9098499823" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:-translate-y-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 font-medium ${
              toast.type === 'success' ? 'bg-white text-black' : 'bg-red-500 text-white'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

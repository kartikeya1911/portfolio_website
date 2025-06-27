import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Rocket } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: Code, delay: 0, x: 100, y: 50 },
    { icon: Rocket, delay: 2, x: -80, y: 80 },
    { icon: Sparkles, delay: 4, x: 120, y: -60 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.2),rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, element.x, 0],
            y: [0, element.y, 0],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={40} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Image with Advanced Styling */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center overflow-hidden">
                  <img 
                    src="/src/IMAGE.jpg" 
                    alt="Kartikeya Jain" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-black hidden items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    KJ
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kartikeya Jain
              </span>
            </motion.h1>
            
            <div className="text-3xl md:text-4xl text-gray-300 mb-8 h-20 flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    '🚀 Full Stack Developer',
                    '💻 MERN Stack Expert',
                    '🎯 Problem Solver',
                    '⚡ Tech Innovator',
                    '🌟 Code Architect'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Crafting digital experiences that blend creativity with cutting-edge technology. 
              I transform complex ideas into elegant, scalable solutions that make a difference.
            </motion.p>
            
            {/* Social Links with Enhanced Styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-6 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/kartikeya1911", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kartikeyajain1911/", color: "from-blue-600 to-blue-800" },
                { icon: Mail, href: "mailto:jainkartikeya9@gmail.com", color: "from-purple-600 to-pink-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gradient-to-r ${social.color} rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group`}
                >
                  <social.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="/KARTIKEYA_JAIN_RESUME.pdf"
                download="Kartikeya_Jain_Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
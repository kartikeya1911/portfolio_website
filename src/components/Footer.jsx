import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-purple-900/20 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative inline-block mb-4"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kartikeya Jain
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
            
            <p className="text-gray-400 text-lg mb-6">
              Full Stack Developer & Tech Innovator
            </p>
            
            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center text-gray-400 text-sm mb-4 space-x-2"
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Code className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span>powered by</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Coffee className="w-4 h-4 text-yellow-600" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, color: '#a855f7' }}
                  className="px-2 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-gray-800 pt-6"
          >
            <p className="text-xs text-gray-500">
              © 2024 Kartikeya Jain. All rights reserved. | Designed & Developed with passion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
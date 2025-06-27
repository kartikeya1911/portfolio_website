import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Heart, Target, Zap, Star } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code className="w-7 h-7" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Innovation",
      description: "Always exploring cutting-edge technologies and revolutionary methodologies",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Passion",
      description: "Genuine love for problem-solving and creating impactful digital solutions",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Results",
      description: "Focused on delivering measurable business outcomes and user satisfaction",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Star className="w-6 h-6" /> },
    { number: "Fresher", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "15+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-2xl"
            >
              <div className="text-purple-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Full Stack Developer & 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Tech Visionary</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full stack developer with deep expertise in the MERN stack and modern web technologies. 
                My journey began with curiosity about how digital experiences come to life, and has evolved into a 
                relentless pursuit of creating innovative solutions that make a real impact.
              </p>
              <p>
                I believe in the power of clean, maintainable code and staying at the forefront of technological advancement. 
                My approach combines technical excellence with creative problem-solving to build applications that not only 
                look stunning but also deliver exceptional user experiences.
              </p>
              <p>
                When I'm not crafting code, you'll find me exploring emerging technologies, contributing to open-source 
                projects, mentoring fellow developers, and sharing insights with the global tech community.
              </p>
            </div>
            
            <motion.a
              href="/KARTIKEYA_JAIN_RESUME.pdf"
              download="Kartikeya_Jain_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 mt-8"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-purple-600/20 to-pink-600/20"></div>
                <div className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl hover:border-purple-500/30 transition-all duration-300">
                  <div className={`text-white mb-4 p-3 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
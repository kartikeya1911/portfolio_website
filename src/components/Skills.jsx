import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Palette, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        //{ name: "HTML", level: 85, color: "from-green-400 to-green-800" },
        { name: "React", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 95, color: "from-blue-500 to-indigo-600" },
        { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-teal-600" },
        //{ name: "TypeScript", level: 65, color: "from-yellow-400 to-orange-500" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 88, color: "from-gray-500 to-gray-700" },
        { name: "JavaScript", level: 80, color: "from-blue-500 to-yellow-500" },
        //{ name: "REST APIs", level: 92, color: "from-purple-400 to-purple-600" },
        //{ name: "GraphQL", level: 75, color: "from-pink-400 to-purple-500" }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "MongoDB", level: 90, color: "from-green-500 to-green-700" },
        { name: "MySQL", level: 85, color: "from-blue-600 to-blue-800" },
        //{ name: "Redis", level: 78, color: "from-red-500 to-red-700" },
        { name: "Firebase", level: 82, color: "from-yellow-500 to-orange-600" },
        //{ name: "Prisma", level: 80, color: "from-indigo-500 to-purple-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Git", level: 95, color: "from-orange-500 to-red-600" },
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 75, color: "from-yellow-600 to-orange-600" },
        //{ name: "Jest", level: 85, color: "from-red-500 to-pink-600" },
        //{ name: "Figma", level: 70, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),rgba(255,255,255,0))]"></div>
      
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
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Mastering the technologies that power modern web development and digital innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 group-hover/skill:text-purple-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: [-100, 200] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1.5
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
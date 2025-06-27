import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      stats: { stars: 124, views: "2.3k" }
    },
    {
      title: "AI Task Management",
      description: "Intelligent task management application with AI-powered suggestions, real-time collaboration, drag-and-drop functionality, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "OpenAI", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      stats: { stars: 89, views: "1.8k" }
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, detailed analytics, and climate change visualization tools.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { stars: 67, views: "1.2k" }
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media management with data visualization, content scheduling, and performance tracking across platforms.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Twitter API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { stars: 156, views: "3.1k" }
    },
    {
      title: "Modern Blog Platform",
      description: "Next-generation blogging platform with markdown support, SEO optimization, content management system, and collaborative editing features.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "MDX"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { stars: 203, views: "4.2k" }
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, market analysis, and DeFi integration capabilities.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Redux", "CoinGecko API", "Firebase", "Web3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { stars: 178, views: "2.9k" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),rgba(255,255,255,0))]"></div>
      
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Showcasing innovative solutions that blend cutting-edge technology with exceptional user experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    FEATURED
                  </div>
                </div>
              )}

              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-white text-xs">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span className="text-white text-xs">{project.stats.views}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
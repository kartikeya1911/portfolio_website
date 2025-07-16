import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Deloitte Technology Job Simulation ",
      platform: "Deloitte Australia",
      issuer: "Deloitte",
      date: "July 2025",
      image: "./certificates/deloitte job simulation.png",
      verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_pFBaWiPSDMgmDwuq5_1752409970971_completion_certificate.pdf",
      featured: true,
      skills: ["Python", "File System"]
    },
    {
      title: "AWS Solutions Architect",
      platform: "Amazon Web Services",
      issuer: "AWS",
      date: "January 2024",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
      verificationUrl: "https://aws.amazon.com/verification",
      featured: true,
      skills: ["Cloud Architecture", "EC2", "S3", "Lambda"]
    },
    {
      title: "React Developer Certification",
      platform: "Udemy",
      issuer: "Jonas Schmedtmann",
      date: "December 2023",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      verificationUrl: "https://udemy.com/certificate",
      skills: ["React Hooks", "Redux", "Context API", "Testing"]
    },
    {
      title: "Node.js Application Development",
      platform: "Microsoft Learn",
      issuer: "Microsoft",
      date: "November 2023",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      verificationUrl: "https://learn.microsoft.com/certificates",
      skills: ["Express.js", "MongoDB", "Authentication", "Deployment"]
    },
    {
      title: "Google Cloud Platform Fundamentals",
      platform: "Google Cloud",
      issuer: "Google",
      date: "October 2023",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      verificationUrl: "https://cloud.google.com/certification",
      skills: ["GCP Services", "Kubernetes", "BigQuery", "Cloud Functions"]
    },
    {
      title: "MongoDB Developer Certification",
      platform: "MongoDB University",
      issuer: "MongoDB",
      date: "September 2023",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      verificationUrl: "https://university.mongodb.com/certification",
      skills: ["NoSQL Design", "Aggregation", "Indexing", "Sharding"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(168,85,247,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),rgba(255,255,255,0))]"></div>
      
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Professional certifications that validate expertise and commitment to continuous learning in cutting-edge technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative"
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>FEATURED</span>
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Verification Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs font-medium">{cert.date}</span>
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-1">
                    {cert.platform}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Issued by {cert.issuer}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Verify Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full justify-center"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
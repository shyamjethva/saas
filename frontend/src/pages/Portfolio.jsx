import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Enterprise CRM Platform',
      category: 'Software',
      description: 'Complete customer relationship management system with AI-powered analytics and automated workflows for medium to large enterprises.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Express', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      client: 'Global Tech Solutions',
      year: '2024',
      results: '40% increase in sales productivity',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'E-Commerce Marketplace',
      category: 'E-commerce',
      description: 'Multi-vendor marketplace platform with advanced inventory management, payment gateway integration, and real-time analytics dashboard.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe', 'TypeScript', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=250&fit=crop',
      client: 'Retail Innovation Ltd',
      year: '2024',
      results: '2.5x revenue growth in 6 months',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI/ML',
      description: 'Intelligent business intelligence platform with predictive analytics, automated reporting, and machine learning insights for data-driven decisions.',
      technologies: ['Python', 'TensorFlow', 'React', 'Docker', 'Kubernetes', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      client: 'Data Insights Corp',
      year: '2023',
      results: '65% faster decision making',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Mobile Banking Application',
      category: 'FinTech',
      description: 'Secure mobile banking solution with biometric authentication, real-time transactions, and personalized financial insights for retail customers.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Twilio', 'JWT', 'Biometrics'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      client: 'FinanceFirst Bank',
      year: '2023',
      results: '150K+ active users',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      category: 'EdTech',
      description: 'Interactive online learning management system with course creation tools, student progress tracking, and virtual classroom capabilities.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Redis', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      client: 'EduSmart Academy',
      year: '2023',
      results: '85% student satisfaction rate',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'Healthcare Management System',
      category: 'HealthTech',
      description: 'Comprehensive hospital management solution with patient records, appointment scheduling, billing, and telemedicine capabilities.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS', 'HIPAA', 'Video SDK'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
      client: 'MediCare Hospitals',
      year: '2022',
      results: '30% operational efficiency improvement',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: 'Supply Chain Optimization Platform',
      category: 'Logistics',
      description: 'Advanced logistics and supply chain management system with real-time tracking, predictive analytics, and automated inventory optimization.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Apache Kafka', 'React', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1560581789-70b7c7b6b4cb?w=400&h=250&fit=crop',
      client: 'Global Logistics Inc',
      year: '2024',
      results: '45% reduction in delivery time',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 8,
      title: 'Cybersecurity Monitoring Platform',
      category: 'Security',
      description: 'Enterprise-grade security operations center with threat detection, incident response, and compliance monitoring for critical infrastructure.',
      technologies: ['Go', 'Elasticsearch', 'Kibana', 'Docker', 'Kubernetes', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1561069934-eee2259dd6d4?w=400&h=250&fit=crop',
      client: 'SecureNet Solutions',
      year: '2024',
      results: '99.9% threat detection accuracy',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Real Estate Management System',
      category: 'PropTech',
      description: 'Comprehensive property management platform with tenant screening, maintenance tracking, and automated lease management.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Mapbox', 'Stripe', 'SendGrid', 'Redis'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
      client: 'Prime Properties',
      year: '2023',
      results: '60% faster lease processing',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  // Client Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, Global Tech Solutions',
      content: 'The CRM platform transformed our sales process completely. We saw immediate improvements in productivity and customer engagement.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, Retail Innovation Ltd',
      content: 'Our marketplace platform exceeded all expectations. The team delivered on time with exceptional quality.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Director, Data Insights Corp',
      content: 'The AI analytics dashboard gave us insights we never thought possible. It truly drives our strategic decisions.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ];

  // Project Categories
  const categories = [
    {
      name: 'Software Development',
      count: 15,
      color: 'from-blue-500 to-cyan-500',
      icon: 'code'
    },
    {
      name: 'E-commerce',
      count: 8,
      color: 'from-green-500 to-emerald-500',
      icon: 'shopping_cart'
    },
    {
      name: 'AI & Machine Learning',
      count: 12,
      color: 'from-purple-500 to-pink-500',
      icon: 'auto_mode'
    },
    {
      name: 'FinTech',
      count: 6,
      color: 'from-orange-500 to-red-500',
      icon: 'account_balance'
    },
    {
      name: 'HealthTech',
      count: 5,
      color: 'from-indigo-500 to-purple-500',
      icon: 'medical_services'
    },
    {
      name: 'Logistics',
      count: 7,
      color: 'from-amber-500 to-orange-500',
      icon: 'local_shipping'
    }
  ];

  const filters = ['all', 'Software', 'E-commerce', 'AI/ML', 'FinTech', 'EdTech', 'HealthTech', 'Logistics', 'Security', 'PropTech'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { label: 'Projects Delivered', value: '50+', icon: 'folder' },
    { label: 'Happy Clients', value: '30+', icon: 'groups' },
    { label: 'Years Experience', value: '5+', icon: 'calendar_today' },
    { label: 'Success Rate', value: '98%', icon: 'trending_up' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20">
      {/* Header Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-purple-400">work</span>
              <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">PORTFOLIO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Showcasing innovative digital solutions that drive measurable business results across industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Project Categories</h2>
            <p className="text-xl text-slate-300">Specialized solutions across diverse industries</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300 text-center group backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-purple-400">{category.count}+</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-bold`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-slate-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>🏢 {project.client}</span>
                    <span>📅 {project.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="material-symbols-outlined text-green-400 text-sm">trending_up</span>
                    <span className="text-green-400 text-sm font-bold">{project.results}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-300">What our clients say about working with us</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                Next Project?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can transform your business vision into reality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined">chat</span>
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined">download</span>
                Download Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
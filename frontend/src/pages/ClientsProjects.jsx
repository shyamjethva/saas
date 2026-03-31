import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ClientsProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Enterprise CRM System for Manufacturing Giant',
      category: 'crm',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Managing 500+ dealers and 10,000+ customer interactions across multiple regions with fragmented systems.',
      strategy: 'Developed a custom CRM system with dealer management, inventory tracking, and automated reporting dashboard.',
      execution: 'Implemented multi-branch architecture with real-time synchronization and mobile-responsive interface.',
      results: [
        { metric: 'Dealer Productivity', improvement: '+150%' },
        { metric: 'Customer Response Time', improvement: '-75%' },
        { metric: 'Operational Costs', improvement: '-40%' },
        { metric: 'Revenue Growth', improvement: '+85%' }
      ],
      tags: ['CRM', 'Manufacturing', 'Automation', 'Multi-Branch', 'Real-time Analytics'],
      timeline: '12 months',
      teamSize: '15 specialists',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io']
    },
    {
      id: 2,
      title: 'School ERP Solution for Educational Institution',
      category: 'erp',
      client: 'National Public School System',
      industry: 'Education',
      challenge: 'Manual student record management, attendance tracking, and parent communication causing 60% inefficiency.',
      strategy: 'Built comprehensive school ERP with integrated modules for academics, finance, HR, and parent portal.',
      execution: 'Deployed cloud-based solution with role-based access and automated workflow management.',
      results: [
        { metric: 'Administrative Efficiency', improvement: '+200%' },
        { metric: 'Parent Engagement', improvement: '+300%' },
        { metric: 'Paper Usage', improvement: '-85%' },
        { metric: 'Student Performance Tracking', improvement: '+150%' }
      ],
      tags: ['ERP', 'Education', 'Digital Transformation', 'Cloud-based', 'Parent Portal'],
      timeline: '8 months',
      teamSize: '12 specialists',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'WebRTC']
    },
    {
      id: 3,
      title: 'E-commerce Marketing Campaign for Fashion Brand',
      category: 'marketing',
      client: 'StyleHub Fashion',
      industry: 'E-commerce',
      challenge: 'Low online visibility and poor conversion rates despite having quality products.',
      strategy: 'Created performance marketing funnel with targeted ads, retargeting campaigns, and CRM integration.',
      execution: 'Launched multi-channel campaign across Google, Meta, and influencer partnerships with real-time analytics.',
      results: [
        { metric: 'Lead Generation', improvement: '+300%' },
        { metric: 'Conversion Rate', improvement: '+120%' },
        { metric: 'ROI', improvement: '+450%' },
        { metric: 'Brand Awareness', improvement: '+200%' }
      ],
      tags: ['Marketing', 'E-commerce', 'Performance', 'Digital Marketing', 'SEO'],
      timeline: '6 months',
      teamSize: '8 specialists',
      technologies: ['Google Ads', 'Meta Ads', 'SEO Tools', 'Analytics', 'CRM Integration']
    },
    {
      id: 4,
      title: 'Enterprise Dashboard for Healthcare Network',
      category: 'dashboard',
      client: 'MediCare Health Systems',
      industry: 'Healthcare',
      challenge: 'Disparate data sources making it difficult to monitor patient outcomes and operational metrics.',
      strategy: 'Designed unified dashboard with real-time KPIs, predictive analytics, and automated reporting.',
      execution: 'Integrated with existing hospital systems and implemented role-based data visualization.',
      results: [
        { metric: 'Patient Care Quality', improvement: '+65%' },
        { metric: 'Operational Visibility', improvement: '+250%' },
        { metric: 'Decision Making Speed', improvement: '+180%' },
        { metric: 'Cost Reduction', improvement: '-35%' }
      ],
      tags: ['Dashboard', 'Healthcare', 'Analytics', 'HIPAA Compliant', 'Real-time'],
      timeline: '10 months',
      teamSize: '18 specialists',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'HIPAA Compliance']
    },
    {
      id: 5,
      title: 'AI-Powered Financial Analytics Platform',
      category: 'ai',
      client: 'FinTech Innovations Ltd',
      industry: 'Financial Services',
      challenge: 'Manual financial analysis and reporting consuming 40+ hours weekly with high error rates.',
      strategy: 'Developed AI-powered analytics platform with predictive modeling and automated financial reporting.',
      execution: 'Implemented machine learning algorithms with real-time data processing and compliance monitoring.',
      results: [
        { metric: 'Analysis Time', improvement: '-85%' },
        { metric: 'Accuracy Rate', improvement: '+95%' },
        { metric: 'Risk Detection', improvement: '+300%' },
        { metric: 'Compliance Efficiency', improvement: '+200%' }
      ],
      tags: ['AI', 'Financial Services', 'Machine Learning', 'Predictive Analytics', 'Compliance'],
      timeline: '14 months',
      teamSize: '22 specialists',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Compliance Frameworks']
    },
    {
      id: 6,
      title: 'Supply Chain Optimization for Retail Giant',
      category: 'logistics',
      client: 'Global Retail Corporation',
      industry: 'Retail',
      challenge: 'Inefficient inventory management and supply chain operations causing 30% stockouts.',
      strategy: 'Built intelligent supply chain platform with demand forecasting and real-time inventory tracking.',
      execution: 'Deployed IoT sensors, automated replenishment systems, and supplier collaboration portals.',
      results: [
        { metric: 'Stockout Reduction', improvement: '-75%' },
        { metric: 'Inventory Costs', improvement: '-45%' },
        { metric: 'Delivery Time', improvement: '-60%' },
        { metric: 'Supplier Collaboration', improvement: '+250%' }
      ],
      tags: ['Logistics', 'Retail', 'IoT', 'Supply Chain', 'Inventory Management'],
      timeline: '16 months',
      teamSize: '25 specialists',
      technologies: ['IoT Sensors', 'Java', 'Kafka', 'Redis', 'Supply Chain APIs']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'work' },
    { id: 'crm', name: 'CRM Systems', icon: 'account_tree' },
    { id: 'erp', name: 'ERP Solutions', icon: 'corporate_fare' },
    { id: 'marketing', name: 'Marketing Campaigns', icon: 'campaign' },
    { id: 'dashboard', name: 'Enterprise Dashboards', icon: 'dashboard' },
    { id: 'ai', name: 'AI & Machine Learning', icon: 'auto_mode' },
    { id: 'logistics', name: 'Supply Chain', icon: 'local_shipping' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-green-400">work</span>
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Clients &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                Projects
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Real-world success stories showcasing our expertise in delivering structured digital solutions
              that drive measurable business transformation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-2xl'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span className="material-symbols-outlined">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold mb-4">
                    {project.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400">Client: {project.client}</p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm">schedule</span>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm">groups</span>
                    <span>{project.teamSize}</span>
                  </div>
                </div>

                {/* Case Study Format */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-red-400">error</span>
                      Challenge
                    </h4>
                    <p className="text-slate-300">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-400">lightbulb</span>
                      Solution
                    </h4>
                    <p className="text-slate-300">{project.strategy}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-400">build</span>
                      Implementation
                    </h4>
                    <p className="text-slate-300">{project.execution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400">trending_up</span>
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10  transition-all">
                          <span className="text-slate-300">{result.metric}</span>
                          <span className="text-green-400 font-bold">{result.improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-cyan-400">code</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">visibility</span>
                    View Full Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with structured digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  Schedule Free Consultation
                </motion.button>
              </Link>
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  Book CRM Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientsProjects;
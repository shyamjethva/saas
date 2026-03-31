import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClientsProjects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Enterprise CRM System for Manufacturing Giant',
      category: 'software',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Managing 500+ dealers and 10,000+ customer interactions across multiple regions with fragmented systems.',
      solution: 'Developed a custom CRM system with dealer management, inventory tracking, and automated reporting dashboard.',
      results: [
        { metric: 'Dealer Productivity', improvement: '+150%' },
        { metric: 'Customer Response Time', improvement: '-75%' },
        { metric: 'Operational Costs', improvement: '-40%' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 2,
      title: 'AI-Powered Marketing Automation for E-commerce',
      category: 'ai',
      client: 'Fashion Retail Chain',
      industry: 'E-commerce',
      challenge: 'Manual marketing processes leading to inconsistent customer engagement and missed sales opportunities.',
      solution: 'Implemented AI chatbots, personalized recommendation engines, and automated email campaigns with behavioral triggers.',
      results: [
        { metric: 'Conversion Rate', improvement: '+200%' },
        { metric: 'Customer Retention', improvement: '+85%' },
        { metric: 'Marketing ROI', improvement: '+300%' }
      ],
      technologies: ['Python', 'TensorFlow', 'ChatGPT', 'Google Analytics'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Performance Marketing Campaign for FinTech Startup',
      category: 'marketing',
      client: 'Digital Payments Platform',
      industry: 'FinTech',
      challenge: 'Low brand awareness and poor lead quality in a highly competitive market.',
      solution: 'Executed multi-channel performance marketing campaign with targeted ads, content marketing, and conversion optimization.',
      results: [
        { metric: 'Lead Quality', improvement: '+300%' },
        { metric: 'Cost Per Acquisition', improvement: '-60%' },
        { metric: 'Monthly Revenue', improvement: '+400%' }
      ],
      technologies: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Hotjar'],
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'software', name: 'Software Development' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'ai', name: 'AI & Automation' }
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-sm font-semibold rounded-full">
              Our Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-space-grotesk tracking-tighter">
            Clients &
            <span className="text-blue-600"> Projects</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium">
            Showcasing transformative digital solutions that have driven measurable business results
            across diverse industries and business challenges
          </p>
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-black transition-all duration-300 border ${filter === category.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: 'rgba(37,99,235,0.2)' }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-100 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <span className={`material-symbols-outlined text-5xl text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]`}>
                    work
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`}></div>
                  <div className="mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-black uppercase tracking-widest border border-blue-100 rounded-full shadow-lg group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-500`}>
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter transition-colors duration-500 group-hover:text-blue-600">{project.title}</h3>
                  <p className="text-slate-500 font-medium text-sm mb-4 flex-1">{project.client}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100 group-hover:bg-white transition-colors duration-500">
                        <div className="text-green-600 font-black text-sm">{result.improvement}</div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-blue-400 text-sm font-black uppercase tracking-widest group-hover:text-blue-600 transition-colors">View Case Study</span>
                    <span className="material-symbols-outlined text-blue-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      {selectedProject.industry}
                    </span>
                    <span className="font-semibold">{selectedProject.client}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-white">close</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-gray-300">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                  <p className="text-gray-300">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Measurable Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{result.improvement}</div>
                      <div className="text-white font-semibold">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsProjects;
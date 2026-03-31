import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ ADD THIS

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Global Banking Transformation',
      category: 'Financial Services',
      description: 'Revolutionary digital banking platform serving 500K+ users with real-time transactions, advanced fraud detection, and regulatory compliance. Reduced processing time by 70% and improved customer satisfaction scores by 45%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Kubernetes'],
      image: 'finance',
      metrics: {
        users: '500K+',
        uptime: '99.9%',
        transactions: '2M+/day',
        reduction: '70% faster'
      },
      client: 'Major International Bank',
      year: '2023',
      challenge: 'Legacy system modernization with zero downtime deployment',
      solution: 'Microservices architecture with cloud-native deployment'
    },
    {
      title: 'Healthcare Digital Ecosystem',
      category: 'Healthcare',
      description: 'HIPAA-compliant integrated healthcare management system connecting 100K+ healthcare providers with telemedicine capabilities, electronic health records, and AI-powered diagnostic assistance. Improved patient outcomes by 35%.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Azure', 'TensorFlow'],
      image: 'healthcare',
      metrics: {
        users: '100K+',
        uptime: '99.95%',
        patients: '500K+',
        improvement: '35% better outcomes'
      },
      client: 'National Healthcare Network',
      year: '2023',
      challenge: 'Secure patient data management across multiple facilities',
      solution: 'Blockchain-based records with AI diagnostic support'
    },
    {
      title: 'Smart Retail Marketplace',
      category: 'Retail',
      description: 'AI-powered e-commerce ecosystem serving 2M+ customers with personalized recommendations, intelligent inventory management, and seamless omnichannel experience. Increased conversion rates by 52% and reduced cart abandonment by 40%.',
      technologies: ['Next.js', 'Go', 'Redis', 'GCP', 'Machine Learning'],
      image: 'ecommerce',
      metrics: {
        users: '2M+',
        uptime: '99.8%',
        sales: '$50M+/year',
        conversion: '52% increase'
      },
      client: 'Global Retail Corporation',
      year: '2024',
      challenge: 'Creating unified shopping experience across all channels',
      solution: 'Personalized AI recommendations with real-time inventory sync'
    },
    {
      title: 'Intelligent Supply Chain',
      category: 'Logistics',
      description: 'Real-time supply chain intelligence platform with predictive analytics, automated inventory optimization, and IoT sensor integration. Achieved 30% efficiency gains and 25% cost reduction through smart automation.',
      technologies: ['Angular', 'Java', 'Kafka', 'Snowflake', 'IoT'],
      image: 'logistics',
      metrics: {
        users: '50K+',
        uptime: '99.9%',
        efficiency: '30% increase',
        savings: '25% cost cut'
      },
      client: 'Global Logistics Leader',
      year: '2024',
      challenge: 'Optimizing complex multi-location supply chains',
      solution: 'Predictive analytics with real-time visibility dashboard'
    },
    {
      title: 'Enterprise Collaboration Suite',
      category: 'Technology',
      description: 'Modern workplace collaboration platform connecting 50K+ employees across 24 countries with real-time communication, project management, and AI-powered productivity tools. Boosted team productivity by 40% and reduced meeting time by 30%.',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'WebRTC', 'AI'],
      image: 'collaboration',
      metrics: {
        users: '50K+',
        countries: '24',
        productivity: '40% boost',
        meetings: '30% reduction'
      },
      client: 'Fortune 500 Corporation',
      year: '2024',
      challenge: 'Unifying distributed workforce communication',
      solution: 'Integrated platform with AI meeting assistants'
    },
    {
      title: 'Smart City Infrastructure',
      category: 'Government',
      description: 'IoT-enabled urban management system monitoring traffic, utilities, and public services across metropolitan areas. Improved citizen services response time by 60% and reduced operational costs by 35% through data-driven decision making.',
      technologies: ['Flutter', 'Node.js', 'TimescaleDB', 'IoT Sensors', 'Analytics'],
      image: 'smartcity',
      metrics: {
        coverage: '5 cities',
        response: '60% faster',
        savings: '35% costs',
        sensors: '10K+ deployed'
      },
      client: 'Metropolitan Government Authority',
      year: '2024',
      challenge: 'Managing complex urban infrastructure efficiently',
      solution: 'IoT sensor network with centralized analytics dashboard'
    }
  ];

  const testimonials = [
    {
      quote: "Error Infotech transformed our digital banking platform completely. Their expertise in modern architecture and commitment to excellence delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Financial Services",
      company: "Major International Bank",
      rating: 5
    },
    {
      quote: "The healthcare solution they built has revolutionized patient care in our network. Professional, reliable, and truly innovative approach to complex challenges.",
      author: "Dr. Michael Chen",
      position: "Director of Digital Health",
      company: "National Healthcare Network",
      rating: 5
    },
    {
      quote: "Working with Error Infotech was a game-changer for our retail business. Their AI-driven approach increased our conversion rates significantly while reducing operational complexity.",
      author: "Robert Martinez",
      position: "Head of Digital Commerce",
      company: "Global Retail Corporation",
      rating: 5
    }
  ];

  const stats = [
    { value: '250+', label: 'Enterprise Clients', icon: 'corporate_fare' },
    { value: '1500+', label: 'Projects Completed', icon: 'checklist' },
    { value: '98.5%', label: 'Client Satisfaction', icon: 'thumb_up' },
    { value: '24', label: 'Countries Served', icon: 'public' }
  ];

  const categories = ['all', 'Financial Services', 'Healthcare', 'Retail', 'Logistics', 'Technology', 'Government'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="pt-24 pb-12 px-6">
      {/* Hero Section with Background Effects */}
      <section className="py-20 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-primary">work</span>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Success Stories</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-world transformations delivering measurable business impact across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Filter Categories */}
      <section className="py-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category
                    ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Showcase */}
      <section className="py-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-500 group"
              >
                {/* Project Header with Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-white/30 group-hover:scale-110 transition-transform duration-500">
                    {project.image === 'finance' && 'account_balance'}
                    {project.image === 'healthcare' && 'local_hospital'}
                    {project.image === 'ecommerce' && 'shopping_cart'}
                    {project.image === 'logistics' && 'local_shipping'}
                    {project.image === 'collaboration' && 'group'}
                    {project.image === 'smartcity' && 'location_city'}
                  </span>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 animate-pulse"></div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-purple-500 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-white">
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs text-slate-400">For {project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Challenge & Solution Preview */}
                  <div className="space-y-2 mb-4 text-xs text-slate-500">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">error</span>
                      <span><strong className="text-slate-300">Challenge:</strong> {project.challenge}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check_circle</span>
                      <span><strong className="text-slate-300">Solution:</strong> {project.solution}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white/10 text-slate-400 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {Object.entries(project.metrics).slice(0, 4).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Link to={`/case-study/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full bg-gradient-to-r from-primary to-purple-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/button"
                    >
                      View Case Study
                      <span className="material-symbols-outlined text-sm group-hover/button:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">What our enterprise partners say about working with us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400">star</span>
                  ))}
                </div>

                <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-primary">{testimonial.position}</div>
                  <div className="text-xs text-slate-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-16 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technological Excellence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Cutting-edge solutions driving digital transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI & Machine Learning', icon: 'auto_awesome', desc: 'Intelligent automation and predictive analytics' },
              { title: 'Cloud Architecture', icon: 'cloud', desc: 'Scalable, secure cloud-native solutions' },
              { title: 'Blockchain', icon: 'link', desc: 'Decentralized security and transparency' },
              { title: 'IoT Integration', icon: 'sensors', desc: 'Connected devices and real-time data' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">{tech.icon}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{tech.title}</h3>
                <p className="text-slate-400 text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-cyan-500/10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 text-center relative overflow-hidden max-w-4xl mx-auto border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Join Our Success Stories?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can transform your business with enterprise-grade technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(56,105,250,0.5)] hover:shadow-[0_0_40px_rgba(56,105,250,0.7)] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                Start Your Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                Download Portfolio
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default PortfolioPage;
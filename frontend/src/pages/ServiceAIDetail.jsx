import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceAIDetail = () => {
  return (
    <main className="pt-24 pb-12 px-6">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background-dark to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Link to="/services" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 rounded-full font-semibold">
                AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                2.8x Productivity Boost
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-full font-semibold">
                Enterprise Grade
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI & Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Automation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Leverage artificial intelligence to automate workflows, enhance decision-making, and gain sustainable competitive advantages for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business with AI</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our AI solutions are designed to seamlessly integrate with your existing systems, automating repetitive tasks, providing intelligent insights, and enabling data-driven decision making at scale.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                From predictive analytics to intelligent process automation, we help organizations unlock new levels of efficiency and innovation through purpose-built artificial intelligence solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 text-primary rounded-full text-sm font-semibold">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-full text-sm font-semibold">
                  Automation
                </span>
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold">
                  Analytics
                </span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full text-sm font-semibold">
                  AI Integration
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  { benefit: "Process Automation", impact: "Reduce manual work by 70%" },
                  { benefit: "Predictive Insights", impact: "Anticipate trends 3x faster" },
                  { benefit: "Cost Reduction", impact: "Lower operational costs by 40%" },
                  { benefit: "Decision Making", impact: "Data-driven accuracy improved by 85%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-white font-medium">{item.benefit}</span>
                    <span className="text-primary font-semibold">{item.impact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive artificial intelligence services tailored to your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Machine Learning Models",
                desc: "Custom-built ML algorithms for predictive analytics, classification, and pattern recognition tailored to your specific business challenges.",
                icon: "psychology",
                color: "from-blue-700 to-sky-500",
                features: ["Supervised & Unsupervised Learning", "Neural Networks", "Deep Learning", "Model Optimization"]
              },
              {
                title: "Process Automation",
                desc: "Intelligent workflow automation that learns and improves over time, reducing human intervention and increasing efficiency.",
                icon: "auto_mode",
                color: "from-purple-500 to-pink-500",
                features: ["RPA Integration", "Smart Workflows", "Exception Handling", "Continuous Learning"]
              },
              {
                title: "Predictive Analytics",
                desc: "Advanced forecasting models that help you anticipate market trends, customer behavior, and business outcomes.",
                icon: "trending_up",
                color: "from-green-500 to-teal-500",
                features: ["Time Series Analysis", "Risk Assessment", "Demand Forecasting", "Performance Prediction"]
              },
              {
                title: "AI-Powered Chatbots",
                desc: "Conversational AI assistants that provide 24/7 customer support and streamline user interactions across all channels.",
                icon: "smart_toy",
                color: "from-orange-500 to-red-500",
                features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "Seamless Handoff"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-white text-2xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400 mb-4">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Structured approach to deliver successful AI solutions</p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                { step: 1, title: "Assessment", desc: "Business needs analysis and opportunity identification" },
                { step: 2, title: "Data Preparation", desc: "Data collection, cleaning, and preprocessing" },
                { step: 3, title: "Model Development", desc: "Algorithm selection and model training" },
                { step: 4, title: "Testing & Validation", desc: "Performance evaluation and refinement" },
                { step: 5, title: "Deployment", desc: "Production implementation and monitoring" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4 shadow-lg border-4 border-background-dark"
                    >
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </motion.div>
                    <h3 className="text-white font-bold text-lg mb-2">{phase.title}</h3>
                    <p className="text-slate-400 text-sm">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-purple-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Technology Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Cutting-edge tools powering our artificial intelligence solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "TensorFlow", icon: "auto_graph" },
              { name: "PyTorch", icon: "psychology" },
              { name: "Python", icon: "code" },
              { name: "Scikit-learn", icon: "insights" },
              { name: "OpenCV", icon: "camera" },
              { name: "NLTK", icon: "chat" },
              { name: "spaCy", icon: "description" },
              { name: "FastAPI", icon: "api" },
              { name: "Docker", icon: "inventory_2" },
              { name: "Kubernetes", icon: "settings" },
              { name: "AWS SageMaker", icon: "cloud" },
              { name: "Google AI", icon: "auto_awesome" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="glass-card rounded-xl p-4 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white">{tech.icon}</span>
                </div>
                <div className="text-white font-semibold text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Real-world impact from our AI implementations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: "2.8x", label: "Productivity Increase", color: "from-green-500 to-teal-500" },
              { value: "70%", label: "Manual Work Reduced", color: "from-blue-700 to-sky-500" },
              { value: "3x", label: "Faster Decision Making", color: "from-purple-500 to-pink-500" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-8 text-center border border-white/10  transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-bold text-2xl">↑</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-3">{result.value}</div>
                <div className="text-slate-400 font-medium">{result.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Case Study Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Financial Services Client</h4>
                <ul className="space-y-3">
                  {[
                    "Automated loan approval process reduced processing time by 85%",
                    "Fraud detection accuracy improved to 99.2%",
                    "Customer service inquiries handled by AI increased by 60%",
                    "Operational costs decreased by 40%"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-green-400 mt-1">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Manufacturing Client</h4>
                <ul className="space-y-3">
                  {[
                    "Predictive maintenance reduced equipment downtime by 75%",
                    "Quality control automation improved defect detection by 90%",
                    "Supply chain optimization reduced inventory costs by 35%",
                    "Production scheduling efficiency increased by 50%"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-green-400 mt-1">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Ready to Implement <span className="text-primary">AI Solutions?</span></h2>
            <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Transform your business with intelligent automation and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold h-14 px-10 rounded-full transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Schedule AI Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceAIDetail;

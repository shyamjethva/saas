import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsultationHero = () => {
  const valuePropositions = [
    "✓ Get a custom digital strategy for your business",
    "✓ See exactly how we'll increase your revenue", 
    "✓ No obligations - just expert business guidance",
    "✓ 30-minute session tailored to your needs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
                <span className="material-symbols-outlined text-green-400">auto_awesome</span>
                <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Free Business Strategy</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Unlock Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                  Growth Potential
                </span>
                <span className="block">Today</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
                Stop guessing what your business needs. Get expert consultation on digital transformation, 
                automation strategies, and revenue growth - all in one free session.
              </p>
              
              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {valuePropositions.map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-slate-300">{prop.replace('✓ ', '')}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
                  >
                    <span className="material-symbols-outlined">calendar_today</span>
                    Book Free Consultation
                    <span className="text-sm opacity-90 ml-2">→</span>
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                  >
                    <span className="material-symbols-outlined">view_quilt</span>
                    Explore Our Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Consultation Form Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Your Free Consultation</h3>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <span className="text-green-400 font-bold text-sm">FREE</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl">task_alt</span>
                      What You'll Receive
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-slate-300 text-sm">Detailed business assessment and opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-slate-300 text-sm">Custom ROI projection for your investment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-slate-300 text-sm">Implementation roadmap with timelines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-slate-300 text-sm">No pressure sales - pure business value</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">30</div>
                      <div className="text-xs text-slate-400">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">0</div>
                      <div className="text-xs text-slate-400">Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">∞</div>
                      <div className="text-xs text-slate-400">Value</div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                    <p className="text-slate-300 text-sm italic mb-2">
                      "The consultation revealed opportunities we never considered. 
                      Worth more than our entire marketing budget."
                    </p>
                    <p className="text-slate-400 text-xs">- Sarah K., Manufacturing Director</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Social Proof Bar */}
      <div className="relative z-10 px-6 py-8 bg-black/20 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <span>✓ Trusted by 500+ businesses</span>
            <span>✓ 98% client satisfaction</span>
            <span>✓ 3X average growth increase</span>
            <span>✓ No obligations ever</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationHero;
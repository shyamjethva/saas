import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsultationSection = () => {
  const consultationBenefits = [
    {
      icon: 'timeline',
      title: 'Strategic Assessment',
      description: 'We analyze your current systems and identify growth opportunities'
    },
    {
      icon: 'architecture',
      title: 'Custom Solution Design',
      description: 'Get a tailored digital strategy that fits your business needs'
    },
    {
      icon: 'trending_up',
      title: 'ROI Projection',
      description: 'See exactly how our solutions will impact your bottom line'
    },
    {
      icon: 'schedule',
      title: 'Implementation Roadmap',
      description: 'Clear timeline and milestones for your digital transformation'
    }
  ];

  const commonQuestions = [
    {
      question: "What should I prepare for the consultation?",
      answer: "Bring your business goals, current challenges, and any existing systems information. We'll handle the rest."
    },
    {
      question: "How long does the consultation take?",
      answer: "Typically 30-45 minutes for initial assessment, with follow-up sessions as needed for complex requirements."
    },
    {
      question: "Is there any cost for this consultation?",
      answer: "No, our consultation is completely free. We believe in demonstrating value before asking for commitment."
    },
    {
      question: "What happens after the consultation?",
      answer: "You'll receive a detailed proposal with timelines, costs, and expected outcomes within 24 hours."
    }
  ];

  return (
    <div className="relative z-10 px-6 py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Main Consultation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
            <span className="material-symbols-outlined text-green-400">chat</span>
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Free Strategy Session</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
              Expert Guidance
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Get personalized digital strategy consultation from our enterprise solutions experts. 
            Discover how the right technology can accelerate your growth by 300%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule Free Consultation
              </motion.button>
            </Link>
            <Link to="/book-demo">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined">smart_toy</span>
                See Live Demo First
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-16">What You'll Get in Your Free Consultation</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 text-center group backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                  <span className="material-symbols-outlined text-green-400 text-3xl">{benefit.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-12 mb-20 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-green-400 mb-3">500+</div>
              <div className="text-slate-300 font-medium">Businesses Consulted</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-3">98%</div>
              <div className="text-slate-300 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-black text-purple-400 mb-3">3X</div>
              <div className="text-slate-300 font-medium">Average Growth</div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-16">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {commonQuestions.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card rounded-xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-400 mt-1">help</span>
                  {faq.question}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-300 mb-8 text-lg">
              Join 500+ businesses that have accelerated their growth with our expert consultation
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-12 py-5 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg mx-auto"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                Get My Free Strategy Session
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationSection;
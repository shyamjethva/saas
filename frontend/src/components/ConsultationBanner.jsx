import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsultationBanner = ({ variant = 'default' }) => {
  const banners = {
    default: {
      title: "Get Your Free Digital Strategy Consultation",
      subtitle: "Discover how our enterprise solutions can accelerate your business growth by 300%",
      cta: "Schedule Free Consultation",
      icon: "chat"
    },
    premium: {
      title: "Transform Your Business Today",
      subtitle: "Get expert guidance on scaling your operations with cutting-edge digital solutions",
      cta: "Get Free Strategy Session",
      icon: "rocket_launch"
    },
    enterprise: {
      title: "Ready for Enterprise Growth?",
      subtitle: "Our experts will show you how to build scalable systems that drive real results",
      cta: "Book Free Consultation",
      icon: "trending_up"
    }
  };

  const banner = banners[variant] || banners.default;

  return (
    <div className="relative z-10 px-6 py-16 bg-gradient-to-r from-gray-900 to-slate-900 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <span className="material-symbols-outlined text-green-400">{banner.icon}</span>
            <span className="text-green-400 font-bold uppercase text-xs tracking-wider">FREE CONSULTATION</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {banner.title}
          </h3>
          
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            {banner.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                {banner.cta}
              </motion.button>
            </Link>
            <Link to="/crm-demo">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">play_circle</span>
                See Live Demo
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
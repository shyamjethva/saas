import { motion } from 'framer-motion';

const CaseStudyCard = ({ caseStudy, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300 group backdrop-blur-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
              {caseStudy.title}
            </h3>
            <p className="text-green-400 font-semibold">{caseStudy.company}</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
            <span className="text-green-400 font-bold text-sm">{caseStudy.industry}</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm">{caseStudy.duration} • {caseStudy.companySize}</p>
      </div>

      {/* Summary */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {caseStudy.summary}
      </p>

      {/* Key Metrics Preview */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {caseStudy.results.slice(0, 3).map((result, index) => (
          <div key={index} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-2xl font-black text-green-400 mb-1">{result.value}</div>
            <div className="text-xs text-slate-400">{result.metric}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-xs border border-green-500/30"
            >
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 4 && (
            <span className="px-2 py-1 bg-white/10 text-slate-400 rounded-full text-xs">
              +{caseStudy.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onViewDetails(caseStudy)}
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 group"
      >
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
          visibility
        </span>
        View Full Case Study
      </button>
    </motion.div>
  );
};

export default CaseStudyCard;
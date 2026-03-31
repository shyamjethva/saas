import { motion } from 'framer-motion';

const ConsultationTestimonials = () => {
  const testimonials = [
    {
      quote: "The free consultation was eye-opening. They identified automation opportunities that will save us 20 hours per week. Worth every minute!",
      author: "Michael Chen",
      position: "Operations Director",
      company: "TechFlow Solutions",
      results: "40% cost reduction in 3 months"
    },
    {
      quote: "I was skeptical about free consultations, but this one delivered real business value. The roadmap they provided helped us scale 3x faster than planned.",
      author: "Priya Sharma",
      position: "CEO",
      company: "GrowthStarters Inc",
      results: "300% revenue growth"
    },
    {
      quote: "Finally, a consultation that focused on our specific challenges rather than generic solutions. The follow-up proposal was so detailed and actionable.",
      author: "Robert Johnson",
      position: "CTO",
      company: "DataCore Systems",
      results: "15% efficiency improvement"
    }
  ];

  return (
    <div className="relative z-10 px-6 py-20 bg-gradient-to-br from-slate-900/50 to-green-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-white mb-4">Real Results from Free Consultations</h3>
          <p className="text-xl text-slate-300">See what businesses achieved after their strategy sessions</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm  transition-all duration-300"
            >
              <div className="mb-6">
                <div className="text-5xl text-green-400 mb-4">"</div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.position}</div>
                    <div className="text-slate-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-green-400 font-bold text-sm">RESULT</div>
                  <div className="text-white text-sm">{testimonial.results}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
            <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
            <span className="text-green-400 font-bold text-sm">NO RISK, 100% VALUE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationTestimonials;
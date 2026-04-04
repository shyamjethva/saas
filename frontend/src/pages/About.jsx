import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="material-symbols-outlined text-blue-600">corporate_fare</span>
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Institutional Profile</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              <span className="text-gradient">About Error Infotech.</span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Global architects of the digital-first enterprise, delivering high-performance technical infrastructure since 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-6">Our Genesis</div>
              <h2 className="text-5xl font-black mb-8 tracking-tighter">
                <span className="text-gradient">The Visionary Roadmap.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Founded in Rajkot, Error Infotech emerged from a singular objective: to architect zero-friction technical ecosystems for the world's most ambitious enterprises.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                What began as an elite engineering collective has evolved into a global technical powerhouse. We operate at the intersection of neural networks and cloud-native infrastructure, serving a diverse portfolio from high-growth startups to Fortune 500 conglomerates.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-black uppercase tracking-widest text-[10px]">
                  3+ Years Excellence
                </div>
                <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 font-black uppercase tracking-widest text-[10px]">
                  11+ Global Nodes
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-consistent-3xl p-12 border border-slate-200 shadow-xl"
            >
              <h3 className="text-2xl font-black text-slate-800 mb-10 tracking-tight">Institutional Milestones</h3>
              <div className="space-y-10">
                {[
                  { year: '2021', event: 'Initial Convergence', desc: 'Formation of the core engineering node.' },
                  { year: '2022', event: 'Market Expansion', desc: 'Deployment of 13+ unique enterprise environments.' },
                  { year: '2023', event: 'Global Integration', desc: 'Secure technical delivery across 4+ continents.' },
                  { year: '2024', event: 'Apex Performance', desc: 'Scaling to 11+ dedicated specialists.' }
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-black text-lg shadow-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 mb-1">{milestone.event}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black mb-6 tracking-tighter">
              <span className="text-gradient">Strategic Leadership.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">The technical architects behind our global success.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: 'Rakshit Patadiya', role: 'CEO & Founder', bio: 'Strategic architect with 3+ years in global IT delivery.', image: '/images/team/Rakshit Patadiya.png', initials: 'RP' },
              { name: 'Prayushi Teraiya', role: 'Biz-Dev Executive', bio: 'Orchestrating strategic enterprise partnerships.', image: '/images/team/Prayushi Teraiya.png', initials: 'PT' },
              { name: 'Hemal Bhatasana', role: 'HR Operations', bio: 'Curating elite technical talent protocols.', image: '/images/team/Hemal Bhatasana.png', initials: 'HB' },
              { name: 'Parth Patadiya', role: 'Manager', bio: 'Synchronizing complex deliverable lifecycles.', image: '/images/team/Parth Patadiya.png', initials: 'PP' },
              { name: 'Manav Jotangiya', role: 'Ai Architect Devloper', bio: 'Engineered 11+ high-performance applications.', image: '/images/team/Manav Jotangiya.png', initials: 'MJ' },
              { name: 'Shyam Jethva', role: 'Ai Automation Developer', bio: 'Specialist in premium high-contrast UI/UX.', image: '/images/team/Shyam Jethva.png', initials: 'SJ' },
              { name: 'Ashtha Maniyar', role: 'Full Stack Developer', bio: 'Securing mission-critical data pipelines.', image: '/images/team/Ashtha Maniyar.png', initials: 'AM' },
              { name: 'Rohit Jariya', role: 'Digital Marketing', bio: 'Scaling institutional market presence.', image: '/images/team/Rohit Jariya.png', initials: 'RJ' },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-consistent-2xl p-10 text-center border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-xl group"
              >
                <div className="w-32 h-32 mx-auto mb-8 relative rounded-full overflow-hidden bg-slate-50 border-4 border-white shadow-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-contain bg-white p-3 transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-black text-2xl bg-white" style={{ display: 'none' }}>
                    {leader.initials}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">{leader.name}</h3>
                <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-6">{leader.role}</div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black mb-6 tracking-tighter">
              <span className="text-gradient">Institutional Values.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">The technical standards that govern our operation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Neural Innovation', desc: 'Pushing the boundaries of generative AI and automation.', icon: 'auto_awesome' },
              { title: 'Absolute Integrity', desc: 'Radical transparency in every technical interaction.', icon: 'verified' },
              { title: 'Dynamic Synthesis', desc: 'Synchronized cross-node collaboration for elite delivery.', icon: 'group' },
              { title: 'Apex Excellence', desc: 'Unyielding commitment to technical performance.', icon: 'workspace_premium' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 rounded-consistent-2xl p-10 text-center border border-slate-100 hover:border-blue-300 transition-all shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="material-symbols-outlined text-blue-600 text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center bg-slate-50 border-t border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-blue-500/40">
            <span className="material-symbols-outlined text-4xl text-white font-black">hub</span>
          </div>
          <h2 className="text-5xl font-black mb-8 tracking-tighter">
            <span className="text-gradient">Initialize Partnership.</span>
          </h2>
          <p className="text-2xl text-slate-600 mb-16 max-w-2xl mx-auto font-medium">
            Converge with the leaders of the digital transformation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] h-20 px-12 rounded-full shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all"
              >
                Request Strategic Consultation
              </motion.button>
            </Link>
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-slate-800 font-black uppercase tracking-widest text-[10px] h-20 px-12 rounded-full border border-slate-200 shadow-xl hover:bg-slate-50 transition-all"
              >
                Talent Onboarding
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
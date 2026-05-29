import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../services/api';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentPosition: '',
    linkedin: '',
    github: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $160k"
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110k - $140k"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $120k"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130k - $170k"
    },
    {
      id: 5,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "$95k - $125k"
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$115k - $150k"
    }
  ];

  const benefits = [
    { title: "Competitive Salary", icon: "payments", desc: "Market-leading compensation packages" },
    { title: "Health Insurance", icon: "local_hospital", desc: "Comprehensive medical coverage" },
    { title: "Flexible Hours", icon: "schedule", desc: "Work-life balance focused policies" },
    { title: "Remote Work", icon: "home", desc: "Work from anywhere options" },
    { title: "Learning Budget", icon: "school", desc: "$2000 annually for courses" },
    { title: "Equity Package", icon: "trending_up", desc: "Stock options for all employees" }
  ];

  // Application Handlers
  const openApplicationModal = (position) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplicationModal = () => {
    setIsApplicationOpen(false);
    setSelectedPosition(null);
    document.body.style.overflow = 'unset';
    // Reset form
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      currentPosition: '',
      linkedin: '',
      github: '',
      portfolio: '',
      coverLetter: '',
      resume: null
    });
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(applicationData).forEach(key => {
        if (key === 'resume' && applicationData[key]) {
          formData.append(key, applicationData[key]);
        } else {
          formData.append(key, applicationData[key]);
        }
      });
      formData.append('positionId', selectedPosition.id);
      formData.append('positionTitle', selectedPosition.title);

      const response = await api.post('/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200 || response.status === 201) {
        alert('Application submitted successfully! Our HR team will review your application and contact you soon.');
        closeApplicationModal();
      } else {
        alert('Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: files ? files[0] : value
    });
  };

  return (
    <main className="homepage-monochrome min-h-screen premium-bg relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 mb-8">
              <span className="material-symbols-outlined text-blue-600">rocket_launch</span>
              <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Future Frontiers</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Build the <span className="text-slate-500">Future.</span>
            </h1>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Join a team of visionaries shaping the next generation of global enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
              Why Innovate <span className="text-slate-500">Here?</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">We invest in the architects of tomorrow.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Apex Technology",
                desc: "Navigate the bleeding edge with state-of-the-art neural and cloud frameworks.",
                icon: "auto_mode"
              },
              {
                title: "Infinite Growth",
                desc: "Unbounded vertical mobility with dedicated architectural mentorship.",
                icon: "trending_up"
              },
              {
                title: "Global Impact",
                desc: "Deploy solutions that orchestrate millions of transactions across continents.",
                icon: "rocket_launch"
              },
              {
                title: "Radical Collaboration",
                desc: "Synchronize with high-caliber polymaths in a zero-friction environment.",
                icon: "group"
              },
              {
                title: "Optimum Balance",
                desc: "Priority on mental bandwidth with radical remote flexibility.",
                icon: "balance"
              },
              {
                title: "Elite Benefits",
                desc: "Premium healthcare, global equity, and $5,000 annual learning stipends.",
                icon: "workspace_premium"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-consistent-2xl p-10 text-center border border-slate-100 hover:border-blue-400/50 transition-all shadow-2xl shadow-slate-200/50 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-slate-900 transition-all group-hover:border-slate-900">
                  <span className="material-symbols-outlined text-blue-600 transition-colors group-hover:text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-6 relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
              Strategic <span className="text-slate-500">Openings</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">Secure your node in our high-performance network.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-consistent-2xl p-10 border border-slate-100 hover:border-blue-400/50 transition-all shadow-2xl shadow-slate-200/50 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{position.title}</h3>
                    <div className="flex flex-wrap gap-6 text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">business</span>
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-10">
                    <div className="text-right">
                      <div className="text-blue-600 font-black text-xl">{position.salary}</div>
                      <div className="text-slate-400 font-black uppercase tracking-widest text-[9px] mt-1">{position.experience} EXP REQUIRED</div>
                    </div>
                    <button
                      onClick={() => openApplicationModal(position)}
                      className="bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl shadow-slate-200/50 hover:bg-blue-600 transition-all"
                    >
                      Initialize Application
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
              Onboarding <span className="text-slate-500">Protocol</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">Efficient, transparent, and merit-based.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative px-10">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-20 right-20 h-1 bg-slate-100 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: 1, title: "Submission", desc: "Digital resume analytics." },
                { step: 2, title: "Screening", desc: "Core attribute validation." },
                { step: 3, title: "Technical", desc: "Deep-hive architectural challenge." },
                { step: 4, title: "Synthesis", desc: "Final strategic alignment." }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10 text-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-white border-4 border-slate-900 flex items-center justify-center mb-8 shadow-2xl shadow-slate-200/50"
                    >
                      <span className="text-slate-900 font-black text-xl">{process.step}</span>
                    </motion.div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{process.title}</h3>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center relative border-t border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-slate-200/50">
            <span className="material-symbols-outlined text-4xl text-white font-black">join_full</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
            Ready to <span className="text-slate-500">Converge?</span>
          </h2>
          <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-light">
            We are always scouting for peak intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] h-20 px-12 rounded-full shadow-2xl shadow-slate-200/50 hover:bg-blue-600 transition-all"
              >
                Consult with Talent Ops
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-slate-900 font-black uppercase tracking-widest text-[10px] h-20 px-12 rounded-full border border-slate-200 shadow-xl hover:border-blue-400/50 transition-all"
            >
              Master Position Index
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/95 backdrop-blur-md w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-consistent-3xl border border-slate-100 shadow-3xl p-12"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-3">Application Module</div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Applying for <span className="text-slate-500">{selectedPosition?.title}</span></h2>
                </div>
                <button onClick={closeApplicationModal} className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Full Legal Name</label>
                    <input name="fullName" required value={applicationData.fullName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-consistent-lg px-6 py-4 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Email Address (Secure)</label>
                    <input name="email" type="email" required value={applicationData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-consistent-lg px-6 py-4 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Mobile Vector</label>
                    <input name="phone" required value={applicationData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-consistent-lg px-6 py-4 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Portfolio URL (Beacon)</label>
                    <input name="portfolio" value={applicationData.portfolio} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-consistent-lg px-6 py-4 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Resume / Curriculum Vitae (PDF)</label>
                    <div className="relative group">
                      <input name="resume" type="file" required onChange={handleInputChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="bg-slate-50 border border-slate-100 rounded-consistent-lg px-6 py-4 text-slate-400 font-bold flex items-center justify-between group-hover:bg-slate-100 transition-all">
                        <span>{applicationData.resume ? applicationData.resume.name : 'Choose Secure File'}</span>
                        <span className="material-symbols-outlined">upload</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-3 block">Strategic Intent (Cover Letter)</label>
                  <textarea name="coverLetter" rows="6" value={applicationData.coverLetter} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-consistent-lg px-8 py-6 text-slate-900 font-light focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] h-20 rounded-full shadow-2xl shadow-slate-200/50 hover:bg-blue-600 transition-all"
                  >
                    Execute Submission Protocol
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Careers;

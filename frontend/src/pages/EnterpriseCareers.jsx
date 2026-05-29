import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      experience: '3-5 years',
      location: 'Mumbai, India (Remote Available)',
      salary: '₹8-15 LPA',
      description: 'Lead performance marketing campaigns and drive measurable business growth through data-driven strategies.',
      responsibilities: [
        'Manage multi-channel advertising campaigns (Google, Meta, LinkedIn)',
        'Analyze campaign performance and optimize for maximum ROI',
        'Develop and execute comprehensive marketing strategies',
        'Collaborate with sales team for lead generation and conversion',
        'Create compelling ad copy and creative assets'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        '3+ years of experience in digital marketing',
        'Expertise in Google Ads, Meta Ads, and LinkedIn Advertising',
        'Strong analytical skills and data interpretation abilities',
        'Excellent written and verbal communication skills'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible working hours and remote options',
        'Professional development opportunities',
        'Health insurance and wellness programs'
      ]
    },
    {
      id: 2,
      title: 'CRM Developer',
      department: 'Technology',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Mumbai, India (Remote Available)',
      salary: '₹10-18 LPA',
      description: 'Design and develop custom CRM solutions that streamline business operations and enhance customer relationships.',
      responsibilities: [
        'Develop custom CRM applications using modern frameworks',
        'Integrate CRM systems with existing business tools',
        'Create automated workflows and business processes',
        'Implement data analytics and reporting dashboards',
        'Provide technical support and training to users'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2+ years of experience in CRM development',
        'Proficiency in JavaScript, React, Node.js',
        'Experience with database design and management',
        'Knowledge of CRM platforms (Salesforce, HubSpot, etc.)'
      ],
      benefits: [
        'Competitive compensation package',
        'Work-from-home flexibility',
        'Learning and certification allowances',
        'Team building activities and events'
      ]
    }
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-800">
      {/* Hero Section */}
      <div className="px-6 py-24 relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/50 -z-10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">
              <span className="material-symbols-outlined text-sm">group_add</span>
              Join Our Team
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 font-space-grotesk tracking-tighter leading-none">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400">Future</span> of
            <span className="block text-blue-600"> Digital Innovation</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-6 font-medium">
            We're looking for passionate professionals who want to make a difference in how businesses leverage technology.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            Join a team that values innovation, collaboration, and continuous learning.
          </p>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* Why Join Us */}
          <div className="bg-white rounded-consistent-2xl p-12 mb-20 border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 -z-10"></div>
            <h2 className="text-4xl font-black text-slate-800 text-center mb-16 tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-900 to-blue-600">Why Error Infotech?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-consistent-xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Innovation First</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Work with cutting-edge technologies on challenging projects that push boundaries</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-consistent-xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Growth Mindset</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Continuous learning opportunities with mentorship and professional development programs</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-consistent-xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">track_changes</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Impact Driven</h3>
                <p className="text-slate-600 font-medium leading-relaxed">See the direct impact of your work on real businesses and their success stories</p>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-4xl font-black text-slate-800 tracking-tighter px-4 uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-blue-600">Current Openings</span>
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={job.id} className="bg-white rounded-consistent-xl p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all group">
                <div className="flex flex-col md:grid md:grid-cols-4 items-center gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-wider">{job.department}</span>
                      <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-wider">{job.type}</span>
                      <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-wider">{job.experience}</span>
                      <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-wider">{job.location}</span>
                    </div>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">{job.description}</p>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-6 w-full text-center md:text-right">
                    <div className="text-3xl font-black text-blue-600 tracking-tighter">{job.salary}</div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-full transition-all shadow-2xl shadow-blue-500/40 uppercase tracking-widest text-[10px]"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Job Detail Modal */}
          <AnimatePresence>
            {selectedJob && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-100/40 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white rounded-consistent-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
                >
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-10 pb-8 border-b border-slate-100">
                      <div>
                        <h2 className="text-4xl font-black text-slate-800 mb-6 tracking-tighter">{selectedJob.title}</h2>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">{selectedJob.department}</span>
                          <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">{selectedJob.type}</span>
                          <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">{selectedJob.experience}</span>
                          <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">{selectedJob.location}</span>
                          <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">{selectedJob.salary}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-sm"
                      >
                        <span className="material-symbols-outlined text-slate-800">close</span>
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 tracking-tight">
                          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">list</span>
                          </span>
                          Responsibilities
                        </h3>
                        <ul className="space-y-4">
                          {selectedJob.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed">
                              <span className="material-symbols-outlined text-blue-600 mt-1 text-sm">chevron_right</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 tracking-tight">
                          <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">verified</span>
                          </span>
                          Requirements
                        </h3>
                        <ul className="space-y-4">
                          {selectedJob.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed">
                              <span className="material-symbols-outlined text-green-500 mt-1 text-sm">check_circle</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-12">
                      <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight">Benefits & Perks</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {selectedJob.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-consistent-xl">
                            <span className="material-symbols-outlined text-blue-600 text-2xl">workspace_premium</span>
                            <span className="text-slate-800 font-bold">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center pt-8 border-t border-slate-100">
                      <Link to="/contact">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-full transition-all shadow-xl shadow-blue-500/30 text-lg uppercase tracking-widest">
                          Apply for This Position
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Careers;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const values = [
    {
      title: 'Strategic Excellence',
      description: 'We combine deep technical expertise with business acumen to deliver solutions that drive measurable results.',
      icon: 'architecture'
    },
    {
      title: 'Innovation Leadership',
      description: 'Staying ahead of technology trends to provide cutting-edge solutions that give our clients competitive advantage.',
      icon: 'auto_awesome'
    },
    {
      title: 'Client Partnership',
      description: 'Building long-term relationships based on trust, transparency, and shared success metrics.',
      icon: 'handshake'
    },
    {
      title: 'Execution Precision',
      description: 'Delivering projects on time, within budget, with uncompromising quality and attention to detail.',
      icon: 'precision_manufacturing'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '10+', label: 'Industries Served' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-800">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-sm font-semibold rounded-full">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 font-space-grotesk tracking-tighter">
            About
            <span className="text-blue-600"> Error Infotech</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium">
            Founded with a mission to build structured, scalable digital systems for modern businesses
          </p>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Company Story */}
          <div className="bg-white border border-slate-200 rounded-2xl p-12 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-black text-slate-800 mb-6 tracking-tighter uppercase">Our Mission</h2>
                <p className="text-slate-600 text-lg mb-6 font-medium">
                  Error Infotech was founded with a clear vision: to bridge the gap between cutting-edge technology
                  and practical business outcomes. We recognized that many businesses struggle with fragmented digital
                  solutions that don't work together seamlessly.
                </p>
                <p className="text-slate-600 text-lg font-medium">
                  Today, we help organizations build cohesive digital ecosystems that drive growth, improve efficiency,
                  and create sustainable competitive advantages through technology.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <h2 className="text-4xl font-black text-slate-800 text-center mb-16 font-space-grotesk tracking-tighter uppercase">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tighter">{value.title}</h3>
                <p className="text-slate-600 font-medium text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Error Infotech can help transform your business through technology
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

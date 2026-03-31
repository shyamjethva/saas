import React from 'react';

const SimpleAboutUs = () => {
  return (
    <div className="min-h-screen premium-bg pt-20">
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-500/50 rounded-full mb-6">
              <span className="text-blue-400 font-bold">ABOUT ERROR INFOTECH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-space-grotesk tracking-tighter">
              Engineering Structured <span className="text-blue-600">Digital Growth</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              We design intelligent digital ecosystems that help businesses scale faster and smarter through innovative technology solutions.
            </p>
          </div>

          {/* Mission Vision Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">Our Mission</h3>
              <p className="text-slate-600 font-medium">
                To empower businesses with intelligent, scalable digital infrastructure that drives measurable growth and operational excellence.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">👁️</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">Our Vision</h3>
              <p className="text-slate-600 font-medium">
                To become the global leader in structured digital transformation, redefining how enterprises innovate and scale.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💎</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">Our Values</h3>
              <p className="text-slate-600 font-medium">
                Innovation, Integrity, Collaboration, Excellence, and Customer-Centricity guide everything we do.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Education', icon: '🏫' },
                { name: 'Healthcare', icon: '🏥' },
                { name: 'Real Estate', icon: '🏢' },
                { name: 'Manufacturing', icon: '🏭' },
                { name: 'Agencies', icon: '💼' },
                { name: 'Startups', icon: '💡' }
              ].map((industry, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <h3 className="text-lg font-black text-slate-900">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-8 uppercase tracking-tighter">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Rahul Sharma', role: 'Founder & CEO' },
                { name: 'Priya Patel', role: 'CTO' },
                { name: 'Amit Kumar', role: 'Head of Operations' },
                { name: 'Sneha Gupta', role: 'Marketing Director' }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-blue-500/20">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 text-center mb-8 uppercase tracking-tighter">Trusted By Industry Leaders</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'ISO 27001 Certified',
                'SOC 2 Compliant',
                'Microsoft Partner',
                'Google Cloud Partner'
              ].map((badge, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 text-2xl mb-2 font-black">✓</div>
                  <h3 className="text-slate-900 font-black tracking-tighter uppercase text-sm">{badge}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAboutUs;
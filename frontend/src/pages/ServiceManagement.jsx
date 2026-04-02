import { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceManagement = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Digital Marketing',
      category: 'Marketing',
      description: 'Complete digital marketing solutions including SEO, social media, and paid advertising',
      price: 15000,
      status: 'Active',
      features: ['SEO Optimization', 'Social Media Management', 'PPC Campaigns', 'Content Creation']
    },
    {
      id: 2,
      name: 'Software Development',
      category: 'Technology',
      description: 'Custom software development for web and mobile applications',
      price: 75000,
      status: 'Active',
      features: ['Web Development', 'Mobile Apps', 'API Integration', 'Cloud Deployment']
    },
    {
      id: 3,
      name: 'AI Automation',
      category: 'Technology',
      description: 'Intelligent automation solutions powered by artificial intelligence',
      price: 45000,
      status: 'Active',
      features: ['Process Automation', 'Chatbots', 'Data Analysis', 'Predictive Modeling']
    }
  ]);

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Starter Pack',
      service: 'Digital Marketing',
      price: 15000,
      duration: 'Monthly',
      features: ['Basic SEO', '2 Social Platforms', 'Monthly Reports'],
      popular: false
    },
    {
      id: 2,
      name: 'Professional Pack',
      service: 'Digital Marketing',
      price: 35000,
      duration: 'Monthly',
      features: ['Advanced SEO', '4 Social Platforms', 'Weekly Reports', 'PPC Management'],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise Pack',
      service: 'Digital Marketing',
      price: 75000,
      duration: 'Monthly',
      features: ['Premium SEO', 'All Platforms', 'Daily Reports', 'Dedicated Manager'],
      popular: false
    }
  ]);

  const categories = ['Marketing', 'Technology', 'Education', 'Consulting'];

  const getServiceStats = () => ({
    total: services.length,
    active: services.filter(s => s.status === 'Active').length,
    packages: packages.length,
    avgPrice: Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length)
  });

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">build</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">SERVICE INFRASTRUCTURE</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Service Portfolio
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    Pricing Architect
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Define high-value service offerings, manage comprehensive pricing packages, and orchestrate category-wide service deployment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">add_box</span>
                  Engineer Service
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {[
            { id: 'services', label: 'Service Catalog', icon: 'build' },
            { id: 'packages', label: 'Pricing Tiers', icon: 'inventory_2' },
            { id: 'categories', label: 'Structural Taxonomies', icon: 'category' }
          ].map(tab => (
            <motion.button
              key={tab.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 relative ${activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-2xl'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-800'
                }`}
            >
              <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="service-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Portfolio Depth" value={getServiceStats().total} icon="layers" color="blue" />
          <StatCard title="Active Protocols" value={getServiceStats().active} icon="verified" color="indigo" />
          <StatCard title="Pricing Architecture" value={getServiceStats().packages} icon="architecture" color="purple" />
          <StatCard title="Average Unit Value" value={`₹${getServiceStats().avgPrice.toLocaleString()}`} icon="payments" color="blue" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'services' && (
            <ServiceList services={services} setServices={setServices} categories={categories} />
          )}

          {activeTab === 'packages' && (
            <PackageList packages={packages} setPackages={setPackages} services={services} />
          )}

          {activeTab === 'categories' && (
            <CategoryManagement categories={categories} />
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all group"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{title}</p>
        <p className="text-4xl font-black text-slate-900 tracking-tight">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const ServiceList = ({ services, setServices, categories }) => {
  const [showAddService, setShowAddService] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    category: categories[0],
    description: '',
    price: '',
    status: 'Active'
  });

  const addService = () => {
    if (newService.name && newService.description) {
      const service = {
        ...newService,
        id: services.length + 1,
        price: parseInt(newService.price) || 0,
        features: []
      };
      setServices([...services, service]);
      setNewService({ name: '', category: categories[0], description: '', price: '', status: 'Active' });
      setShowAddService(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Service Catalog Ledger</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Active service infrastructure registry</p>
        </div>
        <button
          onClick={() => setShowAddService(true)}
          className="bg-slate-900 text-white font-black px-10 py-5 rounded-[2rem] flex items-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:bg-black transition-all"
        >
          <span className="material-symbols-outlined text-sm font-black">add</span>
          Provision Offering
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <motion.div
            key={service.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-50 transition-colors"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{service.name}</h3>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2 block">{service.category}</span>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${service.status === 'Active'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-100 text-slate-400'
                }`}>
                {service.status}
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10 font-medium">{service.description}</p>

            <div className="flex items-center justify-between mb-10 relative z-10">
              <span className="text-slate-900 font-black text-2xl tracking-tighter">₹{service.price.toLocaleString()}</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">Base Architecture</span>
            </div>

            <div className="flex gap-4 relative z-10">
              <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-black transition-all">
                Configure
              </button>
              <button className="px-6 bg-white text-slate-900 border border-slate-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-slate-900 transition-all">
                Registry
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Service Modal */}
      {showAddService && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 w-full max-w-xl border border-slate-200 shadow-[0_64px_128px_-24px_rgba(0,0,0,0.15)] overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"></div>
            <h3 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter">Provision Offering</h3>

            <div className="space-y-8">
              <div>
                <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Offering Identity</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                  placeholder="Service architectural name"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Taxonomy</label>
                  <select
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold appearance-none cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Unit Valuation (₹)</label>
                  <input
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                    placeholder="Base price"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Architectural Brief</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold resize-none h-32"
                  placeholder="Scope of implementation details..."
                ></textarea>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <button
                onClick={addService}
                className="flex-1 bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all"
              >
                Provision Lifecycle
              </button>
              <button
                onClick={() => setShowAddService(false)}
                className="px-10 bg-white text-slate-400 border border-slate-100 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all"
              >
                Abort
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const PackageList = ({ packages, setPackages, services }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Pricing Architect</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Strategic value-packaged tier management</p>
      </div>
      <button className="bg-slate-900 text-white font-black px-10 py-5 rounded-[2rem] flex items-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
        <span className="material-symbols-outlined text-sm font-black">add</span>
        Engineer Tier
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {packages.map(pkg => (
        <motion.div
          key={pkg.id}
          whileHover={{ y: -8 }}
          className={`bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl relative overflow-hidden group transition-all ${pkg.popular ? 'ring-2 ring-blue-600 shadow-2xl scale-[1.02] z-10' : ''
            }`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          )}

          {pkg.popular && (
            <div className="absolute top-10 left-10 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
              Strategic Choice
            </div>
          )}

          <div className={`text-center mb-10 ${pkg.popular ? 'mt-8' : ''}`}>
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">{pkg.name}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{pkg.service}</p>
            <div className="mt-8 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-black text-slate-900 tracking-tighter">₹{pkg.price.toLocaleString()}</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic font-medium opacity-50">/{pkg.duration.toLowerCase()}</span>
            </div>
          </div>

          <ul className="space-y-5 mb-12 min-h-[160px]">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-500 text-xs font-bold">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-[10px] font-black">check</span>
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'
            }`}>
            Architect Suite
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CategoryManagement = ({ categories }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
  >
    {categories.map((category, index) => (
      <motion.div
        key={category}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all relative group"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none transition-colors group-hover:bg-indigo-50"></div>
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-blue-600 text-3xl font-black">category</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4">{category}</h3>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-relaxed mb-10">
            Governance framework for all {category.toLowerCase()} architectural protocols.
          </p>
          <button className="w-full bg-white text-slate-900 border border-slate-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-slate-900 transition-all shadow-sm">
            Orchestrate {category}
          </button>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default ServiceManagement;
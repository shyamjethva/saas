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

  return (
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Services & Packages</h1>
        <p className="text-slate-400">Manage your service offerings and pricing packages</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'services', label: 'Services', icon: 'build' },
          { id: 'packages', label: 'Packages', icon: 'inventory_2' },
          { id: 'categories', label: 'Categories', icon: 'category' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Services" value={services.length} icon="build" color="blue" />
        <StatCard title="Active Services" value={services.filter(s => s.status === 'Active').length} icon="check_circle" color="green" />
        <StatCard title="Package Options" value={packages.length} icon="inventory_2" color="yellow" />
        <StatCard title="Avg. Price" value={`₹${Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length).toLocaleString()}`} icon="payments" color="purple" />
      </div>

      {/* Main Content */}
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
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">{title}</p>
        <p className={`text-3xl font-bold mt-2 text-${color}-400`}>{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-500/20`}>
        <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>{icon}</span>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Service Catalog</h2>
        <button
          onClick={() => setShowAddService(true)}
          className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{service.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${service.status === 'Active'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
                }`}>
                {service.status}
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-4">{service.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm">{service.category}</span>
              <span className="text-primary font-bold">₹{service.price.toLocaleString()}</span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
                Edit
              </button>
              <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-lg text-sm">
                View Packages
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Service Modal */}
      {showAddService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background-dark rounded-2xl p-6 w-full max-w-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Add New Service</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-2">Service Name</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  placeholder="Enter service name"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Category</label>
                <select
                  value={newService.category}
                  onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-background-dark">{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Description</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary resize-none"
                  placeholder="Enter service description"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Starting Price (₹)</label>
                <input
                  type="number"
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  placeholder="Enter starting price"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={addService}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg"
              >
                Add Service
              </button>
              <button
                onClick={() => setShowAddService(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg"
              >
                Cancel
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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Pricing Packages</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        Create Package
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map(pkg => (
        <motion.div
          key={pkg.id}
          whileHover={{ y: -5 }}
          className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 relative ${pkg.popular ? 'ring-2 ring-yellow-500/50' : ''
            }`}
        >
          {pkg.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
            <p className="text-slate-300 text-sm mb-4">{pkg.service}</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
              <span className="text-slate-400 text-sm">/{pkg.duration}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg">
            Customize Package
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CategoryManagement = ({ categories }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    {categories.map((category, index) => (
      <motion.div
        key={category}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <span className="material-symbols-outlined text-blue-400">category</span>
          </div>
          <h3 className="text-xl font-bold text-white">{category}</h3>
        </div>
        <p className="text-slate-300 text-sm mb-4">
          Manage all {category.toLowerCase()} related services and packages
        </p>
        <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
          Manage {category}
        </button>
      </motion.div>
    ))}
  </motion.div>
);

export default ServiceManagement;
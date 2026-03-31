import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'article' },
    { id: 'technology', name: 'Technology', icon: 'code' },
    { id: 'marketing', name: 'Marketing', icon: 'campaign' },
    { id: 'business', name: 'Business', icon: 'business' },
    { id: 'ai', name: 'AI & Automation', icon: 'auto_mode' },
    { id: 'case-studies', name: 'Case Studies', icon: 'analytics' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of CRM: AI-Powered Customer Relationships',
      excerpt: 'How artificial intelligence is revolutionizing customer relationship management and creating unprecedented business opportunities...',
      category: 'ai',
      author: 'Rahul Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Performance Marketing Strategies That Actually Work',
      excerpt: 'Data-driven approaches to digital marketing that deliver measurable ROI and sustainable growth for modern businesses...',
      category: 'marketing',
      author: 'Priya Patel',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Building Scalable SaaS Applications: Best Practices',
      excerpt: 'Essential architectural patterns and development practices for creating robust, scalable software-as-a-service platforms...',
      category: 'technology',
      author: 'Amit Kumar',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Transformation Success Stories: Real Results',
      excerpt: 'How leading enterprises achieved remarkable growth through structured digital transformation initiatives...',
      category: 'case-studies',
      author: 'Sneha Gupta',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : blogPosts.filter(post => 
        post.category === selectedCategory && 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">article</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">ERROR INFOTECH BLOG</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Insights & 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Innovation
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Stay updated with the latest trends, strategies, and success stories in digital transformation, CRM, and business automation
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 pl-12"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                search
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="relative h-64">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                      <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-slate-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-sm">person</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{post.author}</div>
                          <div className="text-slate-400 text-sm">{post.date}</div>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-full transition-all">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xs">person</span>
                      </div>
                      <span className="text-slate-400 text-sm">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <button className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 group">
                        Read More
                        <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
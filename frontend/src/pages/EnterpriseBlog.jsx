import React, { useState } from 'react';

const Blog = () => {
  const [filter, setFilter] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of CRM: AI-Powered Customer Relationships',
      excerpt: 'How artificial intelligence is transforming customer relationship management and what it means for your business...',
      category: 'AI & Automation',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Performance Marketing Secrets That Actually Work',
      excerpt: 'Data-driven strategies that consistently deliver ROI for B2B and B2C businesses...',
      category: 'Digital Marketing',
      date: 'March 12, 2024',
      readTime: '7 min read',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Building Scalable Software Architecture for Growing Businesses',
      excerpt: 'Essential principles for designing software systems that grow with your organization...',
      category: 'Software Development',
      date: 'March 10, 2024',
      readTime: '6 min read',
      author: 'David Kumar'
    }
  ];

  const categories = ['all', 'AI & Automation', 'Digital Marketing', 'Software Development'];

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-sm font-semibold rounded-full">
              Insights & Updates
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Error Infotech
            <span className="text-blue-400"> Blog</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Insights on AI, CRM systems, marketing trends, automation, and business optimization
          </p>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-lg font-black transition-all duration-300 border ${filter === category
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-100">
                  <span className="material-symbols-outlined text-5xl text-blue-600">
                    article
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">{post.title}</h3>
                  <p className="text-slate-600 font-medium text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 font-bold uppercase tracking-widest">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white border border-slate-200 rounded-2xl p-12 mt-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase relative z-10">Stay Updated</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium relative z-10">
              Get the latest insights on technology, business strategy, and digital transformation delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4 relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none font-medium"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

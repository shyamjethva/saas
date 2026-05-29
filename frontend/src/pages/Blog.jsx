import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise Software Development",
      excerpt: "Exploring emerging trends and technologies shaping the next generation of business solutions...",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "future-tech",
      content: "Detailed content about enterprise software development trends..."
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Best practices for designing cloud-native architectures that grow with your business needs...",
      date: "March 10, 2024",
      category: "Infrastructure",
      readTime: "8 min read",
      image: "cloud-infrastructure",
      content: "Detailed content about cloud infrastructure best practices..."
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt: "How leading companies are leveraging technology to drive business growth and innovation...",
      date: "March 5, 2024",
      category: "Case Studies",
      readTime: "6 min read",
      image: "transformation",
      content: "Detailed content about digital transformation case studies..."
    },
    {
      id: 4,
      title: "Cybersecurity in the Modern Enterprise",
      excerpt: "Protecting your business assets with comprehensive security strategies and best practices...",
      date: "February 28, 2024",
      category: "Security",
      readTime: "7 min read",
      image: "cybersecurity",
      content: "Detailed content about enterprise cybersecurity..."
    },
    {
      id: 5,
      title: "Agile Development Methodologies",
      excerpt: "Maximizing efficiency and collaboration through proven agile frameworks and practices...",
      date: "February 22, 2024",
      category: "Development",
      readTime: "4 min read",
      image: "agile",
      content: "Detailed content about agile development methodologies..."
    },
    {
      id: 6,
      title: "AI Integration for Business Growth",
      excerpt: "Leveraging artificial intelligence to automate processes and gain competitive advantages...",
      date: "February 18, 2024",
      category: "Artificial Intelligence",
      readTime: "9 min read",
      image: "ai-business",
      content: "Detailed content about AI integration in business..."
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory ||
      (selectedCategory === 'AI' && post.category === 'Artificial Intelligence'));

  const categories = ['All', 'Technology', 'Infrastructure', 'Case Studies', 'Security', 'Development', 'AI'];

  return (
    <main className="homepage-monochrome min-h-screen premium-bg relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-600">insights</span>
              <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Strategic Insights</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Platform <span className="text-slate-500">Intelligence.</span>
            </h1>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Expert analysis, technical roadmaps, and enterprise strategy for the modern digital era.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full border transition-all font-black uppercase tracking-widest text-[10px] ${selectedCategory === category
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200/50'
                    : 'bg-white/80 backdrop-blur-sm text-slate-500 border-slate-200 hover:border-blue-400 hover:text-slate-900 shadow-sm'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-md rounded-consistent-2xl overflow-hidden border border-slate-100 hover:border-blue-400/50 transition-all duration-300 shadow-2xl shadow-slate-200/50 group"
              >
                {/* Post Image Container */}
                <div className="h-64 bg-slate-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-10">
                  <div className="flex items-center gap-4 text-slate-400 font-black uppercase tracking-widest text-[10px] mb-6">
                    <span>{post.date}</span>
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 font-light mb-8 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Expanded Content */}
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 p-8 bg-slate-50/50 rounded-consistent-xl border border-slate-100"
                    >
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        {post.content}
                      </p>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className="text-blue-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group/btn"
                  >
                    {expandedPost === post.id ? 'Minimize Analysis' : 'Expand intelligence'}
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-y-1">
                      {expandedPost === post.id ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 relative border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-slate-200/50">
              <span className="material-symbols-outlined text-3xl text-white font-black">mail</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter">Stay <span className="text-slate-500">Synchronized.</span></h2>
            <p className="text-xl text-slate-500 mb-12 font-light">
              Join 5,000+ enterprise leaders receiving our weekly strategic analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Chief Strategy Officer @ Company"
                className="flex-[2] px-8 py-5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] px-8 py-5 rounded-full shadow-2xl shadow-slate-200/50 hover:bg-blue-600 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Strategic <span className="text-slate-500">Authors.</span></h2>
            <p className="text-xl text-slate-500 font-light">Industry architects leading the digital transformation discourse.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Chief Technology Officer', posts: 24, specialty: 'AI Architecture' },
              { name: 'James Wilson', role: 'Lead Infrastructure', posts: 18, specialty: 'Cloud Nexus' },
              { name: 'Priya Sharma', role: 'Security Ops', posts: 15, specialty: 'Cyber Defence' }
            ].map((author, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-consistent-2xl p-10 text-center border border-slate-100 hover:border-blue-400/50 transition-all shadow-2xl shadow-slate-200/50 group"
              >
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-slate-900 transition-all group-hover:border-slate-900">
                  <span className="text-2xl font-black text-blue-600 group-hover:text-white transition-colors">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{author.name}</h3>
                <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">{author.role}</div>
                <div className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-8">{author.specialty}</div>
                <div className="pt-8 border-t border-slate-100">
                  <span className="font-black text-slate-900 text-xl">{author.posts}</span>
                  <span className="text-slate-400 font-black uppercase tracking-widest text-[9px] ml-2">Strategic Reports</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

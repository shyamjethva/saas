import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import BlogPostModal from '../components/BlogPostModal';
import { sampleBlogPosts } from '../data/blogPosts';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedBlog(null);
    }, 300); // Allow animation to complete
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-green-400">article</span>
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Industry Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest from Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                Blog
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, insights, and strategies in technology, business, and digital transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard
                  blog={blog}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      <BlogPostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blogPost={selectedBlog}
      />
    </div>
  );
};

export default BlogPage;
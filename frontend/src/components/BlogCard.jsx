import { motion } from 'framer-motion';

const BlogCard = ({ blog, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl p-6 border border-white/10 transition-all duration-300 group backdrop-blur-sm"
    >
      {/* Featured Image */}
      <div className="relative rounded-xl overflow-hidden mb-6">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/80 to-blue-500/80 text-white text-xs font-bold">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-slate-400 text-sm mb-2">{blog.excerpt}</p>
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {blog.author.charAt(0)}
          </div>
          <span>{blog.author}</span>
        </div>
        <span>{blog.date}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-6">
        {blog.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-white/10 text-slate-400 rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
        {blog.tags.length > 3 && (
          <span className="px-2 py-1 bg-white/10 text-slate-400 rounded-full text-xs">
            +{blog.tags.length - 3}
          </span>
        )}
      </div>

      {/* Read More Button */}
      <button
        onClick={() => onViewDetails(blog)}
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 group"
      >
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
          article
        </span>
        Read Detailed Article
      </button>
    </motion.div>
  );
};

export default BlogCard;
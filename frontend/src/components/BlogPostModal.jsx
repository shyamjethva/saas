import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BlogPostModal = ({ isOpen, onClose, blogPost }) => {
  const [activeTab, setActiveTab] = useState('article');

  if (!blogPost) return null;

  const tabs = [
    { id: 'article', label: 'Article', icon: 'article' },
    { id: 'author', label: 'About Author', icon: 'person' },
    { id: 'related', label: 'Related Posts', icon: 'topic' },
    { id: 'comments', label: 'Comments', icon: 'comment' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-consistent-3xl border border-slate-200 shadow-[0_0_100px_rgba(0,0,0,0.1)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200 p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter font-space-grotesk">{blogPost.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">person</span>
                      {blogPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {blogPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">tag</span>
                      {blogPost.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-[116px] z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-8">
              <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all whitespace-nowrap ${activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Article Tab */}
              {activeTab === 'article' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Featured Image */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={blogPost.featuredImage}
                      alt={blogPost.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none">
                    <div className="text-slate-600 leading-relaxed space-y-6">
                      {blogPost.content.map((section, index) => (
                        <div key={index} className="space-y-4">
                          {section.type === 'paragraph' ? (
                            <p className="text-slate-600 leading-relaxed">
                              {section.content}
                            </p>
                          ) : section.type === 'heading' ? (
                            <h3 className="text-2xl font-black text-slate-900 mt-8 mb-4 tracking-tight">
                              {section.content}
                            </h3>
                          ) : section.type === 'subheading' ? (
                            <h4 className="text-xl font-bold text-blue-600 mt-6 mb-3">
                              {section.content}
                            </h4>
                          ) : section.type === 'list' ? (
                            <ul className="space-y-2 ml-6">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-slate-600">
                                  <span className="text-blue-600 mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-slate-600 leading-relaxed font-medium">
                              {section}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-6">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <span className="text-slate-400 font-medium">Share:</span>
                    <div className="flex gap-2">
                      {['share', 'favorite_border', 'visibility'].map((icon, index) => (
                        <button
                          key={index}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">{
                            icon === 'share' ? 'share' :
                              icon === 'favorite_border' ? 'favorite_border' : 'visibility'
                          }</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Author Tab */}
              {activeTab === 'author' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-2xl">
                      {blogPost.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{blogPost.author}</h3>
                      <p className="text-green-400 font-medium">{blogPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">About the Author</h4>
                    <p className="text-slate-600 leading-relaxed">{blogPost.authorBio}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="glass-card rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-green-400">{blogPost.authorPosts}</div>
                      <div className="text-slate-400 text-sm">Articles</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-blue-400">{blogPost.authorFollowers}</div>
                      <div className="text-slate-400 text-sm">Followers</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-purple-400">{blogPost.authorRating}/5</div>
                      <div className="text-slate-400 text-sm">Rating</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Related Posts Tab */}
              {activeTab === 'related' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPost.relatedPosts.map((post, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-xl p-4 border border-white/10  transition-all cursor-pointer"
                      >
                        <h4 className="font-bold text-slate-900 mb-2">{post.title}</h4>
                        <p className="text-slate-400 text-sm mb-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Comments Tab */}
              {activeTab === 'comments' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Comments ({blogPost.comments.length})</h3>

                  {/* Comment Form */}
                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                    <h4 className="font-bold text-white mb-4">Leave a Comment</h4>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-green-500 focus:outline-none"
                      />
                      <textarea
                        placeholder="Write your comment..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-green-500 focus:outline-none resize-none"
                      ></textarea>
                      <button className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-all">
                        Post Comment
                      </button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {blogPost.comments.map((comment, index) => (
                      <div key={index} className="glass-card rounded-xl p-4 border border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                            {comment.author.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-white">{comment.author}</span>
                              <span className="text-slate-400 text-sm">•</span>
                              <span className="text-slate-400 text-sm">{comment.date}</span>
                            </div>
                            <p className="text-slate-600 text-sm">{comment.text}</p>
                            <div className="flex gap-4 mt-2">
                              <button className="text-slate-400 hover:text-green-400 text-sm">Like ({comment.likes})</button>
                              <button className="text-slate-400 hover:text-blue-400 text-sm">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlogPostModal;

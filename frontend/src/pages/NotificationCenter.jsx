import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NotificationCenter = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'system',
      title: 'New Feature Release',
      message: 'AI Analytics Dashboard is now available for all clients',
      time: '2 minutes ago',
      unread: true,
      priority: 'high',
      icon: 'rocket_launch'
    },
    {
      id: 2,
      type: 'project',
      title: 'Project Update',
      message: 'Client TechCorp Solutions approved the latest milestone deliverables',
      time: '15 minutes ago',
      unread: true,
      priority: 'medium',
      icon: 'check_circle'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Payment Due Reminder',
      message: 'Invoice #INV-2024-00123 is due in 3 days',
      time: '1 hour ago',
      unread: false,
      priority: 'high',
      icon: 'notifications_active'
    },
    {
      id: 4,
      type: 'message',
      title: 'Team Message',
      message: 'Meeting scheduled for tomorrow at 10:30 AM - Project Kickoff',
      time: '3 hours ago',
      unread: true,
      priority: 'medium',
      icon: 'group'
    },
    {
      id: 5,
      type: 'system',
      title: 'Security Update',
      message: 'Your account password will expire in 7 days. Please update it.',
      time: '5 hours ago',
      unread: false,
      priority: 'high',
      icon: 'security'
    },
    {
      id: 6,
      type: 'project',
      title: 'Client Feedback',
      message: 'MediCare Hospitals provided positive feedback on Phase 2 delivery',
      time: '1 day ago',
      unread: false,
      priority: 'low',
      icon: 'thumb_up'
    },
    {
      id: 7,
      type: 'reminder',
      title: 'Contract Renewal',
      message: 'EduSmart Academy contract expires in 15 days. Renewal proposal sent.',
      time: '1 day ago',
      unread: true,
      priority: 'high',
      icon: 'event_repeat'
    },
    {
      id: 8,
      type: 'message',
      title: 'HR Announcement',
      message: 'New company policies will be effective from next month',
      time: '2 days ago',
      unread: false,
      priority: 'low',
      icon: 'announcement'
    }
  ]);

  const tabs = [
    { id: 'all', label: 'All Notifications', icon: 'notifications' },
    { id: 'unread', label: 'Unread', icon: 'mark_email_unread' },
    { id: 'system', label: 'System', icon: 'settings' },
    { id: 'project', label: 'Projects', icon: 'work' },
    { id: 'reminder', label: 'Reminders', icon: 'alarm' },
    { id: 'message', label: 'Messages', icon: 'chat' }
  ];

  const priorityColors = {
    high: 'from-red-500 to-orange-500',
    medium: 'from-blue-500 to-cyan-500',
    low: 'from-green-500 to-emerald-500'
  };

  const priorityIcons = {
    high: 'priority_high',
    medium: 'info',
    low: 'low_priority'
  };

  const filteredNotifications = activeTab === 'all'
    ? notifications
    : activeTab === 'unread'
      ? notifications.filter(n => n.unread)
      : notifications.filter(n => n.type === activeTab);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-purple-400">notifications</span>
              <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">NOTIFICATION CENTER</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Stay Updated With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Real-Time Alerts
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Never miss important updates, project milestones, or critical reminders with our intelligent notification system.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white/80 rounded-xl p-4 border border-slate-200 backdrop-blur-sm shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-slate-900">{notifications.length}</div>
                <div className="text-slate-500 text-sm font-medium">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">{unreadCount}</div>
                <div className="text-slate-500 text-sm font-medium">Unread</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-green-600">
                  {Math.round((unreadCount / notifications.length) * 100) || 0}%
                </div>
                <div className="text-slate-500 text-sm font-medium">Read Rate</div>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${unreadCount > 0
                  ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-outlined text-sm">done_all</span>
                Mark All Read
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearAll}
                disabled={notifications.length === 0}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${notifications.length > 0
                  ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                Clear All
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                {tab.label}
                {tab.id === 'unread' && unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {filteredNotifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-slate-400 text-4xl">notifications_off</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Notifications</h3>
              <p className="text-slate-400">
                {activeTab === 'unread'
                  ? "You're all caught up! No unread notifications."
                  : "No notifications in this category."
                }
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className={`bg-white rounded-xl p-6 border transition-all duration-300 shadow-md relative overflow-hidden group ${notification.unread
                      ? 'border-blue-500/30 bg-blue-50/50 shadow-blue-500/10 hover:border-blue-500/50'
                      : `border-slate-200 shadow-md hover:shadow-xl ${priorityColors[notification.priority].includes('red') ? 'hover:border-red-500/50' :
                        priorityColors[notification.priority].includes('blue') ? 'hover:border-blue-500/50' :
                          'hover:border-emerald-500/50'
                      }`
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${priorityColors[notification.priority]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${priorityColors[notification.priority]} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-white">
                        {notification.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-black ${notification.unread ? 'text-slate-900' : 'text-slate-700'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-slate-400 text-sm">
                            {priorityIcons[notification.priority]}
                          </span>
                          <span className="text-slate-500 text-sm">{notification.time}</span>
                          {notification.unread && (
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          )}
                        </div>
                      </div>

                      <p className={`mb-3 font-medium ${notification.unread ? 'text-slate-700' : 'text-slate-500'}`}>
                        {notification.message}
                      </p>

                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${notification.type === 'system' ? 'bg-blue-500/20 text-blue-400' :
                          notification.type === 'project' ? 'bg-green-500/20 text-green-400' :
                            notification.type === 'reminder' ? 'bg-orange-500/20 text-orange-400' :
                              'bg-purple-500/20 text-purple-400'
                          }`}>
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>

                        {notification.unread && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => markAsRead(notification.id)}
                            className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                          >
                            Mark as Read
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
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
    medium: 'from-blue-700 to-sky-500',
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
    <div className="min-h-screen premium-bg pt-12">
      {/* Header Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-emerald text-sm font-black">notifications_active</span>
              <span className="text-blue-emerald font-black tracking-widest uppercase text-[10px]">NOTIFICATION CENTER</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[1.1] heading-underline active pb-2">
              Strategic Event &
              <span className="block text-premium-gradient">
                Alert Monitoring
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Real-time monitoring and priority filtering for all enterprise-wide events and system communications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-6 py-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-8 bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="flex items-center gap-12 relative z-10">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-1">{notifications.length}</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-emerald mb-1">{unreadCount}</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Unread Alert</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-1">
                  {Math.round(((notifications.length - unreadCount) / notifications.length) * 100) || 0}%
                </div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Read Rate</div>
              </div>
            </div>

            <div className="flex gap-4 relative z-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 ${unreadCount > 0
                  ? 'bg-blue-emerald text-white shadow-xl shadow-blue-500/20 hover:bg-blue-600/90'
                  : 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-outlined text-sm font-black">done_all</span>
                Mark All Read
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={clearAll}
                disabled={notifications.length === 0}
                className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 ${notifications.length > 0
                  ? 'bg-white text-slate-900 border border-slate-200 hover:border-slate-800'
                  : 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-outlined text-sm font-black">delete_sweep</span>
                Archive All
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 relative ${activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-2xl'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-800 hover:text-slate-900'
                  }`}
              >
                <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
                {tab.label}
                {tab.id === 'unread' && unreadCount > 0 && (
                  <span className="bg-blue-emerald text-white text-[10px] font-black rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    {unreadCount}
                  </span>
                )}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-emerald rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-5xl mx-auto">
          {filteredNotifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200"
            >
              <span className="material-symbols-outlined text-slate-200 text-7xl mb-6 block">notifications_off</span>
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">No notification events found</p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-[3rem] p-10 border transition-all duration-500 shadow-xl relative overflow-hidden group ${notification.unread
                    ? 'border-emerald-200 shadow-[0_32px_64px_-16px_rgba(16,185,129,0.1)]'
                    : 'border-slate-200 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]'
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${priorityColors[notification.priority]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>

                  {notification.unread && (
                    <div className="absolute top-0 right-0 p-8">
                      <span className="w-3 h-3 rounded-full bg-blue-emerald block shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${priorityColors[notification.priority]} flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <span className="material-symbols-outlined text-white text-3xl font-black">
                        {notification.icon}
                      </span>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                          {notification.title}
                        </h3>
                        <div className="flex items-center justify-center md:justify-end gap-4">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{notification.time}</span>
                          <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${notification.priority === 'high' ? 'bg-red-50 text-red-600 border-red-100' :
                            notification.priority === 'medium' ? 'bg-emerald-50 text-blue-emerald border-emerald-100' :
                              'bg-slate-50 text-slate-500 border-slate-100'
                            }`}>
                            {notification.priority}
                          </span>
                        </div>
                      </div>

                      <p className="text-lg text-slate-500 font-medium leading-relaxed mb-6">
                        {notification.message}
                      </p>

                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <div className={`flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 font-black uppercase tracking-widest text-[9px]`}>
                          <span className="material-symbols-outlined text-xs">category</span>
                          {notification.type}
                        </div>

                        {notification.unread && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => markAsRead(notification.id)}
                            className="bg-blue-emerald text-white font-black px-6 py-2 rounded-xl text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-600/90 transition-all"
                          >
                            Acknowledge Alert
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

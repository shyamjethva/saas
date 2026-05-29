import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [activityData, setActivityData] = useState([]);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('clientToken');
    const userData = localStorage.getItem('clientUserData');
    
    if (token && userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        setUserData(parsedUserData);
        setIsLoggedIn(true);
        fetchDashboardData(token);
        fetchActivityData(token);
      } catch (e) {
        localStorage.removeItem('clientToken');
        localStorage.removeItem('clientUserData');
      }
    }
  }, []);

  const fetchDashboardData = async (token) => {
    try {
      const response = await fetch('http://localhost:5001/api/client-portal/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setDashboardData(data.data);
      } else {
        console.error('Failed to fetch dashboard data:', data.error);
      }
    } catch (error) {
      console.error('Dashboard fetch error:', error);
    }
  };

  const fetchActivityData = async (token) => {
    try {
      const response = await fetch('http://localhost:5001/api/client-portal/activity', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setActivityData(data.data);
      } else {
        console.error('Failed to fetch activity data:', data.error);
        // Use mock data if API fails
        setActivityData([
          { id: 1, action: "Project milestone completed", project: "E-Commerce Platform", time: "2 hours ago", type: "milestone" },
          { id: 2, action: "New document uploaded", project: "Mobile Banking App", time: "5 hours ago", type: "document" },
          { id: 3, action: "Team meeting scheduled", project: "CRM System", time: "1 day ago", type: "meeting" },
          { id: 4, action: "Payment received", project: "E-Commerce Platform", time: "2 days ago", type: "payment" }
        ]);
      }
    } catch (error) {
      console.error('Activity fetch error:', error);
      // Use mock data if API fails
      setActivityData([
        { id: 1, action: "Project milestone completed", project: "E-Commerce Platform", time: "2 hours ago", type: "milestone" },
        { id: 2, action: "New document uploaded", project: "Mobile Banking App", time: "5 hours ago", type: "document" },
        { id: 3, action: "Team meeting scheduled", project: "CRM System", time: "1 day ago", type: "meeting" },
        { id: 4, action: "Payment received", project: "E-Commerce Platform", time: "2 days ago", type: "payment" }
      ]);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5001/api/client-portal/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store token and user data
        localStorage.setItem('clientToken', data.token);
        localStorage.setItem('clientUserData', JSON.stringify(data.user));
        
        setUserData(data.user);
        setIsLoggedIn(true);
        fetchDashboardData(data.token);
        fetchActivityData(data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('clientToken');
    localStorage.removeItem('clientUserData');
    setIsLoggedIn(false);
    setUserData(null);
    setDashboardData(null);
    setActivityData([]);
    setUsername('');
    setPassword('');
  };

  const projects = dashboardData?.projects || [
    {
      id: 1,
      name: "E-Commerce Platform Redesign",
      status: "In Progress",
      progress: 75,
      dueDate: "Apr 15, 2024",
      team: 4
    },
    {
      id: 2,
      name: "Mobile Banking App",
      status: "Review",
      progress: 90,
      dueDate: "Mar 30, 2024",
      team: 6
    },
    {
      id: 3,
      name: "CRM System Integration",
      status: "Completed",
      progress: 100,
      dueDate: "Feb 28, 2024",
      team: 3
    }
  ];

  const recentActivity = activityData.length > 0 ? activityData : [
    { id: 1, action: "Project milestone completed", project: "E-Commerce Platform", time: "2 hours ago" },
    { id: 2, action: "New document uploaded", project: "Mobile Banking App", time: "5 hours ago" },
    { id: 3, action: "Team meeting scheduled", project: "CRM System", time: "1 day ago" },
    { id: 4, action: "Payment received", project: "E-Commerce Platform", time: "2 days ago" }
  ];

  const stats = dashboardData?.stats || {
    activeProjects: 8,
    completedProjects: 12,
    totalTeamMembers: 24,
    totalHoursLogged: 1240
  };

  if (!isLoggedIn) {
    return (
      <main className="pt-24 pb-12 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-white text-2xl">lock</span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Client Portal</h1>
              <p className="text-slate-400">Sign in to access your projects and resources</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-consistent-md text-red-300 text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Username or Email</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-consistent-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your username or email"
                  required
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-consistent-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-purple-500 text-white font-bold h-12 rounded-consistent-md transition-all shadow-[0_0_20px_rgba(56,105,250,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </motion.button>
              
              <div className="text-center">
                <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">
                  Forgot your password?
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-12 px-6">
      {/* Welcome Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{userData?.companyName || 'Client'}!</span>
              </h1>
              <p className="text-slate-400">Manage your projects and track progress in real-time</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-consistent-md border border-white/20 transition-all"
              >
                <span className="material-symbols-outlined mr-2">notifications</span>
                Notifications
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-4 py-2 rounded-consistent-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined">logout</span>
                Logout
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Active Projects", value: stats.activeProjects, icon: "folder", color: "from-blue-700 to-sky-500" },
              { title: "Completed Projects", value: stats.completedProjects, icon: "check_circle", color: "from-green-500 to-teal-500" },
              { title: "Team Members", value: stats.totalTeamMembers, icon: "groups", color: "from-purple-500 to-pink-500" },
              { title: "Hours Logged", value: stats.totalHoursLogged.toLocaleString(), icon: "schedule", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-consistent-md bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-white">{stat.icon}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Activity */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Your Projects</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1"
                >
                  View All
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.button>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10  transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{project.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                      <span>Progress: {project.progress}%</span>
                      <span>Due: {project.dueDate}</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                      <div 
                        className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-xs">groups</span>
                        {project.team} team members
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-primary text-sm font-semibold"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-white/10 sticky top-24"
            >
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-consistent-md border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white text-sm font-medium">{activity.action}</p>
                      <p className="text-slate-400 text-xs">{activity.project}</p>
                      <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 rounded-consistent-md border border-white/20 transition-all"
              >
                View All Activity
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Upload Documents", icon: "upload_file", color: "from-blue-700 to-sky-500" },
                { title: "Schedule Meeting", icon: "event", color: "from-purple-500 to-pink-500" },
                { title: "Request Changes", icon: "edit", color: "from-green-500 to-teal-500" },
                { title: "View Reports", icon: "bar_chart", color: "from-orange-500 to-red-500" }
              ].map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10  transition-all duration-300 text-center group"
                >
                  <div className={`w-12 h-12 rounded-consistent-md bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-white">{action.icon}</span>
                  </div>
                  <div className="text-white font-semibold text-sm">{action.title}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ClientPortal;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { userAPI } from '../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch real user data
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await userAPI.getAllUsers();
      const userData = response.data || [];

      // Transform data to match component structure
      const transformedUsers = userData.map(user => ({
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        lastLogin: user.lastLogin || 'Never',
        ip: user.ip || 'N/A'
      }));

      setUsers(transformedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Fallback to mock data
      setUsers([
        {
          id: 1,
          name: 'Rajesh Patel',
          email: 'rajesh@errorinfotech.com',
          role: 'Admin',
          status: 'Active',
          lastLogin: '2 hours ago',
          ip: '192.168.1.100'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Employee',
    status: 'Active'
  });

  const roles = ['Admin', 'Manager', 'Employee', 'Client'];
  const permissions = {
    Admin: ['All Access', 'User Management', 'Billing', 'Projects', 'Clients'],
    Manager: ['Team Management', 'Projects', 'Clients', 'Reports'],
    Employee: ['Assigned Projects', 'Client Communication', 'Tasks'],
    Client: ['Own Projects', 'Billing', 'Support Tickets']
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      const user = {
        ...newUser,
        id: users.length + 1,
        lastLogin: 'Never',
        ip: 'N/A'
      };
      setUsers([...users, user]);
      setNewUser({ name: '', email: '', role: 'Employee', status: 'Active' });
      setShowAddUser(false);
    }
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' }
        : user
    ));
  };

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">groups</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">IDENTITY INFRASTRUCTURE</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  User Governance
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    & Permission Matrix
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Orchestrate platform access, manage high-level administrative roles, and audit security protocols across your organizational hierarchy.
                </p>

                {loading && (
                  <div className="flex items-center gap-3 mt-8 px-5 py-3 bg-blue-50 rounded-2xl border border-blue-100 w-fit">
                    <div className="w-5 h-5 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Synchronizing Directory...</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchUsers}
                  disabled={loading}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl border border-slate-200 font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-xl hover:border-slate-900"
                >
                  <span className="material-symbols-outlined text-sm font-black">sync</span>
                  Refresh Directory
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddUser(true)}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">person_add</span>
                  Engineer Identity
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Identity Volume" value={users.length} icon="groups" color="blue" />
          <StatCard title="Active Protocols" value={users.filter(u => u.status === 'Active').length} icon="verified" color="indigo" />
          <StatCard title="Administrative Tier" value={users.filter(u => u.role === 'Admin').length} icon="admin_panel_settings" color="purple" />
          <StatCard title="Partner Entities" value={users.filter(u => u.role === 'Client').length} icon="business" color="blue" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* User Directory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs">Directory Ledger</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Identity</th>
                    <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Governance Tier</th>
                    <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Status Index</th>
                    <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Last Access</th>
                    <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Network Origin</th>
                    <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-10 py-8">
                        <div>
                          <p className="text-slate-900 font-black tracking-tight">{user.name}</p>
                          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${user.role === 'Admin' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' :
                          user.role === 'Manager' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' :
                            user.role === 'Employee' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' :
                              'bg-slate-100 text-slate-400'
                          }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-8 py-8">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${user.status === 'Active'
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-400'
                          }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-8 py-8 text-slate-500 text-xs font-black italic">{user.lastLogin}</td>
                      <td className="px-8 py-8 text-slate-400 text-[10px] font-black tracking-widest">{user.ip}</td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => toggleUserStatus(user.id)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-slate-200 transition-all ${user.status === 'Active' ? 'bg-white text-slate-400 hover:text-red-600 hover:border-red-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                          >
                            <span className="material-symbols-outlined text-sm font-black">
                              {user.status === 'Active' ? 'block' : 'check'}
                            </span>
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm hover:border-slate-900">
                            <span className="material-symbols-outlined text-sm font-black">edit</span>
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm hover:border-slate-900">
                            <span className="material-symbols-outlined text-sm font-black">key</span>
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Permissions Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-indigo-50"></div>
            <h2 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Governance Matrix</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {roles.map(role => (
                <div key={role} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/role">
                  <h3 className={`text-xl font-black tracking-tighter mb-6 ${role === 'Admin' ? 'text-purple-600' :
                    role === 'Manager' ? 'text-blue-600' :
                      role === 'Employee' ? 'text-indigo-600' :
                        'text-slate-900'
                    }`}>
                    {role}
                  </h3>
                  <ul className="space-y-4">
                    {permissions[role].map((permission, idx) => (
                      <li key={idx} className="text-slate-500 text-xs font-bold flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover/role:bg-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-blue-600 text-[10px] font-black group-hover/role:text-white transition-colors">check</span>
                        </div>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 w-full max-w-xl border border-slate-200 shadow-[0_64px_128px_-24px_rgba(0,0,0,0.15)] overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"></div>
            <h3 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter">Engineer Identity</h3>

            <div className="space-y-8">
              <div>
                <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Identity Full Name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                  placeholder="Legal identity name"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Network Identity (Email)</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                  placeholder="Official communication channel"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Governance Access Tier</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold appearance-none cursor-pointer"
                >
                  {roles.filter(r => r !== 'Client').map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <button
                onClick={addUser}
                className="flex-1 bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all"
              >
                Incorporate Identity
              </button>
              <button
                onClick={() => setShowAddUser(false)}
                className="px-10 bg-white text-slate-400 border border-slate-100 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all"
              >
                Abort
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all group"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{title}</p>
        <p className="text-4xl font-black text-slate-900 tracking-tight">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

export default UserManagement;
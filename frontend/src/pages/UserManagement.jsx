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
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">User Management</h1>
          <p className="text-slate-400">Manage users, roles, and permissions</p>
          {loading && (
            <div className="flex items-center gap-2 mt-2 text-sm text-blue-400">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              Loading users from MongoDB...
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchUsers}
            disabled={loading}
            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-lg">refresh</span>
            {loading ? 'Loading...' : 'Refresh'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddUser(true)}
            className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <span className="material-symbols-outlined">person_add</span>
            Add User
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Users', value: users.length, icon: 'groups', color: 'blue' },
          { title: 'Active', value: users.filter(u => u.status === 'Active').length, icon: 'check_circle', color: 'green' },
          { title: 'Admins', value: users.filter(u => u.role === 'Admin').length, icon: 'admin_panel_settings', color: 'purple' },
          { title: 'Clients', value: users.filter(u => u.role === 'Client').length, icon: 'business', color: 'yellow' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{stat.title}</p>
                <p className={`text-3xl font-bold mt-2 text-${stat.color}-400`}>{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20`}>
                <span className={`material-symbols-outlined text-${stat.color}-400 text-2xl`}>
                  {stat.icon}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
      >
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">User Directory</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-slate-300 font-semibold">User</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Role</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Last Login</th>
                <th className="text-left p-4 text-slate-300 font-semibold">IP Address</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4">
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-slate-400 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' :
                        user.role === 'Manager' ? 'bg-blue-500/20 text-blue-400' :
                          user.role === 'Employee' ? 'bg-green-500/20 text-green-400' :
                            'bg-yellow-500/20 text-yellow-400'
                      }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">{user.lastLogin}</td>
                  <td className="p-4 text-slate-300">{user.ip}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`p-2 rounded-lg ${user.status === 'Active'
                            ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400'
                            : 'bg-green-500/20 hover:bg-green-500/30 text-green-400'
                          } transition-colors`}
                      >
                        <span className="material-symbols-outlined">
                          {user.status === 'Active' ? 'block' : 'check'}
                        </span>
                      </button>
                      <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 transition-colors">
                        <span className="material-symbols-outlined">key</span>
                      </button>
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
        transition={{ delay: 0.6 }}
        className="mt-8 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-6">Role Permissions Matrix</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map(role => (
            <div key={role} className="bg-white/5 rounded-xl p-4">
              <h3 className={`font-bold mb-3 ${role === 'Admin' ? 'text-purple-400' :
                  role === 'Manager' ? 'text-blue-400' :
                    role === 'Employee' ? 'text-green-400' :
                      'text-yellow-400'
                }`}>
                {role}
              </h3>
              <ul className="space-y-2">
                {permissions[role].map((permission, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background-dark rounded-2xl p-6 w-full max-w-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Add New User</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                >
                  {roles.filter(r => r !== 'Client').map(role => (
                    <option key={role} value={role} className="bg-background-dark">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={addUser}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all"
              >
                Add User
              </button>
              <button
                onClick={() => setShowAddUser(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
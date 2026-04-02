import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectAPI } from '../services/api';

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    status: 'Planning',
    startDate: '',
    endDate: '',
    budget: ''
  });

  // Fetch real project data
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await projectAPI.getAllProjects();
      const projectData = response.data || [];

      // Transform data to match component structure
      const transformedProjects = projectData.map(project => ({
        id: project._id || project.id,
        name: project.projectName || project.name,
        client: project.clientName || project.client,
        status: project.status || 'Planning',
        progress: project.progress || 0,
        startDate: project.startDate || '',
        endDate: project.endDate || '',
        team: project.team || [],
        budget: project.budget || 0,
        spent: project.spent || 0
      }));

      setProjects(transformedProjects);

      // Set some mock tasks for demonstration
      const mockTasks = transformedProjects.flatMap(project =>
        Array.from({ length: 3 }, (_, i) => ({
          id: `${project.id}-${i + 1}`,
          title: `Task ${i + 1} for ${project.name}`,
          status: ['To Do', 'In Progress', 'Review', 'Done'][i % 4],
          priority: ['Low', 'Medium', 'High'][i % 3],
          assignee: ['Rajesh', 'Priya', 'Amit', 'Sneha'][i % 4],
          projectId: project.id
        }))
      );
      setTasks(mockTasks);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to mock data
      setProjects([
        {
          id: 1,
          name: 'E-commerce Platform Redesign',
          client: 'TechCorp Solutions',
          status: 'In Progress',
          progress: 75,
          startDate: '2024-01-01',
          endDate: '2024-03-31',
          team: ['Rajesh', 'Priya', 'Amit'],
          budget: 250000,
          spent: 187500
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const taskColumns = ['To Do', 'In Progress', 'Review', 'Done'];
  const priorities = ['Low', 'Medium', 'High', 'Critical'];

  const getProjectStats = () => ({
    total: projects.length,
    active: projects.filter(p => p.status === 'In Progress').length,
    completed: projects.filter(p => p.status === 'Completed').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0)
  });

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
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">architecture</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">PROJECT ORCHESTRATION</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Precision Project
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    Lifecycle Governance
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Centralized command center for tracking cross-functional projects, task execution, and high-performance team collaboration.
                </p>

                {loading && (
                  <div className="flex items-center gap-3 mt-8 px-5 py-3 bg-blue-50 rounded-2xl border border-blue-100 w-fit">
                    <div className="w-5 h-5 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Compiling Lifecycle Metrics...</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchProjects}
                  disabled={loading}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl border border-slate-200 font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-xl hover:border-slate-900 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm font-black">refresh</span>
                  Sync Lifecycle
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">add_task</span>
                  Initiate Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {[
            { id: 'dashboard', label: 'Command Center', icon: 'dashboard' },
            { id: 'kanban', label: 'Adaptive Kanban', icon: 'view_kanban' },
            { id: 'projects', label: 'Project Portfolio', icon: 'folder' }
          ].map(tab => (
            <motion.button
              key={tab.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 relative ${activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-2xl'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-800'
                }`}
            >
              <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="project-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Portfolio Volume" value={getProjectStats().total} icon="folder" color="blue" />
          <StatCard title="Active Sprints" value={getProjectStats().active} icon="bolt" color="indigo" />
          <StatCard title="Delivered Milestones" value={getProjectStats().completed} icon="verified" color="purple" />
          <StatCard title="Capital Allocation" value={`₹${(getProjectStats().totalBudget / 100000).toFixed(1)}M`} icon="payments" color="blue" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'dashboard' && (
            <ProjectDashboard projects={projects} />
          )}

          {activeTab === 'kanban' && (
            <KanbanBoard tasks={tasks} setTasks={setTasks} columns={taskColumns} priorities={priorities} />
          )}

          {activeTab === 'projects' && (
            <ProjectList projects={projects} setProjects={setProjects} />
          )}
        </div>
      </div>
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

const ProjectDashboard = ({ projects }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
  >
    {/* Project List */}
    <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-50 transition-colors"></div>
      <h2 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Priority Projects</h2>

      <div className="space-y-6 relative z-10">
        {projects.slice(0, 3).map(project => (
          <motion.div
            key={project.id}
            whileHover={{ x: 5 }}
            className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all cursor-pointer group/item"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-slate-900 font-black tracking-tight">{project.name}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{project.client}</p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${project.status === 'In Progress' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' :
                'bg-white text-slate-400 border border-slate-200'
                }`}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex-1 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="bg-blue-600 h-full rounded-full"
                ></motion.div>
              </div>
              <span className="text-slate-900 font-black text-xs leading-none">{project.progress}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Resource Allocation */}
    <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-indigo-50 transition-colors"></div>
      <h2 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Human Capital Utilization</h2>

      <div className="space-y-8 relative z-10">
        {[
          { name: 'Rajesh Patel', projects: 2, utilization: 85 },
          { name: 'Priya Sharma', projects: 1, utilization: 60 },
          { name: 'Amit Kumar', projects: 2, utilization: 90 },
          { name: 'Sneha Gupta', projects: 1, utilization: 45 }
        ].map(member => (
          <div key={member.name} className="group/member">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-black text-xs">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-slate-900 font-black tracking-tight">{member.name}</span>
              </div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{member.projects} active lifecycle{member.projects > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.utilization}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className={`h-full rounded-full ${member.utilization > 85 ? 'bg-red-500' :
                    member.utilization > 70 ? 'bg-indigo-600' :
                      'bg-blue-600'
                    }`}
                ></motion.div>
              </div>
              <span className="text-[10px] font-black text-slate-900 leading-none">{member.utilization}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const KanbanBoard = ({ tasks, setTasks, columns, priorities }) => {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e, status) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== status) {
      setTasks(tasks.map(task =>
        task.id === draggedTask.id
          ? { ...task, status }
          : task
      ));
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-600 text-white shadow-lg shadow-red-500/20';
      case 'High': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20';
      case 'Medium': return 'bg-blue-600 text-white shadow-lg shadow-blue-500/20';
      case 'Low': return 'bg-slate-100 text-slate-400';
      default: return 'bg-slate-100 text-slate-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Adaptive Kanban</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Iterative workflow synchronization</p>
        </div>
        <button className="bg-slate-900 text-white font-black px-10 py-5 rounded-[2rem] flex items-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
          <span className="material-symbols-outlined text-sm font-black">add</span>
          New Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-[700px] overflow-hidden">
        {columns.map(column => {
          const columnTasks = tasks.filter(task => task.status === column);
          return (
            <motion.div
              key={column}
              onDragOver={(e) => handleDragOver(e, column)}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl flex flex-col h-full bg-slate-50/50"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                  <h3 className="text-slate-900 font-black uppercase text-[10px] tracking-widest">{column}</h3>
                </div>
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-black">
                  {columnTasks.length}
                </span>
              </div>

              <div className="space-y-5 overflow-y-auto pr-2 custom-scrollbar flex-1 pb-4">
                {columnTasks.map(task => (
                  <motion.div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task)}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-900 transition-all cursor-grab active:cursor-grabbing group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-slate-900 font-black text-xs leading-[1.4] tracking-tight pr-4">{task.title}</h4>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-900">
                          {task.assignee[0]}
                        </div>
                        <span className="text-slate-400 text-[10px] font-black uppercase tracking-tight">{task.assignee}</span>
                      </div>
                      <span className={`text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const ProjectList = ({ projects, setProjects }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
  >
    <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
      <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Portfolio Lifecycle Ledger</h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">lifecycle identity</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Partner entity</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">operational status</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">execution index</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">capital matrix</th>
            <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">operations</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {projects.map((project, index) => (
            <motion.tr
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="hover:bg-slate-50 transition-colors group"
            >
              <td className="px-10 py-8">
                <div>
                  <p className="text-slate-900 font-black tracking-tight">{project.name}</p>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">
                    {new Date(project.startDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })} – {new Date(project.endDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </td>
              <td className="px-8 py-8">
                <span className="text-slate-900 font-black text-[11px] uppercase tracking-tight">{project.client}</span>
              </td>
              <td className="px-8 py-8">
                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${project.status === 'In Progress' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' :
                  'bg-slate-100 text-slate-400'
                  }`}>
                  {project.status}
                </span>
              </td>
              <td className="px-8 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="bg-blue-600 h-full rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-slate-900 font-black text-[10px]">{project.progress}%</span>
                </div>
              </td>
              <td className="px-8 py-8">
                <div>
                  <p className="text-slate-900 font-black tracking-tight">₹{(project.budget / 1000).toFixed(0)}k</p>
                  <p className="text-slate-400 text-[10px] font-black mt-1">₹{(project.spent / 1000).toFixed(0)}k consumed</p>
                </div>
              </td>
              <td className="px-10 py-8 text-right">
                <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                    <span className="material-symbols-outlined text-sm font-black">visibility</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm hover:border-slate-900">
                    <span className="material-symbols-outlined text-sm font-black">edit</span>
                  </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default ProjectManagement;
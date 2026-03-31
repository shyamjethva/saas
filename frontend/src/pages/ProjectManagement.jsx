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
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>
            <p className="text-slate-400">Track projects, tasks, and team collaboration</p>
            {loading && (
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-400">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                Loading projects from MongoDB...
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchProjects}
              disabled={loading}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              {loading ? 'Loading...' : 'Refresh'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add new project logic would go here
                alert('Add new project functionality will be implemented');
              }}
              className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg border border-green-500/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Add Project
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'kanban', label: 'Task Board', icon: 'view_kanban' },
          { id: 'projects', label: 'Projects', icon: 'folder' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Projects" value={getProjectStats().total} icon="folder" color="blue" />
        <StatCard title="Active Projects" value={getProjectStats().active} icon="play_circle" color="green" />
        <StatCard title="Completed" value={getProjectStats().completed} icon="check_circle" color="purple" />
        <StatCard title="Total Budget" value={`₹${getProjectStats().totalBudget.toLocaleString()}`} icon="payments" color="yellow" />
      </div>

      {/* Main Content */}
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
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">{title}</p>
        <p className={`text-3xl font-bold mt-2 text-${color}-400`}>{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-500/20`}>
        <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const ProjectDashboard = ({ projects }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {/* Project List */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Recent Projects</h2>
      
      <div className="space-y-4">
        {projects.slice(0, 3).map(project => (
          <motion.div
            key={project.id}
            whileHover={{ x: 5 }}
            className="p-4 bg-white/5 rounded-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium">{project.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-3">{project.client}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-slate-400">Progress:</span>
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className="text-white font-medium">{project.progress}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Resource Allocation */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Team Utilization</h2>
      
      <div className="space-y-4">
        {[
          { name: 'Rajesh Patel', projects: 2, utilization: 85 },
          { name: 'Priya Sharma', projects: 1, utilization: 60 },
          { name: 'Amit Kumar', projects: 2, utilization: 90 },
          { name: 'Sneha Gupta', projects: 1, utilization: 45 }
        ].map(member => (
          <div key={member.name} className="p-3 bg-white/5 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">{member.name}</span>
              <span className="text-slate-300 text-sm">{member.projects} projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    member.utilization > 80 ? 'bg-red-500' :
                    member.utilization > 60 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`} 
                  style={{ width: `${member.utilization}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-400">{member.utilization}%</span>
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
    switch(priority) {
      case 'Critical': return 'bg-red-500/20 text-red-400';
      case 'High': return 'bg-orange-500/20 text-orange-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Task Management Board</h2>
        <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {columns.map(column => {
          const columnTasks = tasks.filter(task => task.status === column);
          return (
            <motion.div
              key={column}
              onDragOver={(e) => handleDragOver(e, column)}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">drag_indicator</span>
                {column}
                <span className="ml-auto bg-white/10 px-2 py-1 rounded-full text-xs">
                  {columnTasks.length}
                </span>
              </h3>
              
              <div className="space-y-3 min-h-96">
                {columnTasks.map(task => (
                  <motion.div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task)}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-lg p-3 cursor-move"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium text-sm">{task.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs mb-2">Assignee: {task.assignee}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-blue-400 text-xs">person</span>
                      </div>
                      <span className="text-slate-400 text-xs">Project #{task.projectId}</span>
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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
  >
    <div className="p-6 border-b border-white/10">
      <h2 className="text-xl font-bold text-white">Project Portfolio</h2>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-white/5">
          <tr>
            <th className="text-left p-4 text-slate-300 font-semibold">Project</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Client</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Progress</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Team</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Budget</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <motion.tr
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="p-4">
                <div>
                  <p className="text-white font-medium">{project.name}</p>
                  <p className="text-slate-400 text-sm">
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </p>
                </div>
              </td>
              <td className="p-4 text-slate-300">{project.client}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {project.status}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">{project.progress}%</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-background-dark flex items-center justify-center text-xs text-blue-400">
                      {member.charAt(0)}
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-background-dark flex items-center justify-center text-xs text-white">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
              </td>
              <td className="p-4">
                <div>
                  <p className="text-white font-medium">₹{project.budget.toLocaleString()}</p>
                  <p className="text-slate-400 text-sm">Spent: ₹{project.spent.toLocaleString()}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400">
                    <span className="material-symbols-outlined">chat</span>
                  </button>
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
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIControlCenter = () => {
  const [activeTab, setActiveTab] = useState('agents');
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: 'Sales Agent Pro',
      type: 'Sales',
      status: 'Active',
      model: 'GPT-4 Turbo',
      confidence: 92,
      tasksCompleted: 1247,
      accuracy: 94,
      lastActive: '2 minutes ago'
    },
    {
      id: 2,
      name: 'Support Agent Max',
      type: 'Support',
      status: 'Training',
      model: 'Claude 3 Opus',
      confidence: 78,
      tasksCompleted: 892,
      accuracy: 87,
      lastActive: '1 hour ago'
    },
    {
      id: 3,
      name: 'Marketing Genius',
      type: 'Marketing',
      status: 'Active',
      model: 'GPT-4 Vision',
      confidence: 89,
      tasksCompleted: 2156,
      accuracy: 91,
      lastActive: '5 minutes ago'
    },
    {
      id: 4,
      name: 'Analytics Master',
      type: 'Analytics',
      status: 'Idle',
      model: 'Gemini Pro',
      confidence: 95,
      tasksCompleted: 563,
      accuracy: 96,
      lastActive: '3 hours ago'
    }
  ]);

  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Lead Qualification Pipeline',
      status: 'Active',
      trigger: 'New Lead Submission',
      steps: 5,
      successRate: 78
    },
    {
      id: 2,
      name: 'Customer Support Escalation',
      status: 'Active',
      trigger: 'High Priority Ticket',
      steps: 3,
      successRate: 92
    },
    {
      id: 3,
      name: 'Content Generation Workflow',
      status: 'Draft',
      trigger: 'Scheduled Campaign',
      steps: 7,
      successRate: 0
    }
  ]);

  const agentTypes = ['Sales', 'Support', 'Marketing', 'Analytics', 'Research', 'Development'];

  const getAgentStats = () => ({
    total: agents.length,
    active: agents.filter(a => a.status === 'Active').length,
    training: agents.filter(a => a.status === 'Training').length,
    totalTasks: agents.reduce((sum, a) => sum + a.tasksCompleted, 0)
  });

  return (
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">AI Control Center</h1>
        <p className="text-slate-400">Manage AI agents, workflows, and automation intelligence</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'agents', label: 'AI Agents', icon: 'smart_toy' },
          { id: 'workflows', label: 'Workflows', icon: 'account_tree' },
          { id: 'prompts', label: 'Prompt Library', icon: 'chat' },
          { id: 'analytics', label: 'AI Analytics', icon: 'analytics' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-slate-900 text-white'
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
        <StatCard title="Total Agents" value={getAgentStats().total} icon="smart_toy" color="blue" />
        <StatCard title="Active Agents" value={getAgentStats().active} icon="play_circle" color="green" />
        <StatCard title="Tasks Completed" value={getAgentStats().totalTasks.toLocaleString()} icon="task_alt" color="purple" />
        <StatCard title="Avg Accuracy" value="92%" icon="done_all" color="yellow" />
      </div>

      {/* Main Content */}
      {activeTab === 'agents' && (
        <AgentManagement agents={agents} setAgents={setAgents} agentTypes={agentTypes} />
      )}

      {activeTab === 'workflows' && (
        <WorkflowBuilder workflows={workflows} setWorkflows={setWorkflows} />
      )}

      {activeTab === 'prompts' && (
        <PromptLibrary />
      )}

      {activeTab === 'analytics' && (
        <AIAnalytics agents={agents} />
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
      <div className={`p-3 rounded-2xl bg-${color}-500/20`}>
        <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const AgentManagement = ({ agents, setAgents, agentTypes }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400';
      case 'Training': return 'bg-yellow-500/20 text-yellow-400';
      case 'Idle': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-red-500/20 text-red-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">AI Agent Fleet</h2>
        <button className="bg-slate-900 hover:bg-black text-white font-bold px-4 py-2 rounded-2xl flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Create Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map(agent => (
          <motion.div
            key={agent.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                <p className="text-slate-300 text-sm">{agent.type} Agent</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                {agent.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-slate-400 text-sm">Model</p>
                <p className="text-white font-medium">{agent.model}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Confidence</p>
                <p className="text-white font-medium">{agent.confidence}%</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Tasks Completed</p>
                <p className="text-white font-medium">{agent.tasksCompleted.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Accuracy</p>
                <p className="text-white font-medium">{agent.accuracy}%</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Performance Score</span>
                <span className="text-white">{agent.confidence}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${agent.confidence > 90 ? 'bg-green-500' :
                      agent.confidence > 75 ? 'bg-yellow-500' :
                        'bg-red-500'
                    }`}
                  style={{ width: `${agent.confidence}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-2xl text-sm">
                Configure
              </button>
              <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-2xl text-sm">
                Train
              </button>
              <button className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 rounded-2xl text-sm">
                Monitor
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const WorkflowBuilder = ({ workflows, setWorkflows }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Automation Workflows</h2>
      <button className="bg-slate-900 hover:bg-black text-white font-bold px-4 py-2 rounded-2xl flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Workflow
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {workflows.map(workflow => (
        <motion.div
          key={workflow.id}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{workflow.name}</h3>
              <p className="text-slate-300 text-sm">Trigger: {workflow.trigger}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${workflow.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                workflow.status === 'Draft' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
              }`}>
              {workflow.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-300 text-sm">Steps</p>
              <p className="text-white font-medium">{workflow.steps}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Success Rate</p>
              <p className="text-white font-medium">{workflow.successRate}%</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-2xl text-sm">
              Edit Flow
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-2xl text-sm">
              View Logs
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Visual Workflow Builder */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">Visual Workflow Designer</h3>

      <div className="bg-blue-50/50 rounded-2xl p-8 min-h-96 flex items-center justify-center border border-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-2xl">account_tree</span>
          </div>
          <p className="text-slate-300 mb-4">Drag and drop components to build your automation workflow</p>
          <button className="bg-slate-900 hover:bg-black text-white font-bold px-6 py-3 rounded-2xl">
            Open Visual Editor
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const PromptLibrary = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Prompt Engineering Library</h2>
      <button className="bg-slate-900 hover:bg-black text-white font-bold px-4 py-2 rounded-2xl flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Prompt
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[
        { name: 'Sales Outreach Template', category: 'Sales', usage: 1247, rating: 4.8 },
        { name: 'Customer Support Response', category: 'Support', usage: 892, rating: 4.6 },
        { name: 'Content Generation Framework', category: 'Marketing', usage: 2156, rating: 4.9 },
        { name: 'Data Analysis Query', category: 'Analytics', usage: 563, rating: 4.7 }
      ].map((prompt, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{prompt.name}</h3>
              <p className="text-slate-300 text-sm">{prompt.category}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                <span className="text-white font-medium">{prompt.rating}</span>
              </div>
              <p className="text-slate-400 text-xs">{prompt.usage} uses</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-2xl text-sm">
              Edit
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-2xl text-sm">
              Test
            </button>
            <button className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 rounded-2xl text-sm">
              Clone
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AIAnalytics = ({ agents }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {/* Performance Metrics */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Agent Performance</h2>

      <div className="space-y-6">
        {agents.map(agent => (
          <div key={agent.id} className="p-4 bg-white/5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">{agent.name}</span>
              <span className="text-slate-300 text-sm">{agent.accuracy}% accuracy</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${agent.accuracy > 90 ? 'bg-green-500' :
                      agent.accuracy > 75 ? 'bg-yellow-500' :
                        'bg-red-500'
                    }`}
                  style={{ width: `${agent.accuracy}%` }}
                ></div>
              </div>
              <span className="text-white text-sm font-medium">{agent.tasksCompleted}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* System Health */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">AI System Health</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-2xl">
          <span className="text-slate-300">Response Time</span>
          <span className="text-green-400 font-medium">120ms avg</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-2xl">
          <span className="text-slate-300">Uptime</span>
          <span className="text-green-400 font-medium">99.98%</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-2xl">
          <span className="text-slate-300">Error Rate</span>
          <span className="text-yellow-400 font-medium">0.02%</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-2xl">
          <span className="text-slate-300">Tokens Used</span>
          <span className="text-blue-400 font-medium">2.4M today</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AIControlCenter;

import { useState } from 'react';
import { motion } from 'framer-motion';

const ReportsInsights = () => {
  const [activeTab, setActiveTab] = useState('custom');
  const [reports, setReports] = useState([
    {
      id: 1,
      name: 'Monthly Sales Report',
      type: 'Sales',
      frequency: 'Monthly',
      lastGenerated: '2024-01-31',
      status: 'Generated'
    },
    {
      id: 2,
      name: 'Client Retention Analysis',
      type: 'Analytics',
      frequency: 'Quarterly',
      lastGenerated: '2023-12-31',
      status: 'Scheduled'
    },
    {
      id: 3,
      name: 'Project Performance Dashboard',
      type: 'Projects',
      frequency: 'Weekly',
      lastGenerated: '2024-02-04',
      status: 'Generating'
    }
  ]);

  return (
    <div className="pt-24 pb-12 px-6 premium-bg min-h-screen selection:bg-blue-500/30">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Reports & Insights</h1>
        <p className="text-slate-500 font-medium font-inter">Advanced reporting, analytics, and business intelligence</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'custom', label: 'Custom Reports', icon: 'assessment' },
          { id: 'scheduled', label: 'Scheduled Reports', icon: 'schedule' },
          { id: 'templates', label: 'Report Templates', icon: 'description' },
          { id: 'analytics', label: 'AI Insights', icon: 'auto_graph' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Reports" value={reports.length} icon="description" color="blue" />
        <StatCard title="Scheduled" value={reports.filter(r => r.status === 'Scheduled').length} icon="schedule" color="green" />
        <StatCard title="Generated Today" value="12" icon="check_circle" color="yellow" />
        <StatCard title="AI Insights" value="24" icon="auto_graph" color="purple" />
      </div>

      {/* Main Content */}
      {activeTab === 'custom' && (
        <CustomReportBuilder reports={reports} setReports={setReports} />
      )}

      {activeTab === 'scheduled' && (
        <ScheduledReports reports={reports} setReports={setReports} />
      )}

      {activeTab === 'templates' && (
        <ReportTemplates />
      )}

      {activeTab === 'analytics' && (
        <AIInsights />
      )}
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{title}</p>
        <p className={`text-3xl font-black mt-2 text-${color}-600`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-50`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const CustomReportBuilder = ({ reports, setReports }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Custom Report Builder</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-all active:scale-95">
        <span className="material-symbols-outlined">add</span>
        New Report
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Report Builder Panel */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build Custom Report</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-slate-600 text-sm mb-2 font-bold tracking-tight">Report Name</label>
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all"
              placeholder="Enter report name"
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-2 font-bold tracking-tight">Report Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-all font-medium">
              <option>Sales Report</option>
              <option>Financial Analysis</option>
              <option>Client Analytics</option>
              <option>Project Performance</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-2 font-bold tracking-tight">Data Range</label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-all font-medium"
              />
              <input
                type="date"
                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-2 font-bold tracking-tight">Metrics to Include</label>
            <div className="space-y-2">
              {['Revenue', 'Clients', 'Projects', 'Expenses', 'Profit Margin'].map(metric => (
                <label key={metric} className="flex items-center gap-3 text-slate-600 font-medium">
                  <input type="checkbox" className="rounded text-blue-600 w-4 h-4 cursor-pointer" />
                  {metric}
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
            Generate Report
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Report Preview</h3>

        <div className="bg-slate-50 rounded-xl p-6 h-96 flex items-center justify-center border border-slate-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-blue-600 text-2xl">description</span>
            </div>
            <p className="text-slate-600 font-bold">Configure your report parameters to see preview</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ScheduledReports = ({ reports, setReports }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scheduled Reports</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-all active:scale-95">
        <span className="material-symbols-outlined">add</span>
        Schedule Report
      </button>
    </div>

    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Report Name</th>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Type</th>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Frequency</th>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Last Generated</th>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Status</th>
              <th className="text-left p-4 text-slate-600 font-bold uppercase text-xs tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <motion.tr
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
              >
                <td className="p-4">
                  <span className="text-slate-900 font-bold">{report.name}</span>
                </td>
                <td className="p-4 text-slate-600 font-medium">{report.type}</td>
                <td className="p-4 text-slate-600 font-medium">{report.frequency}</td>
                <td className="p-4 text-slate-600 font-medium">{report.lastGenerated}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === 'Generated' ? 'bg-green-500/20 text-green-400' :
                    report.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                    {report.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

const ReportTemplates = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Report Templates</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Executive Summary', category: 'Business', format: 'PDF' },
        { name: 'Financial Dashboard', category: 'Finance', format: 'Excel' },
        { name: 'Client Analytics', category: 'Marketing', format: 'PDF' },
        { name: 'Project Performance', category: 'Operations', format: 'Dashboard' },
        { name: 'Sales Forecast', category: 'Sales', format: 'Excel' },
        { name: 'Team Productivity', category: 'HR', format: 'PDF' }
      ].map((template, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="material-symbols-outlined text-blue-600 font-bold">description</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold">{template.name}</h3>
              <p className="text-slate-500 text-sm font-medium">{template.category}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-500 text-sm font-medium">Format: {template.format}</span>
            <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full font-bold">
              Ready to use
            </span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-sm shadow-md active:scale-95 transition-all">
            Use Template
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AIInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI-Powered Business Insights</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl overflow-hidden relative group hover:border-purple-300 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="bg-purple-50 p-2 rounded-lg">
            <span className="material-symbols-outlined text-purple-600 font-bold">auto_awesome</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Revenue Growth Prediction</h3>
        </div>
        <p className="text-slate-600 mb-4 font-medium relative z-10">
          Based on current trends and market analysis, your revenue is projected to grow by 28% in Q2 2024.
        </p>
        <div className="flex items-center gap-2 relative z-10">
          <div className="flex-1 bg-slate-100 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full shadow-sm" style={{ width: '85%' }}></div>
          </div>
          <span className="text-slate-500 text-sm font-bold">85% confidence</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl overflow-hidden relative group hover:border-emerald-300 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="bg-emerald-50 p-2 rounded-lg">
            <span className="material-symbols-outlined text-emerald-600 font-bold">trending_up</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Market Opportunity</h3>
        </div>
        <p className="text-slate-600 mb-4 font-medium relative z-10">
          Emerging markets in Southeast Asia show high potential for your digital services with 42% growth opportunity.
        </p>
        <div className="flex items-center gap-2 relative z-10">
          <div className="flex-1 bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full shadow-sm" style={{ width: '72%' }}></div>
          </div>
          <span className="text-slate-500 text-sm font-bold">72% confidence</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xl mt-8">
      <h3 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Automated Insights Feed</h3>

      <div className="space-y-4">
        {[
          { insight: 'Client retention rate increased by 15% this quarter', metric: '+15%', positive: true },
          { insight: 'Average project completion time reduced by 8 days', metric: '-8 days', positive: true },
          { insight: 'Marketing campaign ROI improved to 340%', metric: '340%', positive: true },
          { insight: 'New client acquisition cost decreased by 22%', metric: '-22%', positive: true }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-all font-medium"
          >
            <p className="text-slate-600">{item.insight}</p>
            <span className={`font-black ${item.positive ? 'text-emerald-600' : 'text-rose-600'
              }`}>
              {item.metric}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ReportsInsights;
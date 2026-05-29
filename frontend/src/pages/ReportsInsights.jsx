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
    <div className="min-h-screen premium-bg pt-12 selection:bg-blue-500/10 pb-12">
      <div className="bg-blue-50/50 rounded-[4rem] mx-6 border border-blue-100 relative overflow-hidden pt-8 pb-40">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]"></div>
        
        {/* Header Section */}
        <div className="px-6 py-8 relative z-10">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">auto_graph</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">BUSINESS INTELLIGENCE ARCHITECTURE</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tighter leading-[1.1] heading-underline active pb-2">
                  Intelligence
                  <span className="block text-premium-gradient">
                    & Insight Matrix
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Harness high-fidelity data visualization, AI-powered predictive modeling, and granular business analytics to orchestrate strategic organizational growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">add_circle</span>
                  Engineer Report
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Tab Navigation */}
        <div className="px-6 py-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {[
            { id: 'custom', label: 'Custom Architect', icon: 'assessment' },
            { id: 'scheduled', label: 'Protocol Schedule', icon: 'schedule' },
            { id: 'templates', label: 'Intelligence Blueprints', icon: 'description' },
            { id: 'analytics', label: 'AI Neural Insights', icon: 'auto_graph' }
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
                  layoutId="reports-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

        {/* Stats Section */}
        <div className="px-6 py-8 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Report Volume" value={reports.length} icon="description" color="blue" />
          <StatCard title="Scheduled Cycles" value={reports.filter(r => r.status === 'Scheduled').length} icon="schedule" color="indigo" />
          <StatCard title="Daily Pulse" value="12" icon="verified" color="purple" />
          <StatCard title="Neural Insights" value="24" icon="auto_graph" color="blue" />
        </div>
      </div>

        {/* Main Content Area */}
        <div className="px-6 py-12 relative z-10">
          <div className="max-w-7xl mx-auto">
          {activeTab === 'custom' && (
            <CustomReportBuilder reports={reports} />
          )}

          {activeTab === 'scheduled' && (
            <ScheduledReports reports={reports} />
          )}

          {activeTab === 'templates' && (
            <ReportTemplates />
          )}

            {activeTab === 'analytics' && (
              <AIInsights />
            )}
          </div>
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
        <p className="text-4xl font-black text-slate-900 tracking-tight italic">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const CustomReportBuilder = ({ reports }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black heading-underline active inline-block">Custom Report Architect</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Granular data modeling & visualization</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Report Builder Panel */}
      <div className="lg:col-span-2 bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Architectural Parameters</h3>

        <div className="space-y-8 relative z-10">
          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Operational Report Designation</label>
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
              placeholder="Enter report designation"
            />
          </div>

          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Logic Model (Type)</label>
            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold appearance-none cursor-pointer">
              <option>Sales Distribution Ledger</option>
              <option>Financial Finality Analysis</option>
              <option>Partner Entity Analytics</option>
              <option>Initiative Performance Matrix</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Temporal Range (Data Cycle)</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold mr-auto w-full" />
              <input type="date" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold ml-auto w-full" />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Metrics Inclusion Index</label>
            <div className="grid grid-cols-2 gap-4">
              {['Capital Load', 'Partner Entities', 'Initiative Count', 'Operational Overhead', 'Finality Margin'].map(metric => (
                <label key={metric} className="flex items-center gap-4 text-slate-500 font-bold text-xs p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group/metric">
                  <div className="w-5 h-5 rounded-md border-2 border-slate-300 flex items-center justify-center group-hover/metric:border-blue-600 transition-colors">
                    <input type="checkbox" className="hidden" />
                    <span className="material-symbols-outlined text-[10px] font-black opacity-0 group-hover/metric:opacity-100">check</span>
                  </div>
                  <span className="uppercase tracking-widest text-[9px] font-black italic">{metric}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all mt-6 shadow-blue-500/10">
            Synthesize Intelligence
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 opacity-20"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Report Visualization Preview</h3>

        <div className="bg-slate-50 rounded-[2rem] p-12 h-full min-h-[400px] flex flex-col items-center justify-center border border-slate-100 relative group/preview">
          <div className="absolute inset-0 bg-white opacity-0 group-hover/preview:opacity-40 transition-opacity"></div>
          <div className="text-center relative z-10">
            <div className="w-24 h-24 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl group-hover/preview:scale-110 transition-transform transform rotate-12">
              <span className="material-symbols-outlined text-blue-600 text-3xl font-black">architecture</span>
            </div>
            <p className="text-slate-900 font-black uppercase tracking-widest text-[10px] max-w-[200px] leading-relaxed mx-auto italic">Configure architectural parameters to initialize logic preview</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ScheduledReports = ({ reports }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black heading-underline active inline-block">Logic Protocol Schedule</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Automated intelligence lifecycle monitoring</p>
      </div>
    </div>

    <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600">
            <tr>
              <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest border-r border-white/10">Protocol Name</th>
              <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest border-r border-white/10">Logic Tier</th>
              <th className="text-left px-8 py-10 text-white text-[10px] font-black uppercase tracking-widest border-r border-white/10">Cycle Frequency</th>
              <th className="text-left px-8 py-10 text-white text-[10px] font-black uppercase tracking-widest border-r border-white/10">Last Synthesis</th>
              <th className="text-left px-8 py-10 text-white text-[10px] font-black uppercase tracking-widest border-r border-white/10">System Status</th>
              <th className="text-right px-10 py-10 text-white text-[10px] font-black uppercase tracking-widest">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {reports.map((report, index) => (
              <motion.tr
                key={report.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50 transition-colors group/row"
              >
                <td className="px-10 py-8">
                  <span className="text-slate-900 font-black tracking-tight text-xs uppercase">{report.name}</span>
                </td>
                <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase tracking-tight italic">{report.type}</td>
                <td className="px-8 py-8 text-slate-500 font-black text-[10px] uppercase tracking-widest italic">{report.frequency}</td>
                <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">{report.lastGenerated}</td>
                <td className="px-8 py-8">
                  <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${report.status === 'Generated' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' :
                    report.status === 'Scheduled' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-10 py-8 text-right">
                  <div className="flex gap-2 justify-end opacity-0 group-hover/row:opacity-100 transition-opacity">
                    <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                      <span className="material-symbols-outlined text-sm font-black">visibility</span>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm hover:text-green-600 hover:border-green-600">
                      <span className="material-symbols-outlined text-sm font-black">download</span>
                    </motion.button>
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
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { name: 'Executive Finality Brief', category: 'Strategic Business', format: 'PDF ARCHIVE' },
        { name: 'Capital Flux Dashboard', category: 'Finance Architecture', format: 'XLS DATA' },
        { name: 'Entity Retention Logic', category: 'Partner Analytics', format: 'PDF ARCHIVE' },
        { name: 'Initiative Velocity Matrix', category: 'Operational Engineering', format: 'LIVE PULSE' },
        { name: 'Revenue Trajectory Logic', category: 'Sales Prediction', format: 'XLS DATA' },
        { name: 'Identity Efficiency Audit', category: 'Human Capital', format: 'PDF ARCHIVE' }
      ].map((template, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-blue-50 transition-colors"></div>

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <span className="material-symbols-outlined text-blue-600 text-xl font-black">description</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-black tracking-tight text-sm uppercase leading-tight italic">{template.name}</h3>
              <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mt-1 italic">{template.category}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 relative z-10 border-y border-slate-50 py-4">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Protocol: {template.format}</span>
            <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">
              SYNCHRONIZED
            </span>
          </div>

          <button className="w-full bg-slate-900 text-white border border-slate-200 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:border-black transition-all shadow-sm">
            Provision Blueprint
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AIInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <AIInsightCard
        title="Revenue Vector Prediction"
        desc="Autonomous projection based on cross-sectional market fluidity and historical capital throughput."
        metric="28%"
        impact="UPWARD TRAJECTORY"
        confidence="92%"
        color="blue"
      />
      <AIInsightCard
        title="Entity Expansion Node"
        desc="Identification of high-yield market clusters based on emerging digital infrastructure trends."
        metric="42%"
        impact="MARKET OPPORTUNITY"
        confidence="88%"
        color="indigo"
      />
    </div>

    <div className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
      <h3 className="text-xl font-black text-slate-900 mb-12 tracking-widest uppercase text-xs italic">Autonomous Logic Stream</h3>

      <div className="space-y-6 relative z-10">
        {[
          { insight: 'Partner retention protocol identified 15% increase in node stability', metric: '+15%', status: 'STABLE' },
          { insight: 'Initiative lifecycle velocity optimized by 8.2 operational segments', metric: '-8 DAYS', status: 'EFFICIENT' },
          { insight: 'Capital acquisition ROI projected at 340% for the upcoming cycle', metric: '3.4X', status: 'HIGH-YIELD' },
          { insight: 'Entity acquisition overhead reduced by 22% via neural optimization', metric: '-22%', status: 'OPTIMIZED' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/item"
          >
            <div className="flex-1">
              <p className="text-slate-900 font-bold text-xs uppercase tracking-tight italic">"{item.insight}"</p>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-2">{item.status} INDEX</p>
            </div>
            <span className="text-2xl font-black text-slate-900 italic tracking-tighter group-hover/item:text-blue-600 transition-colors">
              {item.metric}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const AIInsightCard = ({ title, desc, metric, impact, confidence, color }) => (
  <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl overflow-hidden relative group hover:border-blue-600 transition-all h-full">
    <div className={`absolute top-0 right-0 w-48 h-48 bg-${color}-50 rounded-full blur-[80px] -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    <div className="flex items-center gap-4 mb-8 relative z-10">
      <div className={`w-12 h-12 bg-${color}-50 rounded-2xl flex items-center justify-center`}>
        <span className={`material-symbols-outlined text-${color}-600 text-xl font-black`}>auto_awesome</span>
      </div>
      <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">{title}</h3>
    </div>
    <p className="text-slate-500 font-bold text-sm leading-relaxed mb-10 relative z-10 italic">"{desc}"</p>

    <div className="flex items-end justify-between relative z-10">
      <div>
        <p className="text-4xl font-black text-slate-900 tracking-tighter italic leading-none">{metric}</p>
        <p className={`text-[10px] font-black uppercase tracking-widest mt-2 text-${color}-600`}>{impact}</p>
      </div>
      <div className="text-right">
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1 italic">Confidence Score</p>
        <div className="flex items-center gap-3">
          <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: confidence }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className={`bg-gradient-to-r from-${color}-500 to-${color}-600 h-full rounded-full`}
            ></motion.div>
          </div>
          <span className="text-slate-900 font-black text-xs italic">{confidence}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ReportsInsights;

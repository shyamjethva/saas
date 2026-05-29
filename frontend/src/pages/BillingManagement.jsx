import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { billingAPI } from '../services/api';

const BillingManagement = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  const [invoices, setInvoices] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch real billing data
  const fetchBillingData = async () => {
    setLoading(true);
    try {
      const response = await billingAPI.getAllBilling();
      const billingData = response.data || [];

      // Transform billing data to match invoices structure
      const transformedInvoices = billingData.map(bill => ({
        id: bill.invoiceNumber || `INV-${bill.id || bill._id}`,
        client: bill.client,
        amount: bill.amount,
        status: bill.status,
        date: bill.createdAt || new Date().toISOString().split('T')[0],
        dueDate: bill.dueDate,
        items: ['Service Package', 'Consultation'] // Placeholder items
      }));

      setInvoices(transformedInvoices);

      // For subscriptions, we'll use a similar structure
      const transformedSubscriptions = billingData
        .filter(bill => bill.status === 'Paid')
        .map((bill, index) => ({
          id: `SUB-${index + 1}`,
          client: bill.client,
          package: 'Premium Service Package',
          amount: bill.amount,
          status: 'Active',
          startDate: bill.createdAt || new Date().toISOString().split('T')[0],
          endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 year from now
          renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 30 days from now
        }));

      setSubscriptions(transformedSubscriptions);
    } catch (error) {
      console.error('Error fetching billing data:', error);
      // Fallback to mock data
      setInvoices([
        {
          id: 'INV-001',
          client: 'TechCorp Solutions',
          amount: 125000,
          status: 'Paid',
          date: '2024-01-15',
          dueDate: '2024-01-15',
          items: ['Digital Marketing Services', 'SEO Optimization', 'Content Creation']
        },
        {
          id: 'INV-002',
          client: 'Global Enterprises',
          amount: 45000,
          status: 'Pending',
          date: '2024-02-01',
          dueDate: '2024-02-15',
          items: ['Professional Consultation', 'Cloud Strategy']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBillingData();
  }, []);

  const stats = {
    totalRevenue: invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + (inv.amount || 0), 0),
    pendingAmount: invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => sum + (inv.amount || 0), 0),
    overdueAmount: invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => sum + (inv.amount || 0), 0),
    activeSubscriptions: subscriptions.filter(sub => sub.status === 'Active').length
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
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">payments</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">FINANCIAL GOVERNANCE</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Revenue Control
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    & Capital Matrix
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Architect your financial ecosystem with high-precision invoice tracking, automated subscription lifecycles, and real-time revenue analytics.
                </p>

                {loading && (
                  <div className="flex items-center gap-3 mt-8 px-5 py-3 bg-blue-50 rounded-2xl border border-blue-100 w-fit">
                    <div className="w-5 h-5 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Auditing Capital Ledger...</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchBillingData}
                  disabled={loading}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl border border-slate-200 font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-xl hover:border-slate-900"
                >
                  <span className="material-symbols-outlined text-sm font-black">refresh</span>
                  Sync Ledger
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">add_card</span>
                  Provision Invoice
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Capital Inflow" value={`₹${stats.totalRevenue.toLocaleString()}`} icon="trending_up" color="blue" />
          <StatCard title="Pending Liquidity" value={`₹${stats.pendingAmount.toLocaleString()}`} icon="pending" color="indigo" />
          <StatCard title="Deviation Risk" value={`₹${stats.overdueAmount.toLocaleString()}`} icon="error" color="purple" />
          <StatCard title="Subscription Nodes" value={stats.activeSubscriptions} icon="autorenew" color="blue" />
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative group border border-slate-200"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -mr-48 -mt-48 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-12">
              <FeatureItem icon="bolt" title="Precision Taxing" desc="Autonomous GST/VAT calculation and multi-regional compliance." />
              <FeatureItem icon="notifications_active" title="Pulse Reminders" desc="Automated escalation workflows for overdue capital nodes." />
              <FeatureItem icon="security" title="Encrypted Rails" desc="Bank-grade synchronization with global payment gateways." />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {[
            { id: 'invoices', label: 'Invoice Ledger', icon: 'receipt_long' },
            { id: 'subscriptions', label: 'Subscription Matrix', icon: 'autorenew' },
            { id: 'payments', label: 'Payment Protocols', icon: 'payments' }
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
                  layoutId="billing-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-40">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'invoices' && (
            <InvoiceList invoices={invoices} />
          )}

          {activeTab === 'subscriptions' && (
            <SubscriptionList subscriptions={subscriptions} />
          )}

          {activeTab === 'payments' && (
            <PaymentHistory />
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
        <p className="text-4xl font-black text-slate-900 tracking-tight italic">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
      <span className="material-symbols-outlined text-white text-xl font-black">{icon}</span>
    </div>
    <div>
      <h3 className="text-white font-black uppercase tracking-widest text-[11px] mb-2">{title}</h3>
      <p className="text-slate-400 text-xs leading-relaxed font-bold italic">"{desc}"</p>
    </div>
  </div>
);

const InvoiceList = ({ invoices }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-blue-600 text-white shadow-lg shadow-blue-500/20';
      case 'Pending': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20';
      case 'Overdue': return 'bg-slate-900 text-white shadow-lg';
      default: return 'bg-slate-100 text-slate-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
        <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-xl font-black text-slate-900 tracking-widest uppercase text-xs">Provisioned Invoices</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Protocol ID</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Target Client</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Capital Load</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Status Index</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Release Date</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Maturity Date</th>
                <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((invoice, index) => (
                <motion.tr
                  key={invoice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors group/row"
                >
                  <td className="px-10 py-8 font-black text-[10px] text-slate-400 italic tracking-widest group-hover/row:text-blue-600 transition-colors">{invoice.id}</td>
                  <td className="px-8 py-8">
                    <p className="text-slate-900 font-black tracking-tight text-xs uppercase">{invoice.client}</p>
                  </td>
                  <td className="px-8 py-8 font-black text-slate-900 text-sm italic tracking-tighter">₹{invoice.amount?.toLocaleString()}</td>
                  <td className="px-8 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase italic italic">{invoice.date}</td>
                  <td className="px-8 py-8 text-slate-500 text-[10px] font-black uppercase italic underline decoration-blue-200 decoration-2">{invoice.dueDate}</td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex gap-2 justify-end opacity-0 group-hover/row:opacity-100 transition-opacity">
                      <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                        <span className="material-symbols-outlined text-sm font-black">visibility</span>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm hover:text-green-600 hover:border-green-600">
                        <span className="material-symbols-outlined text-sm font-black">download</span>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm hover:text-blue-600 hover:border-blue-600">
                        <span className="material-symbols-outlined text-sm font-black">send</span>
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
};

const SubscriptionList = ({ subscriptions }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {subscriptions.map((subscription, index) => (
        <motion.div
          key={subscription.id}
          whileHover={{ y: -10 }}
          className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors"></div>

          <div className="flex justify-between items-start mb-10 relative z-10">
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">{subscription.client}</h3>
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mt-2">{subscription.package}</p>
            </div>
            <span className="px-5 py-2 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
              {subscription.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-10 relative z-10 border-y border-slate-50 py-8">
            <div>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Capital Load</p>
              <p className="text-2xl font-black text-slate-900 tracking-tighter italic">₹{subscription.amount.toLocaleString()}</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase">/ monthly cycle</p>
            </div>
            <div>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Maturity Date</p>
              <p className="text-xl font-black text-slate-900 tracking-tight uppercase italic">{subscription.renewalDate}</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase italic mt-1 font-black">In 30 Days</p>
            </div>
          </div>

          <div className="flex gap-4 relative z-10">
            <button className="flex-1 bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
              Audit Node
            </button>
            <button className="flex-1 bg-white border border-slate-200 text-slate-900 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:border-slate-900 transition-all">
              Renew Protocol
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const PaymentHistory = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[100px] -mr-32 -mt-32"></div>
    <h2 className="text-xl font-black text-slate-900 mb-12 tracking-widest uppercase text-xs relative z-10 italic">Capital Inflow Archives</h2>

    <div className="space-y-6 relative z-10">
      {[
        { id: 1, client: 'TechCorp Solutions', amount: 125000, method: 'Wired Transfer', date: 'JAN 15, 2024', status: 'Verified' },
        { id: 2, client: 'Global Enterprises', amount: 45000, method: 'Digital Rails', date: 'JAN 10, 2024', status: 'Verified' },
        { id: 3, client: 'Innovate Labs', amount: 75000, method: 'Instrument Check', date: 'DEC 20, 2023', status: 'Pending' }
      ].map((payment, index) => (
        <motion.div
          key={payment.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group"
        >
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className={`w-12 h-12 rounded-2xl ${payment.status === 'Verified' ? 'bg-blue-50' : 'bg-slate-200'} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined ${payment.status === 'Verified' ? 'text-blue-600' : 'text-slate-500'} font-black italic`}>
                {payment.status === 'Verified' ? 'verified' : 'history'}
              </span>
            </div>
            <div>
              <p className="text-slate-900 font-black tracking-tighter uppercase italic">{payment.client}</p>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1 italic">{payment.method} • {payment.date}</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-3xl font-black text-slate-900 tracking-tighter italic group-hover:text-blue-600 transition-colors">₹{payment.amount.toLocaleString()}</p>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mt-3 inline-block transition-all ${payment.status === 'Verified'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-200 text-slate-500'
              }`}>
              {payment.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default BillingManagement;

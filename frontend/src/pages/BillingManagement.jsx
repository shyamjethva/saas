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
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBillingData();
  }, []);

  // Handler functions for smart billing features
  const handleViewInvoice = (invoice) => {
    alert(`Viewing invoice: ${invoice.id}\nClient: ${invoice.client}\nAmount: ₹${invoice.amount?.toLocaleString()}`);
  };

  const handleDownloadInvoice = async (invoice) => {
    try {
      const response = await billingAPI.generateInvoicePDF(invoice._id || invoice.id);
      alert(`Invoice PDF generated: ${response.data.message}`);
    } catch (error) {
      console.error('Error downloading invoice:', error);
      alert('Error downloading invoice');
    }
  };

  const handleSendInvoice = (invoice) => {
    alert(`Sending invoice ${invoice.id} to ${invoice.client}`);
  };

  const handleProcessPayment = (invoice) => {
    const amount = prompt(`Enter payment amount for invoice ${invoice.id}:`, invoice.balanceAmount || invoice.amount);
    if (amount) {
      processPayment(invoice, parseFloat(amount));
    }
  };

  const processPayment = async (invoice, amount) => {
    try {
      const paymentMethod = prompt('Enter payment method (Bank Transfer/Credit Card/Debit Card/UPI/Net Banking/Cheque/Cash):', 'Bank Transfer');
      if (paymentMethod) {
        const response = await billingAPI.processPayment(invoice._id || invoice.id, amount, paymentMethod);
        alert(`Payment processed successfully! New status: ${response.data.status}`);
        // Refresh the data
        fetchBillingData();
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Error processing payment');
    }
  };

  const updateInvoiceStatus = async (invoiceId, newStatus) => {
    try {
      const response = await billingAPI.updateBillingStatus(invoiceId, newStatus);
      alert(`Invoice status updated to: ${newStatus}`);
      // Refresh the data
      fetchBillingData();
    } catch (error) {
      console.error('Error updating invoice status:', error);
      alert('Error updating invoice status');
    }
  };

  const stats = {
    totalRevenue: invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0),
    pendingAmount: invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => sum + inv.amount, 0),
    overdueAmount: invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0),
    activeSubscriptions: subscriptions.filter(sub => sub.status === 'Active').length
  };

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
            <h1 className="text-4xl font-bold text-white mb-2">Billing & Subscriptions</h1>
            <p className="text-slate-400">Manage invoices, payments, and subscription lifecycles</p>
            {loading && (
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-400">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                Loading billing data from MongoDB...
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchBillingData}
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
                // Add new invoice logic would go here
                alert('Add new invoice functionality will be implemented');
              }}
              className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg border border-green-500/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Add Invoice
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'invoices', label: 'Invoices', icon: 'receipt_long' },
          { id: 'subscriptions', label: 'Subscriptions', icon: 'autorenew' },
          { id: 'payments', label: 'Payments', icon: 'payments' }
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
        <StatCard title="Total Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} icon="payments" color="green" />
        <StatCard title="Pending Amount" value={`₹${stats.pendingAmount.toLocaleString()}`} icon="pending_actions" color="yellow" />
        <StatCard title="Overdue Amount" value={`₹${stats.overdueAmount.toLocaleString()}`} icon="warning" color="red" />
        <StatCard title="Active Subscriptions" value={stats.activeSubscriptions} icon="autorenew" color="blue" />
      </div>

      {/* Smart Billing Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-400">bolt</span>
          Smart Billing Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <span>Auto Tax Calculation</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <span>Payment Reminders</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <span>Multi-Gateway Support</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      {activeTab === 'invoices' && (
        <InvoiceList invoices={invoices} setInvoices={setInvoices} />
      )}

      {activeTab === 'subscriptions' && (
        <SubscriptionList subscriptions={subscriptions} setSubscriptions={setSubscriptions} />
      )}

      {activeTab === 'payments' && (
        <PaymentHistory />
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

const InvoiceList = ({ invoices, setInvoices }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    client: '',
    amount: '',
    dueDate: '',
    status: 'Draft',
    items: [{ description: '', quantity: 1, unitPrice: 0 }],
    notes: '',
    discountPercent: 0
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-500/20 text-green-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Overdue': return 'bg-red-500/20 text-red-400';
      case 'Draft': return 'bg-gray-500/20 text-gray-400';
      case 'Sent': return 'bg-blue-500/20 text-blue-400';
      case 'Partially Paid': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleCreateInvoice = async () => {
    try {
      // Calculate total amount from items
      const itemsWithTotals = newInvoice.items.map(item => ({
        ...item,
        total: item.quantity * item.unitPrice
      }));
      
      const subtotal = itemsWithTotals.reduce((sum, item) => sum + item.total, 0);
      const discountAmount = newInvoice.discountPercent > 0 ? (subtotal * newInvoice.discountPercent / 100) : 0;
      const totalAmount = subtotal - discountAmount;

      const invoiceData = {
        ...newInvoice,
        items: itemsWithTotals,
        amount: totalAmount,
        totalAmount,
        discountAmount,
        issueDate: new Date().toISOString().split('T')[0]
      };

      await billingAPI.createBilling(invoiceData);
      alert('Invoice created successfully!');
      setShowCreateModal(false);
      setNewInvoice({
        client: '',
        amount: '',
        dueDate: '',
        status: 'Draft',
        items: [{ description: '', quantity: 1, unitPrice: 0 }],
        notes: '',
        discountPercent: 0
      });
      // Refresh the data
      fetchBillingData();
    } catch (error) {
      console.error('Error creating invoice:', error);
      alert('Error creating invoice: ' + error.response?.data?.error || error.message);
    }
  };

  const addItem = () => {
    setNewInvoice(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, unitPrice: 0 }]
    }));
  };

  const updateItem = (index, field, value) => {
    setNewInvoice(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeItem = (index) => {
    setNewInvoice(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  return (
    <div>
      <div className="mb-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Invoice Management</h2>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Create Invoice
          </button>
        </div>
        
        {/* Create Invoice Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background-dark rounded-2xl border border-white/10 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Create New Invoice</h3>
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 rounded-lg hover:bg-white/10 text-white"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Client *</label>
                    <input
                      type="text"
                      value={newInvoice.client}
                      onChange={(e) => setNewInvoice({...newInvoice, client: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-400"
                      placeholder="Enter client name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Due Date *</label>
                    <input
                      type="date"
                      value={newInvoice.dueDate}
                      onChange={(e) => setNewInvoice({...newInvoice, dueDate: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Discount (%)</label>
                  <input
                    type="number"
                    value={newInvoice.discountPercent}
                    onChange={(e) => setNewInvoice({...newInvoice, discountPercent: parseFloat(e.target.value) || 0})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    min="0"
                    max="100"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Notes</label>
                  <textarea
                    value={newInvoice.notes}
                    onChange={(e) => setNewInvoice({...newInvoice, notes: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-400"
                    rows="3"
                    placeholder="Additional notes"
                  />
                  </textarea>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-slate-300">Invoice Items</label>
                    <button 
                      type="button" 
                      onClick={addItem}
                      className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-xs">add</span>
                      Add Item
                    </button>
                  </div>
                  
                  {newInvoice.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 mb-2 p-3 bg-white/5 rounded-lg">
                      <div className="col-span-5">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(index, 'description', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white text-sm"
                          placeholder="Description"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white text-sm"
                          min="1"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white text-sm"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div className="col-span-2 flex items-center">
                        <span className="text-white text-sm">₹{(item.quantity * item.unitPrice).toFixed(2)}</span>
                        {newInvoice.items.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeItem(index)}
                            className="ml-2 text-red-400 hover:text-red-300"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end gap-3 pt-4">
                  <button 
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleCreateInvoice}
                    className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg"
                  >
                    Create Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-slate-300 font-semibold">Invoice #</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Client</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Amount</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Issue Date</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Due Date</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Balance</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <motion.tr
                  key={invoice._id || invoice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-white font-medium">{invoice.invoiceNumber || invoice.id}</span>
                  </td>
                  <td className="p-4 text-slate-300">{invoice.client}</td>
                  <td className="p-4 text-white font-medium">₹{invoice.totalAmount?.toLocaleString() || invoice.amount?.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">{invoice.issueDate ? new Date(invoice.issueDate).toLocaleDateString() : 'N/A'}</td>
                  <td className="p-4 text-slate-300">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                  <td className="p-4 text-white font-medium">₹{invoice.balanceAmount?.toLocaleString() || '0'}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewInvoice(invoice)}
                        className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"
                      >
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button 
                        onClick={() => handleDownloadInvoice(invoice)}
                        className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400"
                      >
                        <span className="material-symbols-outlined">download</span>
                      </button>
                      <button 
                        onClick={() => handleSendInvoice(invoice)}
                        className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400"
                      >
                        <span className="material-symbols-outlined">send</span>
                      </button>
                      {invoice.status !== 'Paid' && (
                        <button 
                          onClick={() => handleProcessPayment(invoice)}
                          className="p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400"
                        >
                          <span className="material-symbols-outlined">payments</span>
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

const SubscriptionList = ({ subscriptions, setSubscriptions }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Subscription Management</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Subscription
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {subscriptions.map(subscription => (
        <motion.div
          key={subscription.id}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{subscription.client}</h3>
              <p className="text-slate-300 text-sm">{subscription.package}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              subscription.status === 'Active' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              {subscription.status}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-400 text-sm">Amount</p>
              <p className="text-white font-bold">₹{subscription.amount.toLocaleString()}/month</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Renewal Date</p>
              <p className="text-white">{new Date(subscription.renewalDate).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
              View Details
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-lg text-sm">
              Renew
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const PaymentHistory = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <h2 className="text-2xl font-bold text-white mb-6">Payment History</h2>
    
    <div className="space-y-4">
      {[
        { id: 1, client: 'TechCorp Solutions', amount: 125000, method: 'Bank Transfer', date: '2024-01-15', status: 'Completed' },
        { id: 2, client: 'Global Enterprises', amount: 45000, method: 'Credit Card', date: '2024-01-10', status: 'Completed' },
        { id: 3, client: 'Innovate Labs', amount: 75000, method: 'Cheque', date: '2023-12-20', status: 'Pending' }
      ].map(payment => (
        <motion.div
          key={payment.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
        >
          <div>
            <p className="text-white font-medium">{payment.client}</p>
            <p className="text-slate-400 text-sm">{payment.method} • {payment.date}</p>
          </div>
          <div className="text-right">
            <p className="text-white font-bold">₹{payment.amount.toLocaleString()}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              payment.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
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
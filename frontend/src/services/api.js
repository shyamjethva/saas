import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://errorinfotech.in:5006/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API Endpoints
export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
  getAllContacts: () => api.get('/contact'),
  getContactById: (id) => api.get(`/contact/${id}`),
  deleteContact: (id) => api.delete(`/contact/${id}`),
};

export const clientAPI = {
  createClient: (data) => api.post('/clients', data),
  getAllClients: (params) => api.get('/clients', { params }),
  getClientById: (id) => api.get(`/clients/${id}`),
  updateClient: (id, data) => api.put(`/clients/${id}`, data),
  deleteClient: (id) => api.delete(`/clients/${id}`),
  updateHealthScore: (id, healthScore) => api.put(`/clients/${id}/health-score`, { healthScore }),
};

export const projectAPI = {
  createProject: (data) => api.post('/projects', data),
  getAllProjects: (params) => api.get('/projects', { params }),
  getProjectById: (id) => api.get(`/projects/${id}`),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
  addMilestone: (id, data) => api.post(`/projects/${id}/milestones`, data),
  updateMilestone: (id, milestoneId, data) => api.put(`/projects/${id}/milestones/${milestoneId}`, data),
  addRisk: (id, data) => api.post(`/projects/${id}/risks`, data),
  updateRisk: (id, riskId, data) => api.put(`/projects/${id}/risks/${riskId}`, data),
};

export const consultationAPI = {
  createConsultation: (data) => api.post('/consultations', data),
  getAllConsultations: (params) => api.get('/consultations', { params }),
  getConsultationById: (id) => api.get(`/consultations/${id}`),
  updateConsultationStatus: (id, status) => api.patch(`/consultations/${id}`, { status }),
};

export const billingAPI = {
  getAllBilling: (params) => api.get('/billing', { params }),
  getBillingById: (id) => api.get(`/billing/${id}`),
  createBilling: (data) => api.post('/billing', data),
  updateBilling: (id, data) => api.put(`/billing/${id}`, data),
  deleteBilling: (id) => api.delete(`/billing/${id}`),
  updateBillingStatus: (id, status, paymentDate, paidAmount) => api.patch(`/billing/${id}/status`, { status, paymentDate, paidAmount }),
  processPayment: (id, amount, method, transactionId) => api.post(`/billing/${id}/payment`, { amount, method, transactionId }),
  generateInvoicePDF: (id) => api.get(`/billing/${id}/pdf`),
};

export const userAPI = {
  getAllUsers: (params) => api.get('/users', { params }),
  getUserById: (id) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
  updateUserStatus: (id, status) => api.patch(`/users/${id}/status`, { status }),
};

// API for leads
export const leadAPI = {
  getAllLeads: (params) => api.get('/leads', { params }),
  getLeadById: (id) => api.get(`/leads/${id}`),
  createLead: (data) => api.post('/leads', data),
  updateLead: (id, data) => api.put(`/leads/${id}`, data),
  deleteLead: (id) => api.delete(`/leads/${id}`),
  updateLeadStage: (id, stage) => api.patch(`/leads/${id}/stage`, { stage }),
  assignLead: (id, userId) => api.patch(`/leads/${id}/assign`, { userId }),
};

// API for security settings
export const securitySettingAPI = {
  getUserSecuritySettings: (userId) => api.get(`/security-settings/user/${userId}`),
  getAllSecuritySettings: (params) => api.get('/security-settings', { params }),
  updateSecuritySettings: (userId, data) => api.put(`/security-settings/user/${userId}`, data),
  updateTwoFactorAuth: (userId, enabled, method) => api.patch(`/security-settings/user/${userId}/two-factor-auth`, { enabled, method }),
  updateIPRestrictions: (userId, data) => api.patch(`/security-settings/user/${userId}/ip-restrictions`, data),
  updateSessionTimeout: (userId, timeout) => api.patch(`/security-settings/user/${userId}/session-timeout`, { timeout }),
  resetLoginAttempts: (userId) => api.patch(`/security-settings/user/${userId}/reset-attempts`),
};

// API for system settings
export const systemSettingAPI = {
  getAllSystemSettings: (params) => api.get('/system-settings', { params }),
  getSystemSettingById: (id) => api.get(`/system-settings/${id}`),
  getSystemSettingsByType: (type) => api.get(`/system-settings/type/${type}`),
  createSystemSetting: (data) => api.post('/system-settings', data),
  updateSystemSetting: (id, data) => api.put(`/system-settings/${id}`, data),
  deleteSystemSetting: (id) => api.delete(`/system-settings/${id}`),
  toggleActive: (id, active) => api.patch(`/system-settings/${id}/toggle-active`, { active }),
  getRoleManagementSettings: () => api.get('/system-settings/role-management'),
  getAccessControlSettings: () => api.get('/system-settings/access-control'),
};

// API for terms management
export const termAPI = {
  getAllTerms: (params) => api.get('/terms', { params }),
  getTermById: (id) => api.get(`/terms/${id}`),
  createTerm: (data) => api.post('/terms', data),
  updateTerm: (id, data) => api.put(`/terms/${id}`, data),
  deleteTerm: (id) => api.delete(`/terms/${id}`),
  updateTermStatus: (id, status) => api.patch(`/terms/${id}/status`, { status }),
  addParty: (id, data) => api.patch(`/terms/${id}/add-party`, data),
  addAttachment: (id, data) => api.patch(`/terms/${id}/add-attachment`, data),
  signTerm: (id, data) => api.patch(`/terms/${id}/sign`, data),
};

// Generic API caller for other endpoints
export const callAPI = async (method, endpoint, data = null) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Network error occurred' };
  }
};

export default api;

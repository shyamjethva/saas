const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    default: null
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  taxAmount: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['Draft', 'Sent', 'Paid', 'Partially Paid', 'Pending', 'Overdue', 'Cancelled'],
    default: 'Draft'
  },
  dueDate: {
    type: Date,
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  paymentDate: {
    type: Date,
    default: null
  },
  items: [{
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    unitPrice: {
      type: Number,
      required: true,
      min: 0
    },
    total: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  notes: {
    type: String,
    trim: true
  },
  terms: {
    type: String,
    trim: true
  },
  discountPercent: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  discountAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  recurring: {
    isActive: {
      type: Boolean,
      default: false
    },
    interval: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly']
    },
    endDate: {
      type: Date
    }
  },
  smartFeatures: {
    autoTaxCalculation: {
      type: Boolean,
      default: true
    },
    autoLateFee: {
      type: Boolean,
      default: false
    },
    lateFeePercent: {
      type: Number,
      default: 0
    },
    autoPaymentReminders: {
      type: Boolean,
      default: true
    },
    paymentGatewayEnabled: {
      type: Boolean,
      default: true
    }
  },
  paymentMethod: {
    type: String,
    enum: ['Bank Transfer', 'Credit Card', 'Debit Card', 'UPI', 'Net Banking', 'Cheque', 'Cash'],
    default: 'Bank Transfer'
  },
  paidAmount: {
    type: Number,
    default: 0
  },
  balanceAmount: {
    type: Number,
    default: function() {
      return this.totalAmount - this.paidAmount;
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
billingSchema.index({ invoiceNumber: 1 });
billingSchema.index({ client: 1 });
billingSchema.index({ status: 1 });
billingSchema.index({ dueDate: 1 });
billingSchema.index({ createdAt: -1 });

// Middleware to calculate total amount before saving
billingSchema.pre('save', function(next) {
  // Calculate subtotal
  const subtotal = this.items.reduce((sum, item) => sum + item.total, 0);
  
  // Calculate discount
  const discountAmount = this.discountPercent > 0 ? (subtotal * this.discountPercent / 100) : this.discountAmount || 0;
  
  // Calculate tax
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = this.smartFeatures.autoTaxCalculation ? (taxableAmount * 0.18) : 0; // Assuming 18% tax
  
  // Calculate total
  this.taxAmount = taxAmount;
  this.totalAmount = taxableAmount + taxAmount;
  this.balanceAmount = this.totalAmount - this.paidAmount;
  
  next();
});

// Static method to create invoice with smart calculations
billingSchema.statics.createInvoiceWithSmartCalculations = async function(invoiceData) {
  const { items, discountPercent, discountAmount, smartFeatures, ...rest } = invoiceData;
  
  // Calculate item totals
  const itemsWithTotals = items.map(item => ({
    ...item,
    total: item.quantity * item.unitPrice
  }));
  
  // Calculate subtotal
  const subtotal = itemsWithTotals.reduce((sum, item) => sum + item.total, 0);
  
  // Apply discount
  const actualDiscountAmount = discountPercent > 0 ? (subtotal * discountPercent / 100) : (discountAmount || 0);
  
  // Calculate tax
  const taxableAmount = subtotal - actualDiscountAmount;
  const taxAmount = (smartFeatures?.autoTaxCalculation !== false) ? (taxableAmount * 0.18) : 0;
  
  // Calculate final total
  const totalAmount = taxableAmount + taxAmount;
  
  // Create invoice
  const invoice = new this({
    ...rest,
    items: itemsWithTotals,
    discountPercent: discountPercent || 0,
    discountAmount: actualDiscountAmount,
    taxAmount,
    totalAmount,
    balanceAmount: totalAmount, // Initially full amount is due
    smartFeatures: {
      autoTaxCalculation: true,
      autoLateFee: false,
      lateFeePercent: 0,
      autoPaymentReminders: true,
      paymentGatewayEnabled: true,
      ...smartFeatures
    }
  });
  
  return await invoice.save();
};

module.exports = mongoose.model('Billing', billingSchema);
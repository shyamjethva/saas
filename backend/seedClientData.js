const mongoose = require('mongoose');
const Auth = require('./models/Auth');
const Client = require('./models/Client');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Auth.deleteMany({});
    await Client.deleteMany({});
    console.log('🧹 Cleared existing data');

    // Create sample clients
    const clients = [
      {
        companyName: 'GlobalBank Corporation',
        contactPerson: 'Sarah Johnson',
        email: 'sarah.johnson@globalbank.com',
        phone: '+1-555-0123',
        industry: 'Finance',
        companySize: '1000+',
        website: 'www.globalbank.com',
        address: {
          street: '123 Financial District',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        },
        status: 'Active',
        healthScore: 85
      },
      {
        companyName: 'TechFlow Solutions',
        contactPerson: 'Michael Chen',
        email: 'michael.chen@techflow.com',
        phone: '+1-555-0456',
        industry: 'Technology',
        companySize: '201-500',
        website: 'www.techflow.com',
        address: {
          street: '456 Innovation Blvd',
          city: 'San Francisco',
          state: 'CA',
          zipCode: '94102',
          country: 'USA'
        },
        status: 'Active',
        healthScore: 92
      },
      {
        companyName: 'InnovateHealth Systems',
        contactPerson: 'Priya Sharma',
        email: 'priya.sharma@innovatehealth.com',
        phone: '+1-555-0789',
        industry: 'Healthcare',
        companySize: '501-1000',
        website: 'www.innovatehealth.com',
        address: {
          street: '789 Medical Center Dr',
          city: 'Boston',
          state: 'MA',
          zipCode: '02108',
          country: 'USA'
        },
        status: 'Active',
        healthScore: 78
      }
    ];

    const createdClients = await Client.insertMany(clients);
    console.log(`✅ Created ${createdClients.length} clients`);

    // Create sample auth users
    const authUsers = [
      {
        clientId: createdClients[0]._id,
        username: 'sarah_j',
        email: 'sarah.johnson@globalbank.com',
        password: 'password123',
        role: 'client'
      },
      {
        clientId: createdClients[1]._id,
        username: 'michael_c',
        email: 'michael.chen@techflow.com',
        password: 'password123',
        role: 'client'
      },
      {
        clientId: createdClients[2]._id,
        username: 'priya_s',
        email: 'priya.sharma@innovatehealth.com',
        password: 'password123',
        role: 'client'
      }
    ];

    const createdAuthUsers = await Auth.insertMany(authUsers);
    console.log(`✅ Created ${createdAuthUsers.length} auth users`);

    console.log('\n📋 Test Login Credentials:');
    console.log('=====================================');
    createdAuthUsers.forEach((user, index) => {
      console.log(`Client ${index + 1}:`);
      console.log(`  Username: ${user.username}`);
      console.log(`  Password: password123`);
      console.log(`  Company: ${createdClients[index].companyName}`);
      console.log('');
    });

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
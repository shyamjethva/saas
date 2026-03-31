const mongoose = require('mongoose');
const Project = require('./models/Project');
const Client = require('./models/Client');
require('dotenv').config();

const seedProjects = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get all clients
    const clients = await Client.find({});
    console.log(`✅ Found ${clients.length} clients`);

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🧹 Cleared existing projects');

    // Create sample projects
    const projects = [];

    // Projects for GlobalBank
    projects.push({
      projectName: 'Global Banking Platform Modernization',
      clientId: clients[0]._id,
      clientName: clients[0].companyName,
      description: 'Complete overhaul of legacy banking infrastructure to modern cloud-native architecture',
      status: 'In Progress',
      priority: 'High',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-06-30'),
      budget: 2500000,
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Kubernetes']
    });

    projects.push({
      projectName: 'Mobile Banking Security Enhancement',
      clientId: clients[0]._id,
      clientName: clients[0].companyName,
      description: 'Implementation of advanced security features for mobile banking application',
      status: 'In Progress',
      priority: 'High',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-04-15'),
      budget: 800000,
      technologies: ['React Native', 'Java', 'Spring Boot', 'PostgreSQL']
    });

    // Projects for TechFlow
    projects.push({
      projectName: 'E-Commerce Platform Redesign',
      clientId: clients[1]._id,
      clientName: clients[1].companyName,
      description: 'Complete redesign and rebuild of e-commerce platform with modern architecture',
      status: 'In Progress',
      priority: 'Medium',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-05-30'),
      budget: 1800000,
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Redis', 'AWS']
    });

    projects.push({
      projectName: 'Customer Analytics Dashboard',
      clientId: clients[1]._id,
      clientName: clients[1].companyName,
      description: 'Real-time analytics dashboard for customer behavior and business insights',
      status: 'Completed',
      priority: 'Low',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2024-01-15'),
      budget: 450000,
      technologies: ['React', 'Python', 'Apache Spark', 'Tableau']
    });

    // Projects for InnovateHealth
    projects.push({
      projectName: 'Patient Management System',
      clientId: clients[2]._id,
      clientName: clients[2].companyName,
      description: 'HIPAA-compliant patient management and electronic health records system',
      status: 'In Progress',
      priority: 'High',
      startDate: new Date('2023-12-01'),
      endDate: new Date('2024-07-30'),
      budget: 3200000,
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure']
    });

    projects.push({
      projectName: 'Telemedicine Platform',
      clientId: clients[2]._id,
      clientName: clients[2].companyName,
      description: 'Secure video consultation platform for remote patient care',
      status: 'Completed',
      priority: 'Medium',
      startDate: new Date('2023-08-01'),
      endDate: new Date('2023-12-15'),
      budget: 1200000,
      technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB']
    });

    const createdProjects = await Project.insertMany(projects);
    console.log(`✅ Created ${createdProjects.length} projects`);

    console.log('\n📊 Project Summary:');
    console.log('=====================================');
    clients.forEach(client => {
      const clientProjects = createdProjects.filter(p => p.clientId.toString() === client._id.toString());
      console.log(`${client.companyName}: ${clientProjects.length} projects`);
    });

    console.log('\n🎉 Project seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding projects:', error);
    process.exit(1);
  }
};

seedProjects();
import { useState } from 'react';
import { motion } from 'framer-motion';

const EducationModule = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [institutes, setInstitutes] = useState([
    {
      id: 1,
      name: 'Delhi Public School',
      type: 'School',
      students: 1250,
      teachers: 45,
      courses: 12,
      status: 'Active'
    },
    {
      id: 2,
      name: 'IIT Technical Institute',
      type: 'College',
      students: 890,
      teachers: 32,
      courses: 8,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Global Language Academy',
      type: 'Training Center',
      students: 420,
      teachers: 18,
      courses: 6,
      status: 'Active'
    }
  ]);

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Computer Science Fundamentals',
      institute: 'Delhi Public School',
      students: 125,
      duration: '6 months',
      status: 'Ongoing'
    },
    {
      id: 2,
      name: 'Advanced Mathematics',
      institute: 'IIT Technical Institute',
      students: 89,
      duration: '8 months',
      status: 'Upcoming'
    }
  ]);

  return (
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Education Management</h1>
        <p className="text-slate-400">School, college, and training center administration</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'institutes', label: 'Institutes', icon: 'school' },
          { id: 'students', label: 'Students', icon: 'groups' },
          { id: 'courses', label: 'Courses', icon: 'book' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
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
        <StatCard title="Total Institutes" value={institutes.length} icon="school" color="blue" />
        <StatCard title="Total Students" value={institutes.reduce((sum, inst) => sum + inst.students, 0)} icon="groups" color="green" />
        <StatCard title="Active Courses" value={courses.length} icon="book" color="yellow" />
        <StatCard title="Total Teachers" value={institutes.reduce((sum, inst) => sum + inst.teachers, 0)} icon="person" color="purple" />
      </div>

      {/* Main Content */}
      {activeTab === 'dashboard' && (
        <EducationDashboard institutes={institutes} courses={courses} />
      )}

      {activeTab === 'institutes' && (
        <InstituteManagement institutes={institutes} setInstitutes={setInstitutes} />
      )}

      {activeTab === 'students' && (
        <StudentManagement />
      )}

      {activeTab === 'courses' && (
        <CourseManagement courses={courses} setCourses={setCourses} />
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

const EducationDashboard = ({ institutes, courses }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {/* Institute Overview */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Institute Overview</h2>

      <div className="space-y-4">
        {institutes.map(institute => (
          <motion.div
            key={institute.id}
            whileHover={{ x: 5 }}
            className="p-4 bg-white/5 rounded-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium">{institute.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${institute.status === 'Active'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-gray-500/20 text-gray-400'
                }`}>
                {institute.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="text-slate-400">Students</p>
                <p className="text-white font-medium">{institute.students}</p>
              </div>
              <div>
                <p className="text-slate-400">Teachers</p>
                <p className="text-white font-medium">{institute.teachers}</p>
              </div>
              <div>
                <p className="text-slate-400">Courses</p>
                <p className="text-white font-medium">{institute.courses}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Course Status */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Course Management</h2>

      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium">{course.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${course.status === 'Ongoing'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                {course.status}
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-2">{course.institute}</p>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{course.students} students</span>
              <span className="text-slate-400">{course.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const InstituteManagement = ({ institutes, setInstitutes }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Institute Management</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        Add Institute
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {institutes.map(institute => (
        <motion.div
          key={institute.id}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{institute.name}</h3>
              <p className="text-slate-300 text-sm">{institute.type}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${institute.status === 'Active'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-gray-500/20 text-gray-400'
              }`}>
              {institute.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-400 text-sm">Students</p>
              <p className="text-2xl font-bold text-white">{institute.students}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Teachers</p>
              <p className="text-2xl font-bold text-white">{institute.teachers}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Courses</p>
              <p className="text-2xl font-bold text-white">{institute.courses}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Type</p>
              <p className="text-white">{institute.type}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
              View Details
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-lg text-sm">
              Manage
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const StudentManagement = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
  >
    <div className="p-6 border-b border-white/10">
      <h2 className="text-xl font-bold text-white">Student Directory</h2>
    </div>

    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-bold mb-2">Attendance Tracking</h3>
          <p className="text-slate-300 text-sm">Monitor student attendance and participation</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-bold mb-2">Grade Management</h3>
          <p className="text-slate-300 text-sm">Record and manage student grades and assessments</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-bold mb-2">Fee Management</h3>
          <p className="text-slate-300 text-sm">Track tuition fees and payment status</p>
        </div>
      </div>

      <div className="bg-blue-50/50 rounded-xl p-8 text-center border border-blue-100">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-white text-2xl">groups</span>
        </div>
        <p className="text-slate-300">Student management dashboard with enrollment, attendance, and academic records</p>
      </div>
    </div>
  </motion.div>
);

const CourseManagement = ({ courses, setCourses }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Course Management</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Course
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {courses.map(course => (
        <motion.div
          key={course.id}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{course.name}</h3>
              <p className="text-slate-300 text-sm">{course.institute}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.status === 'Ongoing'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
              }`}>
              {course.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-400 text-sm">Enrolled Students</p>
              <p className="text-2xl font-bold text-white">{course.students}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Duration</p>
              <p className="text-white">{course.duration}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
              View Curriculum
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-lg text-sm">
              Enroll Students
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default EducationModule;
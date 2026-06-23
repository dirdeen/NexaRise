import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { Briefcase, Users, Eye, CheckCircle, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function EmployerDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Jobs', value: '8', icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Applications', value: '142', icon: Users, color: 'bg-green-500' },
    { label: 'Shortlisted', value: '24', icon: CheckCircle, color: 'bg-purple-500' },
    { label: 'Profile Views', value: '1.2k', icon: Eye, color: 'bg-orange-500' },
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Freetown',
      posted: '2 days ago',
      applications: 45,
      views: 320,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      location: 'Bo',
      posted: '1 week ago',
      applications: 38,
      views: 280,
      status: 'Active',
    },
    {
      id: 3,
      title: 'Customer Service Rep',
      location: 'Freetown',
      posted: '3 days ago',
      applications: 59,
      views: 410,
      status: 'Active',
    },
  ];

  const recentApplications = [
    {
      id: 1,
      name: 'John Kamara',
      position: 'Frontend Developer',
      avatar: '👨‍💻',
      appliedDate: '2 hours ago',
      match: 95,
    },
    {
      id: 2,
      name: 'Aminata Sesay',
      position: 'Marketing Manager',
      avatar: '👩‍💼',
      appliedDate: '5 hours ago',
      match: 88,
    },
    {
      id: 3,
      name: 'Mohamed Conteh',
      position: 'Customer Service Rep',
      avatar: '👨‍💼',
      appliedDate: '1 day ago',
      match: 92,
    },
  ];

  return (
    <Layout role="employer">
      <div className="space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employer Dashboard</h1>
          <p className="text-gray-600">Manage your job postings and applications</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Post a New Job</h2>
              <p className="text-white/90">Reach thousands of qualified candidates</p>
            </div>
            <button
              onClick={() => navigate('/employer/post-job')}
              className="bg-white text-[#1E3A8A] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Post Job
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Active Job Postings</h2>
            <button className="text-[#14B8A6] hover:text-[#0d9488] font-semibold">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {job.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-900">{job.applications}</span>
                    <span className="text-gray-600">applicants</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-900">{job.views}</span>
                    <span className="text-gray-600">views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recent Applications</h2>
            <button
              onClick={() => navigate('/employer/applications')}
              className="text-[#14B8A6] hover:text-[#0d9488] font-semibold"
            >
              View All Applications
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {recentApplications.map((application, idx) => (
              <div
                key={application.id}
                className={`p-5 hover:bg-gray-50 transition-all cursor-pointer ${
                  idx !== recentApplications.length - 1 ? 'border-b border-gray-100' : ''
                }`}
                onClick={() => navigate('/employer/applications')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-full flex items-center justify-center text-2xl">
                    {application.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{application.name}</h3>
                    <p className="text-sm text-gray-600">Applied for {application.position}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">{application.match}% match</span>
                      </div>
                      <p className="text-xs text-gray-500">{application.appliedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

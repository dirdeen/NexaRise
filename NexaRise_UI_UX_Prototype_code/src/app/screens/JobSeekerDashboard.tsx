import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { Briefcase, TrendingUp, FileText, Clock, MapPin, DollarSign, ArrowRight, Users } from 'lucide-react';

export default function JobSeekerDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Applications', value: '12', icon: FileText, color: 'bg-blue-500' },
    { label: 'In Progress', value: '5', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Interviews', value: '2', icon: Briefcase, color: 'bg-green-500' },
    { label: 'Profile Views', value: '48', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp SL',
      location: 'Freetown',
      salary: 'Le 8,000,000 - 12,000,000',
      type: 'Full-time',
      posted: '2 days ago',
      logo: '💻',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'GrowthHub',
      location: 'Bo',
      salary: 'Le 6,000,000 - 10,000,000',
      type: 'Full-time',
      posted: '1 week ago',
      logo: '📈',
    },
    {
      id: 3,
      title: 'Customer Service Rep',
      company: 'Orange SL',
      location: 'Freetown',
      salary: 'Le 4,000,000 - 6,000,000',
      type: 'Contract',
      posted: '3 days ago',
      logo: '📞',
    },
  ];

  return (
    <Layout role="job-seeker">
      <div className="space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your job search</p>
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
              <h2 className="text-2xl font-bold mb-2">Find Your Dream Job</h2>
              <p className="text-white/90">Browse thousands of opportunities from top companies</p>
            </div>
            <button
              onClick={() => navigate('/job-seeker/search')}
              className="bg-white text-[#1E3A8A] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              Search Jobs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            <button
              onClick={() => navigate('/job-seeker/search')}
              className="text-[#14B8A6] hover:text-[#0d9488] font-semibold"
            >
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => navigate(`/job-seeker/job/${job.id}`)}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#14B8A6] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <span className="text-xs text-gray-500">{job.posted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/job-seeker/mentors')}
              className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all text-left"
            >
              <Users className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h3 className="font-semibold text-gray-900">Find a Mentor</h3>
              <p className="text-sm text-gray-600 mt-1">Connect with industry experts</p>
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all text-left"
            >
              <FileText className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h3 className="font-semibold text-gray-900">Update Profile</h3>
              <p className="text-sm text-gray-600 mt-1">Keep your information current</p>
            </button>
            <button
              onClick={() => navigate('/notifications')}
              className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all text-left"
            >
              <TrendingUp className="w-6 h-6 text-[#14B8A6] mb-2" />
              <h3 className="font-semibold text-gray-900">View Activity</h3>
              <p className="text-sm text-gray-600 mt-1">Track your applications</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

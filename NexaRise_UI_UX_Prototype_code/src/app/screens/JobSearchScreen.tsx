import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { Search, MapPin, DollarSign, Filter, Briefcase, Clock } from 'lucide-react';

export default function JobSearchScreen() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp SL',
      location: 'Freetown',
      salary: 'Le 8,000,000 - 12,000,000',
      type: 'Full-time',
      posted: '2 days ago',
      logo: '💻',
      description: 'We are looking for a talented Frontend Developer to join our team.',
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
      description: 'Lead our marketing initiatives and grow our brand presence.',
    },
    {
      id: 3,
      title: 'Customer Service Representative',
      company: 'Orange SL',
      location: 'Freetown',
      salary: 'Le 4,000,000 - 6,000,000',
      type: 'Contract',
      posted: '3 days ago',
      logo: '📞',
      description: 'Help customers with their inquiries and provide excellent service.',
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'DataInsights',
      location: 'Freetown',
      salary: 'Le 7,000,000 - 9,000,000',
      type: 'Full-time',
      posted: '5 days ago',
      logo: '📊',
      description: 'Analyze data and provide insights to drive business decisions.',
    },
    {
      id: 5,
      title: 'Graphic Designer',
      company: 'Creative Studios',
      location: 'Kenema',
      salary: 'Le 5,000,000 - 8,000,000',
      type: 'Part-time',
      posted: '1 day ago',
      logo: '🎨',
      description: 'Create stunning visuals for our clients and marketing campaigns.',
    },
  ];

  return (
    <Layout role="job-seeker">
      <div className="space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
          <p className="text-gray-600">Search from {jobs.length} available positions</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="grid md:grid-cols-3 gap-3">
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Search
              </button>
              <button className="px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['All', 'Full-time', 'Part-time', 'Contract', 'Remote'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === 'All'
                  ? 'bg-[#14B8A6] text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#14B8A6]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/job-seeker/job/${job.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {job.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#14B8A6] transition-colors mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-3">{job.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

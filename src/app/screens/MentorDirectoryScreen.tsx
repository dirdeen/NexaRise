import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { Search, Star, MapPin, Briefcase, MessageSquare } from 'lucide-react';

export default function MentorDirectoryScreen() {
  const navigate = useNavigate();

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Freetown',
      expertise: ['Software Development', 'Career Growth', 'Leadership'],
      rating: 4.9,
      sessions: 120,
      avatar: '👩‍💼',
      bio: 'Helping junior developers transition into senior roles with 15+ years of experience.',
    },
    {
      id: 2,
      name: 'Michael Thompson',
      title: 'Marketing Director',
      company: 'Coca-Cola',
      location: 'Bo',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
      rating: 4.8,
      sessions: 95,
      avatar: '👨‍💼',
      bio: 'Passionate about building strong marketing careers and personal brands.',
    },
    {
      id: 3,
      name: 'Fatmata Kamara',
      title: 'UX Design Lead',
      company: 'Meta',
      location: 'Freetown',
      expertise: ['UX Design', 'User Research', 'Product Design'],
      rating: 5.0,
      sessions: 78,
      avatar: '👩‍🎨',
      bio: 'Guiding designers to create impactful user experiences.',
    },
    {
      id: 4,
      name: 'Ibrahim Sesay',
      title: 'Data Science Manager',
      company: 'Microsoft',
      location: 'Kenema',
      expertise: ['Data Science', 'Machine Learning', 'Analytics'],
      rating: 4.7,
      sessions: 65,
      avatar: '👨‍🔬',
      bio: 'Making data science accessible to aspiring analysts and engineers.',
    },
  ];

  return (
    <Layout role="job-seeker">
      <div className="space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Mentor</h1>
          <p className="text-gray-600">Connect with experienced professionals to guide your career</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by expertise, industry, or name..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['All', 'Technology', 'Marketing', 'Design', 'Business', 'Finance'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition-all ${
                category === 'All'
                  ? 'bg-[#14B8A6] text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#14B8A6]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {mentor.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-gray-600 mb-1">{mentor.title}</p>
                  <p className="text-sm text-gray-500">{mentor.company}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{mentor.rating}</span>
                  <span>({mentor.sessions} sessions)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{mentor.location}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/messaging')}
                className="w-full bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Connect with Mentor
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { Users, Calendar, MessageSquare, TrendingUp, Star, Clock } from 'lucide-react';

export default function MentorDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Mentees', value: '12', icon: Users, color: 'bg-blue-500' },
    { label: 'Sessions This Month', value: '24', icon: Calendar, color: 'bg-green-500' },
    { label: 'Pending Requests', value: '5', icon: MessageSquare, color: 'bg-orange-500' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'bg-yellow-500' },
  ];

  const mentees = [
    {
      id: 1,
      name: 'Abdul Rahman',
      avatar: '👨‍💻',
      goal: 'Transition to Senior Developer',
      progress: 75,
      nextSession: 'Tomorrow, 2:00 PM',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Mariatu Koroma',
      avatar: '👩‍💼',
      goal: 'Career Change to UX Design',
      progress: 50,
      nextSession: 'Friday, 10:00 AM',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Ibrahim Bangura',
      avatar: '👨‍🎓',
      goal: 'First Software Engineering Job',
      progress: 60,
      nextSession: 'Next Monday, 3:00 PM',
      status: 'Active',
    },
  ];

  const requests = [
    {
      id: 1,
      name: 'Sarah Kamara',
      avatar: '👩‍💻',
      interest: 'Looking for guidance in frontend development',
      requestedDate: '2 days ago',
    },
    {
      id: 2,
      name: 'David Sesay',
      avatar: '👨‍💼',
      interest: 'Need help with career transition to tech',
      requestedDate: '1 week ago',
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentee: 'Abdul Rahman',
      avatar: '👨‍💻',
      topic: 'System Design Review',
      date: 'Tomorrow',
      time: '2:00 PM',
    },
    {
      id: 2,
      mentee: 'Mariatu Koroma',
      avatar: '👩‍💼',
      topic: 'Portfolio Review',
      date: 'Friday',
      time: '10:00 AM',
    },
  ];

  return (
    <Layout role="mentor">
      <div className="space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentor Dashboard</h1>
          <p className="text-gray-600">Guide and inspire the next generation of professionals</p>
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

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Your Mentees</h2>
                <button className="text-[#14B8A6] hover:text-[#0d9488] font-semibold">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {mentees.map((mentee) => (
                  <div
                    key={mentee.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl flex items-center justify-center text-2xl">
                        {mentee.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{mentee.name}</h3>
                            <p className="text-sm text-gray-600">{mentee.goal}</p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {mentee.status}
                          </span>
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold text-[#14B8A6]">{mentee.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] h-2 rounded-full"
                              style={{ width: `${mentee.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Next session: {mentee.nextSession}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Mentorship Requests</h2>
                <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  {requests.length} New
                </span>
              </div>

              <div className="space-y-4">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl flex items-center justify-center text-xl">
                        {request.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{request.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{request.interest}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Requested {request.requestedDate}</span>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all">
                              Decline
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white rounded-lg text-sm hover:shadow-lg transition-all">
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-lg flex items-center justify-center text-lg">
                        {session.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{session.mentee}</h3>
                        <p className="text-sm text-gray-600 mb-2">{session.topic}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{session.date} at {session.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/messaging')}
                className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-all"
              >
                View Calendar
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl p-6 text-white">
              <TrendingUp className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Your Impact</h3>
              <p className="text-white/90 text-sm mb-4">
                You've helped 48 mentees achieve their career goals this year!
              </p>
              <button className="text-sm text-white underline hover:no-underline">
                View Analytics →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

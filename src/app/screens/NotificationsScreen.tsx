import Layout from '../components/Layout';
import { Briefcase, Users, CheckCircle, MessageSquare, Bell, Clock } from 'lucide-react';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'application',
      icon: Briefcase,
      color: 'bg-blue-500',
      title: 'Application Update',
      message: 'TechCorp SL viewed your application for Frontend Developer',
      time: '5 minutes ago',
      read: false,
    },
    {
      id: 2,
      type: 'mentor',
      icon: Users,
      color: 'bg-purple-500',
      title: 'Mentor Request Accepted',
      message: 'Dr. Sarah Johnson accepted your mentorship request',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'message',
      icon: MessageSquare,
      color: 'bg-green-500',
      title: 'New Message',
      message: 'You have a new message from Michael Thompson',
      time: '2 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle,
      color: 'bg-green-500',
      title: 'Application Submitted',
      message: 'Your application for Marketing Manager at GrowthHub was submitted successfully',
      time: '1 day ago',
      read: true,
    },
    {
      id: 5,
      type: 'job',
      icon: Briefcase,
      color: 'bg-[#14B8A6]',
      title: 'New Job Match',
      message: 'New job posting matches your profile: Data Analyst at DataInsights',
      time: '2 days ago',
      read: true,
    },
    {
      id: 6,
      type: 'reminder',
      icon: Clock,
      color: 'bg-yellow-500',
      title: 'Profile Reminder',
      message: 'Update your skills to get better job recommendations',
      time: '3 days ago',
      read: true,
    },
  ];

  return (
    <Layout role="job-seeker">
      <div className="space-y-6 pb-20 md:pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your job search activities</p>
          </div>
          <button className="text-[#14B8A6] hover:text-[#0d9488] font-semibold">
            Mark all as read
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['All', 'Applications', 'Messages', 'Mentors', 'Jobs'].map((filter) => (
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

        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all cursor-pointer ${
                  !notification.read ? 'border-l-4 border-l-[#14B8A6]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${notification.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-[#14B8A6] rounded-full flex-shrink-0 mt-2"></span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-gray-600">We'll notify you when there's something new</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

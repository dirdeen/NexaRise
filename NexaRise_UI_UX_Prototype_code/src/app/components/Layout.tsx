import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Briefcase, Search, Users, Bell, User, Settings, LogOut, Home, FileText, MessageSquare } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  role: 'job-seeker' | 'employer' | 'mentor';
}

export default function Layout({ children, role }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavItems = () => {
    switch (role) {
      case 'job-seeker':
        return [
          { icon: Home, label: 'Dashboard', path: '/job-seeker/dashboard' },
          { icon: Search, label: 'Search Jobs', path: '/job-seeker/search' },
          { icon: Users, label: 'Mentors', path: '/job-seeker/mentors' },
          { icon: Bell, label: 'Notifications', path: '/notifications' },
        ];
      case 'employer':
        return [
          { icon: Home, label: 'Dashboard', path: '/employer/dashboard' },
          { icon: FileText, label: 'Post Job', path: '/employer/post-job' },
          { icon: Users, label: 'Applications', path: '/employer/applications' },
          { icon: MessageSquare, label: 'Messages', path: '/messaging' },
        ];
      case 'mentor':
        return [
          { icon: Home, label: 'Dashboard', path: '/mentor/dashboard' },
          { icon: Users, label: 'Mentees', path: '/mentor/dashboard' },
          { icon: MessageSquare, label: 'Messages', path: '/messaging' },
          { icon: Bell, label: 'Notifications', path: '/notifications' },
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A8A]">NexaRise</h1>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-[#14B8A6] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/profile')}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive ? 'text-[#14B8A6]' : 'text-gray-600'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

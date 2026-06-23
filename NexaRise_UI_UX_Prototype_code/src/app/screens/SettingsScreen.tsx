import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { User, Lock, Bell, Globe, Moon, Shield, LogOut, ChevronRight } from 'lucide-react';

export default function SettingsScreen() {
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: 'Account Settings',
      items: [
        {
          icon: User,
          label: 'Personal Information',
          description: 'Update your profile details',
          action: () => navigate('/profile'),
        },
        {
          icon: Lock,
          label: 'Password & Security',
          description: 'Change password and security settings',
          action: () => {},
        },
        {
          icon: Globe,
          label: 'Language & Region',
          description: 'English (Sierra Leone)',
          action: () => {},
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          label: 'Notifications',
          description: 'Manage email and push notifications',
          action: () => {},
        },
        {
          icon: Moon,
          label: 'Appearance',
          description: 'Light mode',
          action: () => {},
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          icon: Shield,
          label: 'Privacy Settings',
          description: 'Control who can see your information',
          action: () => {},
        },
        {
          icon: Lock,
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          action: () => {},
        },
      ],
    },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Layout role="job-seeker">
      <div className="max-w-3xl mx-auto space-y-6 pb-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        {settingsSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
            </div>
            <div>
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIdx}
                    onClick={item.action}
                    className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-all text-left ${
                      itemIdx !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">About</h2>
          </div>
          <div>
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all text-left border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900">Terms of Service</h3>
                <p className="text-sm text-gray-600">Read our terms and conditions</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all text-left border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900">Privacy Policy</h3>
                <p className="text-sm text-gray-600">How we handle your data</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all text-left">
              <div>
                <h3 className="font-semibold text-gray-900">App Version</h3>
                <p className="text-sm text-gray-600">Version 1.0.0</p>
              </div>
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-white border-2 border-red-500 text-red-600 py-4 rounded-2xl font-semibold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </Layout>
  );
}

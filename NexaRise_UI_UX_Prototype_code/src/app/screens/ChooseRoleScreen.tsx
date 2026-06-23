import { useNavigate } from 'react-router';
import { Briefcase, Building2, GraduationCap, ArrowRight } from 'lucide-react';

export default function ChooseRoleScreen() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'job-seeker',
      title: 'Job Seeker',
      description: 'Find your dream job and connect with top employers',
      icon: Briefcase,
      color: 'from-[#14B8A6] to-[#0d9488]',
      route: '/job-seeker/dashboard',
      features: ['Browse Jobs', 'Apply Online', 'Get Mentorship', 'Track Applications'],
    },
    {
      id: 'employer',
      title: 'Employer',
      description: 'Post jobs and discover talented professionals',
      icon: Building2,
      color: 'from-[#1E3A8A] to-[#1e40af]',
      route: '/employer/dashboard',
      features: ['Post Jobs', 'Review Applications', 'Manage Candidates', 'Build Team'],
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Share your expertise and guide the next generation',
      icon: GraduationCap,
      color: 'from-[#7c3aed] to-[#6d28d9]',
      route: '/mentor/dashboard',
      features: ['Guide Mentees', 'Share Knowledge', 'Track Progress', 'Build Network'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-2xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-bold text-[#1E3A8A]">NexaRise</h1>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Role</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select how you'd like to use NexaRise. You can always switch roles later in settings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => navigate(role.route)}
              >
                <div className={`bg-gradient-to-br ${role.color} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                  <p className="text-white/90">{role.description}</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-[#14B8A6] group-hover:to-[#1E3A8A] group-hover:text-white transition-all duration-300">
                    Continue as {role.title}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/login')}
            className="text-gray-600 hover:text-gray-900"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

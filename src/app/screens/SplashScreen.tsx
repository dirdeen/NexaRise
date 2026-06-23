import { useNavigate } from 'react-router';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
              <Briefcase className="w-12 h-12 text-[#14B8A6]" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-3">NexaRise</h1>
        <p className="text-xl text-white/90 mb-2">Digital Employment Platform</p>
        <p className="text-white/80 mb-12 max-w-md mx-auto">
          Connecting Job Seekers, Employers, and Mentors in Sierra Leone
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/90 text-sm">Find Jobs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/90 text-sm">Get Mentored</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/90 text-sm">Grow Career</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="bg-white text-[#1E3A8A] px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

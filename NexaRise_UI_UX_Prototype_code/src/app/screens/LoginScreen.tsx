import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Briefcase, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/choose-role');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-[#14B8A6]" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-bold">NexaRise</h1>
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-white/90 text-lg mb-8">
            Your journey to career success continues here. Connect with opportunities and mentors.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p>Access thousands of job opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p>Connect with industry mentors</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p>Track your career progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-3xl font-bold text-[#1E3A8A]">NexaRise</h1>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-[#14B8A6] border-gray-300 rounded focus:ring-[#14B8A6]" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#14B8A6] hover:text-[#0d9488]">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-[#14B8A6] font-semibold hover:text-[#0d9488]"
              >
                Register Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

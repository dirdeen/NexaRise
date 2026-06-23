import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { CheckCircle, ArrowRight, Bell, FileText } from 'lucide-react';

export default function ApplicationSuccessScreen() {
  const navigate = useNavigate();

  return (
    <Layout role="job-seeker">
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center pb-20 md:pb-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">Application Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your application for <span className="font-semibold">Frontend Developer</span> at{' '}
              <span className="font-semibold">TechCorp SL</span> has been successfully submitted.
            </p>

            <div className="bg-gradient-to-r from-[#14B8A6]/10 to-[#1E3A8A]/10 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                    1
                  </div>
                  <p className="text-gray-700">The employer will review your application</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                    2
                  </div>
                  <p className="text-gray-700">You'll receive a notification about your application status</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                    3
                  </div>
                  <p className="text-gray-700">If selected, you'll be contacted for an interview</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate('/job-seeker/dashboard')}
                className="w-full bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Return to Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/job-seeker/search')}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Browse More Jobs
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <Bell className="w-8 h-8 text-[#14B8A6] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-3">
                We'll notify you about your application status
              </p>
              <button
                onClick={() => navigate('/notifications')}
                className="text-[#14B8A6] hover:text-[#0d9488] text-sm font-semibold"
              >
                View Notifications →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <FileText className="w-8 h-8 text-[#14B8A6] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Track Applications</h3>
              <p className="text-sm text-gray-600 mb-3">
                View all your job applications in one place
              </p>
              <button
                onClick={() => navigate('/notifications')}
                className="text-[#14B8A6] hover:text-[#0d9488] text-sm font-semibold"
              >
                View All Applications →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

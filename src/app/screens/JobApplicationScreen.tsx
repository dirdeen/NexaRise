import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Layout from '../components/Layout';
import { Upload, FileText, ArrowLeft, CheckCircle } from 'lucide-react';

export default function JobApplicationScreen() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [cvFile, setCvFile] = useState<string>('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/job-seeker/application-success');
  };

  return (
    <Layout role="job-seeker">
      <div className="max-w-3xl mx-auto space-y-6 pb-20 md:pb-6">
        <button
          onClick={() => navigate(`/job-seeker/job/${jobId}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Job Details
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for Frontend Developer</h1>
            <p className="text-gray-600">Complete the form below to submit your application</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Your CV / Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#14B8A6] transition-all cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setCvFile(file.name);
                  }}
                  className="hidden"
                  id="cv-upload"
                  required
                />
                <label
                  htmlFor="cv-upload"
                  className="inline-block mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all cursor-pointer"
                >
                  Choose File
                </label>
                {cvFile && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-[#14B8A6]">
                    <CheckCircle className="w-5 h-5" />
                    <span>{cvFile}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter *
              </label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent resize-none"
                required
              />
              <p className="text-sm text-gray-500 mt-2">{coverLetter.length} characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                placeholder="Any additional information you'd like to share..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent resize-none"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Application Tips</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>Tailor your cover letter to the specific role</li>
                    <li>Highlight relevant experience and skills</li>
                    <li>Proofread your application before submitting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 text-[#14B8A6] border-gray-300 rounded focus:ring-[#14B8A6]"
                required
              />
              <span className="ml-2 text-sm text-gray-600">
                I confirm that the information provided is accurate and I agree to the{' '}
                <a href="#" className="text-[#14B8A6] hover:text-[#0d9488]">
                  terms and conditions
                </a>
              </span>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/job-seeker/job/${jobId}`)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

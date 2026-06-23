import { useNavigate, useParams } from 'react-router';
import Layout from '../components/Layout';
import { MapPin, DollarSign, Clock, Briefcase, Users, ArrowLeft, Building2 } from 'lucide-react';

export default function JobDetailsScreen() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const job = {
    id: jobId,
    title: 'Frontend Developer',
    company: 'TechCorp SL',
    location: 'Freetown, Sierra Leone',
    salary: 'Le 8,000,000 - 12,000,000 / year',
    type: 'Full-time',
    posted: '2 days ago',
    logo: '💻',
    about: 'TechCorp SL is a leading technology company in Sierra Leone, specializing in innovative software solutions for businesses across West Africa.',
    description: 'We are seeking a talented Frontend Developer to join our growing team. You will be responsible for building beautiful, responsive web applications using modern technologies and best practices.',
    responsibilities: [
      'Develop and maintain responsive web applications using React and TypeScript',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Write clean, maintainable, and well-documented code',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and contribute to team knowledge sharing',
    ],
    requirements: [
      '3+ years of experience in frontend development',
      'Strong proficiency in React, JavaScript/TypeScript, and CSS',
      'Experience with modern build tools and version control (Git)',
      'Understanding of responsive design and cross-browser compatibility',
      'Excellent problem-solving skills and attention to detail',
      'Bachelor\'s degree in Computer Science or related field',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible working hours',
      'Modern office environment',
    ],
  };

  return (
    <Layout role="job-seeker">
      <div className="space-y-6 pb-20 md:pb-6">
        <button
          onClick={() => navigate('/job-seeker/search')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Search
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                {job.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-xl text-white/90 mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => navigate(`/job-seeker/apply/${job.id}`)}
                className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Apply Now
              </button>
              <button className="px-6 border-2 border-gray-300 rounded-xl hover:border-[#14B8A6] transition-all">
                Save Job
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-[#14B8A6]" />
                  <h2 className="text-xl font-semibold text-gray-900">About the Company</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{job.about}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h2>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => navigate(`/job-seeker/apply/${job.id}`)}
                className="w-full bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

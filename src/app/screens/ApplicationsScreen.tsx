import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { ArrowLeft, Download, Eye, CheckCircle, X, Star, MapPin } from 'lucide-react';

export default function ApplicationsScreen() {
  const navigate = useNavigate();
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null);
  const [shortlisted, setShortlisted] = useState<number[]>([]);

  const applications = [
    {
      id: 1,
      name: 'John Kamara',
      position: 'Frontend Developer',
      avatar: '👨‍💻',
      email: 'john.kamara@email.com',
      phone: '+232 76 123 456',
      location: 'Freetown',
      appliedDate: '2 hours ago',
      match: 95,
      experience: '3 years',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      coverLetter: 'I am excited to apply for the Frontend Developer position. With over 3 years of experience building modern web applications using React and TypeScript, I believe I would be a great fit for your team...',
    },
    {
      id: 2,
      name: 'Aminata Sesay',
      position: 'Frontend Developer',
      avatar: '👩‍💼',
      email: 'aminata.sesay@email.com',
      phone: '+232 77 234 567',
      location: 'Bo',
      appliedDate: '5 hours ago',
      match: 88,
      experience: '4 years',
      skills: ['Vue.js', 'JavaScript', 'CSS', 'Git'],
      coverLetter: 'As a passionate frontend developer with 4 years of experience, I am eager to contribute to your innovative projects. My expertise in Vue.js and modern web technologies makes me confident...',
    },
    {
      id: 3,
      name: 'Mohamed Conteh',
      position: 'Frontend Developer',
      avatar: '👨‍💼',
      email: 'mohamed.conteh@email.com',
      phone: '+232 78 345 678',
      location: 'Kenema',
      appliedDate: '1 day ago',
      match: 92,
      experience: '5 years',
      skills: ['React', 'Angular', 'TypeScript', 'GraphQL'],
      coverLetter: 'I am writing to express my strong interest in the Frontend Developer role. My 5 years of experience in building scalable web applications aligns perfectly with your requirements...',
    },
  ];

  const handleShortlist = (id: number) => {
    if (shortlisted.includes(id)) {
      setShortlisted(shortlisted.filter((appId) => appId !== id));
    } else {
      setShortlisted([...shortlisted, id]);
    }
  };

  return (
    <Layout role="employer">
      <div className="space-y-6 pb-20 md:pb-6">
        <button
          onClick={() => navigate('/employer/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Applications</h1>
          <p className="text-gray-600">Review and manage candidate applications</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['All', 'New', 'Shortlisted', 'Reviewed'].map((filter) => (
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

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                onClick={() => setSelectedApplication(application.id)}
                className={`bg-white rounded-xl shadow-sm border p-5 cursor-pointer hover:shadow-lg transition-all ${
                  selectedApplication === application.id
                    ? 'border-[#14B8A6] ring-2 ring-[#14B8A6]/20'
                    : 'border-gray-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {application.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{application.name}</h3>
                        <p className="text-sm text-gray-600">{application.position}</p>
                      </div>
                      {shortlisted.includes(application.id) && (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{application.location}</span>
                      </div>
                      <span>•</span>
                      <span>{application.experience}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 w-24">
                          <div
                            className="bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] h-2 rounded-full"
                            style={{ width: `${application.match}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-[#14B8A6]">{application.match}%</span>
                      </div>
                      <span className="text-xs text-gray-500">{application.appliedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            {selectedApplication ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                {(() => {
                  const app = applications.find((a) => a.id === selectedApplication);
                  if (!app) return null;

                  return (
                    <>
                      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-2xl flex items-center justify-center text-3xl">
                          {app.avatar}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">{app.name}</h2>
                          <p className="text-gray-600 mb-2">{app.position}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                              {app.match}% Match
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                          <p className="text-gray-900">{app.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
                          <p className="text-gray-900">{app.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-1">Location</h3>
                          <p className="text-gray-900">{app.location}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-1">Experience</h3>
                          <p className="text-gray-900">{app.experience}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {app.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-2">Cover Letter</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">{app.coverLetter}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                          <Download className="w-5 h-5" />
                          Download CV
                        </button>
                        <button
                          onClick={() => handleShortlist(app.id)}
                          className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                            shortlisted.includes(app.id)
                              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                              : 'bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white hover:shadow-lg'
                          }`}
                        >
                          {shortlisted.includes(app.id) ? (
                            <>
                              <CheckCircle className="w-5 h-5" />
                              Shortlisted
                            </>
                          ) : (
                            <>
                              <Star className="w-5 h-5" />
                              Shortlist
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select an Application</h3>
                <p className="text-gray-600">Click on an application to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

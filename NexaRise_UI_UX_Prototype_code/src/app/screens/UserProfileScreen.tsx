import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Plus, Edit2 } from 'lucide-react';

export default function UserProfileScreen() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Layout role="job-seeker">
      <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 -mt-16 mb-6">
              <div className="w-32 h-32 bg-white rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-5xl">
                👨‍💻
              </div>
              <div className="flex-1 md:mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">John Kamara</h2>
                <p className="text-gray-600 mb-3">Frontend Developer</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full">
                    Job Seeker
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.kamara@email.com"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+232 76 123 456"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="Freetown, Sierra Leone"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Current Role
                </label>
                <input
                  type="text"
                  defaultValue="Frontend Developer"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] disabled:bg-gray-50"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                defaultValue="Passionate frontend developer with 3+ years of experience building modern web applications. Specialized in React, TypeScript, and creating intuitive user experiences."
                disabled={!isEditing}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] disabled:bg-gray-50 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Skills</h3>
            {isEditing && (
              <button className="flex items-center gap-2 text-[#14B8A6] hover:text-[#0d9488]">
                <Plus className="w-4 h-4" />
                Add Skill
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'REST APIs', 'Responsive Design', 'JavaScript'].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#14B8A6]/10 text-[#14B8A6] px-4 py-2 rounded-lg font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              <Briefcase className="w-5 h-5 inline mr-2" />
              Experience
            </h3>
            {isEditing && (
              <button className="flex items-center gap-2 text-[#14B8A6] hover:text-[#0d9488]">
                <Plus className="w-4 h-4" />
                Add Experience
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-[#14B8A6] pl-4">
              <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
              <p className="text-gray-600">TechCorp SL</p>
              <p className="text-sm text-gray-500">2022 - Present</p>
              <p className="text-sm text-gray-700 mt-2">
                Building modern web applications using React and TypeScript. Led the redesign of the company's main
                product, improving user engagement by 40%.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4">
              <h4 className="font-semibold text-gray-900">Junior Developer</h4>
              <p className="text-gray-600">StartupHub</p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
              <p className="text-sm text-gray-700 mt-2">
                Developed responsive web interfaces and collaborated with the design team to implement new features.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              <GraduationCap className="w-5 h-5 inline mr-2" />
              Education
            </h3>
            {isEditing && (
              <button className="flex items-center gap-2 text-[#14B8A6] hover:text-[#0d9488]">
                <Plus className="w-4 h-4" />
                Add Education
              </button>
            )}
          </div>
          <div className="border-l-2 border-[#14B8A6] pl-4">
            <h4 className="font-semibold text-gray-900">BSc Computer Science</h4>
            <p className="text-gray-600">University of Sierra Leone</p>
            <p className="text-sm text-gray-500">2016 - 2020</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              <Award className="w-5 h-5 inline mr-2" />
              Certifications
            </h3>
            {isEditing && (
              <button className="flex items-center gap-2 text-[#14B8A6] hover:text-[#0d9488]">
                <Plus className="w-4 h-4" />
                Add Certification
              </button>
            )}
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#14B8A6] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">React Developer Certification</h4>
                <p className="text-sm text-gray-600">Meta - 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#14B8A6] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Advanced TypeScript</h4>
                <p className="text-sm text-gray-600">Udemy - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

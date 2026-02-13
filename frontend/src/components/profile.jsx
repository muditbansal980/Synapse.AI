import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Profile Data
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    title: 'Full Stack Developer | Competitive Programmer',
    bio: 'Passionate software engineer with 5+ years of experience in web development and competitive programming. Love solving complex problems and building scalable applications.',
    location: 'San Francisco, CA',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    website: 'www.alexjohnson.dev',
    github: 'github.com/alexjohnson',
    linkedin: 'linkedin.com/in/alexjohnson'
  });

  // Contest Performances
  const [contests, setContests] = useState([
    {
      id: 1,
      name: 'Google Code Jam 2024',
      rank: 145,
      participants: 25000,
      date: 'Jan 2024',
      score: 9850,
      badge: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      name: 'Meta Hacker Cup',
      rank: 89,
      participants: 18000,
      date: 'Dec 2023',
      score: 8920,
      badge: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Codeforces Round 912',
      rank: 234,
      participants: 15000,
      date: 'Nov 2023',
      score: 7650,
      badge: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'LeetCode Weekly Contest 370',
      rank: 67,
      participants: 12000,
      date: 'Oct 2023',
      score: 9100,
      badge: 'from-green-500 to-green-600'
    }
  ]);

  // Certificates
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Feb 2024',
      credential: 'AWS-SA-2024-12345',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'Jan 2024',
      credential: 'GCP-PD-2024-67890',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Coursera)',
      date: 'Dec 2023',
      credential: 'META-FE-2023-54321',
      color: 'from-purple-500 to-purple-600'
    }
  ]);

  // Skills
  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React.js', level: 92, color: 'bg-blue-500' },
    { name: 'Python', level: 88, color: 'bg-green-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-600' },
    { name: 'Data Structures', level: 90, color: 'bg-purple-500' },
    { name: 'Algorithms', level: 87, color: 'bg-pink-500' },
    { name: 'System Design', level: 82, color: 'bg-indigo-500' },
    { name: 'AWS', level: 78, color: 'bg-orange-500' }
  ]);

  // Experience
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      current: true,
      description: 'Leading development of scalable web applications serving 10M+ users. Mentoring junior developers and conducting code reviews.'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      current: false,
      description: 'Developed and maintained microservices architecture. Improved API response time by 40%.'
    }
  ]);

  // Education
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2018',
      endDate: '2020',
      gpa: '3.9/4.0'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'UC Berkeley',
      location: 'Berkeley, CA',
      startDate: '2014',
      endDate: '2018',
      gpa: '3.8/4.0'
    }
  ]);

  // Achievements
  const achievements = [
    { icon: '🏆', title: 'Top 1% on LeetCode', description: 'Solved 1000+ problems' },
    { icon: '⭐', title: '5-Star Coder on HackerRank', description: 'Problem Solving' },
    { icon: '🎯', title: 'Contest Master', description: 'Won 15+ coding competitions' },
    { icon: '📚', title: 'Published Author', description: '3 technical articles' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 pt-36 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Card */}
        <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-20 relative">
              {/* Avatar */}
              <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
                <div className="relative group">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl border-4 border-gray-900">
                    AJ
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white border-2 border-gray-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 md:mt-0 md:mb-4">
                  <h1 className="text-3xl font-bold text-white mb-1">{profileData.name}</h1>
                  <p className="text-lg text-gray-400 mb-2">{profileData.title}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profileData.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {profileData.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4 md:mt-0 md:mb-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Profile
                </button>
                <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
                  Share
                </button>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 text-gray-300 max-w-3xl">
              {profileData.bio}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl mb-6 overflow-x-auto">
          <div className="flex">
            {['overview', 'contests', 'certificates', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-purple-500 bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                {/* Skills */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Skills
                  </h2>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div
                            className={`${skill.color} h-2.5 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Achievements
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-4 hover:from-white/15 hover:to-white/10 transition-all group"
                      >
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{achievement.icon}</div>
                        <h3 className="text-white font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Contests Tab */}
            {activeTab === 'contests' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    Contest Performances
                  </h2>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
                    + Add Contest
                  </button>
                </div>
                <div className="space-y-4">
                  {contests.map((contest) => (
                    <div
                      key={contest.id}
                      className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {contest.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {contest.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {contest.participants.toLocaleString()} participants
                            </span>
                          </div>
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-br ${contest.badge} rounded-xl flex flex-col items-center justify-center text-white shadow-lg`}>
                          <div className="text-xs font-semibold">Rank</div>
                          <div className="text-2xl font-bold">#{contest.rank}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Score:</span>
                          <span className="text-2xl font-bold text-white">{contest.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Certificates & Licenses
                  </h2>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
                    + Add Certificate
                  </button>
                </div>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                            {cert.name}
                          </h3>
                          <p className="text-gray-400 mb-2">{cert.issuer}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span>Issued {cert.date}</span>
                            <span>•</span>
                            <span>Credential ID: {cert.credential}</span>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm font-medium">
                          View Credential
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Tab
            {activeTab === 'experience' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experience
                  </h2>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
                    + Add Experience
                  </button>
                </div>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-8 pb-6 border-l-2 border-purple-500/30 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-purple-400 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
                          <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    Education
                  </h2>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
                    + Add Education
                  </button>
                </div>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative pl-8 pb-6 border-l-2 border-purple-500/30 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all">
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-lg text-purple-400 mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span>{edu.startDate} - {edu.endDate}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">{profileData.email}</span>
                </a>
                <a href={`tel:${profileData.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm">{profileData.phone}</span>
                </a>
                <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-sm">{profileData.website}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Social Links</h3>
              <div className="space-y-3">
                <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <span className="text-sm">{profileData.github}</span>
                </a>
                <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-sm">{profileData.linkedin}</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Profile Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Profile Views</span>
                  <span className="text-xl font-bold text-white">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Connections</span>
                  <span className="text-xl font-bold text-white">567</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Post Impressions</span>
                  <span className="text-xl font-bold text-white">12.5K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
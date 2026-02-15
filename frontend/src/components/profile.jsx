import React, { useState } from 'react';
import Instagram from '../assets/social.png'
import Twitter from "../assets/twitter.png"
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Profile Data
  const [profileData, setProfileData] = useState({
    name: 'Rahul',
    title: 'Sprinter',
    bio: '...',
    location: '...',
    email: 'rahul@example.com',
    phone: '...',
    instagram:'https://www.instagram.com',
    twitter:'https://x.com/'
  });

  // Contest Performances
  const [contests, setContests] = useState([
    {
      id: 1,
      name: 'A',
      rank: 145,
      participants: 25000,
      date: 'Jan 2026',
      score: 9850,
      badge: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      name: 'B',
      rank: 89,
      participants: 18000,
      date: 'Dec 2026',
      score: 8920,
      badge: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'C',
      rank: 234,
      participants: 15000,
      date: 'Feb 2026',
      score: 7650,
      badge: 'from-purple-500 to-purple-600'
    }
  ]);

  // Certificates
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'A',
      issuer: 'X',
      date: 'Feb 2026',
      credential: 'A',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      name: 'B',
      issuer: 'B',
      date: 'Jan 2026',
      credential: 'X',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'C',
      issuer: 'C',
      date: 'Dec 2026',
      credential: 'Y',
      color: 'from-purple-500 to-purple-600'
    }
  ]);

  // Education
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: '---',
      school: '---',
      location: '---',
      startDate: '---',
      endDate: '---',
      gpa: '---'
    },
    {
      id: 2,
      degree: '---',
      school: '---',
      location: '---',
      startDate: '---',
      endDate: '---',
      gpa: '---'
    }
  ]);

  // Achievements
  const achievements = [
    { icon: '🏆', title: 'Top 1% on LeaderBoard', description: '---' },
    { icon: '⭐', title: 'POINT HOLDERS', description: '---' },
    { icon: '🎯', title: 'Contest Master', description: '---' },
    { icon: '🏆', title: 'WON X CONTESTS', description: '---' }
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
                    R
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
                <a href={`${profileData.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <img src={Instagram} alt="Instagram"/>
                  </div>
                  <span className="text-sm">{profileData.instagram}</span>
                </a>
                <a href={`${profileData.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors">
                    <img src={Twitter} alt="Twitter"/>
                  </div>
                  <span className="text-sm">{profileData.twitter}</span>
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
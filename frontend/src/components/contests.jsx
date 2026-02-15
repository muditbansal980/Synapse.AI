import React, { useState, useEffect } from 'react';

const ContestsDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Contest Data
  const contests = [
    {
      id: 1,
      name: 'Jump and touch sky',
      platform: 'High Jumping',
      status: 'ongoing',
      startTime: new Date(Date.now() - 30 * 60000), // Started 30 min ago
      endTime: new Date(Date.now() + 90 * 60000), // Ends in 90 min
      duration: '2 hours',
      participants: 15234,
      difficulty: 'Medium',
      prize: '$500',
      registered: true,
      color: 'from-yellow-500 to-orange-500',
      icon: '💻'
    },
    {
      id: 2,
      name: 'Run for fun',
      platform: 'Sprint',
      status: 'ongoing',
      startTime: new Date(Date.now() - 45 * 60000),
      endTime: new Date(Date.now() + 75 * 60000),
      duration: '2 hours',
      participants: 12890,
      difficulty: 'Hard',
      prize: 'Rating Points',
      registered: true,
      color: 'from-blue-500 to-blue-600',
      icon: '🚀'
    },
    {
      id: 3,
      name: 'RoundAbout The World',
      platform: 'Marathon',
      status: 'upcoming',
      startTime: new Date(Date.now() + 2 * 60 * 60000), // In 2 hours
      endTime: new Date(Date.now() + 5 * 60 * 60000),
      duration: '3 hours',
      participants: 8234,
      difficulty: 'Hard',
      prize: '$15,000',
      registered: false,
      color: 'from-red-500 to-red-600',
      icon: '🏆'
    },
  ];

  // Countdown Timer Hook
  const useCountdown = (targetDate) => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
          setCountdown('LIVE');
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days > 0) {
          setCountdown(`${days}d ${hours}h ${minutes}m`);
        } else if (hours > 0) {
          setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setCountdown(`${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [targetDate]);

    return countdown;
  };

  // Contest Card Component
  const ContestCard = ({ contest }) => {
    const startsIn = useCountdown(contest.startTime);
    const endsIn = useCountdown(contest.endTime);
    const isOngoing = contest.status === 'ongoing';

    return (
      <div className={`bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 group relative overflow-hidden`}>
        {/* Ongoing Badge */}
        {isOngoing && (
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-2 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold text-sm">LIVE</span>
            </div>
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Platform Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${contest.color} rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            {contest.icon}
          </div>

          {/* Contest Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {contest.name}
                </h3>
                <p className="text-sm text-gray-400">{contest.platform}</p>
              </div>
            </div>

            {/* Contest Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold text-white">{contest.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Participants</p>
                <p className="text-sm font-semibold text-white">{contest.participants.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Difficulty</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  contest.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  contest.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {contest.difficulty}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Prize</p>
                <p className="text-sm font-semibold text-white">{contest.prize}</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {isOngoing ? 'Ends in:' : 'Starts in:'}
                </span>
                <span className={`text-lg font-bold ${isOngoing ? 'text-red-400' : 'text-green-400'}`}>
                  {isOngoing ? endsIn : startsIn}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {contest.registered ? (
                <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Registered
                </button>
              ) : (
                <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                  Register Now
                </button>
              )}
              <button className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Filter contests
  const filteredContests = contests
    .filter(contest => {
      if (activeTab === 'upcoming') return contest.status === 'upcoming';
      if (activeTab === 'ongoing') return contest.status === 'ongoing';
      return true;
    })
    .filter(contest => {
      if (selectedPlatform === 'all') return true;
      return contest.platform === selectedPlatform;
    })
    .filter(contest => {
      if (!searchQuery) return true;
      return contest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             contest.platform.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const platforms = ['all', ...new Set(contests.map(c => c.platform))];
  const ongoingCount = contests.filter(c => c.status === 'ongoing').length;
  const upcomingCount = contests.filter(c => c.status === 'upcoming').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 pt-36 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Contests
          </h1>
          <p className="text-gray-400 text-lg">Never miss a race again!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-lg border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Live Now</p>
                <p className="text-4xl font-bold text-white">{ongoingCount}</p>
              </div>
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">🔴</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-lg border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Upcoming</p>
                <p className="text-4xl font-bold text-white">{upcomingCount}</p>
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-lg border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Registered</p>
                <p className="text-4xl font-bold text-white">4</p>
              </div>
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Platforms</p>
                <p className="text-4xl font-bold text-white">{platforms.length - 1}</p>
              </div>
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">🌐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search contests..."
              />
            </div>

            {/* Platform Filter */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="block w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform} className="bg-gray-900">
                  {platform === 'all' ? 'Type' : platform}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="date" className="bg-gray-900">Sort by Date</option>
              <option value="participants" className="bg-gray-900">Sort by Participants</option>
              <option value="prize" className="bg-gray-900">Sort by Prize</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl mb-6 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === 'all'
                  ? 'text-white bg-gradient-to-r from-purple-600/30 to-purple-600/20 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Contests ({contests.length})
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex-1 px-6 py-4 font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'ongoing'
                  ? 'text-white bg-gradient-to-r from-red-600/30 to-red-600/20 border-b-2 border-red-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Live ({ongoingCount})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === 'upcoming'
                  ? 'text-white bg-gradient-to-r from-blue-600/30 to-blue-600/20 border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Upcoming ({upcomingCount})
            </button>
          </div>
        </div>

        {/* Contests Grid */}
        {filteredContests.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No contests found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </div>
        )}

        {/* Calendar Integration CTA */}
        {/* <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl">
                📆
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Never Miss a Contest!</h3>
                <p className="text-gray-300">Sync all contests to your Google Calendar automatically</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
              Connect Calendar
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContestsDashboard;
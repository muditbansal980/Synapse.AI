import React, { useState } from 'react';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationCount, setNotificationCount] = useState(5);
    const [cartCount, setCartCount] = useState(3);
    const [showNotifications, setShowNotifications] = useState(false);

    // Sample rankings data
    const rankings = [
        {
            rank: 1,
            name: 'Alex Johnson',
            avatar: 'AJ',
            score: 9850,
            change: '+15',
            trend: 'up',
            bgColor: 'from-yellow-500 to-orange-500'
        },
        {
            rank: 2,
            name: 'Sarah Williams',
            avatar: 'SW',
            score: 9720,
            change: '+8',
            trend: 'up',
            bgColor: 'from-gray-400 to-gray-500'
        },
        {
            rank: 3,
            name: 'Mike Chen',
            avatar: 'MC',
            score: 9580,
            change: '+12',
            trend: 'up',
            bgColor: 'from-orange-600 to-orange-700'
        },
        {
            rank: 4,
            name: 'Emma Davis',
            avatar: 'ED',
            score: 9340,
            change: '-3',
            trend: 'down',
            bgColor: 'from-blue-500 to-blue-600'
        },
        {
            rank: 5,
            name: 'James Wilson',
            avatar: 'JW',
            score: 9180,
            change: '+5',
            trend: 'up',
            bgColor: 'from-purple-500 to-purple-600'
        },
        {
            rank: 6,
            name: 'Lisa Anderson',
            avatar: 'LA',
            score: 8950,
            change: '+10',
            trend: 'up',
            bgColor: 'from-pink-500 to-pink-600'
        },
        {
            rank: 7,
            name: 'David Brown',
            avatar: 'DB',
            score: 8820,
            change: '-5',
            trend: 'down',
            bgColor: 'from-green-500 to-green-600'
        },
        {
            rank: 8,
            name: 'Sophie Taylor',
            avatar: 'ST',
            score: 8690,
            change: '+7',
            trend: 'up',
            bgColor: 'from-indigo-500 to-indigo-600'
        }
    ];

    const notifications = [
        { id: 1, text: 'New achievement unlocked!', time: '2m ago', type: 'success' },
        { id: 2, text: 'Your ranking improved to #12', time: '15m ago', type: 'info' },
        { id: 3, text: 'New message from admin', time: '1h ago', type: 'message' },
        { id: 4, text: 'Weekly report is ready', time: '2h ago', type: 'info' },
        { id: 5, text: 'System maintenance scheduled', time: '3h ago', type: 'warning' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
            {/* Leave space for main navbar - it will be added above */}
            <div className="pt-20">

                {/* Secondary Navbar - Search, Notifications, Cart */}
                <div className="sticky top-20 z-40 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">

                            {/* Search Bar */}
                            <div className="flex-1 max-w-2xl">
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Search profiles usign the username"
                                    />
                                </div>
                            </div>

                            {/* Right Side Icons */}
                            <div className="flex items-center space-x-4 ml-6">

                                {/* Notifications */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowNotifications(!showNotifications)}
                                        className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        {notificationCount > 0 && (
                                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                                                {notificationCount}
                                            </span>
                                        )}
                                    </button>

                                    {/* Notifications Dropdown */}
                                    {showNotifications && (
                                        <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3">
                                                <h3 className="text-white font-semibold">Notifications</h3>
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.map((notif) => (
                                                    <div
                                                        key={notif.id}
                                                        className="px-4 py-3 hover:bg-white/5 border-b border-white/5 transition-colors cursor-pointer"
                                                    >
                                                        <p className="text-sm text-gray-300">{notif.text}</p>
                                                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="px-4 py-3 bg-white/5 text-center">
                                                <button className="text-sm text-purple-400 hover:text-purple-300">
                                                    View all notifications
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Cart */}
                                <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    {cartCount > 0 && (
                                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>

                                {/* User Profile */}
                                <div className="relative group">
                                    <button className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-white/10 transition-all duration-300">
                                        <div className="relative">
                                            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                U
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            Leaderboard Rankings
                        </h1>
                        <p className="text-gray-400">Top performers this week</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-lg border border-blue-500/30 rounded-xl p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Total Users</p>
                                    <p className="text-3xl font-bold text-white">1,234</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Your Rank</p>
                                    <p className="text-3xl font-bold text-white">#12</p>
                                </div>
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rankings List */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-6 py-4 border-b border-white/10">
                            <h2 className="text-xl font-bold text-white">Top Rankings</h2>
                        </div>

                        <div className="divide-y divide-white/10">
                            {rankings.map((user, index) => (
                                <div
                                    key={user.rank}
                                    className="px-6 py-4 hover:bg-white/5 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 flex-1">
                                            {/* Rank */}
                                            <div className="flex-shrink-0">
                                                {user.rank <= 3 ? (
                                                    <div className={`w-10 h-10 bg-gradient-to-br ${user.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                                        {user.rank}
                                                    </div>
                                                ) : (
                                                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 font-bold">
                                                        {user.rank}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Avatar */}
                                            <div className={`w-12 h-12 bg-gradient-to-br ${user.bgColor} rounded-full flex items-center justify-center text-white font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {user.avatar}
                                            </div>

                                            {/* Name */}
                                            <div className="flex-1">
                                                <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                                                    {user.name}
                                                </h3>
                                                <p className="text-sm text-gray-400">Rank #{user.rank}</p>
                                            </div>
                                        </div>

                                        {/* Score and Change */}
                                        {/* <div className="flex items-center space-x-6">
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-white">
                                                    {user.score.toLocaleString()}
                                                </p>
                                                <p className="text-sm text-gray-400">points</p>
                                            </div>

                                            {/* Trend */}
                                            {/* <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${user.trend === 'up'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-red-500/20 text-red-400'
                                                }`}>
                                                {user.trend === 'up' ? (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                    </svg>
                                                )}
                                                <span className="font-semibold">{user.change}</span>
                                            </div>
                                        </div> */} 
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View More */}
                        <div className="px-6 py-4 bg-white/5 text-center">
                            <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                                View Full Leaderboard →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
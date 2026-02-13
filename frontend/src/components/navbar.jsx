import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 shadow-2xl shadow-purple-500/20'
          : 'bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 rounded-xl transform group-hover:scale-110 transition duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NexaFlow
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <NavLink to="/contests"><div className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-300 group">
                <span className="relative z-10">Contests</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
              </div></NavLink>
              <NavLink to="/profile"><div className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-300 group">
                <span className="relative z-10">Profile</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
              </div></NavLink>
              <NavLink to="/home"><div className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-300 group">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
              </div></NavLink>
              <NavLink to="/previous-activity"><div className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-300 group">
                <span className="relative z-10">Previous Activity</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
              </div></NavLink>
              <NavLink to="/record"><div className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-300 group">
                <span className="relative z-10">Record</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
              </div></NavLink>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2.5 font-semibold text-white overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <NavLink to="/home"><span className="relative flex items-center gap-2">
                Get Started
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span></NavLink>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-lg border-t border-white/10">
          
            <div
              
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Contests</span>
                <svg
                  className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div
              
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Profile</span>
                <svg
                  className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div
              
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Home</span>
                <svg
                  className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div
              
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Previous Activity</span>
                <svg
                  className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div
              
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Record</span>
                <svg
                  className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          
          <div className="pt-3">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
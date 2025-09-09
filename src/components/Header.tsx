import { useState } from "react";
import { Menu, X, Search, Bell, MessageCircle, Trophy, Target, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', exact: true, icon: Target },
  { to: '/streams', label: 'Streams', icon: Play },
  { to: '/discover', label: 'Discover', icon: Zap },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b-2 border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                {/* Optionally, add a playful icon for Trippin branding */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.5 2.5 2.5 4.5 4.5 5.5C19 9.5 20 11.5 20 14c0 4-3.5 7-8 7s-8-3-8-7c0-2.5 1-4.5 3.5-5.5C9.5 7.5 11.5 5.5 12 3z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-600">Trippin</span>
            </div>
          </div>

          {/* Navigation Tabs - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100 rounded-full p-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `px-6 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search athletes, teams, or sports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>

          {/* Desktop Actions: show Messages, Notifications, and Profile inline */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/messages">
              <Button variant="ghost" size="sm" className="relative p-3 rounded-full hover:bg-slate-100">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">7</span>
              </Button>
            </NavLink>
            <NavLink to="/notifications">
              <Button variant="ghost" size="sm" className="relative p-3 rounded-full hover:bg-slate-100">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </Button>
            </NavLink>
            <NavLink to="/profile">
              <img
                src="/profile-sofia-garcia.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
              />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 animate-fade-in">
            <div className="space-y-4">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.exact}
                      className={({ isActive }) =>
                        `flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 ${
                          isActive ? 'bg-blue-100' : ''
                        }`
                      }
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {item.label}
                    </NavLink>
                  );
                })}
                <div className="pt-2 border-t border-slate-200" />
                <NavLink to="/profile" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  Profile
                </NavLink>
                <NavLink to="/messages" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  Messages
                </NavLink>
                <NavLink to="/notifications" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  Notifications
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

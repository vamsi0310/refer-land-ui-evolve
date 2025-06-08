
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Bell } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow rounded-lg flex items-center justify-center">
              <span className="font-bold text-black text-lg">RL</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">Refer and Land</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/home"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/home')
                  ? 'bg-yellow text-black'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:block">Home</span>
            </Link>

            <Link
              to="/profile"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/profile')
                  ? 'bg-yellow text-black'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <User size={20} />
              <span className="hidden sm:block">Profile</span>
            </Link>

            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow rounded-full"></span>
            </button>

            <DarkModeToggle />

            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

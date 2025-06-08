
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Bell } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const notifications = [
    {
      id: 1,
      title: "New referral request",
      message: "John Doe requested a referral for Software Engineer at Google",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      title: "Referral accepted",
      message: "Your referral request for Microsoft was accepted by Sarah Chen",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      title: "Interview scheduled",
      message: "Netflix has scheduled an interview for the UX Designer position",
      time: "3 hours ago",
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

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

            <DropdownMenu>
              <DropdownMenuTrigger className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow rounded-full flex items-center justify-center text-xs font-bold text-black">
                    {unreadCount}
                  </span>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer">
                    <div className="flex flex-col space-y-1 w-full">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm ${notification.unread ? 'font-semibold' : 'font-normal'}`}>
                          {notification.title}
                        </h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-yellow rounded-full"></div>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-sm text-gray-500 cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DarkModeToggle />

            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

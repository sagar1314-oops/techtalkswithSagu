import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 leading-tight">
            Full-Stack Dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer hover:text-blue-600 transition font-medium text-gray-700 dark:text-gray-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Hire Me
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer hover:text-blue-600 transition font-medium block text-gray-700 dark:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

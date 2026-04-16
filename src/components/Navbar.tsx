import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Staff', path: '/staff' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-lg backdrop-blur-md dark:bg-gray-900/95"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3 py-4 sm:h-20 sm:py-0">
          <Link to="/" className="flex min-w-0 items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-400 to-primary-600 text-sm font-bold text-white sm:h-9 sm:w-9"
            >
              *
            </motion.div>
            <span className="truncate text-xl font-serif font-bold gradient-text sm:text-2xl">
              Glamour
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>

            <Link
              to="/booking"
              className="hidden rounded-lg bg-primary-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500 sm:inline-block"
            >
              Book Now
            </Link>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 pb-4 md:hidden dark:border-gray-700"
          >
            <div className="flex flex-col gap-1 pt-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-2 block rounded-lg bg-primary-400 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-500"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

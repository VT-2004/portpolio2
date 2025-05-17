import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub size={20} />, url: 'https://github.com/vikasdev', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/vikasdev', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/vikasdev', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:hello@vikas.dev', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold">
                <span className="text-indigo-600 dark:text-indigo-400">Vikas</span>
                <span className="text-gray-900 dark:text-white">.dev</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend developer passionate about creating beautiful, responsive websites with engaging user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Vikas.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
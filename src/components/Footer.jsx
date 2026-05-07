import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Gagan Ashok Shanku</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:gshanku19@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Gagan Ashok Shanku. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

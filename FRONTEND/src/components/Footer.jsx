import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-100 dark:bg-slate-800 mt-10 py-8 flex flex-col items-center text-center space-y-4 transition duration-300">

      {/* Links */}
      <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          About us
        </span>
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          Contact
        </span>
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          Jobs
        </span>
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          Press kit
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 text-xl text-gray-600 dark:text-gray-300">
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-transform hover:scale-110">🐦</span>
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-transform hover:scale-110">▶️</span>
        <span className="cursor-pointer hover:text-black dark:hover:text-white transition-transform hover:scale-110">📘</span>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
      </p>

    </div>
  );
}

export default Footer;
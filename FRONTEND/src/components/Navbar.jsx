import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login"; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-2 py-1 transition duration-200 ${
      isActive
        ? "text-amber-600 font-semibold border-b-2 border-amber-600"
        : "text-gray-700 dark:text-gray-300 hover:text-amber-500"
    }`;

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 px-3 md:px-10 py-2 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-slate-800 shadow-md" : "bg-gray-100 dark:bg-slate-700"
      }`}
    >
      <h1 className="text-lg font-bold text-black dark:text-white">bookStore</h1>

      <ul className="hidden md:flex gap-6 lg:gap-10 text-sm font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/course" className={linkClass}>Course</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
      </ul>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="w-20 sm:w-28 md:w-40 px-2 py-1 text-xs rounded-full border border-gray-300 bg-white text-black dark:bg-slate-900 dark:text-white focus:outline-none"
        />

        <button onClick={toggleTheme} className="text-xl cursor-pointer">
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* ✅ Perfectly synced to the Login component */}
        <button 
          className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 transition cursor-pointer"
          onClick={() => document.getElementById("login_modal").showModal()}
        >
          Login
        </button>
      </div>
      
      {/* Renders modal so it's ready to open */}
      <Login />
    </div>
  );
}

export default Navbar;
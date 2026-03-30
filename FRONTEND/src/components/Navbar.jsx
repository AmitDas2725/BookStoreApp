import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login"; 
import toast from "react-hot-toast";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [allAccounts, setAllAccounts] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("Users");
    const accounts = localStorage.getItem("AllAccounts");
    
    if (user) setAuthUser(JSON.parse(user));
    if (accounts) setAllAccounts(JSON.parse(accounts));

    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  }, []);

  const handleSwitchAccount = (account) => {
    localStorage.setItem("Users", JSON.stringify(account));
    setAuthUser(account);
    toast.success(`Switched to ${account.fullname}`);
    setTimeout(() => window.location.reload(), 500);
  };

  const handleLogout = () => {
    const updatedAccounts = allAccounts.filter(
      (acc) => acc.email !== authUser.email
    );
    localStorage.setItem("AllAccounts", JSON.stringify(updatedAccounts));
    
    if (updatedAccounts.length > 0) {
      localStorage.setItem("Users", JSON.stringify(updatedAccounts[0]));
    } else {
      localStorage.removeItem("Users");
    }
    
    toast.success("Logged out of account");
    setTimeout(() => window.location.reload(), 500);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    root.classList.toggle("dark");
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
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
        scrolled
          ? "bg-white dark:bg-slate-800 shadow-md"
          : "bg-gray-100 dark:bg-slate-700"
      }`}
    >
      {/* Logo */}
      <h1 className="text-lg font-bold text-black dark:text-white italic">
        bookStore
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-sm font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/course" className={linkClass}>Course</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="hidden sm:block w-28 md:w-40 px-2 py-1 text-xs rounded-full border border-gray-300 bg-white text-black dark:bg-slate-900 dark:text-white focus:outline-none"
        />

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="text-xl cursor-pointer">
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* Auth Section */}
        {authUser ? (
          <div className="flex items-center gap-2">
            
            {/* Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-amber-600 text-white px-3 py-1.5 text-sm rounded-md cursor-pointer"
              >
                {authUser.fullname.split(" ")[0]} ▾
              </div>

              <ul className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white dark:bg-slate-900 rounded-box w-52 mt-2 border dark:border-gray-700">
                <li className="menu-title text-gray-500 text-xs">
                  Switch Account
                </li>

                {allAccounts.map((acc) => (
                  <li key={acc.email}>
                    <button
                      onClick={() => handleSwitchAccount(acc)}
                      className={`text-sm ${
                        authUser.email === acc.email
                          ? "bg-gray-100 dark:bg-slate-800 font-bold"
                          : ""
                      }`}
                    >
                      {acc.email}
                    </button>
                  </li>
                ))}

                <div className="divider my-0"></div>

                <li>
                  <button
                    onClick={() =>
                      document.getElementById("login_modal").showModal()
                    }
                    className="text-blue-500 text-sm"
                  >
                    + Add Account
                  </button>
                </li>
              </ul>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1.5 text-sm rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 transition cursor-pointer"
            onClick={() =>
              document.getElementById("login_modal").showModal()
            }
          >
            Login
          </button>
        )}
      </div>

      <Login />
    </div>
  );
}

export default Navbar;
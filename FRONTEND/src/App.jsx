import React from "react";
import Home from "./components/home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup"; 
import Contact from "./components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ Add this for notifications

function App() {
  // 1. Check if user is logged in from localStorage
  const authUser = localStorage.getItem("Users");

  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* ✅ PROTECTED ROUTE: If no user, redirect to signup */}
        <Route 
          path="/course" 
          element={authUser ? <Courses /> : <Navigate to="/signup" />} 
        />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ GLOBAL TOAST NOTIFICATIONS */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
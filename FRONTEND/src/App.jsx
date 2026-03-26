import React from "react";
import Home from "./components/home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup"; 
import Contact from "./components/Contact"; // ✅ 1. IMPORT YOUR NEW CONTACT PAGE
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // ✅ Global theme container
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* ✅ 2. ADD THE ROUTE FOR THE CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
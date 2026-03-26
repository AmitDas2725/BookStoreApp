import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  { id: 1, title: "Psychology", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", price: 299 },
  { id: 2, title: "Mathematics", image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", price: 199 },
  { id: 3, title: "Science", image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", price: 249 },
  { id: 4, title: "Computer", image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png", price: 399 },
  { id: 5, title: "Biology", image: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png", price: 279 },
  { id: 6, title: "Physics", image: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png", price: 320 },
  { id: 7, title: "Chemistry", image: "https://cdn-icons-png.flaticon.com/512/4149/4149640.png", price: 310 },
  { id: 8, title: "English", image: "https://cdn-icons-png.flaticon.com/512/197/197484.png", price: 180 },
  { id: 9, title: "History", image: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png", price: 220 },
  { id: 10, title: "Geography", image: "https://cdn-icons-png.flaticon.com/512/854/854878.png", price: 200 },
  { id: 11, title: "Economics", image: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png", price: 260 },
  { id: 12, title: "Programming", image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png", price: 499 },
];

function Courses() {
  return (
    <>
      <Navbar />

      {/* ✅ MAIN BACKGROUND FIX */}
      <div className="mt-16 px-5 md:px-10 py-10 min-h-screen 
      bg-white dark:bg-[#020617] transition duration-300">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-10 text-center 
        text-gray-900 dark:text-white">
          Our Courses
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden 
              bg-white text-gray-900 
              dark:bg-[#1e293b] dark:text-white
              shadow-md hover:shadow-2xl 
              transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE SECTION */}
              <div className="bg-gray-100 dark:bg-[#0f172a] p-6 flex justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-24 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">

                <h2 className="text-lg font-semibold">
                  {course.title}
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  ₹{course.price}
                </p>

                <button className="mt-4 px-4 py-2 rounded-full 
                border border-gray-300 dark:border-gray-500
                hover:bg-pink-500 hover:text-white 
                transition duration-200">
                  Buy Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Courses;
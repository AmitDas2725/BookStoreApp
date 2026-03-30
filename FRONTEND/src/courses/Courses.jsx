import React, { useEffect, useState } from "react"; // 1. Added useEffect and useState
import axios from "axios"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Courses() {
  // 3. Create a state to store books from the database
  const [book, setBook] = useState([]);

  // 4. Fetch data from backend when component loads
  useEffect(() => {
    const getBookData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data); // Store the backend data in our state
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getBookData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-16 px-5 md:px-10 py-10 min-h-screen 
      bg-white dark:bg-[#020617] transition duration-300">

        <h1 className="text-3xl font-bold mb-10 text-center 
        text-gray-900 dark:text-white">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* 5. Map through 'book' state instead of static 'courses' array */}
          {book.map((item) => (
            <div
              key={item._id} // MongoDB uses _id, not id
              className="rounded-2xl overflow-hidden 
              bg-white text-gray-900 
              dark:bg-[#1e293b] dark:text-white
              shadow-md hover:shadow-2xl 
              transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE SECTION */}
              <div className="bg-gray-100 dark:bg-[#0f172a] p-6 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {/* Handle category or description if needed */}
                  {item.category}
                </p>

                <p className="mt-2 font-bold text-pink-500">
                  ₹{item.price}
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
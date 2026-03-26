import React from "react";

function Banner() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24 py-8 md:py-14 
    flex flex-col md:flex-row items-center 
    text-black dark:text-white transition duration-300">

      {/* TEXT */}
      <div className="w-full md:w-1/2 order-2 md:order-1 
      flex flex-col items-center md:items-start text-center md:text-left 
      space-y-4 md:space-y-6">

        {/* Heading */}
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Hello, welcomes here to learn something{" "}
          <span className="text-pink-500">new everyday!!!</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg 
        text-gray-600 dark:text-gray-300 max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolor, et totam. Tempora amet atque expedita.
        </p>

        {/* Input */}
        <div className="w-full max-w-sm">
          <div className="flex items-center border border-gray-300 dark:border-gray-600 
          rounded-md px-3 py-2 
          bg-white dark:bg-slate-800">

            <span className="text-gray-400 mr-2 text-sm">✉️</span>

            <input
              type="text"
              placeholder="Email"
              className="w-full outline-none text-sm 
              bg-transparent text-black dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Button */}
        <button className="bg-pink-500 text-white px-5 py-2 text-sm md:text-base rounded-md hover:bg-pink-600 transition">
          Secondary
        </button>

      </div>

      {/* IMAGE */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-6 md:mb-0">
        <img
          src="/book.webp"
          alt="Books"
          className="w-40 sm:w-52 md:w-72 lg:w-96 object-contain"
        />
      </div>

    </div>
  );
}

export default Banner;
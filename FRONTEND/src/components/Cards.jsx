import React from "react";

function Cards({ item }) {
  return (
    <div className="px-3 h-full">

      <div
        className="h-full flex flex-col justify-between rounded-2xl overflow-hidden  
        transition duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl
        
        bg-white text-black 
        dark:bg-[#1e293b] dark:text-white"
      >

        {/* IMAGE SECTION */}
        <div className="bg-gray-100 dark:bg-[#0f172a] flex justify-center items-center p-6">
          <img
            src={item.image}
            alt={item.name}
            className="h-32 object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">

          {/* TITLE + BADGE */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">
              {item.name}
            </h2>

            <span className="text-xs px-2 py-1 rounded-full bg-pink-500 text-white">
              {item.category}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {item.title}
          </p>

          {/* PRICE + BUTTON */}
          <div className="flex justify-between items-center mt-4">

            <span className="text-sm px-3 py-1 rounded-full 
            border border-gray-300 dark:border-gray-600">
              ${item.price}
            </span>

            <button className="px-4 py-1.5 rounded-full 
            border border-gray-300 dark:border-gray-500 
            hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
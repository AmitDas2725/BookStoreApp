import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";
import axios from "axios"; // 1. Use axios instead of fetch
import Cards from "./Cards";

const Slider = SliderImport.default || SliderImport;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // 2. Point this to your BACKEND URL (Port 4001)
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setList(res.data);
      } catch (error) {
        console.log("Error fetching from backend: ", error);
      }
    };
    getBooks();
  }, []);

  // ✅ Filter data from MongoDB (using item.category)
  const filterData = list.filter((item) => item.category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 py-10 bg-white dark:bg-[#020617] transition duration-300 rounded-xl">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Free Books
      </h2>

      {/* 3. Use _id for the key because MongoDB uses _id */}
      {filterData.length > 0 ? (
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item._id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No Free Books Found.
        </p>
      )}
    </div>
  );
}

export default FreeBook;
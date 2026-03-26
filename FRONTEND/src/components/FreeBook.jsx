import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";
import Cards from "./Cards";

const Slider = SliderImport.default || SliderImport;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Filter only FREE books
  const filterData = list.filter(
    (item) => item.category === "Free"
  );

  // ✅ Slider settings
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    // ✅ MAIN BACKGROUND FIX (IMPORTANT)
    <div
      className="max-w-screen-2xl container mx-auto px-4 py-10 
      bg-white dark:bg-[#020617] transition duration-300 rounded-xl"
    >

      {/* ✅ Heading */}
      <h2 className="text-2xl font-bold mb-8 text-center 
      text-gray-900 dark:text-white">
        Free Books
      </h2>

      {/* ✅ Slider */}
      {filterData.length > 0 ? (
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      )}
    </div>
  );
}

export default FreeBook;
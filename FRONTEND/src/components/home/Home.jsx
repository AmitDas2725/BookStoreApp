import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";
import FreeBook from "../FreeBook";

function Home() {
  return (
    <>
      <Navbar />

      {/* ✅ Add spacing for fixed navbar */}
      <div className="pt-16">

        <Banner />
        <FreeBook />

      </div>

      <Footer />
    </>
  );
}

export default Home;
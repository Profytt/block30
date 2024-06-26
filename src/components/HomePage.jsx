import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to your world of knowledge and imagination. Explore our collection, discover new stories, and let your curiosity soar.
            </p>

            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

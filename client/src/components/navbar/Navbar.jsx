// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-blue-900 pt-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <span className="text-2xl font-bold text-white animate-fadeInFromLeft">
            Booking<small className="text-sm text-white">.com</small>
          </span>
        </Link>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4 pb-3">
          <Link to="/login">
            <button className="bg-white text-blue-900 hover:scale-110 font-bold py-1 px-2 rounded-full border-white border-2 shadow-2xl">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className=" bg-white text-blue-900 hover:scale-110 font-bold py-1 px-2 rounded-full border-white border-2 shadow-md">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="text-white p-2 focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow-md ">
            <button className="btn btn-primary bg-blue-900 text-white hover:scale-110 font-bold py-1 px-2 rounded border-white border-solid mx-4">
              Login
            </button>

            <button className="btn btn-primary bg-blue-900 text-white hover:scale-110 font-bold py-1 px-2 rounded border-white border-solid">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

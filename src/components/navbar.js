import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";

import logo from "../images/nutrail_logo.png";

const Navbar = () => {
  const nav = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  const handleHome = () => {
    localStorage.clear();
    nav("/");
  };

  const handleHistory = () => {
    nav("/history");
  };

  const handleDiet = () => {
    nav("/diet");
  };

  const handleProfile = () => {
    nav("/profile");
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Render
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <motion.nav className={`navbar ${isSticky ? "sticky-nav" : ""}`}>
        <div className="navbar_contents">
          <img src={logo} alt="Nutrail Logo" className="logo" />
          <motion.button
            className="navbarbutton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHome} // Handle Home navigation
          >
            Dashboard
          </motion.button>
          <motion.button
            className="navbarbutton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHistory}
          >
            History
          </motion.button>
          <motion.button
            className="navbarbutton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDiet}
          >
            Food
          </motion.button>
          <motion.button
            className="navbarbutton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleProfile}
          >
            Profile
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

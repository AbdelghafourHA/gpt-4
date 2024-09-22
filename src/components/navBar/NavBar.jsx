import "./navBar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <>
        <p onClick={() => setToggleMenu(false)}>
          <a href="#home">HOME</a>
        </p>
        <p onClick={() => setToggleMenu(false)}>
          <a href="#wgpt4">WHAT IS GPT4?</a>
        </p>
        <p onClick={() => setToggleMenu(false)}>
          <a href="#possibility">OPEN AI</a>
        </p>
        <p onClick={() => setToggleMenu(false)}>
          <a href="#features">CASE STUDIES</a>
        </p>
        <p onClick={() => setToggleMenu(false)}>
          <a href="#blog">LIBRARY</a>
        </p>
      </>
    );
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1.2, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0 }}
      className="navbar"
    >
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <h1>GPT-4</h1>
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
        <div className="navbar-links-sign">
          <p>Sign In</p>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <Menu />
            <div className="navbar-menu-sign ">
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;

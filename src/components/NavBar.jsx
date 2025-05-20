import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mb-6 flex items-center justify-between py-3 px-6 flex-wrap">
        <div className="flex items-center gap-4">
          <Link to="/" className="cedarville-cursive-regular text-4xl">AW</Link>
          <div className="hidden lg:flex space-x-6 ml-20">
            <Link to="/education" className="text-lg hover:underline">Education</Link>
            <Link to="/computerknowledge" className="text-lg hover:underline">Computer Knowledge</Link>
            <Link to="/workexperience" className="text-lg hover:underline">Work Experience</Link>
            <Link to="/projects" className="text-lg hover:underline">Projects</Link>
          </div>
          <div className="flex items-center gap-4 text-2xl ml-4 lg:ml-80">
            <a href="https://www.linkedin.com/in/alexandria-wright19/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/alexwright_19/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/alexw2326" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-start px-6 space-y-4 text-lg">
          <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/computerknowledge" onClick={() => setIsOpen(false)}>Computer Knowledge</Link>
          <Link to="/workexperience" onClick={() => setIsOpen(false)}>Work Experience</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
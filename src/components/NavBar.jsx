import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <Link to="/" className="cedarville-cursive-regular text-4xl ml-10">AW</Link>
      </div>
      <div className="flex flex-shrink-0 items-center">
        <Link to="/education" className="text-lg mr-20 hover:underline">
            Education
        </Link>
        <Link to="/computerknowledge" className="text-1g mr-5 hover:underline">
            Computer Knowledge
        </Link>
        <Link to="/workexperience" className="text-1g ml-10 hover:underline">
            Work Experience
        </Link>
        <Link to="/projects" className="text-1g ml-20 hover:underline">
            Projects
        </Link>
        {}
      </div>
      <div className="m-4 flex items-center justify-center gap-3 text-2xl">
        <a href="https://www.linkedin.com/in/alexandria-wright19/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/alexwright_19/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/alexw2326" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
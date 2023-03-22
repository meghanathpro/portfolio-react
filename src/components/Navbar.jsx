import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* Hamburger menu for mobile screen */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-3xl space-y-6 md:hidden"
        }
      >
        <a href="a">Home</a>
        <a href="a">About</a>
        <a href="a">Skills</a>
        <a href="a">Work</a>
        <a href="a">Contact</a>
      </div>
      {/* Normal menu */}
      <div className="hidden md:flex md:justify-between md:items-center md:space-x-10 ">
        <a href="a">Home</a>
        <a href="a">About</a>
        <a href="a">Skills</a>
        <a href="a">Work</a>
        <a href="a">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex md:fixed md:flex-col md:top-1/3 md:left-0">
        <div className=" w-32 h-12 px-2 flex justify-between items-center -ml-20 hover:ml-0 duration-300 bg-blue-600">
          <a
            className=" flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Linkedin <FaLinkedin size={40} />
          </a>
        </div>

        <div className=" w-32 h-12 px-2 flex justify-between items-center -ml-20 hover:ml-0 duration-300 bg-[#333333]">
          <a
            className=" flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Github <FaGithub size={40} />
          </a>
        </div>

        <div className=" w-32 h-12 px-2 flex justify-between items-center -ml-20 hover:ml-0 duration-300 bg-[#6fc2b0]">
          <a
            className=" flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Email <HiOutlineMail size={40} />
          </a>
        </div>

        <div className=" w-32 h-12 px-2 flex justify-between items-center -ml-20 hover:ml-0 duration-300 bg-blue-600">
          <a
            className=" flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Resume <BsFillPersonLinesFill size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

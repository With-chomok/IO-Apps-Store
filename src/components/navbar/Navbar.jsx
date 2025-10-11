import React from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import  '../../../src/App.css'
const Navbar = () => {
  return (
    <div className="navbar  bg-base-100 shadow-sm ">
      <div className="navbar-start md:ml-20">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow space-y-2">
            <NavLink to="./home">Home</NavLink>
            <NavLink to="./apps">Apps</NavLink>
            <NavLink to="./installation">Installation</NavLink>
          </ul>
        </div>
        <div className="flex ">
          <Link to='./home'  className=" flex items-center gap-2 text-xl font-medium ">
            <img className="w-10 " src={Logo} alt="" />
            <p to='./home'  className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent ">
              HERO.IO
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-6 text-base menu-horizontal px-1">
          <div>
          <NavLink to="./home">Home</NavLink>
          </div>
          <NavLink to="./apps">Apps</NavLink>
          <NavLink to="./installation">Installation</NavLink>
        </ul>
      </div>
      <div className="navbar-end  md:mr-20">
        <Link to='https://github.com/With-chomok' target="_blank"
          rel="noopener noreferrer" className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white">
          <i className="fa-brands fa-github"></i> Contribute
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

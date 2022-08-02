import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdLocalDining } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [nav, setNav] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1640px] mx-auto px-4 text-white">
      <div className="text-[#df7e00] cursor-pointer">
        <MdLocalDining size={40} />
      </div>
      <NavLink to={"/"}>
        <h1 className="w-full sm:text-3xl lg:text-4xl px-2 text-2xl text-black cursor-pointer">
          My<span className="font-bold text-[#df7e00]">RECIPE</span>
        </h1>
      </NavLink>
      <form
        onSubmit={submitHandler}
        className="bg-gray-200 rounded-full flex items-center mr-4 ml-4 px-2 w-[400px] sm:w-[600px] lg:w-[700px]"
      >
        <AiOutlineSearch className="text-black" size={25} />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="bg-transparent p-2 w-full focus:outline-none text-black"
          placeholder="Search Recipe"
        />
      </form>
      <ul className="text-black p-2 hidden md:flex">
        <NavLink to={"/"}>
          <li className="p-4 text2-xl cursor-pointer hover:text-orange-400">
            Home
          </li>
        </NavLink>
        <NavLink to={"/categoryrecipe"}>
          <li className="p-4 text2-xl cursor-pointer hover:text-orange-400">
            Category
          </li>
        </NavLink>
        <NavLink to={"/about"}>
          <li className="p-4 text2-xl cursor-pointer hover:text-orange-400">
            About
          </li>
        </NavLink>
      </ul>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 text-black"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 text-black"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
            My<span className="font-bold text-[#df7e00]">RECIPE</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <NavLink to={"/"}>
              <li onClick={() => setNav(!nav)} className="p-4 border-b border-black-700 text2-xl cursor-pointer hover:text-orange-400">
                Home
              </li>
            </NavLink>
            <NavLink to={"/categoryrecipe"}>
              <li onClick={() => setNav(!nav)} className="p-4 border-b border-black-700 text2-xl cursor-pointer hover:text-orange-400">
                Category
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li onClick={() => setNav(!nav)} className="p-4 border-b border-black-700 text2-xl cursor-pointer hover:text-orange-400">
                About
              </li>
            </NavLink>
            {user ? <NavLink to={"/"}>
              <li onClick={handleLogout} className="p-4 border-b border-black-700 text2-xl cursor-pointer hover:text-orange-400">
                Logout
              </li>
            </NavLink> : 
            <NavLink to={"/login"}>
            <li onClick={() => setNav(!nav)} className="p-4 border-b border-black-700 text2-xl cursor-pointer hover:text-orange-400">
              Login
            </li>
          </NavLink>}
          </ul>
        </nav>
      </div>
      {user ? (
        <div>
          <NavLink to={"/"}>
            <button
              onClick={handleLogout}
              className="bg-[#df7e00] text-white hidden md:flex items-center py-2 rounded-full"
            >
              <AiOutlineLogout size={20} /> Logout
            </button>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to={"login"}>
            <button className="bg-[#df7e00] text-white hidden md:flex items-center py-2 rounded-full">
              <AiOutlineLogin size={20} /> Login
            </button>
          </NavLink>
        </div>
      )}
      <div
        onClick={() => setNav(!nav)}
        className="text-black cursor-pointer  md:hidden"
      >
        <AiOutlineMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;

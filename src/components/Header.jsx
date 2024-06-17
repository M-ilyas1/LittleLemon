import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#233b34] text-white">
      <nav className="md:max-w-[70%] max-w-[100%] mx-auto py-6 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="" className="w-[200px]" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/menu" className="hover:text-gray-200 ">
            Menu
          </Link>
          <Link to="/reservations" className="hover:text-gray-200 ">
            Reservations
          </Link>
          <Link to="/order" className="hover:text-gray-200 ">
            Order Online
          </Link>
          <Link to="/login" className="hover:text-gray-200 ">
            Login
          </Link>
          <div className=" p-2 rounded-md bg-[#EDEFEE] text-[black]">
            <IoBagRemoveOutline className="text-xl" />
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute w-full  bg-[#294b40] text-white">
          <ul className="space-y-4 p-4 pl-8">
            <li>
              <Link
                to="/"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                Order Online
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                to="/login"
                className="block hover:text-gray-200"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <div className=" p-2 mr-2 rounded-md bg-[#EDEFEE] text-[black]">
                <IoBagRemoveOutline className="text-xl" />
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

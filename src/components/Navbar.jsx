import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes pour le menu burger
import { FiVolume2, FiVolumeX } from "react-icons/fi"; // Icônes de speaker
import { useAudio } from "./AudioContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isMuted, toggleMute } = useAudio(); // Récupération du contexte audio

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getTextColor = () => {
    switch (location.pathname) {
      case "/Projects":
        return "text-red-500";
      case "/Projects-mobile":
        return "text-red-500";
      case "/Spaceship":
        return "text-white";
      case "/Contact":
        return "text-blue-400";
      case "/Stack":
        return "text-yellow-400";
      case "/AboutMe":
        return "text-pink-400";
      default:
        return "text-custom-green";
    }
  };

  return (
    <nav className={`p-4 w-full bg-black z-40 ${getTextColor()}`}>
      <div className="flex justify-between items-center">
        {/* H1 = lien vers la home */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={`text-2xl font-mono ${getTextColor()} hover:opacity-80 transition-opacity duration-200`}
          >
            Timothée Meunier&apos;s Portfolio
          </NavLink>
          {/* Bouton speaker */}
          <button
            onClick={toggleMute}
            className={`p-2 ${getTextColor()} rounded-full hover:bg-black hover:border-current transition-all duration-200`}
          >
            {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
          </button>
        </div>

        {/* Bouton menu burger pour mobile */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <X size={30} className={getTextColor()} />
          ) : (
            <Menu size={30} className={getTextColor()} />
          )}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                `relative ${
                  isActive
                    ? `${getTextColor()} text-active after:w-full after:bg-red-500`
                    : `hover:text-red-500 transition-colors duration-200`
                }
    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Stack"
              className={({ isActive }) =>
                `relative ${
                  isActive
                    ? `${getTextColor()} text-active after:w-full after:bg-yellow-400`
                    : "hover:text-yellow-400 transition-colors duration-200"
                }
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300`
              }
            >
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutMe"
              className={({ isActive }) =>
                `relative ${
                  isActive
                    ? `${getTextColor()} text-active after:w-full after:bg-pink-400`
                    : "hover:text-pink-400 transition-colors duration-200"
                }
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300`
              }
            >
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `relative ${
                  isActive
                    ? `${getTextColor()} text-active after:w-full after:bg-blue-400`
                    : "hover:text-blue-400 transition-colors duration-200"
                }
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black py-4 space-y-4">
          <li>
            <NavLink
              to="/Projects"
              className={`${getTextColor()} hover:text-red-500 transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Stack"
              className={`${getTextColor()} hover:text-yellow-400 transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutMe"
              className={`${getTextColor()} hover:text-pink-400 transition-colors duration-200`}
              onClick={toggleMenu}
            >
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={`${getTextColor()} hover:text-blue-400 transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

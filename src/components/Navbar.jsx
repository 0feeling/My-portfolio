import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getTextColor = () => {
    switch (location.pathname) {
      case "/Projects":
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
        return "text-custom-green"; // Classe CSS personnalisée pour la couleur par défaut
    }
  };

  return (
    <nav className={`p-4 w-full bg-black z-40 ${getTextColor()}`}>
      <div className="flex justify-between items-center">
        {/* H1 = lien vers la home */}
        <NavLink
          to="/"
          className={`text-2xl font-mono ${getTextColor()} hover:opacity-80 transition-opacity duration-200`}
        >
          Timothée Meunier&apos;s Portfolio
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? `${getTextColor()} text-active`
                  : "hover:text-red-500 transition-colors duration-200"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Stack"
              className={({ isActive }) =>
                isActive
                  ? `${getTextColor()} text-active`
                  : "hover:text-yellow-400 transition-colors duration-200"
              }
            >
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutMe"
              className={({ isActive }) =>
                isActive
                  ? `${getTextColor()} text-active`
                  : "hover:text-pink-400 transition-colors duration-200"
              }
            >
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? `${getTextColor()} text-active`
                  : "hover:text-blue-400 transition-colors duration-200"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

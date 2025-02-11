import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getNavClass = (path) => {
    return location.pathname === path ? "text-active" : "hover:text-green-300";
  };

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
      default:
        return "";
    }
  };

  return (
    <nav className={`p-4 text-main w-full bg-black z-40 ${getTextColor()}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-mono">
          Timothée Meunier&apos;s Portfolio
        </h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={getNavClass("/")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={getNavClass("/Projects")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Stack" className={getNavClass("/Stack")}>
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutMe" className={getNavClass("/AboutMe")}>
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={getNavClass("/Contact")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

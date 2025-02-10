// src/components/Navbar.jsx
import React from "react";
import { useLocation } from "react-router-dom"; // Importation du hook useLocation

const Navbar = () => {
  const location = useLocation(); // Utilisation du hook useLocation

  const isAlpage = location.pathname === "/Projects";
  const isSpaceship = location.pathname === "/Spaceship";
  const isContact = location.pathname === "/Contact";

  return (
    <nav
      className={`p-4 text-main w-full bg-black z-40 ${
        isAlpage
          ? "text-red-500"
          : isSpaceship
            ? "text-white"
            : isContact
              ? "text-blue-400"
              : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 data-text className="text-2xl font-mono">
          Timothée Meunier&apos;s Portfolio
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className={
                isAlpage || isSpaceship
                  ? isAlpage
                    ? "text-red-500"
                    : "text-white"
                  : "hover:text-green-300"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/AboutMe"
              className={
                isAlpage || isSpaceship
                  ? isAlpage
                    ? "text-red-500"
                    : "text-white"
                  : "hover:text-green-300"
              }
            >
              AboutMe
            </a>
          </li>
          <li>
            <a
              href="/Projects"
              className={
                isAlpage || isSpaceship
                  ? isAlpage
                    ? "text-red-500"
                    : "text-white"
                  : "hover:text-green-300"
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className={
                isAlpage || isSpaceship
                  ? isAlpage
                    ? "text-red-500"
                    : "text-white"
                  : "hover:text-green-300"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

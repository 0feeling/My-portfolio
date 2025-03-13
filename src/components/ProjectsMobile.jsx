import React from "react";
import { useNavigate } from "react-router-dom";
import TypingTitle from "./TypingTitle";

const projects = [
  {
    title: "Parole de Chien",
    description: "ONG's Website",
    url: "https://parole-de-chien.netlify.app/"
  },
  {
    title: "Pensées Passagères",
    description: "REACT Webapp",
    url: "https://pensees-passageres.netlify.app/"
  },
  {
    title: "Harry Potter",
    description: "Character's Finder",
    url: "https://harry-potter-vault.netlify.app/"
  },
  {
    title: "Terra Voyager",
    description: "Random Country Selector",
    url: "https://terra-voyager.netlify.app/"
  }
];

const ProjectsMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center mt-8 mb-8 text-white px-4">
      <div
        className="w-full max-w-3xl p-6 bg-gray-900 rounded-xl shadow-lg border border-red-500 relative overflow-hidden
                      before:absolute before:inset-0 before:bg-red-500 before:opacity-10 before:blur-lg"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-red-500 text-center mb-6 tracking-widest uppercase">
          <TypingTitle text="Mes Projets" />
        </h1>

        <div className="w-full max-w-md space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => window.open(project.url, "_blank")}
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button
            className="mt-6 px-4 py-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition"
            onClick={() => navigate("/")}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMobile;

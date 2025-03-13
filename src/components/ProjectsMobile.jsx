import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 space-y-6">
      <h1 className="text-2xl font-bold mt-4">My Projects</h1>

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

      <button
        className="mt-6 px-4 py-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition"
        onClick={() => navigate("/")}
      >
        Retour
      </button>
    </div>
  );
};

export default ProjectsMobile;

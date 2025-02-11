import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaWordpress
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpo,
  SiJquery,
  SiNetlify,
  SiStrapi,
  SiStripe,
  SiCloudinary
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import TypingTitle from "./TypingTitle";

const Stack = () => {
  const technologies = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "Expo", icon: <SiExpo /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <BsFillFileEarmarkCodeFill /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Retool", icon: <FaDatabase /> },
    { name: "Strapi", icon: <SiStrapi /> },
    { name: "Stripe", icon: <SiStripe /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "WordPress", icon: <FaWordpress /> }
  ];

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
    { name: "Espagnol", level: "Base" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div
        className="w-full max-w-3xl p-6 bg-gray-900 rounded-xl shadow-lg border border-yellow-500 relative overflow-hidden
                      before:absolute before:inset-0 before:bg-yellow-500 before:opacity-10 before:blur-lg"
      >
        {/* Titre avec effet futuriste */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 text-center mb-6 tracking-widest uppercase">
          <TypingTitle text="Ma Stack Technique" />
        </h1>

        {/* Texte d'intro */}
        <p className="text-gray-300 text-center mb-6 text-lg md:text-xl leading-relaxed">
          Découvrez les technologies et outils que j'utilise pour donner vie à
          mes projets.
        </p>

        {/* Technologies */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col p-4 bg-gray-800 rounded-md shadow-md shadow-yellow-500/30"
            >
              <div className="text-4xl md:text-5xl text-yellow-500 mb-2">
                {tech.icon}
              </div>
              <p className="text-lg md:text-xl text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Langues */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400 text-center mb-4">
            Langues parlées
          </h2>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-300 text-center"
              >
                {lang.name} - {lang.level}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;

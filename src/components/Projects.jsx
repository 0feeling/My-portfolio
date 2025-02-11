import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AudioWithSegment from "./AudioWithSegment";

const Projects = () => {
  const [hovered, setHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false); // Nouveau state
  const navigate = useNavigate();

  const hal9000Height = `calc(100vh - 80px)`; // Calcul de la hauteur de l'image HAL9000, moins la hauteur de la navbar

  useEffect(() => {
    let timeout;
    if (!hovered) {
      timeout = setTimeout(() => setDelayedHover(false), 700);
    } else {
      setDelayedHover(true);
    }
    return () => clearTimeout(timeout);
  }, [hovered]);

  const handleClick = () => {
    navigate("/nextpage");
  };

  const handleMouseEnter = () => {
    if (!audioTriggered) {
      setAudioTriggered(true); // Déclenche l'audio une seule fois
    }
  };

  // Tableau d'objet data
  const bubblesData = [
    {
      title: "Parole de Chien",
      description: "ONG's Website",
      top: "70%",
      left: "25%",
      translate: "translate(-200px, -200px)",
      delay: "0.2s",
      url: "https://parole-de-chien.netlify.app/"
    },
    {
      title: "Pensées Passagères",
      description: "REACT Webapp",
      top: "70%",
      left: "53%",
      translate: "translate(200px, -200px)",
      delay: "0.4s",
      url: "https://pensees-passageres.netlify.app/"
    },
    {
      title: "Harry Potter ",
      description: "Character's Searching",
      top: "8%",
      left: "25%",
      translate: "translate(-200px, 200px)",
      delay: "0.6s",
      url: "harry-potter-vault.netlify.app",
      className: ""
    },
    {
      title: "Project 4",
      description: "Project",
      top: "9%",
      left: "53%",
      translate: "translate(200px, 200px)",
      delay: "0.8s"
    }
  ];

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/img/Alroom.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {audioTriggered && <AudioWithSegment />}

      <div className="absolute top-[2.8%] left-1/2 transform -translate-x-1/2">
        <div
          className="relative flex justify-center items-center"
          onMouseEnter={() => {
            setHovered(true);
            handleMouseEnter();
          }}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="/assets/img/HAL9000.svg"
            alt="HAL9000"
            className="cursor-pointer"
            onClick={handleClick}
            style={{
              width: "auto",
              height: hal9000Height,
              maxHeight: hal9000Height,
              objectFit: "contain"
            }}
          />

          {/* Bulles de projets générées dynamiquement */}
          {bubblesData.map(
            (
              {
                title,
                description,
                top,
                left,
                translate,
                delay,
                url,
                className
              },
              index
            ) => {
              // On vérifie ici si la position `top` dépasse la hauteur de l'image HAL9000
              const adjustedTop =
                parseFloat(top) > 100 - parseFloat(hal9000Height)
                  ? "100%"
                  : top;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    delayedHover ? "opacity-100" : "opacity-0"
                  } ${className}`}
                  style={{
                    top: adjustedTop, // Utilisation de la position ajustée
                    left,
                    transform: delayedHover
                      ? `translate(-50%, -50%) ${translate}`
                      : "translate(-50%, -50%)",
                    transitionDelay: hovered ? delay : "0.3s"
                  }}
                  onClick={() => window.open(url, "_blank")}
                >
                  <div
                    className="absolute top-0 left-0 bg-black bg-opacity-85 text-white text-center cursor-pointer transform transition-all rounded-full duration-500 outline outline-2 outline-white border-4 border-transparent hover:border-red-500 hover:outline-none aspect-square items-center justify-center pt-20 pb-14"
                    style={{
                      transform: delayedHover ? translate : "none",
                      width: "200px"
                    }}
                  >
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

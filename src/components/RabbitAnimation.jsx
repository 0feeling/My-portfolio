import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Hook pour la navigation

const RabbitAnimation = () => {
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page

  const svgCoordinates = {
    top: 60, // coordonnée y initiale
    left: 1300 // coordonnée x initiale
  };

  const [showSvg, setShowSvg] = useState(false);
  const [svgIndex, setSvgIndex] = useState(0);
  const [animations, setAnimations] = useState([]); // Garder une trace des animations
  const [hideInitialSvg, setHideInitialSvg] = useState(false); // État pour cacher le lapin initial

  const svgPositions = [
    { top: 50, left: 1200 },
    { top: -10, left: 1100 },
    { top: -30, left: 1000 },
    { top: -25, left: 900 },
    { top: 5, left: 800 }
  ];

  const svgPaths = [
    "/assets/img/wrabbit1.2.svg",
    "/assets/img/wrabbit2.2.svg",
    "/assets/img/wrabbit3.2.svg",
    "/assets/img/wrabbit4.2.svg",
    "/assets/img/wrabbit5.2.svg"
  ];

  useEffect(() => {
    if (showSvg && svgIndex < svgPositions.length) {
      // Démarre l'animation quand svgIndex change
      const timeout = setTimeout(() => {
        setAnimations((prev) => [...prev, svgIndex]);
        setSvgIndex((prev) => prev + 1);
        if (svgIndex === 0) {
          setHideInitialSvg(true); // Cacher le lapin initial lorsque le deuxième lapin apparaît
        }
      }, 100); // Change l'image toutes les x secondes
      return () => clearTimeout(timeout); // Nettoyer le timeout si le composant se démonte
    }
  }, [showSvg, svgIndex]);

  const startAnimation = () => {
    setShowSvg(true); // Démarre l'animation des SVG
    setSvgIndex(0); // Commence avec le premier SVG

    // Ajouter un délai avant redirection
    setTimeout(() => {
      navigate("./Spaceship"); // Redirection
    }, 2000); // temps en ms avant changement de page
  };

  return (
    <div className="h-full w-full relative">
      {/* Lapin initial */}
      {!hideInitialSvg && (
        <img
          src="/assets/img/wrabbit7.svg"
          alt="Mon SVG"
          className="absolute initial-svg"
          style={{
            top: `${svgCoordinates.top}px`,
            left: `${svgCoordinates.left}px`
          }}
          width="138"
          height="138"
        />
      )}

      {/* Lapins animés */}
      {showSvg &&
        animations.map((index) => (
          <img
            key={index}
            src={svgPaths[index]}
            alt="Mon SVG"
            className={`absolute svg-animation-${index}`}
            style={{
              top: `${svgPositions[index]?.top}px`,
              left: `${svgPositions[index]?.left}px`
            }}
            width="128"
            height="128"
          />
        ))}

      <button
        onClick={startAnimation}
        className="z-50 mt-8 px-8 py-8 rounded-full border-2 bg-black border-main text-main hover:bg-main border-black hover:text-black transition-colors duration-300"
      >
        The Rabbit&apos;s Hole
      </button>

      {/* Styles CSS pour animation */}
      <style>{`
        @keyframes svgMove {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          50% {
            opacity: 1;
            transform: translate(0, -20px);
          }
          100% {
            opacity: 0;
            transform: translate(0, 0);
          }
        }

        .svg-animation-0 {
          animation: svgMove 1s ease-out forwards;
        }
        .svg-animation-1 {
          animation: svgMove 1s ease-out forwards;
        }
        .svg-animation-2 {
          animation: svgMove 1s ease-out forwards;
        }
        .svg-animation-3 {
          animation: svgMove 1s ease-out forwards;
        }
        .svg-animation-4 {
          animation: svgMove 1s ease-out forwards;
        }

        .initial-svg {
          transition: opacity 0.5s ease-out;
        }

        .initial-svg.hide {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default RabbitAnimation;

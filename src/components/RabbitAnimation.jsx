import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RabbitAnimation = ({ className = "" }) => {
  const navigate = useNavigate();

  // Vérification si l'écran est mobile dès le premier rendu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 950); // Détecte la taille de l'écran et met à jour l'état
    };

    window.addEventListener("resize", checkMobile); // Écoute le redimensionnement de la fenêtre
    return () => window.removeEventListener("resize", checkMobile); // Nettoyage au démontage
  }, []);

  const svgCoordinates = { top: 60, left: 1300 }; // Position initiale du premier SVG
  const [showSvg, setShowSvg] = useState(false); // Contrôle de l'affichage des SVGs animés
  const [svgIndex, setSvgIndex] = useState(0); // Index pour parcourir les SVGs
  const [animations, setAnimations] = useState([]); // Garder une trace des animations

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

  // Effet pour animer les SVGs dès qu'on commence
  useEffect(() => {
    if (showSvg && svgIndex < svgPositions.length) {
      const timeout = setTimeout(() => {
        setAnimations((prev) => [...prev, svgIndex]);
        setSvgIndex((prev) => prev + 1);
      }, 100); // Intervalle de temps pour changer les images
      return () => clearTimeout(timeout); // Nettoyer l'effet de timeout
    }
  }, [showSvg, svgIndex]);

  // Fonction pour démarrer l'animation et ensuite rediriger
  const startAnimation = () => {
    setShowSvg(true);
    setSvgIndex(0); // On commence l'animation avec le premier SVG
    setTimeout(() => {
      navigate("./Spaceship"); // Redirection après l'animation
    }, 2000);
  };

  return (
    <div
      className={`h-full w-full relative ${isMobile ? "hidden" : className}`}
    >
      {/* Affichage du premier lapin avant l'animation */}
      {!showSvg && (
        <img
          src="/assets/img/wrabbit7.svg"
          alt="Lapin initial"
          className="absolute initial-svg"
          style={{
            top: `${svgCoordinates.top}px`,
            left: `${svgCoordinates.left}px`
          }}
          width="138"
          height="138"
        />
      )}

      {/* Affichage des lapins animés après démarrage */}
      {showSvg &&
        animations.map((index) => (
          <img
            key={index}
            src={svgPaths[index]}
            alt="Lapin animé"
            className="absolute svg-animation"
            style={{
              top: `${svgPositions[index].top}px`,
              left: `${svgPositions[index].left}px`
            }}
            width="128"
            height="128"
          />
        ))}

      {/* Bouton pour démarrer l'animation */}
      <button
        onClick={startAnimation}
        className="z-50 mt-8 px-8 py-8 rounded-full border-2 bg-black border-main text-main hover:bg-main border-black hover:text-black transition-colors duration-300"
      >
        The Rabbit&apos;s Hole
      </button>

      {/* Styles CSS pour l'animation */}
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

        .svg-animation {
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

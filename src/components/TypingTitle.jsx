import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingTitle = ({ text, onComplete }) => {
  const [visibleText, setVisibleText] = useState([]); // Texte affiché
  const [currentIndex, setCurrentIndex] = useState(0); // Lettre en cours
  const [currentLine, setCurrentLine] = useState(0); // Ligne en cours
  const lines = text.split("\n"); // Découpe le texte en lignes

  useEffect(() => {
    if (currentIndex < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setVisibleText((prev) => {
          const newText = [...prev];
          newText[currentLine] = lines[currentLine].slice(0, currentIndex + 1);
          return newText;
        });
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Délai entre chaque lettre

      return () => clearTimeout(timeout);
    } else if (currentLine < lines.length - 1) {
      // Passe à la ligne suivante une fois qu'une ligne est terminée
      setCurrentLine((prev) => prev + 1);
      setCurrentIndex(0); // Réinitialise l'index pour la ligne suivante
    } else if (onComplete) {
      // Appelle la fonction une fois le texte terminé
      onComplete();
    }
  }, [currentIndex, currentLine, lines, onComplete]);

  return (
    <div className="relative inline-flex items-center">
      <div>
        {lines.map((line, index) => (
          <div key={index}>
            <span>{visibleText[index] || ""}</span>
            {index === currentLine && (
              <motion.span
                className="bg-current inline-block"
                style={{
                  width: "0.1em",
                  height: "0.9em",
                  marginLeft: "1.8px" // Petit espace pour éviter que le curseur touche le texte
                }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingTitle;

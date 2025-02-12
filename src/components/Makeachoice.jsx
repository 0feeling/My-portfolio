import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypingTitle from "./TypingTitle";

const Makeachoice = () => {
  const navigate = useNavigate();
  const redPillAudioRef = useRef(null);
  const bluePillAudioRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const titleRef = useRef(null);

  const handleRedPillClick = () => navigate("/Contact");
  const handleBluePillClick = () => navigate("/Projects");

  useEffect(() => {
    if (redPillAudioRef.current) redPillAudioRef.current.load();
    if (bluePillAudioRef.current) bluePillAudioRef.current.load();
  }, []);

  useEffect(() => {
    const adjustTitleFontSize = () => {
      if (titleRef.current) {
        const titleElement = titleRef.current;
        const parentWidth = titleElement.parentElement.clientWidth;
        let fontSize = 24; // Taille de base en pixels

        // Ajuster la taille de la police jusqu'à ce que le texte rentre dans une seule ligne
        while (titleElement.scrollWidth > parentWidth && fontSize > 10) {
          fontSize -= 1;
          titleElement.style.fontSize = `${fontSize}px`;
        }
      }
    };

    adjustTitleFontSize();
    window.addEventListener("resize", adjustTitleFontSize);
    return () => window.removeEventListener("resize", adjustTitleFontSize);
  }, []);

  const handleAudioPlay = (audioRef) => {
    if (!audioRef.current) return;
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setCurrentAudio(audioRef.current);
  };

  return (
    <div className="w-full h-full bg-black">
      <h1 ref={titleRef} className="pl-5 bg-black p-4">
        <TypingTitle
          text={
            "You take the blue pill: The story of this portfolio ends... but if you reach me out, we can uncover the truth together. \nYou take the red pill: You stay in Wonderland and I show you the depths of my Projects."
          }
        />
      </h1>

      <div className="flex w-full h-full">
        {/* Partie droite (Red pill) */}
        <div
          onMouseEnter={() => handleAudioPlay(bluePillAudioRef)}
          onClick={handleRedPillClick}
          className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-80 hover:bg-opacity-0 transition-all"
        >
          <img
            src="/assets/take-pill-bleu1.svg"
            alt="Blue Pill"
            className="w-full h-full object-cover opacity-80 filter brightness-[10%] hover:brightness-100 transition-all"
          />
          <div className="absolute text-white font-bold text-xl transform translate-x-[-20%] translate-y-[95%] md:text-3xl">
            Contact
          </div>
        </div>

        {/* Partie gauche (Blue pill) */}
        <div
          onMouseEnter={() => handleAudioPlay(redPillAudioRef)}
          onClick={handleBluePillClick}
          className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-100 hover:bg-opacity-0 transition-all"
        >
          <img
            src="/assets/take-pill-red1.svg"
            alt="Red Pill"
            className="w-full h-full object-cover opacity-80 filter brightness-[10%] hover:brightness-100 transition-all"
          />
          <div className="absolute text-white font-bold text-xl transform translate-x-[27%] translate-y-[95%] md:text-3xl">
            Projects
          </div>
        </div>
      </div>

      {/* Lecteurs audio séparés */}
      <audio ref={bluePillAudioRef} preload="auto" hidden>
        <source src="/assets/blue-pill.mp3" type="audio/mp3" />
      </audio>

      <audio ref={redPillAudioRef} preload="auto" hidden>
        <source src="/assets/red-pill.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Makeachoice;

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypingTitle from "./TypingTitle";
import { useAudio } from "./AudioContext";

const Makeachoice = () => {
  const navigate = useNavigate();
  const redPillAudioRef = useRef(null);
  const bluePillAudioRef = useRef(null);
  const { isMuted } = useAudio();
  const [currentAudio, setCurrentAudio] = useState(null);
  const [hasClickedRedPill, setHasClickedRedPill] = useState(false);
  const [hasClickedBluePill, setHasClickedBluePill] = useState(false);

  // Détermine si on est en mobile
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (bluePillAudioRef.current) {
      bluePillAudioRef.current.muted = isMuted;
    }
    if (redPillAudioRef.current) {
      redPillAudioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Gestion de la navigation selon la version mobile/desktop
  const handleNavigation = (path, pillColor) => {
    if (isMobile) {
      // Pour mobile : première fois, activer la pill sans naviguer
      if (pillColor === "red" && !hasClickedRedPill) {
        setHasClickedRedPill(true);
        return; // Ne navigue pas
      } else if (pillColor === "blue" && !hasClickedBluePill) {
        setHasClickedBluePill(true);
        return; // Ne navigue pas
      } else {
        navigate(path); // Si déjà activé, navigation
      }
    } else {
      // Pour desktop : navigation immédiate
      navigate(path);
    }
  };

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
      <h1 className="pl-5 bg-black p-4">
        <TypingTitle
          text={
            "You take the blue pill: The story of this portfolio ends... but if you reach me out, we can uncover the truth together. \nYou take the red pill: You stay in Wonderland and I show you the depths of my Projects..."
          }
        />
      </h1>

      {/* Pour desktop, les pills restent en flex-row. Pour mobile, on passe en flex-row pour les placer côte à côte */}
      <div className={`flex w-full flex-row h-[calc(100vh-100px)]`}>
        {/* Blue pill */}
        <div
          onMouseEnter={() => !isMobile && handleAudioPlay(bluePillAudioRef)}
          onClick={() => {
            handleAudioPlay(bluePillAudioRef);
            handleNavigation("/Contact", "blue");
          }}
          className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-80 hover:bg-opacity-0 transition-all"
          style={{ height: isMobile ? "calc(100vh - 100px)" : "auto" }}
        >
          <img
            src={
              isMobile
                ? "/assets/mobil-blue-pill.svg"
                : "/assets/take-pill-bleu1.svg"
            }
            alt="Blue Pill"
            className="w-full h-full object-cover opacity-80 filter brightness-[10%] hover:brightness-100 transition-all"
          />
          <div className="absolute text-white bg-black/80 font-bold text-xl transform translate-x-[-20%] translate-y-[95%] md:text-3xl">
            Contact
          </div>
        </div>
        {/* Red pill */}
        <div
          onMouseEnter={() => !isMobile && handleAudioPlay(redPillAudioRef)}
          onClick={() => {
            handleAudioPlay(redPillAudioRef);
            handleNavigation("/Projects", "red");
          }}
          className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-100 hover:bg-opacity-0 transition-all"
          style={{ height: isMobile ? "calc(100vh - 100px)" : "auto" }}
        >
          <img
            src={
              isMobile
                ? "/assets/mobil-red-pill.svg"
                : "/assets/take-pill-red1.svg"
            }
            alt="Red Pill"
            className="w-full h-full object-cover opacity-80 filter brightness-[10%] hover:brightness-100 transition-all"
          />
          <div className="absolute text-white bg-black/80 font-bold text-xl transform translate-x-[27%] translate-y-[95%] md:text-3xl">
            Projects
          </div>
        </div>
      </div>

      {/* Lecteurs audio */}
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

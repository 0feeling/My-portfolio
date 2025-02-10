import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypingTitle from "./TypingTitle";

const Makeachoice = () => {
  const navigate = useNavigate();
  const redPillAudioRef = useRef(null);
  const bluePillAudioRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleRedPillClick = () => navigate("/Contact");
  const handleBluePillClick = () => navigate("/Projects");

  useEffect(() => {
    if (redPillAudioRef.current) redPillAudioRef.current.load();
    if (bluePillAudioRef.current) bluePillAudioRef.current.load();
  }, []);

  const handleAudioPlay = (audioRef) => {
    if (!audioRef.current) return;

    // Stoppe l'audio en cours s'il y en a un
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Joue le nouvel audio
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setCurrentAudio(audioRef.current);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("./public/assets/img/take-pills.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: "scaleX(-1)"
      }}
    >
      <div className="w-full h-full" style={{ transform: "scaleX(-1)" }}>
        <h1 className="pl-20 bg-black">
          <TypingTitle
            text={
              "You take the blue pill: The story of this portfolio ends... but you can reach me out and we can uncover the truth together. \nYou take the red pill: You stay in Wonderland and I show you the depths of my Projects."
            }
          />
        </h1>

        <div className="flex w-full h-full">
          {/* Partie droite (Red pill) */}
          <div
            onMouseEnter={() => handleAudioPlay(bluePillAudioRef)}
            onClick={handleRedPillClick}
            className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-10"
          >
            <h1 className="text-white text-4xl font-mono text-center ml-12">
              Contact
            </h1>
          </div>

          {/* Partie gauche (Blue pill) */}
          <div
            onMouseEnter={() => handleAudioPlay(redPillAudioRef)}
            onClick={handleBluePillClick}
            className="flex-1 cursor-pointer flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-10"
          >
            <h1 className="text-white text-4xl font-mono text-center mr-20">
              Projects
            </h1>
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
    </div>
  );
};

export default Makeachoice;

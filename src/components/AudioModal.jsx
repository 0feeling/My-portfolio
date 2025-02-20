import React, { useState, useEffect, useRef } from "react";
import { useAudio } from "./AudioContext";
import TypingTitle from "./TypingTitle";

const AudioModal = ({ audioSrc }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isMuted, toggleMute } = useAudio();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isOpen && !isMuted && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen, isMuted]);

  const handleYes = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsOpen(false);
  };

  const handleNo = () => {
    toggleMute();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
      <div className="bg-black border-2 border-main p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
        <TypingTitle
          text="Le son est une clé.
Entendre, c'est comprendre.
Préparez-vous et ajustez votre volume.
Souhaitez-vous l'immersion complète ?"
          className="text-xl font-bold"
        />
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={handleYes}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:border-1 hover:border-white hover:text-black"
          >
            Entrer avec le son
          </button>
          <button
            onClick={handleNo}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 hover:border-1 hover:border-white hover:text-black"
          >
            Naviguer En silence
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default AudioModal;

import React, { useState, useRef, useEffect } from "react";

const Redorblue = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef(null);

  // Définition des moments de début et de fin du segment
  const startTime = 0;
  const endTime = 15;

  // Pour récupérer la durée de l'audio lorsque les métadonnées sont chargées
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        console.log("Audio chargé, durée: ", audioRef.current.duration);
      };

      // Réinitialiser hasPlayed après la fin de l'audio
      audioRef.current.onended = () => {
        console.log("Audio terminé");
        setHasPlayed(false); // Réinitialise le flag hasPlayed
      };
    }
  }, []);

  const handleHover = () => {
    console.log("Survol détecté");
    if (audioRef.current && !hasPlayed) {
      console.log("Lecture de l'audio");
      audioRef.current.currentTime = startTime; // Remet à startTime
      audioRef.current
        .play()
        .then(() => {
          setHasPlayed(true); // Marque l'audio comme joué
        })
        .catch((err) => {
          console.error("Erreur lors de la lecture de l'audio: ", err);
        });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.currentTime >= endTime) {
      console.log("Segment terminé, pause et réinitialisation de l'audio");
      audioRef.current.pause();
      audioRef.current.currentTime = startTime;
    }
  };

  return (
    <>
      <div
        onMouseEnter={handleHover}
        className="flex-1 cursor-pointer flex justify-center items-center bg-red-500 bg-opacity-50 hover:bg-opacity-10"
      />
      <div
        onMouseEnter={handleHover}
        className="flex-1 cursor-pointer flex justify-center items-center bg-blue-500 bg-opacity-50 hover:bg-opacity-10"
      />

      <audio ref={audioRef} hidden onTimeUpdate={handleTimeUpdate}>
        <source src="/assets/red-or-blue.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default Redorblue;

import React, { useState, useEffect, useRef } from "react";

const AudioWithSegment = () => {
  const [hasPlayed, setHasPlayed] = useState(false); // Suivi si l'audio a déjà été joué
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Définition des moments de début et de fin du segment
  const startTime = 0;
  const endTime = 8.9;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration); // Récupère la durée totale de l'audio
      };
    }
  }, []);

  const handleMouseEnter = () => {
    // L'audio ne se déclenche que si ce n'est pas encore joué
    if (audioRef.current && !hasPlayed) {
      audioRef.current.currentTime = startTime; // Définit le temps de départ
      audioRef.current.play();
      setHasPlayed(true); // Marque l'audio comme joué
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.currentTime >= endTime) {
      audioRef.current.pause(); // Pause lorsque le segment est terminé
      audioRef.current.currentTime = startTime; // Remet à startTime pour rejouer le segment
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} // Lancer l'audio uniquement la première fois au hover
      style={{ height: "100vh" }} // Assure-toi que l'élément parent prend toute la hauteur de la page
    >
      <audio
        ref={audioRef}
        hidden // Cache le lecteur
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {}} // Ne réinitialise rien ici
      >
        <source src="/assets/hello-traveller1.mp3" type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>
    </div>
  );
};

export default AudioWithSegment;

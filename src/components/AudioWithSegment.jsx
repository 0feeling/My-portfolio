import React, { useState, useEffect, useRef } from "react";
import { useAudio } from "./AudioContext";

const AudioWithSegment = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef(null);
  const { isMuted } = useAudio(); // Récupération du mute global

  const startTime = 0;
  const endTime = 8.9;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted; // Met à jour le mute
    }
  }, [isMuted]);

  const handleMouseEnter = () => {
    if (audioRef.current && !hasPlayed && !isMuted) {
      // Vérifie si le son est activé
      audioRef.current.currentTime = startTime;
      audioRef.current.play();
      setHasPlayed(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.currentTime >= endTime) {
      audioRef.current.pause();
      audioRef.current.currentTime = startTime;
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} style={{ height: "100vh" }}>
      <audio ref={audioRef} hidden onTimeUpdate={handleTimeUpdate}>
        <source src="/assets/hello-traveller1.mp3" type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>
    </div>
  );
};

export default AudioWithSegment;

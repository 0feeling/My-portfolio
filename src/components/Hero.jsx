import React, { useState, useEffect } from "react";
import TypingTitle from "./TypingTitle";
import RabbitAnimation from "./RabbitAnimation";
import AudioModal from "./AudioModal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startAnimation = () => {
    navigate("/Spaceship");
  };

  return (
    <section className="text-main flex flex-col justify-center items-center text-center font-mono">
      <AudioModal audioSrc="/path/to/audio.mp3" />
      <div className="bg-black py-10 px-20">
        <h1 className="text-4xl md:text-6xl font-mono">
          <TypingTitle text="Welcome to the Real" />
        </h1>
      </div>
      <RabbitAnimation className="hidden sm:block md:block" />

      {/* Afficher le bouton uniquement sur mobile */}
      {isMobile && (
        <button
          onClick={startAnimation}
          className="mt-8 px-8 py-8 rounded-full border-2 bg-black border-main text-main hover:bg-main hover:text-black transition-colors duration-300"
        >
          The Rabbit&apos;s Hole
        </button>
      )}

      <div className="mt-12 bg-black py-10 px-20">
        <p className="md:text-3xl font-mono">
          Are you ready to travel with me?
        </p>
        <p className="md:text-3xl font-mono">
          if you are, follow the white Rabbit...
        </p>
      </div>
    </section>
  );
};

export default Hero;

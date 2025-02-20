import React from "react";
import TypingTitle from "./TypingTitle";
import RabbitAnimation from "./RabbitAnimation";
import AudioModal from "./AudioModal";

const Hero = () => {
  return (
    <section className="text-main flex flex-col justify-center items-center text-center font-mono">
      <AudioModal audioSrc="/path/to/audio.mp3" />
      <div className="bg-black py-10 px-20">
        <h1 className="text-4xl md:text-6xl font-mono">
          <TypingTitle text="Welcome to the Real" />
        </h1>
      </div>
      <RabbitAnimation />
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

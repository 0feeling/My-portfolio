import React from "react";
import TypingTitle from "./TypingTitle";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center mb-12 mt-12 justify-center text-white px-4">
      <div
        className="w-full max-w-3xl p-6 bg-gray-900 rounded-xl mt-8 mb-8 shadow-lg border border-pink-500 relative overflow-hidden
                      before:absolute before:inset-0 before:bg-pink-500 before:opacity-10 before:blur-lg"
      >
        {/* Titre avec effet dynamique */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-pink-400 text-center mb-6 tracking-widest uppercase">
          <TypingTitle text="À Propos de Moi" />
        </h1>

        {/* Texte de présentation */}
        <p className="text-gray-300 text-center mb-6 text-lg md:text-xl leading-relaxed">
          Me considérant avant tout comme quelqu'un de créatif, j’ai trouvé dans
          le développement une manière de pouvoir m'exprimer. Le Web est pour
          moi un monde où chaque ligne de code devient une opportunité
          d’explorer, d’innover et de donner vie à des idées.
          <span className="block text-pink-400 mt-2 font-semibold">
            Ce métier me passionne car il ouvre la porte à un monde sans
            limites, où l’imagination est la seule frontière.
          </span>
          <span className="block mt-4 font-semibold text-gray-100">
            Construire, expérimenter, et repousser les possibilités: voilà ce
            qui me motive chaque jour à perséverer et à faire mieux qu'hier.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

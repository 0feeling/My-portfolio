import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Spaceship = () => {
  const navigate = useNavigate();

  // Fonction pour rediriger l'utilisateur
  const handleClick = () => {
    navigate("/matrix-pills");
  };

  // Redirection automatique après x secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/matrix-pills");
    }, 2000);

    return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
  }, [navigate]);

  return (
    <div className="h-screen w-screen relative">
      <img
        src="/assets/img/InsidetheSpaceship.jpg"
        alt="Full Screen"
        className="absolute top-0 left-0 h-full w-full object-cover cursor-pointer z-50"
        onClick={handleClick} // Redirige l'utilisateur au clic
      />
      <Navbar />
    </div>
  );
};

export default Spaceship;

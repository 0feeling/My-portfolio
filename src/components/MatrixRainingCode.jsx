import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MatrixRainingCode = () => {
  const canvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789&-+=/§$*€@£#";
    const charArray = characters.split("");
    let drops = new Array(columns).fill(1);

    // Définir la couleur selon la page actuelle
    let textColor = "#0f0"; // Vert par défaut
    if (
      location.pathname === "/Projects" ||
      location.pathname === "/Projects-mobile"
    ) {
      textColor = "#ff0000"; // Rouge
    }
    if (location.pathname === "/Spaceship") textColor = "#ffffff"; // Blanc
    if (location.pathname === "/Contact") textColor = "#1f51ff"; // Bleu
    if (location.pathname === "/Stack") textColor = "#fbbf24"; // Jaune
    if (location.pathname === "/AboutMe") textColor = "#f472b6"; // Rose

    let frameRate = 25;
    let lastFrameTime = Date.now();
    let animationFrameId;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"; // Laisse l'effet de traînée
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = textColor; // Met à jour la couleur
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      if (currentTime - lastFrameTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = new Array(columns).fill(1);
    };

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [location.pathname]); // Met à jour uniquement quand on change de page

  return (
    <canvas
      className="matrix-canvas fixed top-0 left-0 z-[-1]"
      ref={canvasRef}
    ></canvas>
  );
};

export default MatrixRainingCode;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SketchfabViewer = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(20); // Le temps restant
  const [timerActive, setTimerActive] = useState(true); // Indicateur si le timer est en cours

  useEffect(() => {
    // Clic simulé dans l'iframe après un délai
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      // Clic simulé sur le centre de l'iframe
      const simulatedClick = () => {
        const rect = iframe.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const event = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: centerX,
          clientY: centerY
        });

        iframeDocument.body.dispatchEvent(event);
      };

      // Simule un clic après un délai de 1 seconde
      setTimeout(simulatedClick, 1000);
    }

    // Timer pour 20 secondes
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(countdown);
          navigate("/Makeachoice");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Nettoyage du timer à la fin
    return () => clearInterval(countdown);
  }, [navigate]);

  return (
    <div className="w-full h-screen relative">
      <iframe
        ref={iframeRef}
        title="Matrix Pills"
        src="https://sketchfab.com/models/9717442a125547f7a7adf585fe76044f/embed?api=1&interactions=0&camera=0" // Interactions et zoom désactivés
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className="w-full h-full"
        style={{
          transform: "scaleX(-1)",
          display: "block" // Évite les effets de bord avec inline elements
        }}
      ></iframe>

      {timerActive && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "48px",
            color: "#00ff00",
            textAlign: "center",
            animation: "matrix-effect 1s infinite"
          }}
        >
          {timeLeft} s
        </div>
      )}

      {/* Style Matrix pour le défilement des chiffres */}
      <style>
        {`
          @keyframes matrix-effect {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default SketchfabViewer;

import React, { useState } from "react";

const ClickCoordinates = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f0f0",
        cursor: "pointer"
      }}
    >
      <p>
        Cliquez pour voir les coordonnées : X: {coords.x}, Y: {coords.y}
      </p>
    </div>
  );
};

export default ClickCoordinates;

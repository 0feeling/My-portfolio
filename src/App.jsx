import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hero from "./components/Hero"; // Hero reste utilisé dans Homepage
import MatrixRainingCode from "./components/MatrixRainingCode";
import "./tailwind.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Spaceship from "./components/Spaceship";
import SketchfabViewer from "./components/SketchfabViewer"; // Modèle 3D interactif
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Makeachoice from "./components/Makeachoice";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="font-mono">
        {/* Conteneur avec l'animation Matrix */}
        <div className="relative min-h-screen">
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <MatrixRainingCode />
          </div>

          {/* Routes pour la page d'accueil et autres pages */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/spaceship" element={<Spaceship />} />
            <Route path="/matrix-pills" element={<SketchfabViewer />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Makeachoice" element={<Makeachoice />} />

            {/* Tu peux ajouter ici d'autres routes pour d'autres pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import TypingTitle from "./TypingTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xxxxx", // Remplace par ton Service ID EmailJS
        "template_xxxxx", // Remplace par ton Template ID EmailJS
        formData,
        "your_public_key" // Remplace par ta Public Key EmailJS
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur d'envoi:", error);
          setStatus("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div
        className="w-full max-w-3xl p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-500 relative overflow-hidden
                      before:absolute before:inset-0 before:bg-blue-500 before:opacity-10 before:blur-lg"
      >
        {/* Titre avec effet futuriste */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-400 text-center mb-6 tracking-widest uppercase">
          <TypingTitle text="Contactez-moi" />
        </h1>

        {/* Texte d'intro */}
        <p className="text-gray-300 text-center mb-6 text-lg md:text-xl leading-relaxed">
          Vous avez aimé ce portfolio ? Et si nous donnions vie à votre projet ?
          <span className="block text-blue-400 mt-2 font-semibold">
            Original, audacieux ou résolument professionnel: faisons de votre
            idée une réalité.
          </span>
          <span className="block mt-4 font-semibold text-gray-100">
            Créativité, technicité et sens du détail: discutons-en !
          </span>
        </p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-blue-400 rounded-md focus:outline-none
                      focus:ring-2 focus:ring-blue-500 transition-all shadow-md shadow-blue-500/30"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-blue-400 rounded-md focus:outline-none
                      focus:ring-2 focus:ring-blue-500 transition-all shadow-md shadow-blue-500/30"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Décrivez moi ici votre projet et nous pourrons explorer ensemble ses possibilités !"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-blue-400 rounded-md focus:outline-none
                      focus:ring-2 focus:ring-blue-500 transition-all shadow-md shadow-blue-500/30"
          />

          {/* Bouton avec effet néon */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all
            shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 transform hover:scale-105
            border border-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Envoyer
          </button>
        </form>

        {status && (
          <p className="text-center text-sm mt-3 text-blue-400">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;

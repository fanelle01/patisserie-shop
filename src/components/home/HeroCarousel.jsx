"use client";

import { useState, useEffect } from "react";

// 5 photos temporaires de pâtisseries (Unsplash)
const PHOTOS = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200",
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=1200",
  "https://images.unsplash.com/photo-1612203985729-70726954388c?w=1200",
];

export default function HeroCarousel() {
  const [photoActive, setPhotoActive] = useState(0);

  // Change la photo toutes les 4 secondes
  useEffect(() => {
    const intervalle = setInterval(() => {
      setPhotoActive((actuelle) => (actuelle + 1) % PHOTOS.length);
    }, 4000);

    return () => clearInterval(intervalle);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">

      {/* Photos en arrière-plan */}
      {PHOTOS.map((photo, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${photo})`,
            opacity: index === photoActive ? 1 : 0,
          }}
        />
      ))}

      {/* Couche sombre par-dessus les photos */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      />

      {/* Titre fixe au centre */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm tracking-widest uppercase mb-3"
          style={{ color: "var(--color-gold)" }}>
          ✦ Pâtisserie Artisanale ✦
        </p>
        <h1 className="text-5xl font-bold mb-4"
          style={{ color: "var(--color-white)" }}>
          Hurie's Delights
        </h1>
        <p className="text-lg mb-8"
          style={{ color: "var(--color-cream)" }}>
          Gâteaux, Donuts & Beignets faits avec amour
        </p>
        <a href="/produits"
          className="px-8 py-3 font-bold tracking-wider uppercase"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-white)",
          }}>
          Voir nos créations
        </a>
      </div>

      {/* Points de navigation en bas */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {PHOTOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setPhotoActive(index)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === photoActive
                ? "var(--color-gold)"
                : "rgba(255,255,255,0.5)",
              transform: index === photoActive ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>

    </div>
  );
}
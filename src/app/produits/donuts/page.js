"use client";

import { usePanier } from "@/context/CartContext";

const DONUTS = [
  {
    id: "donuts-simple",
    nom: "Box Donuts Simples",
    description: "Box de 6 donuts nature, moelleux et dorés à souhait.",
    prix: 15,
    photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
  },
  {
    id: "donuts-vanille",
    nom: "Box Donuts Vanille",
    description: "Box de 6 donuts fourrés à la crème vanille maison.",
    prix: 20,
    photo: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600",
  },
  {
    id: "donuts-chocolat",
    nom: "Box Donuts Chocolat",
    description: "Box de 6 donuts fourrés au chocolat fondant.",
    prix: 20,
    photo: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600",
  },
];

export default function PageDonuts() {
  const { ajouterAuPanier } = usePanier();

  return (
    <main className="py-16 px-4">

      {/* Titre */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase mb-2"
          style={{ color: "var(--color-gold)" }}>
          ✦ Box de 6 ✦
        </p>
        <h1 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Nos Donuts
        </h1>
      </div>

      {/* Les 3 cartes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {DONUTS.map((donut) => (
          <div
            key={donut.id}
            className="flex flex-col overflow-hidden rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Photo */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${donut.photo})` }}
            />

            {/* Contenu */}
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-bold mb-2"
                style={{ color: "var(--color-chocolate)" }}>
                {donut.nom}
              </h2>
              <p className="text-sm flex-1 mb-3"
                style={{ color: "var(--color-caramel)" }}>
                {donut.description}
              </p>
              <p className="text-lg font-bold mb-4"
                style={{ color: "var(--color-gold)" }}>
                {donut.prix}$
              </p>

              <button
                onClick={() => ajouterAuPanier(donut)}
                className="py-2 px-4 text-sm font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-white)",
                }}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
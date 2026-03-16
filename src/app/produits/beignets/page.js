"use client";

import { usePanier } from "@/context/CartContext";

const BEIGNETS = [
  {
    id: "beignets-45",
    nom: "Beignets Soufflés — 45 pcs",
    description: "45 beignets soufflés légers et dorés, parfaits pour un goûter en famille.",
    prix: 10,
    photo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
  },
  {
    id: "beignets-100",
    nom: "Beignets Soufflés — 100 pcs",
    description: "100 beignets soufflés pour vos grandes occasions et célébrations.",
    prix: 20,
    photo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
  },
];

export default function PageBeignets() {
  const { ajouterAuPanier } = usePanier();

  return (
    <main className="py-16 px-4">

      {/* Titre */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase mb-2"
          style={{ color: "var(--color-gold)" }}>
          ✦ Faits maison ✦
        </p>
        <h1 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Nos Beignets Soufflés
        </h1>
      </div>

      {/* Les 2 cartes */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {BEIGNETS.map((beignet) => (
          <div
            key={beignet.id}
            className="flex flex-col overflow-hidden rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Photo */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${beignet.photo})` }}
            />

            {/* Contenu */}
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-bold mb-2"
                style={{ color: "var(--color-chocolate)" }}>
                {beignet.nom}
              </h2>
              <p className="text-sm flex-1 mb-3"
                style={{ color: "var(--color-caramel)" }}>
                {beignet.description}
              </p>
              <p className="text-lg font-bold mb-4"
                style={{ color: "var(--color-gold)" }}>
                {beignet.prix}$
              </p>

              <button
                onClick={() => ajouterAuPanier(beignet)}
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
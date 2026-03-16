"use client";

import { usePanier } from "@/context/CartContext";

const GATEAUX = [
  {
    id: "gateau-nature",
    nom: "Gâteau Nature",
    description: "Un gâteau moelleux et léger, parfait pour toutes les occasions.",
    prix: 20,
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    id: "gateau-coco",
    nom: "Gâteau Noix de Coco",
    description: "Un gâteau parfumé à la noix de coco, doux et exotique.",
    prix: 25,
    photo: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600",
  },
  {
    id: "gateau-chocolat",
    nom: "Gâteau Chocolat",
    description: "Un gâteau riche et fondant pour les amateurs de chocolat.",
    prix: 25,
    photo: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600",
  },
  {
    id: "gateau-marbre",
    nom: "Gâteau Marbré",
    description: "Le mariage parfait entre la vanille et le chocolat.",
    prix: 25,
    photo: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600",
  },
];

export default function PageGateaux() {
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
          Nos Gâteaux
        </h1>
      </div>

      {/* Les 4 cartes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GATEAUX.map((gateau) => (
          <div
            key={gateau.id}
            className="flex flex-col overflow-hidden rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Photo */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${gateau.photo})` }}
            />

            {/* Contenu */}
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-bold mb-2"
                style={{ color: "var(--color-chocolate)" }}>
                {gateau.nom}
              </h2>
              <p className="text-sm flex-1 mb-3"
                style={{ color: "var(--color-caramel)" }}>
                {gateau.description}
              </p>
              <p className="text-lg font-bold mb-4"
                style={{ color: "var(--color-gold)" }}>
                {gateau.prix}$
              </p>

              {/* Bouton */}
              <button
                onClick={() => ajouterAuPanier(gateau)}
                className="py-2 px-4 text-sm font-bold tracking-wider uppercase transition-colors duration-200"
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
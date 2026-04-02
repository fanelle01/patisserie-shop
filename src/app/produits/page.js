"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    nom: "Gâteaux",
    description: "Nature, noix de coco, chocolat ou marbré. Personnalisables selon vos envies.",
    prix: "À partir de 20$",
    photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    lien: "/produits/gateaux",
  },
  {
    nom: "Donuts",
    description: "Box de 6. Simples ou fourrés à la vanille et au chocolat.",
    prix: "À partir de 15$",
    photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
    lien: "/produits/donuts",
  },
  {
    nom: "Beignets Soufflés",
    description: "Légers et dorés. Disponibles en format 45 ou 100 pièces.",
    prix: "À partir de 10$",
    photo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
    lien: "/produits/beignets",
  },
];

const TOUS_LES_PRODUITS = [
  { nom: "Gâteau Nature",         prix: 20, lien: "/produits/gateaux" },
  { nom: "Gâteau Noix de Coco",   prix: 25, lien: "/produits/gateaux" },
  { nom: "Gâteau Chocolat",       prix: 25, lien: "/produits/gateaux" },
  { nom: "Gâteau Marbré",         prix: 25, lien: "/produits/gateaux" },
  { nom: "Box Donuts Simples",    prix: 15, lien: "/produits/donuts"  },
  { nom: "Box Donuts Vanille",    prix: 20, lien: "/produits/donuts"  },
  { nom: "Box Donuts Chocolat",   prix: 20, lien: "/produits/donuts"  },
  { nom: "Beignets Soufflés 45",  prix: 10, lien: "/produits/beignets"},
  { nom: "Beignets Soufflés 100", prix: 20, lien: "/produits/beignets"},
];

export default function PageProduits() {
  const [recherche, setRecherche] = useState("");

  // Filtrer les produits selon la recherche
  const resultats = TOUS_LES_PRODUITS.filter((produit) =>
    produit.nom.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <main className="py-16 px-4">

        
      {/* Barre de recherche */}
      <div className="max-w-xl mx-auto mb-16">
        <p className="text-center text-sm tracking-widest uppercase mb-4"
          style={{ color: "var(--color-gold)" }}>
          ✦ Rechercher un produit ✦
        </p>
        <input
          type="text"
          placeholder="Ex: gâteau chocolat, donuts..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="w-full px-4 py-3 outline-none rounded-sm shadow-sm"
          style={{
            border: "1px solid var(--color-caramel)",
            backgroundColor: "var(--color-white)",
            color: "var(--color-chocolate)",
          }}
        />

        {/* Résultats */}
        {recherche && (
          <div
            className="mt-2 rounded-sm shadow-md overflow-hidden"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {resultats.length === 0 ? (
              <p className="p-4 text-sm text-center"
                style={{ color: "var(--color-caramel)" }}>
                Aucun produit trouvé pour `{ recherche }`
              </p>
            ) : (
              resultats.map((produit) => (
                <Link
                  key={produit.nom}
                  href={produit.lien}
                  className="flex items-center justify-between px-4 py-3 border-b text-sm transition-colors duration-150"
                  style={{
                    borderColor: "var(--color-cream-dark)",
                    color: "var(--color-chocolate)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span>{produit.nom}</span>
                  <span style={{ color: "var(--color-gold)" }}>
                    {produit.prix}$
                  </span>
                </Link>
              ))
            )}
          </div>
        )}
      </div>


      {/* Titre */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Nos Créations
        </h1>
        <p className="mt-3 text-sm"
          style={{ color: "var(--color-caramel)" }}>
          Découvrez toutes nos pâtisseries artisanales
        </p>
      </div>

      {/* Les 3 cartes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((categorie) => (
          <div
            key={categorie.nom}
            className="flex flex-col overflow-hidden rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Photo */}
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${categorie.photo})` }}
            />

            {/* Contenu */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-xl font-bold mb-2"
                style={{ color: "var(--color-chocolate)" }}>
                {categorie.nom}
              </h2>
              <p className="text-sm flex-1 mb-3"
                style={{ color: "var(--color-caramel)" }}>
                {categorie.description}
              </p>
              <p className="text-sm font-bold mb-4"
                style={{ color: "var(--color-gold)" }}>
                {categorie.prix}
              </p>

              {/* Bouton */}
              <Link
                href={categorie.lien}
                className="text-center py-2 px-4 text-sm font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: "var(--color-chocolate)",
                  color: "var(--color-white)",
                }}
              >
                Découvrir →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
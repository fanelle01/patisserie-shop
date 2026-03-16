"use client";

import { usePanier } from "@/context/CartContext";
import Link from "next/link";

export default function PagePanier() {
  const { panier, retirerDuPanier, total, nbArticles } = usePanier();

  // Panier vide
  if (panier.length === 0) {
    return (
      <main className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4"
          style={{ color: "var(--color-chocolate)" }}>
          Votre Panier
        </h1>
        <p className="mb-8"
          style={{ color: "var(--color-caramel)" }}>
          Votre panier est vide pour l`instant.
        </p>
        <Link
          href="/produits"
          className="py-3 px-8 font-bold tracking-wider uppercase"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-white)",
          }}
        >
          Voir nos créations
        </Link>
      </main>
    );
  }

  return (
    <main className="py-16 px-4">

      {/* Titre */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Votre Panier
        </h1>
        <p className="mt-2"
          style={{ color: "var(--color-caramel)" }}>
          {nbArticles} article{nbArticles > 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Liste des produits */}
        <div className="flex flex-col gap-4 mb-8">
          {panier.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-sm shadow-sm"
              style={{ backgroundColor: "var(--color-white)" }}
            >
              {/* Photo */}
              <div
                className="w-20 h-20 rounded-sm bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${item.photo})` }}
              />

              {/* Infos */}
              <div className="flex-1">
                <h2 className="font-bold"
                  style={{ color: "var(--color-chocolate)" }}>
                  {item.nom}
                </h2>
                <p className="text-sm"
                  style={{ color: "var(--color-caramel)" }}>
                  {item.prix}$ x {item.quantite}
                </p>
              </div>

              {/* Sous-total */}
              <p className="font-bold"
                style={{ color: "var(--color-gold)" }}>
                {item.prix * item.quantite}$
              </p>

              {/* Bouton retirer */}
              <button
                onClick={() => retirerDuPanier(item.id)}
                className="text-sm px-3 py-1"
                style={{
                  color: "var(--color-caramel)",
                  border: "1px solid var(--color-caramel)",
                }}
              >
                Retirer
              </button>

            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className="flex items-center justify-between p-6 rounded-sm mb-6"
          style={{ backgroundColor: "var(--color-cream-dark)" }}
        >
          <p className="text-lg font-bold"
            style={{ color: "var(--color-chocolate)" }}>
            Total
          </p>
          <p className="text-2xl font-bold"
            style={{ color: "var(--color-gold)" }}>
            {total}$
          </p>
        </div>

        {/* Bouton commander */}
        <Link
          href="/commander"
          className="block text-center py-4 font-bold tracking-wider uppercase"
          style={{
            backgroundColor: "var(--color-chocolate)",
            color: "var(--color-white)",
          }}
        >
          Passer la commande →
        </Link>

      </div>
    </main>
  );
}
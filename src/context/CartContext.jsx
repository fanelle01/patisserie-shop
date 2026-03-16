"use client";

import { createContext, useContext, useState } from "react";

// 1. Créer le contexte
const CartContext = createContext();

// 2. Le fournisseur — enveloppe toute l'application
export function CartProvider({ children }) {
  const [panier, setPanier] = useState([]);

  // Ajouter un produit au panier
  function ajouterAuPanier(produit) {
    setPanier((actuel) => {
      // Vérifier si le produit est déjà dans le panier
      const existe = actuel.find((item) => item.id === produit.id);

      if (existe) {
        // Si oui — augmenter la quantité
        return actuel.map((item) =>
          item.id === produit.id
            ? { ...item, quantite: item.quantite + 1 }
            : item
        );
      } else {
        // Si non — ajouter le produit avec quantite 1
        return [...actuel, { ...produit, quantite: 1 }];
      }
    });
  }

  // Retirer un produit du panier
  function retirerDuPanier(id) {
    setPanier((actuel) => actuel.filter((item) => item.id !== id));
  }

  // Calculer le total
  const total = panier.reduce(
    (acc, item) => acc + item.prix * item.quantite,
    0
  );

  // Nombre total d'articles
  const nbArticles = panier.reduce(
    (acc, item) => acc + item.quantite,
    0
  );

  return (
    <CartContext.Provider
      value={{ panier, ajouterAuPanier, retirerDuPanier, total, nbArticles }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook personnalisé pour utiliser le panier facilement
export function usePanier() {
  return useContext(CartContext);
}
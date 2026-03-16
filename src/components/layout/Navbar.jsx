"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { usePanier } from "@/context/CartContext";

export default function Navbar() {
  const { nbArticles } = usePanier();

  return (
    <nav style={{ backgroundColor: "var(--color-chocolate)" }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ color: "var(--color-gold)" }}>
          <span className="text-xl font-bold">Hurie`s Delights</span>
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/produits" style={{ color: "var(--color-white)" }}>
            Nos Créations
          </Link>
          <Link href="/contact" style={{ color: "var(--color-white)" }}>
            Contact
          </Link>

          {/* Icône panier + compteur */}
          <Link href="/panier" style={{ color: "var(--color-gold)" }}
            className="relative">
            <ShoppingBag size={22} />
            {nbArticles > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-white)",
                }}
              >
                {nbArticles}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}
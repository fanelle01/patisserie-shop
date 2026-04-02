import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/produits
/**
 * Obtenir tous les produits créer dans la base de données 
 * @returns la listes de produits créer sous forme de données JSON
 */
export async function GET() {
  try {
    const produits = await prisma.produit.findMany({
      include: {
        variantes: true,
      },
    });

    return NextResponse.json(produits);

  } catch (erreur) {
    console.error("Erreur lors de la récupération des produits:", erreur);
    return NextResponse.json(
      { erreur: "Impossible de récupérer les produits" },
      { status: 500 }
    );
  }
}
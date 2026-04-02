import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/produits
export async function POST(request) {
  try {
    const body = await request.json();
    const { nomClient, emailClient, telephone, items, total } = body;
    const commande = await prisma.commande.create({
      data: {
        nomClient,
        emailClient,
        telephone,
        total,
        items: {
          create: items.map((item) => ({
            produitId: item.produitId,
            varianteId: item.varianteId,
            quantite: item.quantite,
            prixUnitaire: item.prix,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json(commande, { status: 201 })

  } catch (erreur) {
    onsole.error("Erreur lors de la création de la commande:", erreur);
    return NextResponse.json(
      { erreur: "Impossible de créer la commande" },
      { status: 500 }
    );
  }
}
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

require("dotenv").config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Remplissage de la base de données...");

  await prisma.produit.create({
    data: {
      nom: "Gâteau",
      description: "Gâteau taille unique fait maison.",
      categorie: "GATEAU",
      disponible: true,
      variantes: {
        create: [
          { nom: "Nature",       prix: 20, estDefaut: true  },
          { nom: "Noix de Coco", prix: 25, estDefaut: false },
          { nom: "Chocolat",     prix: 25, estDefaut: false },
          { nom: "Marbré",       prix: 25, estDefaut: false },
        ],
      },
    },
  });
  console.log("Gâteau créé");

  await prisma.produit.create({
    data: {
      nom: "Donuts",
      description: "Box de 6 donuts faits maison.",
      categorie: "DONUT",
      disponible: true,
      variantes: {
        create: [
          { nom: "Simple",          prix: 15, estDefaut: true  },
          { nom: "Fourré Vanille",  prix: 20, estDefaut: false },
          { nom: "Fourré Chocolat", prix: 20, estDefaut: false },
        ],
      },
    },
  });
  console.log("Donuts créés");

  await prisma.produit.create({
    data: {
      nom: "Beignets Soufflés",
      description: "Beignets soufflés légers et dorés.",
      categorie: "BEIGNET",
      disponible: true,
      variantes: {
        create: [
          { nom: "45 pièces",  prix: 10, estDefaut: true  },
          { nom: "100 pièces", prix: 20, estDefaut: false },
        ],
      },
    },
  });
  console.log("Beignets créés");

  console.log("Base de données remplie avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
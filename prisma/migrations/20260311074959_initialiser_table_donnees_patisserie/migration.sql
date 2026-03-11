-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "Categorie" AS ENUM ('GATEAU', 'DONUT', 'BEIGNET');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('RECUE', 'EN_PREPARATION', 'PRETE', 'LIVREE', 'ANNULEE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "adresse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "prix" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "categorie" "Categorie" NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VarianteProduit" (
    "id" SERIAL NOT NULL,
    "produitId" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "estDefaut" BOOLEAN NOT NULL DEFAULT false,
    "disponible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "VarianteProduit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "produitId" INTEGER NOT NULL,
    "varianteId" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "statut" "Statut" NOT NULL DEFAULT 'RECUE',
    "total" DOUBLE PRECISION NOT NULL,
    "dateRetrait" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripeId" TEXT,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandeItem" (
    "id" SERIAL NOT NULL,
    "commandeId" INTEGER NOT NULL,
    "produitId" INTEGER NOT NULL,
    "varianteId" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prixUnitaire" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CommandeItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "VarianteProduit" ADD CONSTRAINT "VarianteProduit_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_varianteId_fkey" FOREIGN KEY ("varianteId") REFERENCES "VarianteProduit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeItem" ADD CONSTRAINT "CommandeItem_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeItem" ADD CONSTRAINT "CommandeItem_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeItem" ADD CONSTRAINT "CommandeItem_varianteId_fkey" FOREIGN KEY ("varianteId") REFERENCES "VarianteProduit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

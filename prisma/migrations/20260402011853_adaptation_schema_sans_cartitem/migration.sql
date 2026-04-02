/*
  Warnings:

  - The values [CLIENT] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userId` on the `Commande` table. All the data in the column will be lost.
  - You are about to drop the column `prixUnitaire` on the `CommandeItem` table. All the data in the column will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `emailClient` to the `Commande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomClient` to the `Commande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Commande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix` to the `CommandeItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'ADMIN';
COMMIT;

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_produitId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_userId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_varianteId_fkey";

-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_userId_fkey";

-- AlterTable
ALTER TABLE "Commande" DROP COLUMN "userId",
ADD COLUMN     "emailClient" TEXT NOT NULL,
ADD COLUMN     "nomClient" TEXT NOT NULL,
ADD COLUMN     "telephone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CommandeItem" DROP COLUMN "prixUnitaire",
ADD COLUMN     "prix" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'ADMIN';

-- DropTable
DROP TABLE "CartItem";

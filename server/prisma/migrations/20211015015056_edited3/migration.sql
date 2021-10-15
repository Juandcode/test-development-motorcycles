/*
  Warnings:

  - You are about to drop the column `busy` on the `horarios` table. All the data in the column will be lost.
  - You are about to drop the column `driverId` on the `horarios` table. All the data in the column will be lost.
  - You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `countDrivers` to the `Horarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `horarios` DROP FOREIGN KEY `Horarios_driverId_fkey`;

-- AlterTable
ALTER TABLE `horarios` DROP COLUMN `busy`,
    DROP COLUMN `driverId`,
    ADD COLUMN `countDrivers` INTEGER NOT NULL;

-- DropTable
DROP TABLE `driver`;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `horariosId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_horariosId_fkey` FOREIGN KEY (`horariosId`) REFERENCES `Horarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

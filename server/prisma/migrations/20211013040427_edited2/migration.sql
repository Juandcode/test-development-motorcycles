/*
  Warnings:

  - A unique constraint covering the columns `[driverId]` on the table `Horarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `horarios` ADD COLUMN `driverId` INTEGER;

-- CreateTable
CREATE TABLE `Driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Horarios_driverId_key` ON `Horarios`(`driverId`);

-- AddForeignKey
ALTER TABLE `Horarios` ADD CONSTRAINT `Horarios_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

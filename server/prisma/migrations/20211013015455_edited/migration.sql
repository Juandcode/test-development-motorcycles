/*
  Warnings:

  - You are about to drop the `motos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `motos`;

-- CreateTable
CREATE TABLE `Horarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` VARCHAR(191) NOT NULL,
    `busy` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

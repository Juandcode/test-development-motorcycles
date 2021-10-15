/*
  Warnings:

  - Made the column `horariosId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_horariosId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `horariosId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_horariosId_fkey` FOREIGN KEY (`horariosId`) REFERENCES `Horarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

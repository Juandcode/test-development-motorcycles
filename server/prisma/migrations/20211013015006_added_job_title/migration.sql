/*
  Warnings:

  - You are about to alter the column `time` on the `motos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `motos` MODIFY `time` DATETIME(3) NOT NULL;

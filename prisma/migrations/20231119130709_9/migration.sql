/*
  Warnings:

  - You are about to alter the column `foto` on the `Paslon` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Paslon` MODIFY `foto` VARCHAR(191) NOT NULL;

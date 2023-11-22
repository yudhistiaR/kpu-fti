/*
  Warnings:

  - You are about to drop the column `misi` on the `Paslon` table. All the data in the column will be lost.
  - You are about to drop the column `visi` on the `Paslon` table. All the data in the column will be lost.
  - Added the required column `visi_misi` to the `Paslon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Paslon` DROP COLUMN `misi`,
    DROP COLUMN `visi`,
    ADD COLUMN `visi_misi` VARCHAR(191) NOT NULL;

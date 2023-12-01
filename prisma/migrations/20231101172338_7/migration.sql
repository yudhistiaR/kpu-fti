/*
  Warnings:

  - Made the column `status_bem` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status_hmp` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Pemilih` MODIFY `status_bem` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status_hmp` BOOLEAN NOT NULL DEFAULT false;

/*
  Warnings:

  - You are about to drop the column `id_paslon_bem` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `id_paslon_hmp` on the `Pemilih` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pemilih` DROP COLUMN `id_paslon_bem`,
    DROP COLUMN `id_paslon_hmp`;

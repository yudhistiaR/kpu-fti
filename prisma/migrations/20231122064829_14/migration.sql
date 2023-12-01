-- AlterTable
ALTER TABLE `Pemilih` ADD COLUMN `role` ENUM('Mahasiswa', 'Pengurus') NOT NULL DEFAULT 'Mahasiswa';

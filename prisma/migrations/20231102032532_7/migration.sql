/*
  Warnings:

  - You are about to drop the `Paslon_bem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paslon_hmp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pemilih` DROP FOREIGN KEY `Pemilih_id_paslon_bem_fkey`;

-- DropForeignKey
ALTER TABLE `Pemilih` DROP FOREIGN KEY `Pemilih_id_paslon_hmp_fkey`;

-- DropTable
DROP TABLE `Paslon_bem`;

-- DropTable
DROP TABLE `Paslon_hmp`;

-- CreateTable
CREATE TABLE `Paslon` (
    `id` VARCHAR(191) NOT NULL,
    `nama_paslon` VARCHAR(191) NOT NULL,
    `no_urut` VARCHAR(191) NOT NULL,
    `foto` BLOB NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `type` ENUM('bem', 'si', 'ti') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `paslon_id` VARCHAR(191) NOT NULL,
    `pemilih_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`pemilih_id`, `paslon_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_pemilih_id_fkey` FOREIGN KEY (`pemilih_id`) REFERENCES `Pemilih`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_paslon_id_fkey` FOREIGN KEY (`paslon_id`) REFERENCES `Paslon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

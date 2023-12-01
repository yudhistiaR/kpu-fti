/*
  Warnings:

  - Made the column `token` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `token` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `Pemilih` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `npm` VARCHAR(191) NOT NULL,
    `prodi` VARCHAR(191) NOT NULL,
    `status_bem` BOOLEAN NOT NULL DEFAULT false,
    `status_hmp` BOOLEAN NOT NULL DEFAULT false,
    `id_paslon_bem` VARCHAR(191) NOT NULL,
    `id_paslon_hmp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paslon_hmp` (
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
CREATE TABLE `Paslon_bem` (
    `id` VARCHAR(191) NOT NULL,
    `nama_paslon` VARCHAR(191) NOT NULL,
    `no_urut` VARCHAR(191) NOT NULL,
    `foto` BLOB NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `type` ENUM('bem', 'si', 'ti') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pemilih` ADD CONSTRAINT `Pemilih_id_paslon_bem_fkey` FOREIGN KEY (`id_paslon_bem`) REFERENCES `Paslon_bem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pemilih` ADD CONSTRAINT `Pemilih_id_paslon_hmp_fkey` FOREIGN KEY (`id_paslon_hmp`) REFERENCES `Paslon_hmp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

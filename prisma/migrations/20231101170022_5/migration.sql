-- DropForeignKey
ALTER TABLE `Pemilih` DROP FOREIGN KEY `Pemilih_id_paslon_bem_fkey`;

-- DropForeignKey
ALTER TABLE `Pemilih` DROP FOREIGN KEY `Pemilih_id_paslon_hmp_fkey`;

-- AlterTable
ALTER TABLE `Pemilih` MODIFY `id_paslon_bem` VARCHAR(191) NULL,
    MODIFY `id_paslon_hmp` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Pemilih` ADD CONSTRAINT `Pemilih_id_paslon_bem_fkey` FOREIGN KEY (`id_paslon_bem`) REFERENCES `Paslon_bem`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pemilih` ADD CONSTRAINT `Pemilih_id_paslon_hmp_fkey` FOREIGN KEY (`id_paslon_hmp`) REFERENCES `Paslon_hmp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `password` VARCHAR(191) NOT NULL;

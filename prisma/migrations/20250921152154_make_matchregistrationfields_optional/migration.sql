-- AlterTable
ALTER TABLE `MatchRegistration` MODIFY `isPaid` BOOLEAN NULL DEFAULT false,
    MODIFY `level` VARCHAR(191) NULL,
    MODIFY `powerFactor` VARCHAR(191) NULL,
    MODIFY `division` VARCHAR(191) NULL,
    MODIFY `category` VARCHAR(191) NULL;

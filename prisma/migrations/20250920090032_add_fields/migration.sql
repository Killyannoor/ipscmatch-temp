/*
  Warnings:

  - You are about to drop the column `date` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `capcity` on the `Squad` table. All the data in the column will be lost.
  - Added the required column `capacity` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Squad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Match` DROP COLUMN `date`,
    ADD COLUMN `endDate` DATETIME(3) NULL,
    ADD COLUMN `startDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Squad` DROP COLUMN `capcity`,
    ADD COLUMN `capacity` INTEGER NOT NULL,
    ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[memberName]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Player_memberName_key` ON `Player`(`memberName`);

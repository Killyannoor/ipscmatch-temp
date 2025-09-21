/*
  Warnings:

  - A unique constraint covering the columns `[playerId,squadId]` on the table `MatchRegistration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MatchRegistration_playerId_squadId_key` ON `MatchRegistration`(`playerId`, `squadId`);

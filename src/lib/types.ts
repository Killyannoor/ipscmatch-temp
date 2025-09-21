import { Prisma } from "../../generated/prisma";

export type MatchWithSquads = Prisma.MatchGetPayload<{
  include: {
    squads: true;
  };
}>;

export type SquadWithRegistrations = Prisma.SquadGetPayload<{
  include: {
    matchRegistrations: true;
  };
}>;

export type SquadWithRegistrationsAndPlayer = Prisma.SquadGetPayload<{
  include: {
    matchRegistrations: {
      include: {
        player: true;
      };
    };
  };
}>;

export type MatchWithSquadsAndRegistrations = Prisma.MatchGetPayload<{
  include: {
    squads: {
      include: {
        matchRegistrations: true;
      };
    };
  };
}>;

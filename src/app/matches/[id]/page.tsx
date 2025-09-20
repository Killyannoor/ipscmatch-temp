import MatchDetail from "@/components/Custom/MatchDetails";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export default async function MatchesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let match = null;
  if (id) {
    match = await prisma.match.findUnique({
      where: { id: 1 },
      include: {
        squads: true,
      },
    });
  }

  return <div className="">{!!match && <MatchDetail match={match} />}</div>;
}

// bij tiidslot weergeven zaterdag 8:00 (squad A)

import MatchDetail from "@/components/Custom/MatchDetails";
import { matches } from "@/lib/data";

export default async function Matches({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="">
      <MatchDetail />
    </div>
  );
}

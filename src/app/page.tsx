import { LoginForm } from "@/components/LoginForm";

// const prisma = new PrismaClient();

export default async function Home() {
  // const matches = await prisma.match.findMany();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex justify-center items-center py-4 border-b">
        <h1 className="text-2xl font-bold">ipscmatch.nl demo</h1>
      </header>

      <div className="max-w-md w-full mx-auto mt-10">
        <LoginForm />
      </div>

      {/* <main className="flex-1 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 px-6 py-6">
        <MatchFilterSidebar />

        <section className="flex flex-col gap-4 w-full md:max-w-[700px] lg:max-w-[1000px] justify-self-center">
          {matches.map((match) => (
            <Link href={`/matches/${match.id}`} key={match.id}>
              <MatchCard key={match.id} match={match} />
            </Link>
          ))}
        </section>
      </main> */}
    </div>
  );
}

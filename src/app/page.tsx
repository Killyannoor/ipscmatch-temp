import { LoginForm } from "@/components/LoginForm";
import { getSession } from "./actions/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/matches/1");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex justify-center items-center py-4 border-b">
        <h1 className="text-2xl font-bold">ipscmatch.nl demo</h1>
      </header>

      <div className="max-w-md w-full mx-auto mt-10">
        <LoginForm />
      </div>
    </div>
  );
}

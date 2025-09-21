"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { PrismaClient } from "../../../generated/prisma";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const getSession = async () => {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (formData: FormData) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  // const formPassword = formData.get("password") as string;

  const user = await prisma.player.findUnique({
    where: {
      memberName: formUsername,
    },
  });

  if (!user) {
    return;
  }

  session.id = user.id;
  session.username = user.memberName;
  session.isLoggedIn = true;

  await session.save();

  redirect("/matches/1");
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();

  redirect("/");
};

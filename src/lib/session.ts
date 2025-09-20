import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string, // must be at least 32 chars
  cookieName: "ipscmatch-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export type SessionData = {
  id: number;
  username: string;
};

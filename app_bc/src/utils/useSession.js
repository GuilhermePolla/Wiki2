import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { ironOptions } from "@/app/sessions/route";

export default async function useSession() {
  const session = await getIronSession(cookies(), ironOptions);
  return session;
}
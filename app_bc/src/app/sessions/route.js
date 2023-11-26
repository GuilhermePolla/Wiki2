import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { NextResponse } from "next/server";

const USER_EMAIL = "user";
const USER_PASSWORD = "user";

const ADMIN_EMAIL = "admin";
const ADMIN_PASSWORD = "admin";

export const ironOptions = {
  cookieName: "BC_SESSION",
  password:
    "huge_ass_password_that_has_to_be_over_32_characters_long_for_security_purposes",
  cookieOptions: {
    secure: false,
    sameSite: "lax",
    path: "/",
  },
};

export const defaultSession = {
  username: "",
  logged: false,
  type: "guest",
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const session = await getIronSession(cookies(), ironOptions);

  await sleep(250);

  if (!session.logged) {
    return NextResponse.json(defaultSession, { status: 200 });
  }

  return NextResponse.json(session, { status: 200 });
}

export async function POST(req) {
  const session = await getIronSession(cookies(), ironOptions);
  const body = await req.json();

  if (body.email === ADMIN_EMAIL && body.password === ADMIN_PASSWORD) {
    session.logged = true;
    session.username = "ADMIN";
    session.type = "admin";
    await session.save();
  }

  if (body.email === USER_EMAIL && body.password === USER_PASSWORD) {
    session.logged = true;
    session.username = "USER";
    session.type = "user";
    await session.save();
  }

  await sleep(250);

  return NextResponse.json(session, { status: 200 });
}

export async function DELETE() {
  const session = await getIronSession(cookies(), ironOptions);

  session.destroy();

  return NextResponse.json(defaultSession, { status: 200 });
}

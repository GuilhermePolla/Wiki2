import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { NextResponse } from "next/server";
import axios from "axios";

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

export const defaultSession = null;

export async function GET() {
  const session = await getIronSession(cookies(), ironOptions);

  if (session === null) {
    return NextResponse.json(defaultSession, { status: 200 });
  }

  return NextResponse.json(session, { status: 200 });
}

export async function POST(req) {
  const session = await getIronSession(cookies(), ironOptions);
  const body = await req.json();

  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:3001/authenticator/log-in",
      data: {
        authorUser: body.email,
        authorPwd: body.password,
      },
    });
    session.authorToken = data.payload.authorToken;
    session.authorUser = data.payload.authorUser;
    session.authorLevel = data.payload.authorLevel;
    await session.save();
  } catch (err) {
    console.log(err);
    return NextResponse.json(null,{status: 200});
  }
  return NextResponse.json(session, { status: 200 });
}

export async function DELETE() {
  const session = await getIronSession(cookies(), ironOptions);

  session.destroy();

  return NextResponse.json(defaultSession, { status: 200 });
}

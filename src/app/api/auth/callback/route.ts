import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const redirectTo = req.cookies.get("redirectTo")?.value;

  const reegisterResponse = await api.post("/register", {
    code: code,
  });

  const { token } = reegisterResponse.data;

  const redirectURL = redirectTo ?? new URL("/", req.url);

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  });
}

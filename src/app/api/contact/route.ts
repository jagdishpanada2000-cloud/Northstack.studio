import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, project } = await req.json();

  console.log("Contact form submission:", { name, email, project });

  return NextResponse.json({ success: true });
}

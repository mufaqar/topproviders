import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const completeUrl = req.headers;
  return NextResponse.json({ completeUrl });
}
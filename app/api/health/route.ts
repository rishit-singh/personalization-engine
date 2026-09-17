import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "personalization-engine", timestamp: new Date().toISOString() });
}

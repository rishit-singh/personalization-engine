import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { visitor_id, page, signals } = body;

  if (!visitor_id || !page) {
    return NextResponse.json(
      { error: "visitor_id and page are required" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  // Store behavioral event
  const { error } = await supabase.from("behavioral_events").insert({
    visitor_id,
    page,
    signals: signals ?? {},
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }

  // TODO: call behavioral model layer → return personalization decision
  const decision = {
    visitor_id,
    page,
    recommendations: [],
    cognitive_triggers: [],
    confidence: 0,
  };

  return NextResponse.json(decision);
}

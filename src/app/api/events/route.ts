import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { visitor_id, event_type, properties } = body;

  if (!visitor_id || !event_type) {
    return NextResponse.json(
      { error: "visitor_id and event_type are required" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase.from("behavioral_events").insert({
    visitor_id,
    event_type,
    properties: properties ?? {},
    created_at: new Date().toISOString(),
  }).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, event_id: data.id });
}

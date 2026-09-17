import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const EventSchema = z.object({
  brand_id: z.string(),
  session_id: z.string(),
  event_type: z.enum(["page_view", "product_view", "add_to_cart", "purchase", "custom"]),
  properties: z.record(z.unknown()).optional().default({}),
  behavioral_signals: z
    .object({
      recency_score: z.number().min(0).max(1).optional().default(0.5),
      frequency_score: z.number().min(0).max(1).optional().default(0.5),
      monetary_score: z.number().min(0).max(1).optional().default(0.5),
      cognitive_triggers: z.array(z.string()).optional().default([]),
    })
    .optional()
    .default({}),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = EventSchema.parse(body);
    const processed = {
      ...event,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      status: "ingested",
    };
    return NextResponse.json(processed, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid payload", details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

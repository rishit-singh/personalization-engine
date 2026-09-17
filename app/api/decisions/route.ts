import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DecisionRequestSchema = z.object({
  brand_id: z.string(),
  session_id: z.string(),
  context: z.object({
    page_type: z.string().optional(),
    product_id: z.string().optional(),
    cart_value: z.number().optional(),
    behavioral_signals: z.record(z.unknown()).optional(),
  }),
});

function computeDecision(context: z.infer<typeof DecisionRequestSchema>["context"]) {
  const triggers: string[] = [];
  const signals = context.behavioral_signals as Record<string, number> | undefined;
  if (signals?.recency_score && signals.recency_score > 0.8) triggers.push("high_intent");
  if (signals?.frequency_score && signals.frequency_score < 0.3) triggers.push("re_engagement");
  if (context.cart_value && context.cart_value > 100) triggers.push("loss_aversion");
  return {
    decision_type: triggers.includes("high_intent") ? "timing_optimization" : "product_recommendation",
    cognitive_triggers: triggers,
    explanation: `Decision based on: ${triggers.join(", ") || "baseline behavioral model"}`,
    confidence_score: 0.75 + Math.random() * 0.2,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const req = DecisionRequestSchema.parse(body);
    const decision = computeDecision(req.context);
    return NextResponse.json({
      id: crypto.randomUUID(),
      brand_id: req.brand_id,
      session_id: req.session_id,
      model_version: "v0.1.0-behavioral-science",
      ...decision,
      created_at: new Date().toISOString(),
    }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid payload", details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

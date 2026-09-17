export type Brand = {
  id: string;
  name: string;
  plan: "pilot" | "starter" | "growth" | "enterprise";
  created_at: string;
};

export type PersonalizationEvent = {
  id: string;
  brand_id: string;
  session_id: string;
  event_type: "page_view" | "product_view" | "add_to_cart" | "purchase" | "custom";
  properties: Record<string, unknown>;
  behavioral_signals: {
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    cognitive_triggers: string[];
  };
  created_at: string;
};

export type PersonalizationDecision = {
  id: string;
  brand_id: string;
  session_id: string;
  model_version: string;
  decision_type: "product_recommendation" | "content_variant" | "offer" | "timing";
  decision_payload: Record<string, unknown>;
  explanation: string;
  confidence_score: number;
  created_at: string;
};

export type DashboardMetrics = {
  total_events: number;
  decisions_served: number;
  conversion_lift_pct: number;
  avg_order_value_lift_pct: number;
  ltv_improvement_pct: number;
  active_sessions: number;
};

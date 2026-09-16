export interface BehavioralEvent {
  id?: string;
  visitor_id: string;
  event_type?: string;
  page?: string;
  signals?: Record<string, unknown>;
  properties?: Record<string, unknown>;
  created_at?: string;
}

export interface PersonalizationDecision {
  visitor_id: string;
  page: string;
  recommendations: Recommendation[];
  cognitive_triggers: CognitiveTrigger[];
  confidence: number;
}

export interface Recommendation {
  id: string;
  type: "product" | "content" | "offer";
  entity_id: string;
  score: number;
  reason: string;
}

export interface CognitiveTrigger {
  bias: string;
  trigger: string;
  placement: string;
}

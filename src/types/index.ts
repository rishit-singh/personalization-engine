export interface Brand {
  id: string
  name: string
  domain: string
  plan: 'pilot' | 'starter' | 'growth' | 'enterprise'
  gmv_monthly: number
  created_at: string
}

export interface PersonalizationEvent {
  id: string
  brand_id: string
  session_id: string
  user_id?: string
  event_type: 'page_view' | 'product_view' | 'add_to_cart' | 'purchase' | 'custom'
  payload: Record<string, unknown>
  behavioral_signals: BehavioralSignal[]
  timestamp: string
}

export interface BehavioralSignal {
  signal_type: string
  cognitive_trigger?: string
  confidence: number
  value: number | string | boolean
}

export interface PersonalizationDecision {
  id: string
  brand_id: string
  session_id: string
  model_version: string
  decision_type: 'content' | 'product' | 'offer' | 'layout'
  payload: Record<string, unknown>
  explanation: string
  confidence: number
  attributed_lift?: number
  created_at: string
}

export interface LiftMetric {
  brand_id: string
  period: 'day' | 'week' | 'month'
  conversion_lift_pct: number
  ltv_lift_pct: number
  events_processed: number
  decisions_made: number
  reported_at: string
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  meta?: Record<string, unknown>
}

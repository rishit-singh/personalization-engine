import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const DecisionSchema = z.object({
  brand_id:     z.string().uuid(),
  session_id:   z.string(),
  model_version: z.string(),
  decision_type: z.enum(['content', 'product', 'offer', 'layout']),
  payload:      z.record(z.unknown()),
  explanation:  z.string(),
  confidence:   z.number().min(0).max(1),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = DecisionSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.flatten() }, { status: 400 })
    }

    const supabase = await createClient()
    const { data, error } = await supabase
      .from('personalization_decisions')
      .insert({ ...parsed.data, created_at: new Date().toISOString() })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ data, error: null }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ data: null, error: String(err) }, { status: 500 })
  }
}

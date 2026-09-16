import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const EventSchema = z.object({
  brand_id:  z.string().uuid(),
  session_id: z.string(),
  user_id:   z.string().optional(),
  event_type: z.enum(['page_view', 'product_view', 'add_to_cart', 'purchase', 'custom']),
  payload:   z.record(z.unknown()),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = EventSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid event payload', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const supabase = await createClient()
    const { data, error } = await supabase
      .from('personalization_events')
      .insert({ ...parsed.data, timestamp: new Date().toISOString() })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ data, error: null }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ data: null, error: String(err) }, { status: 500 })
  }
}

export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('personalization_events')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(50)

  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 })
  return NextResponse.json({ data, error: null })
}

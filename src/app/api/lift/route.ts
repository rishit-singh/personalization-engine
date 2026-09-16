import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const brand_id = searchParams.get('brand_id')
  const period   = searchParams.get('period') || 'week'

  if (!brand_id) {
    return NextResponse.json({ error: 'brand_id required' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('lift_metrics')
    .select('*')
    .eq('brand_id', brand_id)
    .eq('period', period)
    .order('reported_at', { ascending: false })
    .limit(12)

  if (error) return NextResponse.json({ data: null, error: error.message }, { status: 500 })
  return NextResponse.json({ data, error: null })
}

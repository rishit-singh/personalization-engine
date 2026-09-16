import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { error } = await supabase.from('_health_check').select('1').limit(1).maybeSingle()

    return NextResponse.json({
      status: 'ok',
      version: '0.1.0',
      timestamp: new Date().toISOString(),
      services: {
        nextjs: 'healthy',
        supabase: error ? 'degraded' : 'healthy',
      },
    })
  } catch {
    return NextResponse.json(
      { status: 'degraded', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  }
}

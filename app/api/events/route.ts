import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, metadata, session_id } = body;

    if (!event_name) {
      return NextResponse.json({ error: "event_name is required" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // Dev fallback
      console.log("[EVENT]", { event_name, metadata, session_id });
      return NextResponse.json({ success: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from("events").insert([
      {
        event_name,
        session_id: session_id || null,
        metadata: metadata || {},
      },
    ]);

    if (error) {
      console.error("Event insert error:", error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Events API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

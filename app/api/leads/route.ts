import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function calculateScore(loan_amount: string, income: string) {
  const loanMap: Record<string, number> = {
    "Under ₹20 Lakhs": 1,
    "₹20–50 Lakhs": 2,
    "₹50 Lakhs–1 Crore": 3,
    "₹1–2 Crore": 4,
    "Above ₹2 Crore": 5,
  };
  const incomeMap: Record<string, number> = {
    "Under ₹25,000/month": 1,
    "₹25,000–50,000/month": 2,
    "₹50,000–1 Lakh/month": 3,
    "₹1–2 Lakhs/month": 4,
    "Above ₹2 Lakhs/month": 5,
  };
  const score = (loanMap[loan_amount] ?? 1) + (incomeMap[income] ?? 1);
  const intent_level = score <= 4 ? "low" : score <= 7 ? "medium" : "high";
  return { score, intent_level };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      loan_amount,
      income,
      city,
      employment_type,
      source,
      // Allow pre-calculated score from client, or compute server-side
      score: clientScore,
      intent_level: clientIntent,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const { score, intent_level } =
      clientScore && clientIntent
        ? { score: clientScore, intent_level: clientIntent }
        : calculateScore(loan_amount ?? "", income ?? "");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log("[LEAD]", { name, phone, email, loan_amount, income, city, employment_type, score, intent_level, source });
      return NextResponse.json({ success: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from("leads").insert([
      {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        loan_amount: loan_amount || null,
        income: income || null,
        city: city || null,
        employment_type: employment_type || null,
        score,
        intent_level,
        source: source || "direct",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

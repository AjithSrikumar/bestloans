import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  loan_amount?: string;
  income?: string;
  city?: string;
}

export async function insertLead(data: LeadData) {
  const { error } = await supabase.from("leads").insert([data]);
  if (error) throw error;
}

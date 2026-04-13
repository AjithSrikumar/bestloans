"use client";

export type AnalyticsEvent =
  | "form_started"
  | "form_step_completed"
  | "form_submitted"
  | "whatsapp_clicked"
  | "phone_clicked"
  | "blog_read"
  | "exit_intent_shown"
  | "exit_intent_converted";

export interface EventPayload {
  event_name: AnalyticsEvent;
  metadata?: Record<string, string | number | boolean>;
  session_id?: string;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("bl_session");
  if (!id) {
    id = `bl_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    sessionStorage.setItem("bl_session", id);
  }
  return id;
}

export async function trackEvent(
  event_name: AnalyticsEvent,
  metadata?: Record<string, string | number | boolean>
) {
  const session_id = getSessionId();

  // 1. Send to Supabase via our API
  try {
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_name, metadata, session_id }),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  // 2. Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event_name, {
      ...metadata,
      session_id,
    });
  }

  // 3. Plausible Analytics
  if (typeof window !== "undefined" && (window as any).plausible) {
    (window as any).plausible(event_name, { props: metadata });
  }
}

export function useAnalytics() {
  return { trackEvent };
}

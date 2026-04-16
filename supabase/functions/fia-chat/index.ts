import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Fia, a warm and knowledgeable AI assistant for the Female Founders Resource Hub. You help women entrepreneurs find the right resources for their needs.

You have deep knowledge of the following curated resources:

GRANTS & FUNDING:
- Amber Grant for Women: Monthly $10,000 grant for women-owned businesses. Annual $25,000 grant.
- IFundWomen: Crowdfunding platform and coaching for women entrepreneurs.
- Cartier Women's Initiative: International program for women impact entrepreneurs with funding and mentoring.
- SBA Women-Owned Small Business: Federal contracting program for women-owned small businesses.

VC & INVESTORS:
- Female Founders Fund: Early-stage VC for female-founded tech companies.
- BBG Ventures: Early-stage fund for female and diverse founders in consumer tech.
- Backstage Capital: VC for underrepresented founders including women, POC, and LGBTQ+.
- Golden Seeds: Angel investor network for women-led businesses ($250K-$3M).

COMMUNITIES & NETWORKS:
- Ellevate Network: Global professional women's network with events and coaching.
- Women Who Startup: Community connecting women entrepreneurs with resources and mentors.
- Dreamers & Doers: Community and PR firm for women entrepreneurs.
- Chief: Private membership network for senior women leaders.

TEMPLATES & TOOLS:
- Canva Pro for Startups: Free design templates for pitch decks, social media, branding.
- Notion Startup Templates: Free workspace templates for project management and fundraising.
- HelloAlice: Free platform connecting small business owners to funding and resources.
- SCORE Mentoring: Free business mentoring, workshops, and templates.

Your personality: Encouraging, empathetic, professional, and action-oriented. Use a warm tone. When recommending resources, explain WHY each one fits the user's situation. Always suggest 2-3 specific resources. Keep responses concise but helpful. Use emojis sparingly for warmth (1-2 per message max).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add funds." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("fia-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

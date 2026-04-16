import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Fia, a warm and knowledgeable AI assistant for SheBuilds — the Female Founders Resource Hub. You help women entrepreneurs find the right resources for their needs.

You have deep knowledge of resources across 4 categories:

GRANTS & VC FUNDING (/grants-vc):
- Female Founders Fund: Early-stage VC for female-founded tech ($25K-$500K)
- BBG Ventures: Early-stage fund for female/diverse founders in consumer tech ($250K-$1M)
- Backstage Capital: VC for underrepresented founders ($25K-$500K)
- Golden Seeds: Angel network for women-led businesses ($250K-$3M)
- Amber Grant for Women: Monthly $10K grant, annual $25K grand prize
- IFundWomen: Crowdfunding + coaching + grants for women
- Cartier Women's Initiative: International $100K program for impact entrepreneurs
- SBA WOSB Program: Federal contracting for women-owned businesses
- 0100 Ventures, 10x Founders, 360 Capital Partners: European VC funds

ACCELERATORS & INCUBATORS (/accelerators):
- Y Combinator: $500K, 7% equity, 3 months
- Techstars: $120K, 6% equity, global
- 500 Global: $150K, 5-6% equity, 80+ countries
- The Vinetta Project: Women-focused pitch forum, no equity
- Women's Startup Lab: Silicon Valley, women tech founders
- MassChallenge: Zero equity, $100K+ prizes
- SheEO/Coralus: $100K 0% interest loans for women/NB founders
- Plug and Play, Startupbootcamp, Founders Factory

COMMUNITIES & EVENTS (/communities-events):
- CEE VC Summit 2026 (Warsaw), Tech.eu Summit (London), Wolves Summit (Warsaw)
- eMerge Americas (Miami), SXSW London, Turing Fest (Edinburgh)
- TechChill (Riga), Startup Grind (SF), Nordic Tech Week (Stockholm)
- Ellevate Network: Global women's professional network (ongoing)
- Chief: Private C-suite women's network
- Dreamers & Doers: Women entrepreneur community + PR
- Women Who Startup: Global community

PITCH DECK TEMPLATES & TOOLS (/templates-tools):
- Canva Pro: Free design templates for pitch decks and branding
- Slidebean: AI-powered pitch deck builder
- Notion Templates: Free project management & fundraising trackers
- DocSend: Pitch deck analytics — track investor engagement
- Carta: Cap table management & 409A valuations
- Crunchbase: Investor research database
- HelloAlice: Free platform for funding & resources
- SCORE Mentoring: Free business mentoring & workshops
- Loom: Async video pitch & product demos

The hub has 4 pages users can navigate to. When recommending resources, mention which page they can find them on.

Your personality: Encouraging, empathetic, professional, and action-oriented. Use a warm tone. When recommending resources, explain WHY each one fits the user's situation. Always suggest 2-3 specific resources with links to the relevant hub page. Keep responses concise but helpful. Use emojis sparingly for warmth (1-2 per message max).`;

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

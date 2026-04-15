// netlify/functions/chat.js
// This runs on Netlify's server — your Gemini API key stays SECRET here.
// The frontend never touches the key directly.

const GUEE_GYM_SYSTEM_PROMPT = `You are the official AI assistant for Guee Gym, a serious fitness gym located in Bali, Indonesia.

== GYM INFORMATION ==

NAME: Guee Gym
TAGLINE: Serious gym for serious results. No bullshit, no drama.
LOCATION: Jl. Pantai Kelating, Kelating, Kec. Kerambitan, Tabanan, Bali
WHATSAPP: +62 857-3745-5112
INSTAGRAM: @gueegym

OPENING HOURS:
- Monday–Saturday: 07:00 – 21:00
- Sunday: 08:00 – 21:00

FACILITIES:
- Complete gym equipment
- Personal Training with experienced trainers
- Premium Locker & Shower (clean, modern, maintained daily)
- Protein Cafe (supplements, recovery drinks)
- Supportive, serious training environment

== MEMBERSHIP PRICING ==

LOCAL MEMBER PRICES:
- Daily Pass: Rp 20.000/day
- 1 Month: Rp 200.000/month
- 3 Months: Rp 600.000
- 6 Months: Rp 1.000.000
- 1 Year: Rp 2.000.000

TOURIST / INTERNATIONAL PRICES:
- Daily Pass: Rp 30.000/day
- 1 Month: Rp 300.000/month
- 3 Months: Rp 750.000 (was Rp 900.000 — save 150K)
- 6 Months: Rp 1.250.000 (was Rp 1.800.000 — save 550K)
- 1 Year: Rp 2.200.000 (was Rp 3.600.000 — save 1.4JT) ← BEST VALUE

PERSONAL TRAINER PACKAGES (same price for local & tourist):
- PT Package (10 sessions): Rp 1.250.000
  Includes: 10x personal training sessions, customized program, progress monitoring
- PT Intensive (20 sessions): Rp 2.300.000
  Includes: 20x personal training sessions, customized program, progress monitoring, meal plan guidance

ALL MEMBERSHIPS INCLUDE:
- Access to all gym equipment
- Locker & shower

1 MONTH+ MEMBERSHIPS ALSO INCLUDE:
- Premium locker & shower
- Trainer consultation

3 MONTH+ MEMBERSHIPS ALSO INCLUDE:
- Free training program

6 MONTH MEMBERSHIP ALSO INCLUDES:
- 1x free PT session

1 YEAR MEMBERSHIP ALSO INCLUDES:
- 2x free PT sessions
- Priority facility access

== HOW TO JOIN ==
To sign up, members contact Guee Gym via WhatsApp at +62 857-3745-5112.
They provide: Name, WhatsApp number, Email, Date of Birth, Address.

== YOUR BEHAVIOR ==
- Be friendly, direct, and motivating — match the gym's no-nonsense, energetic vibe
- Answer questions about pricing, facilities, hours, location, and how to join
- If asked about training tips or general fitness, give helpful brief advice
- Always encourage people to start training — use the gym's spirit: "Stop procrastinating, start now!"
- If someone is ready to join, direct them to WhatsApp: https://wa.me/6285737455112
- You can respond in English or Bahasa Indonesia depending on what language the user writes in
- Keep responses concise — 2–4 sentences max unless more detail is genuinely needed
- Never make up information not listed above`;

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // CORS headers — allow your Netlify domain
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid request: messages array required" }),
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "API key not configured" }),
      };
    }

    // Build Gemini request
    // We prepend the system prompt as a "user" turn with a "model" acknowledgment
    // because Gemini 1.5 Flash supports system_instruction natively
    const geminiBody = {
      system_instruction: {
        parts: [{ text: GUEE_GYM_SYSTEM_PROMPT }],
      },
      contents: messages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
      },
    };

    const response = await fetch(
     `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(geminiBody),
  }
);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Gemini API error", details: errorText }),
      };
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: text }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

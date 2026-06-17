import { NextRequest, NextResponse } from "next/server";

const MODEL = "gemini-2.5-flash";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not configured. Set GEMINI_API_KEY in your environment." },
      { status: 500 },
    );
  }

  const contents = [
    ...(history ?? []).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [
            {
              text: "You are WebsCraft AI — the voice of WebsCraft, an AI product development studio. You talk like a sharp, friendly product person, not a brochure. Never list services in bullet points. Instead, weave them into natural conversation. Show genuine enthusiasm for the work. Ask thoughtful follow-up questions to understand what the visitor needs. If they ask about something outside your knowledge, say you'll connect them with the team. Keep responses concise but warm — aim for 2-4 sentences unless they ask for depth.",
            },
          ],
        },
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("Gemini API error:", res.status, JSON.stringify(data));
    const errMsg = data?.error?.message ?? `Gemini API returned ${res.status}`;
    return NextResponse.json({ error: errMsg }, { status: res.status });
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    console.error("Unexpected Gemini response:", JSON.stringify(data));
    return NextResponse.json({ error: "No response from Gemini" }, { status: 500 });
  }

  return NextResponse.json({ text });
}

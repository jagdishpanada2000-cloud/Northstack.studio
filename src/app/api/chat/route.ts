import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const contents = [...(history ?? []), { role: "user", parts: [{ text: message }] }];

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key is not configured. Set GEMINI_API_KEY in your environment." },
      { status: 500 },
    );
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [
            {
              text: "You are WebsCraft AI, a helpful assistant for WebsCraft — an AI product development studio. Answer questions about their services (AI development, SaaS, automation, web development). Be concise and helpful. If asked about something outside your knowledge, say you'll connect them with the team.",
            },
          ],
        },
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("Gemini API error:", res.status, JSON.stringify(data));
    return NextResponse.json(
      { error: data?.error?.message ?? `Gemini API returned ${res.status}` },
      { status: res.status },
    );
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    console.error("Unexpected Gemini response:", JSON.stringify(data));
    return NextResponse.json({ error: "No response from Gemini" }, { status: 500 });
  }

  return NextResponse.json({ text });
}

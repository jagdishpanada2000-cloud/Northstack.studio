import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const contents = [...(history ?? []), { role: "user", parts: [{ text: message }] }];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ??
    "Sorry, I couldn't process that. Please try again.";

  return NextResponse.json({ text });
}

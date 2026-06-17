import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const apiKey = process.env.XAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "xAI API key is not configured. Set XAI_API_KEY in your environment." },
      { status: 500 },
    );
  }

  const messages = [
    {
      role: "system",
      content:
        "You are WebsCraft AI, a helpful assistant for WebsCraft — an AI product development studio. Answer questions about their services (AI development, SaaS, automation, web development). Be concise and helpful. If asked about something outside your knowledge, say you'll connect them with the team.",
    },
    ...(history ?? []),
    { role: "user", content: message },
  ];

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-2-latest",
      messages,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("xAI API error:", res.status, JSON.stringify(data));
    return NextResponse.json(
      { error: data?.error?.message ?? `xAI API returned ${res.status}` },
      { status: res.status },
    );
  }

  const text = data?.choices?.[0]?.message?.content;

  if (!text) {
    console.error("Unexpected xAI response:", JSON.stringify(data));
    return NextResponse.json({ error: "No response from xAI" }, { status: 500 });
  }

  return NextResponse.json({ text });
}

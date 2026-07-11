import { NextResponse } from 'next/server';

// Pull the key from the server‑side env (never expose it to the client)
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) {
  throw new Error('Missing OPENROUTER_API_KEY in environment variables');
}

// OpenRouter endpoint (OpenAI‑compatible)
const OPERATOR_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Optional: set a identifier for the OpenLeaderboard (helps with rate limits)
const HTTP_REFERER = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-site.vercel.app';
const X_TITLE = 'ERS Therapy Chatbot';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json(); // expects [{role: 'user'|'assistant', content: string}, ...]

    // Forward the request to OpenRouter
    const resp = await fetch(OPERATOR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        // Optional headers recommended by OpenRouter
        'HTTP-Referer': HTTP_REFERER,
        'X-Title': X_TITLE,
      },
      body: JSON.stringify({
        // You can change the model to any available on OpenRouter
        model: 'openai/gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json(
        { error: `Upstream error: ${resp.status} – ${errText}` },
        { status: 502 }
      );
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ reply });
  } catch (e: any) {
    console.error('Chat API error:', e);
    return NextResponse.json(
      { error: e.message ?? 'Unknown error' },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { openai } from "@/src/lib/ai/openai";

export async function GET() {
  try {
    const response = await openai.chat.completions.create({
      model: "openrouter/free",

      messages: [
        {
          role: "user",
          content:
            "Reply with only the sentence: OpenRouter is working!",
        },
      ],
    });

    return NextResponse.json({
      success: true,
      response: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}
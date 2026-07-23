import { openai } from "./openai";

export async function testAI() {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.3-70b-instruct:free",

    messages: [
      {
        role: "user",
        content: "Say hello from OpenRouter.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}
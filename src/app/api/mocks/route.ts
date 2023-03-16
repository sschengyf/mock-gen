import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const body = await request.json();
  const { sample, number } = body;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        content: `follow the sample's pattern, give me ${number} mock objects in an array, the sample is ${sample}`,
        role: 'assistant',
      },
    ],
    temperature: 0,
    max_tokens: 1000,
  });

  return new Response(
    JSON.stringify(response.data.choices[0].message?.content)
  );
}

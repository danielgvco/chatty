import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { functions } from '@/helpers/constants/functions';
import * as myFunctions from '@/functions';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4-1106-preview',
    stream: true,
    messages,
    functions,
  });

  const stream = OpenAIStream(response as any, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      if ((myFunctions as any)[name]) {
        const result = await (myFunctions as any)[name](args);
        const newMessages = createFunctionCallMessages(result);
        return openai.chat.completions.create({
          messages: [...messages, ...newMessages],
          stream: true,
          model: 'gpt-4-1106-preview',
          functions,
        });
      }
    },
  });

  return new StreamingTextResponse(stream);
}
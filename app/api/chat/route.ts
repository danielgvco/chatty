import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();
  
    // Add a system message to provide context
    const systemMessage = { role: 'system', content: 'You are a chatbot assisntant and your name is Asuna' };
    const messagesWithSystemContext = [systemMessage, ...messages];
  
    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview',
      stream: true,
      messages: messagesWithSystemContext,
    });
  
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response as any);
  
    // Respond with the stream
    return new StreamingTextResponse(stream);
  }
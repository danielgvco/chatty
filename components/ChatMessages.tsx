import React, { useRef, useEffect } from 'react';
import MarkdownLite from './MarkdownLite';

interface FunctionCall {
  name?: string;
  arguments?: string;
}

interface Message {
  id: string;
  role: string;
  content: string;
  function_call?: FunctionCall | string;
}

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="mb-auto m overflow-y-auto p-4">
      {messages.map((m, index) => (
        m.id !== '0' && (
          <div 
            className={`mb-4 p-2 rounded-md ${m.role === 'user' ? 'bg-stone-200 max-w-[80%] relative left-[20%]' : 'bg-blue-300 max-w-[80%] '}`} 
            key={m.id}
          >
            {m.function_call ? (
              typeof m.function_call === 'string' ? (
                m.function_call.split('\\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              ) : (
                m.role === 'function' && (
                  <div>
                    <p>Function name: {m.function_call.name}</p>
                    <p>Function arguments: {m.function_call.arguments}</p>
                  </div>
                )
              )
            ) : (
              m.content
            )}
            {index === messages.length - 1 && <div ref={endOfMessagesRef} />}
          </div>
        )
      ))}
    </section>
  );
}

export default ChatMessages;
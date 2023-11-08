import React from 'react';
import { SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <form className="flex space-x-4 w-max" onSubmit={handleSubmit}>
      <input
        className="rounded-md p-2 text-black ring-1 ring-black ring-opacity-20"
        value={input}
        onChange={handleInputChange}
        placeholder="Say something..."
      />
      <button
        className="border-solid border-2 border-white p-2 rounded-md"
        type="submit"
      >
        <SendHorizontal />
      </button>
    </form>
  );
}

export default ChatInput;
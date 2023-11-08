'use client';

import { useChat } from 'ai/react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { chatbotPrompt } from '@/helpers/constants/chatbot-prompt';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        initialMessages: [
            { id: '0', role: 'system', content: chatbotPrompt },
            { id: '1', role: 'assistant', content: 'Hi! How can I assist you today?' },
        ],
    });

    /*return (
        <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
            <ChatMessages messages={messages} />
            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </main>
    );*/

    return (
        <Accordion
            type='single'
            collapsible
            className='relative bg-white z-40 shadow'>
            <AccordionItem value='item-1'>
                <div className='fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden'>
                    <div className='w-full h-full flex flex-col'>
                        <AccordionTrigger className='px-6 border-b border-zinc-300'>
                            <ChatHeader />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col h-80'>
                                <ChatMessages messages={messages} />
                                <div className='flex justify-center'>
                                    <ChatInput
                                        input={input}
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        isLoading={isLoading}
                                    />
                                </div>
                            </div>
                        </AccordionContent>
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    );
}
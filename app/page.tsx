import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CheckBadge from '@/components/CheckBadge';

const Page: React.FC = () => {
  return (
    <main className="">
      <div className='h-screen flex flex-col justify-center bg-gradient-to-tr from-white via-white to-cyan-100' id='home'>
        <div className='mx-auto flex flex-col max-w-[50%] space-y-8 text-center rounded-xl p-4'>
          <h2 className='text-[6rem] font-[700] bg-gradient-to-tr from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent'>Turning Conversations into Conversions!</h2>
          <p className='text-[1.3rem]'>Chatty is your AI-powered chatbot service designed to revolutionize customer interactions. With advanced AI technology, Chatty enhances sales with personalized recommendations and provides exceptional support, ensuring customer satisfaction and engagement around the clock.</p>
          <div className='flex justify-center space-x-8'>
            <CheckBadge text='24/7 Availability' />
            <CheckBadge text='Flexibility' />
            <CheckBadge text='Easy to use' />
          </div>
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center bg-gradient-to-bl from-white via-white to-purple-200' id='about'>
        <div className='mx-auto flex flex-col w-[66%] h-1/2 max-w-[140rem] space-y-8 justify-center px-[10rem] text-center rounded-xl p-4 bg-gradient-to-tr from-purple-400 via-violet-400 to-blue-400'>
          <h2 className='text-[6rem] font-[700] text-white'>ABOUT US</h2>
          <p className='text-[1.3rem] text-white'>At Chatty, we harness AI to redefine customer service. Our team, driven by innovation and a passion for problem-solving, has created a chatbot that offers personalized, 24/7 customer engagement. We are committed to helping businesses enhance interaction, drive sales, and foster loyalty. Join us in elevating your customer communication to new heights.</p>
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center bg-gradient-to-tl from-white via-white to-purple-200' id='pricing'>
        <div className='mx-auto flex flex-col shadow-lg h-1/2 w-[66%] max-w-[140rem] space-y-8 text-center rounded-xl p-4'>
          Hi
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center bg-gradient-to-br from-white via-white to-cyan-100' id='contact'>
        <div className='mx-auto flex flex-col max-w-[60%] space-y-8 text-center rounded-xl p-4'>
          Hi
        </div>
      </div>
      <div className="hidden w-full h-full backdrop-blur-3xl top-0 left-0">

      </div>
    </main>
  );
}

export default Page;

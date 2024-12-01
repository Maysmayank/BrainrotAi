import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='pt-[80px]  text-black'>

      <div className='flex mt-10 gap-10 justify-around px-10'>
        

        <div className='flex flex-col  items-center gap-10 mt-10 px-10 pb-10'>


          <h1 className='text-4xl font-bold text-center'> Welcome to BrainrotLang 🎉</h1>
          <span className='font-semibold text-center'>
  At BrainrotLang, we are here to help you master the chaotic, meme-filled language of the internet! Born from the need to decode the wild world of viral trends, memes, and internet slang, we use the power of AI to take you from an NPC to an internet legend.
</span>



          <Link href={'/learn'} className='w-[10%] px-2 py-1 text-center bg-[#A7B5FF] '> 
          <button className=' font-bold '>Try</button>
          </Link>

          <span className='flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>What We Do</h2>
            <ul className='flex flex-col gap-4'>
              <li><strong>Interactive Learning:</strong> Dive into the brainrot language with fun, AI-powered lessons that break down the latest trends, memes, and viral phrases.</li>
              <li><strong>Instant Fluency:</strong> Learn how to flex your new vocabulary and memes effortlessly, making you fluent in the internet most bizarre and hilarious language.</li>
              <li><strong>Real-Life Scenarios:</strong> Apply your new knowledge in real conversations, whether you are hitting the griddy or rolling with the latest meme.</li>
            </ul>

          </span>

          <span className="font-semibold">
  Are You Ready to SkyRocket your Journey Up?
  Start your journey today and become the ultimate legend of the internet. With BrainrotLang, you&rsquo;re not just learning—you&rsquo;re leveling up.
</span>


        </div>

      </div>
    </div>
  )
}

export default page

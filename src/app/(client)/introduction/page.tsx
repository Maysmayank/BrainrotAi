import React from 'react'

function page() {
  return (
    <div className='pt-[80px]  text-black'>

      <div className='flex mt-10 gap-10 justify-around px-10'>
        <div>
          <img src="intro.jpg" className='rounded-xl w-[600px]' alt="" />
        </div>

        <div className='flex flex-col  gap-4 mt-10'>


          <h1 className='text-4xl font-bold'> Welcome to BrainrotLang 🎉</h1>

          <span className='font-semibold text-center'>
            "Master the Language of the Internet"
            Do you feel lost when your friends start talking about “Skibidi gyatt rizz” or the latest “Biggest Bird” vibes? Tired of being the NPC in every conversation? Worry no more!

            At BrainrotLang, we use the power of AI to help you become fluent in the wild, chaotic, and endlessly entertaining world of brainrot language.
          </span>

          <span className='flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>What We Offer 🚀</h2>
            <ul className='list-disc ml-5 flex flex-col gap-3'>
              <li>Interactive AI-Powered Lessons: Learn brainrot in the most fun and engaging way possible.</li>
              <li>Instant Fluency: Pick up terms, memes, and references effortlessly.</li>
              <li>Practical Scenarios: Master how to use terms like “Livvy Dunne rizz,” “Quandale Dingle,” and “Grimace Shake” in real life and online.</li>
            </ul>
          </span>

          <span>
          Are You Ready to Glow Up?
          Start your journey today and become the ultimate legend of the internet. With BrainrotLang, you’re not just learning—you’re leveling up.
          </span>

        </div>
        
      </div>
    </div>
  )
}

export default page

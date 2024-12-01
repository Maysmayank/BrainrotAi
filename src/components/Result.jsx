import Image from 'next/image'
import React from 'react'

function Result() {
    return (
        <div className=' flex items-center justify-center bg-[#ECE9E5] py-10'>
            <div className='flex flex-col gap-10  items-center  text-black'>
                <h1 className='text-4xl font-bold ml-28'>Your Brainrot Glow-Up 🌟
                </h1>

                <div className=''>
                    <ul className='flex flex-col gap-4'>
                        <li> <strong>&quot;Level Up Your Rizz:&quot;</strong> Master brainrot so clean, Livvy Dunne would double-tap.</li>
                        <li> <strong>&quot;From Goofy Ahh to Sigma Chad:&quot;</strong> Unlock your alpha omega grindset with zero turbulence.</li>
                        <li> <strong>&quot;Biggest Bird Status:&quot;</strong> Out-skibbidi every Baby Gronk wannabe in the room.</li>
                        <li><strong>&quot;Goated with the Sauce:&quot;</strong> Learn brainrot that’s bussin’, no cap, certified ‘ocky way.’</li>
                        <li> <strong>&quot;No More NPC Energy:&quot;</strong> Become the quirked-up, backrooms-conquering, skibidiest legend.</li>
                    </ul>
                </div>

                <div className='relative '>
                    <Image src="/pill.png" width={100} height={100} className='w-[800px] h-[600px]' alt="" />              
                    <div className="absolute inset-0 ">
                       

                        <div className='absolute top-[80px] w-[200px] left-10 flex flex-col gap-10'>
                            <span className=' text-white text-sm'> Feeling like a stone-aged NPC for not knowing brainrot; gyatt-level nervous when someone says &quot;skibidi bop.&quot;</span>

                            <Image src="/travis.gif" width={200} height={100} className='  h-[300px] ' alt="" />
                        </div>

                        <div className='absolute top-[55px] w-[200px] right-10 flex flex-col gap-2'>
                            <span className=' text-white text-sm'>Bro: How do you even know all these brainrot terms? Last week, you didn’t even know what skibbidi bop meant</span>
                            <div >
                                <span className='text-white'>My Honest Reaction: </span>
                                <p className='opacity-45 text-[11px] text-white'>(me who learnt from BrainrotLang)</p>
                                <Image width={200} height={100} src="/honest.gif" className=' right-20 top-[190px] h-[300px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Result

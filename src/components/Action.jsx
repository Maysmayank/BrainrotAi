import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Action() {
    return (
        <div className='mt-[100px]'>
            <div className=' grid grid-cols-2 px-10' >
                <div>
                    <Image src="/sonic.gif" width={500} height={500} className='rounded-full' alt="" />
                </div>

                <div className='text-black flex flex-col items-center mt-20 gap-4' >
                    <h1 className='text-4xl'> Unlock Your Ultimate Brainrot Fluency </h1>
                    <h2>Feel like a skibidi gyatt, but still stuck in NPC mode?</h2>
                    <span className='text-md '>
                        Get rizzed up and level up your language game!
                        With our AI-powered lessons, you’ll be flexing your &quot;Livvy Dunne wizz&quot; and mastering &quot;Baby Gronk&quot; level brainrot in no time!
                        <p className='mt-5'>
                            No cap, you’ll be wizzing through sussy imposter phrases and rolling through Pibby glitch moments like a true sigma alpha omega male. Whether you&apos;re a goon cave legend or hitting that griddy the Ocky way, our AI will have you busting it down like you’ve been fluent for years.
                        </p>
                    </span>
        

                    <Link href={"/chat"} className='  w-[25%]'>
                        <button className='bg-[#F55737] px-10 py-1 rounded-lg text-white hover:bg-[#ce472c] first-letter:'>Rizz Up</button>

                    </Link>               
                     </div>

            </div>
        </div>
    )
}

export default Action

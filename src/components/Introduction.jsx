import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Introduction() {
  return (
    <div className='py-20 bg-[#1d181a] pb-40 text-white flex justify-around'>
        
        <div className=' w-[55%] mt-20 flex flex-col items-center gap-10'>
        <h1 className='font-semibold text-5xl bebas-neue-regular'>Learn brainrot faster than your gyatt can spell it out!</h1>

            <span className='font-medium text-xl  text-center '>
              &quot;Are you stuck in the goofy ahh grindset, thinking you&apos;re the Biggest Bird, but blud can’t even hit the griddy? Don’t worry, our AI will rizz you up the ocky way. Become the sigma alpha omega legend of brainrot!&quot;
            </span>
  
            <Link href={"/chat"} className='  w-[20%]'>
            <button className='bg-[#F55737] px-10 py-1 rounded-lg text-white hover:bg-[#ce472c] first-letter:'>Rizz Up</button>

            </Link>
            {/* <Image height={100 } width={100 } src="/download.jpg" alt="" /> */}
        </div>

        <div>
            <Image height={100} width={400} src="/justify-center.png" className='  h-[400px] w-[500px]' alt="" />
        </div>
     
    </div>
  )
}

export default Introduction

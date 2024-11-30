import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Introduction() {
  return (
    <div className='py-20  flex justify-around'>
        <div>
            <Image height={100} width={400} src="/justify-center.png" className='  h-[400px]' alt="" />
        </div>
        <div className=' w-[55%] mt-20 flex flex-col items-center gap-10 text-black'>

            <span className='font-medium text-xl text-center'>
              &quot;Are you stuck in the goofy ahh grindset, thinking you&apos;re the Biggest Bird, but blud can’t even hit the griddy? Don’t worry, our AI will rizz you up the ocky way. Become the sigma alpha omega legend of brainrot!&quot;
            </span>
  
            <h1 className='font-semibold text-3xl'>Learn brainrot faster than your gyatt can spell it out!</h1>
            
            <Button className='bg-[#48ADCA]  w-[20%] rounded-lg text-white hover:bg-black'>Rizz Up</Button>
            {/* <Image height={100 } width={100 } src="/download.jpg" alt="" /> */}
        </div>
     
    </div>
  )
}

export default Introduction

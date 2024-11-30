import { Button } from '@/components/ui/button'
import React from 'react'
import Introduction from '@/components/Introduction'
import Result from '@/components/Result'
import Action from '@/components/Action'
function page() {
  return (
    <div className='flex flex-col  mb-20 pt-[80px]'>
      <Introduction/>
      <Result/>
      <Action/>
    </div>
  )
}

export default page

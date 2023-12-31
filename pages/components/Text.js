import React from 'react'
import Image from 'next/image'

const Text = () => {
  return (
    <div className='p-6 desktop:px-6 desktop:pb-1 desktop:pt-12 w-full tablet:w-50 text-16'>
        <h1 className='font-roboto font-bold text-neutral-darkgrey text-2xl mb-1'>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving montly updates on:</p>
        
        <div className='flex items-start m-0'><ImgIcon />Product discovery and building what matters</div>

        <div className='flex items-start'>
          <ImgIcon/>
            Measuring to ensure updates are a success</div>
        
        <div className='flex items-start mt-1 m-0 p-0'>
          <ImgIcon />
          And much more!</div>
        
    </div>
  )
}

export default Text



export const ImgIcon = () => {
  return (
    <>
          <Image src='/icon-list.svg' width={26} height={26} alt='icon' className='inline-flex pr-2'/>
    </>
  )
}

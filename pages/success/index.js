import React from "react"
import Image from "next/image"

const index = () => {
  const indexxx = ['flex']
  return (
    <div className="w-screen h-screen border-6 border-yellow-500">
      <div className='flex flex-col buttonphones:max-tablet:h-screen buttonphones:max-tablet:w-full border-4 border-red-500 tablet:border-green-600 justify-around align-center p-6 buttonphones:pb-0 tablet:bg-neutral-white tablet:w-30 tablet:h-100 tablet:rounded'>
          <div>
            <div className="ml-0 m-2">
              <Image src='/icon-list.svg' width={80} height={80}/>
            </div>
            <div className="ml-0 m-2 font-bold text-5xl"><span className="text-neutral-charcoalgrey">Thanks for Subscribing!</span></div>
            <div className="ml-0 m-2">
              <p>A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription</p>
            </div>
          </div>
          <div className='text-white bg-neutral-darkgrey block w-full h-12 rounded-lg '>
          <button className='text-center text-16 font-semibold w-full h-full'>Dismiss message</button>
          </div>
      </div>
    </div>
  )
}

export default index
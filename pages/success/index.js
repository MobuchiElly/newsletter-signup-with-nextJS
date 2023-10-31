import React from "react"
import Image from "next/image"
import Link from "next/link"

const index = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      
      <div className='signup-div flex flex-col my-auto buttonphones:max-tablet:h-screen buttonphones:max-tablet:w-full justify-around align-center p-6 buttonphones:pb-0 tablet:bg-neutral-white  tablet:rounded-xl'>
          <div className="h:auto">
            <div className="ml-0 m-2 h:auto">
              <Image src='/icon-list.svg' width={80} height={80} alt="icon"/>
            </div>
            <div className="ml-0 m-2 font-bold text-5xl h:auto"><span className="text-neutral-charcoalgrey">Thanks for Subscribing!</span></div>
            <div className="ml-0 m-2 h:auto">
              <p>A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription</p>
            </div>
          </div>
          <div className='text-white block w-full h-12 rounded-lg '>
          <Link href='/'><button className='text-center text-16 font-semibold w-full h-full bg-neutral-darkgrey hover:bg-primary-tomato  rounded-xl transition-transform transform hover:shadow-2xl'>Dismiss message</button></Link>
          </div>
      </div>
    </div>
  )
}

export default index
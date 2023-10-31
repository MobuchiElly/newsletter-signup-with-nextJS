import Image from 'next/image'
import { Inter } from 'next/font/google'
import Text from './components/Text'
import Body from './components/Body'

const Home = () => {
  return (
    <div className='w-screen h-full tablet:bg-neutral-darkgrey border-4 border-red-600 tablet:flex tablet:items-center tablet:justify-center'>

      <div className='index-div font-roboto w-full h-full grid tablet:grid-cols-2 border-4 border-blue-600 mobile:p-0 tablet:m-0 gap-0 md:p-10 bg-neutral-white'>
            {/* display for desktop */}
        <div className="hidden tablet:block w-auto tablet:order-1">
          <Image
            src="/illustration-sign-up-desktop.svg"
            alt="welcome desktop user"
            width={500}
            height={500}
          />
        </div>
      {/* Display for screens smaller than "desktop" */}
        <div className="block tablet:hidden p-0 m-0 border-2 w-full mobile-screen tablet:order-1 text-neutral-darkgrey font-roboto">
          <Image
            src="/illustration-sign-up-mobile.svg"
            alt="welcome mobile user"
            width={400}
            height={200} className="w-full p-0 m-0"
          />
        </div>
        <div className='tablet:flex tablet:justify-center tablet:align-center'>
          <Body />
        </div>
      </div>
    </div>
  )
}

export default Home
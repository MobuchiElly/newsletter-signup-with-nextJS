import Image from "next/image"

const imagesCheckout = () => {
  return (
    <div className='h-screen w-screen grid gap-1 grid-cols-4 p-5'>
        <Image src='/favicon-32x32.png' width='70' height='70' />
        
        <Image src='/icon-list.svg' width={70} height={70}/>
        <Image src='/icon-success.svg' width={70} height={70}/>
        <Image src='/illustration-sign-up-desktop.svg' width={70} height={70}/>
        <Image src='/illustration-sign-up-mobile.svg' width={70} height={70}/>   

        <Image
      src="/illustration-sign-up-desktop.svg"
      alt="welcome desktop user"
      width={200}
      height={400}
    />     
    </div>
  )
}

export default imagesCheckout
import React from 'react'
import { useState, useEffect } from 'react';

const Input = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail((prevEmail) => (
        e.target.value
    ))
  }
  console.log(email) 
    return (
    <div className='w-full p-6 h-auto'>
        <form onSubmit={(e) => handleSubmit} action="/signupsuccessggg" className='flex flex-col'>
            {/* I would set up an api and database so the input would be sent via my api route to the db.json file i would create  */}
            
            <div className='w-full p-0'>
              <p className='font-roboto text-neutral-darkgrey font-bold text-12 w-full'>Email address</p>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@company.com'  className="border-neutral-grey w-full border-1 rounded-xl p-4 text-16 mt-2 mb-5 h-12"/>
            </div>

            <div className='text-white bg-neutral-darkgrey block w-full h-12 rounded-lg'><button type='submit' className='text-center w-full h-full'>Subscribe to our monthly newsletter</button></div>
        </form>
    </div>
  )
}

export default Input
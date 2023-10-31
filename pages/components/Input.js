'use client'

import React from 'react'
import { useState, useEffect } from 'react';

const Input = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail((prevEmail) => e.target.value);
    if (!isValidEmail(email)){    
      setError('Valid email required');
    }
  }
  const handleChange = (e) => {
    setEmail((prevEmail) => e.target.value)
    if(!email) {
      setError('Enter your email');
    }
    else if(e.target.value == '') {
      setError('');
    } else if (!isValidEmail(email)){    
      setError('Valid email required');
      
    } else {
      setError('')
      setSuccess('Email submitted')
    }
  }
  const isValidEmail  = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (emailPattern.test(email));
  }
    return (
    <div className='w-full p-6 h-auto'>
        <form onSubmit={(e) => handleSubmit()} className='flex flex-col' action={success ? "/success" : ''}>
            {/* I would set up an api and database so the input would be sent via my api route to the db.json file i would create  */}
            
            <div className='w-full p-0'>
              <span className='flex justify-between'>
                <p className='font-roboto text-neutral-darkgrey font-bold text-12'>Email address</p>

                {error && <p className='text-red-400 font-roboto font-bold text-12'>{error}</p>}
              </span>
              <input value={email} onChange={handleChange} placeholder='email@company.com'  className="w-full border-1 border-neutral-grey focus:outline-none focus:border-neutral-darkgrey focus:shadow-2xl focus:cursor-text hover:border-neutral-darkgrey hover:shadow-md hover:cursor-pointer rounded-xl p-4 text-16 mt-2 mb-5 h-12" />
            </div>

            <div className=' text-white block w-full h-12'><button type='submit' className='text-center w-full h-full bg-neutral-darkgrey hover:bg-primary-tomato  rounded-xl transition-transform transform hover:shadow-2xl'>Subscribe to our monthly newsletter</button></div>
        </form>
    </div>
  )
}

export default Input
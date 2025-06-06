import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <div className='text-center '>
      <p className='text-2xl font-medium text-[#090979] '>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Subscribe now and enjoy 20% off your first purchase! Don’t miss out on exclusive offers, new arrivals, and special deals—delivered straight to your inbox.          </p>
      <form onSubmit={onSubmitHandler} className='w-full flex sm:w-1/2 border-[#090979] rounded-lg hover:shadow-lg overflow-hidden items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" className='w-full  sm:flex-1 outline-none' placeholder='Enter Your Email' required />
        <button type='submit' className='bg-[#090979] text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
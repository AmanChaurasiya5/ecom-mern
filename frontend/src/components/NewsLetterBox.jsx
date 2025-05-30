import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800 '>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod omnis magnam, dignissimos laborum vitae error tempore laudantium, quibusdam dolores illo unde ipsum expedita iste dolore est voluptatem, consectetur inventore!</p>
        <form onSubmit={onSubmitHandler} className='w-full flex sm:w-1/2 rounded-lg hover:shadow-lg overflow-hidden items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full  sm:flex-1 outline-none' placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
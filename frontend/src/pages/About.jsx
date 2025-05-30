import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="about image" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sunt dignissimos rem voluptas velit quae facere quia similique neque quos, explicabo quo at doloremque eligendi obcaecati soluta aperiam eum et.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus labore illo. Natus officiis quae praesentium nesciunt reprehenderit doloribus nemo commodi corrupti neque ex. Molestiae nostrum voluptatem vero doloribus voluptatum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat aut! Fugiat optio, voluptates atque earum quae eligendi eos officia sit. Vel voluptates voluptate voluptatum, porro ipsum sequi ipsa possimus.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>We meticulously select and vet product to ensure it meets our stringment quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience : </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exception : </b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our priority.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default about
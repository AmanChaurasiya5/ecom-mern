import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from '../components/NewsLetterBox';

const contact = () => {
  return (
   <div>
     <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>
    </div>
    <div className="flex flex-col justify-center md:flex-row gap-10 mb-28 my-10">
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""/>
      <div className="flex flex-col justify-center items-start gap-6">
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500 '>Mumbai ,Maharashtra<br /> INDIA</p>
        <p className='text-gray-500 '> +91 9820392165 <br />Email: <a href="mailto:testdevaman@gmail.com">testdevaman@gmail.com</a>  </p>
        <p className='font-semibold text-xl text-gray-600'>Careers at forever</p>
                <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>
    <NewsletterBox/>
   </div>
    
  )
}

export default contact
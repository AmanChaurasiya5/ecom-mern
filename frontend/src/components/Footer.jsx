import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:2/3 text-gray-600'>
                        Welcome to your one-stop fashion destination for Men, Women, and Kids. Whether you're looking for stylish topwear, comfy bottomwear, or cozy winterwear, we've got you covered. Our curated collections combine quality, comfort, and the latest trends to bring you the best in everyday fashion. With a focus on variety, affordability, and fast delivery, we make shopping easy for the whole family. Discover outfits you’ll love, for every season and every style!                </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 9820392165</li>
                        <li>testdevaman@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
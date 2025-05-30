import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const { product } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = product.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    }, [product])
    return (
        <div className='my-10'>
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore our best-selling products, loved by thousands of happy customers. These top picks are trending for a reason—don’t miss your chance to grab them before they’re gone!                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>
        </div>
    )
}
export default BestSeller
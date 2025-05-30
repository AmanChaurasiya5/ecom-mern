import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItems'

const RelatedProducts = ({ category, subCategory }) => {

    const { product } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (product.length > 0) {
            let productsCopy = product.slice();
            
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5));
            
        }
    }, [product])

    return (
        <div className='my-24'>
            <div className="text-center text-3xl py-2 ">
                <Title text1={'RELATED'} text2={'PRODUCTS'}/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
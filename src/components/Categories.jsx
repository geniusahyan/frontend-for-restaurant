import React, { useState, useEffect } from 'react'
import Card from './Card';
import { getMenu } from '../api/route';

const Categories = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMenu();
            let popular = data.filter((item)=>item.category == "popular");
            let selectedData = popular.slice(0, 8);
            setcategories(selectedData);
        }
        fetchData();
    }, [])
  return (
    <div className='section-container py-16  ' >
        <div className='text-center ' >
            <p className='text-red uppercase tracking-wide font-medium text-lg ' >Customer Favorites</p>
            <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug ' >Populer Categories</h1>
        </div>
        <div className='grid grid-cols-1 px-4 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
            {
                categories.map((item, index)=>{
                    return (
                        <Card price={item.price} key={index} title={item.name} image={item.image} desc={'Roasted griottine cherry sauce'} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default Categories
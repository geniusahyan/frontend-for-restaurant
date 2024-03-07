import React, { useState } from 'react'
import Food from '/food2.jpg';
import { Favorite, FavoriteBorder, Stars } from '@mui/icons-material';


const Card = ({title="title", desc="desc", price="price", image={Food}}) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = ()=>{
        setIsFavorite(!isFavorite);
    }
  return (
    <div className="card w-80 p-2 mx-auto h-96 bg-base-100 shadow-xl">
        <div className="card-actions justify-end ">
            <div className='bg-green w-6 h-8 rounded-sm rounded-bl-[1rem] rounded-tr-[1rem] grid place-content-center p-4 text-white' onClick={handleFavoriteClick} >
                {
                    isFavorite? <Favorite /> : <FavoriteBorder />
                }
            </div>
        </div>
        <figure><img className='rounded-full hover:scale-105 transition-all mx-3 duration-300 w-[12rem] h-[12rem]  ' src={image} alt="Shoes" /></figure>
        <div className="card-body h-28 ">
            <h2 className="card-title text-nowrap ">{title}</h2>
            <p>{desc}</p>
            <div className="card-actions z-[1] justify-between ">
                <p className='font-bold text-sm z-[1]' ><span className='text-red' >$</span>{price} </p>
                <span>
                    <Stars />
                    <span className='text-sm' >4.5</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card
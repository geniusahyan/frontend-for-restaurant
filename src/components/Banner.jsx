import React from 'react'
import banner from '/banner.png'
import food1 from '/food1.jpg'

const Banner = () => {

    const Rating = (
        <div className="rating rating-sm gap-1">
            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400 text-5xl " />
            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400 checked " />
            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
        </div>
    )

    const  FoodExample = (
        <div className="p-2 flex h-24 gap-2  bg-base-100 rounded-xl shadow-lg space-y-2 w-[14rem] ">
            <img className=" h-20 w-20 rounded-2xl" src={food1} alt="food1" />
            <div className="text-sm space-y-1 ">
                <h5 className='font-bold text-[0.8rem]' >chicken something</h5>
                {Rating}
                <p className='text-red' >$9.99</p>
            </div>
        </div>
    )


  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-base-300 from-0% to-base-50 to-100% '>
        <div className="py-16 flex md:flex-row flex-col-reverse justify-between items-center gap-8 ">
            <div className="left md:w-1/2 space-y-7 px-4  ">
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug ' >Dive into Delights of Delectable <span className='text-green' >Food</span></h2>
                <p className='text-xl text-[#4a4a4a]' >Where Each Plate Weave a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-green px-3 !h-4 font-semibold text-white rounded-full ' >Order Now</button>
            </div>
            <div className="right md:w-1/2 lg:ml-6 ">
                <img src={banner} alt="banner" className='w-[27rem]' />
                <div className='flex gap-3 -mt-12' >
                    <div className="mx-auto lg:mx-0 ">
                    {FoodExample}
                    </div>
                    <div className=" hidden lg:flex ">
                    {FoodExample}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
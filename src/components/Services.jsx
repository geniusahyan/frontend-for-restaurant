import React from 'react'
import testimonial from '/testimonial.jpg'
import { Apple, CardTravel, Redeem, ShoppingCartCheckout, Speed, Star } from '@mui/icons-material'

const Services = () => {

    const ServicesArray = [
        {id:1, title:"Catering", desc:"Delight your guests with our flavors and presentation", src:testimonial, icon: <Apple className='text-green' /> },
        {id:1, title:"Fast Delivery", desc:"Delight your guests with our flavors and presentation", src:testimonial, icon: <Speed className='text-green' /> },
        {id:1, title:"Online Ordering", desc:"Delight your guests with our flavors and presentation", src:testimonial, icon: <ShoppingCartCheckout className='text-green' /> },
        {id:1, title:"Gift Cards", desc:"Delight your guests with our flavors and presentation", src:testimonial, icon: <Redeem className='text-green' /> },
    ]

  return (
    <div>
        <div className='flex flex-col md:flex-row px-4 items-center justify-between gap-12 ' >
            <div className="md:w-1/2 px-2 ">
                <div className='text-left md:w-4/5 ' >
                <p className='text-red uppercase tracking-wide font-medium text-lg ' >our story & sevices</p>
                <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug ' >Our Culinary Journey And Services</h1>
                <blockquote className='font-mono mb-3 ' >
                    "I had the pleasure of dining at AhyanFood last night , and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
                </blockquote>
                <button className='btn bg-green text-white rounded-full px-10 mt-3' >explore</button>
            </div>
        </div>
            <div className="md:w-1/2">
                <div className='grid grid-cols-1 px-4 my-10 lg:grid-cols-2 gap-2'  >
                    {
                        ServicesArray.map((items,index)=>{
                            return (
                                <div key={index} className="w-60 services border border-transparent box-border rounded h-60 text-center cursor-pointer transition-all duration-300 hover:border-indigo-600 bg-base-100 shadow-xl">
                                    {items.icon}
                                    <div className="card-body h-28 text-center ">
                                        <h2 className="text-[1.4rem] font-medium">{items.title}</h2>
                                        <p className='text-[0.8rem]' >{items.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
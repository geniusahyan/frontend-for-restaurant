import React from 'react'
import testimonial from '/testimonial.jpg'
import { Star } from '@mui/icons-material';

const Testimonials = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row px-4 items-center justify-between gap-12 ' >
            <div className="md:w-1/2">
                <img src={testimonial} alt="" className='h-[30rem] rounded-md' />
            </div>
            <div className="md:w-1/2 px-2 ">
                <div className='text-left md:w-4/5 ' >
                <p className='text-red uppercase tracking-wide font-medium text-lg ' >Testimonials</p>
                <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug ' >What Our Client Say</h1>
                <blockquote className='font-mono mb-3 ' >
                    "I had the pleasure of dining at AhyanFood last night , and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
                </blockquote>
                <div className='flex items-center gap-4 flex-wrap ' >
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-12 bg-neutral text-neutral-content">
                            <span>+99</span>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-1' >
                        <h5 className='text-lg font-semibold' >Customer Feedback</h5>
                        <div className='flex gap-2 items-center' >
                            <Star className='text-yellow-400' />
                            <span className='font-medium' >4.5</span><span className='text-[#807e7e]' >(10.5k Reviews)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials
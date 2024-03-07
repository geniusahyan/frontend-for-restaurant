import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Services from './Services'

const Home = () => {
  return (
    <div className='dark:text-white text-gray-600 ' >
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
    </div>
  )
}

export default Home
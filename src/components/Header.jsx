import React, { useEffect, useRef, useState } from 'react';
import Logo from '/Logo.png';
import { AddIcCall, DarkMode, LightMode, MenuOpen, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Header = ({login}) => {

  const [dark, setdark] = useState(false);
  useEffect(() =>{
    document.body.dataset.theme = dark? "dark" : "light";
    dark? 
    document.body.classList.add('dark') :
    document.body.classList.remove('dark');
  },[dark])
  

  const [open, setopen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const handleMenuHover = ()=>{
    setopen(true)
  }
  const handleMenuLeave = ()=>{
    setopen(false)
  }
  const handleServiceHover = ()=>{
    setServiceOpen(true)
  }
  const handleServiceLeave = ()=>{
    setServiceOpen(false)
  }
  const themeHandle = ()=>{
    setdark(!dark)
  }

  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 10){
        setsticky(true)
      }
      else{
        setsticky(false)
      }
    })
  }, [])
  

  const MenuButton = (
              <details activeclassname="active" to='/menu' open={open} >
                <summary>Menu</summary>
                <ul className="p-3 -mt-10 text-center w-40 " onMouseLeave={handleMenuLeave} >
                  <li><NavLink activeclassname="active" to='/menu' >All</NavLink></li>
                  <li><Link>Salad</Link></li>
                  <li><Link>Pizza</Link></li>
                </ul>
              </details>
  )

  const ServiceButton = (
            <details open={serviceOpen} >
              <summary>Services</summary>
              <ul className="p-3 text-center w-40 " onMouseLeave={handleServiceLeave} >
                <li><NavLink activeclassname="active" >Online Order</NavLink></li>
                <li><Link>Table Booking</Link></li>
                <li><Link>Order Tracking</Link></li>
                
              </ul>
            </details>
  )

  const CartButton = (
    <div className="dropdown dropdown-end hidden lg:flex ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <ShoppingCartOutlined />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
  

  return (
    <header className='max-w-screen-2xl z-[1000] container mx-auto fixed left-0 top-0 right-0 transition-all duration-100 '>
      <div className={` ${sticky && 'shadow-md '} navbar bg-base-300 xl:px-24 transition-all duration-100 `} >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MenuOpen />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/menu' >Home</Link></li>
              <li >
                <Link className='bg-red' >Menu</Link>
                <ul className="p-2">
                  <li><Link to='/menu' >All</Link></li>
                  <li><Link>Salad</Link></li>
                  <li><Link>Pizza</Link></li>
                </ul>
              </li>
              <li>
                <Link>Services</Link>
                <ul className="p-2">
                  <li><Link>Online Order</Link></li>
                  <li><Link>Table Booking</Link></li>
                  <li><Link>Order traking</Link></li>
                </ul>
              </li>
              <li><Link>Offers</Link></li>
            </ul>
          </div>
          <Link to='/' >
            <img src={Logo} alt="logo" className='w-20' />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink activeclassname="active" to='/' >Home</NavLink></li>
            <li onMouseEnter={handleMenuHover}  >
              {MenuButton}
            </li>
            <li onMouseEnter={handleServiceHover} >
              {ServiceButton}
            </li>
            <li><Link>Offers</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-x-2 ">
        <button onClick={themeHandle} className="btn btn-ghost btn-circle  ">
          {
            dark ? <LightMode /> : <DarkMode />
          }
        </button>

        <button className="btn btn-ghost btn-circle hidden lg:flex  ">
          <Search />
        </button>

        {CartButton}

        <Link to="/contact" className='btn hidden lg:flex  bg-green rounded-full px-5 text-white items-center gap-2' >
            <AddIcCall />
            Contact
        </Link>
          <Profile />
         
        </div>
      </div>
    </header>
  )
}

export default Header
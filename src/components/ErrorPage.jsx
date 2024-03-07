import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='w-screen box-border grid  place-items-center h-[63vh] mt-16 ' >
        <Link to="/" >
            <img src="/errorImage.jpg" className='w-[65rem] '  alt="" draggable="false" />
        </Link>
    </div>
  )
}

export default ErrorPage
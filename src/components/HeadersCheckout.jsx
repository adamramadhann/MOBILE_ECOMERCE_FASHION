import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeadersCheckout = ({ path,title }) => {
  return (
    <div className='w-full h-12 pt-3 bg-white fixed top-0' >
        <div className='w-[55%] h-auto flex items-center justify-between' >
            <Link to={path} > <AiOutlineLeft size={25} /> </Link>
            <h1 className='text-lg font-bold text-gray-700' >{title}</h1>
        </div>
    </div>
  )
}

export default HeadersCheckout
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeadersCheckout = ({ path,title }) => {
  return (
    <div className='w-full h-12 pt-3 bg-white fixed top-0' >
        <div className='h-auto flex items-center justify-between' >
            <span className='w-10 h-10 rounded-full shadow-lg flex items-center justify-center' >
                <Link to={-1}><AiOutlineLeft size={20} /></Link>
            </span> 
            <h1 className='text-lg font-bold text-gray-700' >{title}</h1>
            <div></div>
        </div>
    </div>
  )
}

export default HeadersCheckout
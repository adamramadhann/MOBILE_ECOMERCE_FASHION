import React from 'react'
import HeadersCheckout from '../components/HeadersCheckout'
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

const CheckouthLayouth = () => {
  return (
    <div className='w-full p-5 h-[100dvh]' >
        <div className='w-full z-50 ' >
            <div className='' >
                <HeadersCheckout path={-1} title={'Check out'} />
            </div>
            <div className='flex items-center  px-3 mt-14 justify-between' >
            <FaMapMarkerAlt size={20} className='text-red-500' />
            <div className="flex-grow mx-2 relative">
                <div className="absolute top-1/2 w-full border-t border-dotted border-gray-400 transform -translate-y-1/2"></div>
            </div>
            <FaCreditCard size={20}  />
            <div className='flex-grow mx-2 relative ' >
                <div className='top-1/2 w-full absolute border-t border-dotted border-gray-400 transform -translate-y-1/2' ></div> 
            </div> 
            <BsCheckCircleFill size={20}  />
            </div>
            <span className='my-8 block' >
                <p className='text-gray-500 text-sm' >Step 1</p>
                <h1 className='text-3xl text-gray-700' >Shepping</h1>
            </span>
        </div>
        <div className='' >
            <Outlet/>
            <Link to={'/checkout/step3'} >
             <button className='bg-[#343434]  w-full py-3 rounded-full text-white' >Continue to payment</button>
            </Link>
        </div>
        <div className='h-5' ></div>
    </div>
  )
}

export default CheckouthLayouth
import React from 'react'
import HeadersCheckout from '../components/HeadersCheckout'
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'

const CheckouthLayouth = () => {
  return (
    <div className='w-full p-5 h-[100dvh]' >
        <div className='w-full  ' >
            <div className='' >
                <HeadersCheckout path={-1} title={'Check out'} />
            </div>
            <div className='flex items-center mt-14 justify-between' >
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
            <span className='my-5 block' >
                <p className='text-gray-500 text-sm' >Step 1</p>
                <h1 className='text-3xl text-gray-700' >Shepping</h1>
            </span>
        </div>
        <div className='mt-10' >
            <Outlet/>
        </div>
    </div>
  )
}

export default CheckouthLayouth
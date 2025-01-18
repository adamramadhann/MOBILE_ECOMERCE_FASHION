import React from 'react'
import HeadersCheckout from '../components/HeadersCheckout'
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const CheckouthLayouth = () => {

    const location = useLocation()

    const navigateStep3 = location.pathname === '/checkout/step3';

    const nextSTep = [
        {
            path : '/checkout/step2'
        },
        {
            path : '/checkout/step3'
        },
    ]
  return (
    <div className='w-full p-5 -z-10 h-[100dvh]' >
        <div className='w-full z-50 ' >
            <div className='' >
                <HeadersCheckout path={-1} title={'Check out'} />
            </div>
            <div className='flex items-center gap-3 px-2 mt-14 justify-between' >
            <FaMapMarkerAlt size={22} className='text-red-500' />
            <div className="flex-grow  relative">
                <div className="absolute top-1/2 w-full border-dotted  border-gray-400 transform -translate-y-1/2"></div>
            </div>
            <FaCreditCard size={22}  />
            <div className='flex-grow relative ' >
                <div className='top-1/2 w-full absolute  border-dotted  bg-gray-400 border-1 border-gray-400 transform -translate-y-1/2' ></div> 
            </div> 
            <BsCheckCircleFill size={22}  />
            </div>
            <span className='my-8 block' >
                <p className='text-gray-500 text-sm' >Step 1</p>
                <h1 className='text-3xl text-gray-700' >Shepping</h1>
            </span>
        </div>
        <div className='h-full' >
            <Outlet/>
            <Link to={'/checkout/step2'} >
             <button className={`bg-[#343434]  w-full py-3 rounded-full text-white ${navigateStep3 && 'hidden'}`} >Continue to payment</button>
            </Link>
        </div>
        <div className='h-5' ></div>
    </div>
  )
}

export default CheckouthLayouth
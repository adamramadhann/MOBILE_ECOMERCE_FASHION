import React, { useState } from 'react'
import HeadersCheckout from '../components/HeadersCheckout'
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const CheckouthLayouth = () => {

    const [ isForm, setIsForm ] = useState(false)
    const location = useLocation()

    const isPath3 = location.pathname.includes('/checkout/step3')
    const isPath = location.pathname.includes('/checkout')
    const pathNameNexStep = location.pathname.includes('/checkout/step2')
    
  return (
    <div className='w-full p-5 -z-10 h-[100dvh]' >
        <div className='w-full z-50 ' >
            <div className='' >
                {
                    isPath3 ? (
                        <h1 className='text-center font-bold text-xl' >Checkout Succes</h1>
                    ) : (
                        <HeadersCheckout path={-1} title={'Check out'} />
                    )
                }
            </div>
            <div className='flex items-center gap-3 px-2 mt-14 justify-between' >
            <FaMapMarkerAlt size={22} className={`${isPath && 'text-red-500'}`} />
            <div className="flex-grow  relative">
                <div className="absolute top-1/2 w-full border-dettod  border-gray-400 transform -translate-y-1/2"></div>
            </div>
            <FaCreditCard size={22} className={`${pathNameNexStep || isPath3 && 'text-red-500'}`} />
            <div className='flex-grow relative ' >
                <div className='top-1/2 w-full absolute  border-dettod  bg-gray-400 border-1 border-gray-400 transform -translate-y-1/2' ></div> 
            </div> 
            <BsCheckCircleFill size={22} className={`${isPath3 && 'text-red-500'}`}  />
            </div>
            <span className='my-8 block' >
            {isPath && !pathNameNexStep && !isPath3 && (
                    <p className='text-gray-500 text-sm'>Step 1</p>
                )}
                {pathNameNexStep && !isPath3 && (
                    <p className='text-gray-500 text-sm'>Step 2</p>
                )}
                {isPath3 && (
                    <p className='text-gray-500 text-sm'>Step 3</p>
                )}
                <h1 className='text-3xl text-gray-700' >Shepping</h1>
            </span>
        </div>
        <div className='h-auto' >
            <Outlet context={{ isForm, setIsForm }} />
        </div>
    </div>
  )
}

export default CheckouthLayouth
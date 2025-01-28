import React, { useState } from 'react'
import HeadersCheckout from '../components/HeadersCheckout'
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const CheckouthLayouth = () => {

    const [ isForm, setIsForm ] = useState(false)
    const navigate = useNavigate()

    const nextSTep = [
        {
            teks : 'Step 2',
            sub_teks : 'Shepping',
            path : '/checkout/step2'
        },
        {
            teks : 'Step 3',
            sub_teks : 'Shepping',
            path : '/checkout/step3'
        },
    ]

    const handleNextStep = () => {
        if (isForm) {
            navigate(nextSTep[0].path)
        } else {
            alert('not route, please complete ll required fileds!')
        }
    }

  return (
    <div className='w-full p-5 -z-10 h-[100dvh]' >
        <div className='w-full z-50 ' >
            <div className='' >
                <HeadersCheckout path={-1} title={'Check out'} />
            </div>
            <div className='flex items-center gap-3 px-2 mt-14 justify-between' >
            <FaMapMarkerAlt size={22} className='text-red-500' />
            <div className="flex-grow  relative">
                <div className="absolute top-1/2 w-full border-dettod  border-gray-400 transform -translate-y-1/2"></div>
            </div>
            <FaCreditCard size={22}  />
            <div className='flex-grow relative ' >
                <div className='top-1/2 w-full absolute  border-dettod  bg-gray-400 border-1 border-gray-400 transform -translate-y-1/2' ></div> 
            </div> 
            <BsCheckCircleFill size={22}  />
            </div>
            <span className='my-8 block' >
                <p className='text-gray-500 text-sm' >Step 1</p>
                <h1 className='text-3xl text-gray-700' >Shepping</h1>
            </span>
        </div>
        <div className='h-full' >
            <Outlet context={{ isForm, setIsForm }} />
        </div>
    </div>
  )
}

export default CheckouthLayouth
import React from 'react'
import HeadersCheckout from '../../components/HeadersCheckout'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { LuHotel } from 'react-icons/lu'
import { IoHomeOutline } from 'react-icons/io5'

const Address = () => {

    const addresData = [
        {
            icon :  <LuHotel size={40}  />,
            location : 'office'
        },
        {
            icon :  <IoHomeOutline size={40}  />,
            location : 'home'
        },
    ]
  return (
    <div className='p-5' >
        <HeadersCheckout title={'Delivery address'} />
        <div className='mt-20 space-y-16 ' >
            {
                addresData.map((val) => (
                    <div className='flex items-center gap-3 w-full' >
                        <input type="radio" className='h-5 w-5' />
                        <div className='flx w-full items-start justify-between ' >
                            <div className='flex w-full items-start justify-between ' >
                            <div className='flex gap-5' >
                                {val.icon}
                            <span className='text-center' >
                                <h1 className='text-gray-500'   >SEND TO</h1>
                                <p className='text-gray-700 text-xl'  >My {val.location}</p>
                            </span>
                            </div>
                            <button className='text-red-500 border-red-500 border-b' >edit</button>
                            </div>
                            <p className=' text-sm mt-1 text-gray-400' >SBI Building, street 3, Software Park</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Address
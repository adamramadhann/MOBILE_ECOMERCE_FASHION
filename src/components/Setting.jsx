import React from 'react'
import { AiOutlineRight, AiOutlineSetting } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaHeart, FaLocationDot, FaStar } from 'react-icons/fa6'
import { MdDiscount } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Setting = () => {

    const menuSetting = [
        {
            title : 'Address',
            icon : <FaLocationDot size={22} />
        },
        {
            title : 'Vocher',
            icon : <MdDiscount size={22}  />
        },
        {
            title : 'My Whislist',
            icon : <FaHeart size={22}  />
        },
        {
            title : 'Rate this app',
            icon : <FaStar size={22}  />
        },
        {
            title : 'Log Out',
            icon : <FaSignOutAlt size={22}  />
        },
    ]

  return (
    <div className='w-full h-[100dvh] relative space-y-10 pt-10 p-6 ' >
        <div className='flex items-center justify-between' >
            <img src="/setting/image.png" className='w-12 h-12' alt="" />
            <div>
                <h1>Adam Ramadhan</h1>
                <p className='text-xs' >ramadhanadam1104@gmail.com</p>
            </div>
            <AiOutlineSetting size={25}  />
        </div>
        <div className='grid gap-10 ' >
            {
                menuSetting.map((val) => (
                    <Link >
                        <div className='flex px-1 items-center justify-between' >
                            <span className='flex text-gray-400 items-center gap-3' >
                                {val.icon}
                                <h1 className='text-lg text-gray-800 ' >{val.title}</h1>
                            </span>
                            <AiOutlineRight size={18} />
                        </div>
                    </Link>
                ))
            }
        </div>
        <Link to={'/layout'} >
            <h1 className='w-[80%] text-center bg-blue-500 py-3 rounded-full absolute bottom-7  left-1/2 -translate-x-1/2 text-white  ' >Back To Home</h1>
        </Link>
    </div>
  )
}

export default Setting
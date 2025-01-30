import React, { useEffect, useState } from 'react'
import { AiOutlineRight, AiOutlineSetting } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaHeart, FaLocationDot, FaStar } from 'react-icons/fa6'
import { MdDiscount } from 'react-icons/md'
import { Link } from 'react-router-dom'
import HeadersCheckout from './HeadersCheckout'
import { IoChatbubbleEllipses } from 'react-icons/io5'

const Setting = () => {

    const [dataUser, setDataUser] = useState({})

    const menuSetting = [
        {
            title : 'Address',
            icon : <FaLocationDot size={22} />,
            path : '/address'
        },
        {
            title : 'Vocher',
            icon : <MdDiscount size={22}  />,
            path : '/vocher'
        },
        {
            title : 'My Wishlist',
            icon : <FaHeart size={22}  />,
            path : '/myWhistlist'

        },
        {
            title : 'Rate this app',
            icon : <FaStar size={22}  />,
            path : '/rating'
        },
        {
            title : 'Chat Support',
            icon : <IoChatbubbleEllipses size={22}  />,
            path : '/admn'
        },
        {
            title : 'Log Out',
            icon : <FaSignOutAlt size={22}  />
        },
    ]

  useEffect(() => {
    const getData = localStorage.getItem('user_profile')
    if(getData) {
        setDataUser(JSON.parse(getData))
    }
  }, [])

  console.log(dataUser);
  
  return (
    <div className='w-full h-[100dvh] relative space-y-10 pt-10 p-6 ' >
        <div className='flex px-7 items-center justify-between' >
            <img src={ dataUser.image || "/setting/image.png"} className='w-12 rounded-full h-12' alt="" />
            <div>
                <h1 className='font-bold text-lg' >{dataUser.first_name || 'adam'} {dataUser.last_name || 'ramadhan'}  </h1>
                <p className='text-xs' >{dataUser.email || 'ramadhanadam1104@gmail.com'}</p>
            </div>
            <Link className='ml-2' to={'/profile'} >
                <AiOutlineSetting size={28}  />
            </Link>
        </div>
        <div className='grid gap-10 ' >
            {
                menuSetting.map((val) => (
                    <Link to={val.path} >
                        <div className='flex border-b pb-3 px-1 items-center justify-between' >
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
            <h1 className='w-[95%] text-center bg-[#343434]  py-3 rounded-full absolute bottom-7  left-1/2 -translate-x-1/2 text-white  ' >Back To Home</h1>
        </Link>
    </div>
  )
}

export default Setting
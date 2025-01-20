import React from 'react'
import { AiOutlineExclamationCircle, AiOutlineHome, AiOutlineMail, AiOutlineSearch, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useTheme } from '../DarkMode'
import { CiCreditCard1, CiViewList } from 'react-icons/ci'

const SideBar = ({ style, onClick }) => {

    const {darkMode, night, ligh} = useTheme()

    const tabBar = [
        {
            icon : <AiOutlineHome size={22} />,
            title : 'HomePage',
            path : '/Layout'
        },
        {
            icon : <AiOutlineSearch size={22} />,
            title : 'Discover',
            path : 'search'
        },
        {
            icon :<HiOutlineShoppingBag size={22} />,
            title : 'My Order',
            path : 'order'
        },
        {
            icon : <AiOutlineUser size={22} />,
            title : 'Profile',
            path : 'profile'
        },
    ]

    const Other = [
        {
            icon : <CiCreditCard1 size={22} />,
            title : 'My Card',
            path : '/myCard'
        },
        {
            icon : <AiOutlineMail size={22}  />,
            title : 'Support',
            path : ''
        },
        {
            icon :<AiOutlineExclamationCircle  size={22}  />,
            title : 'About',
            path : '/about'
        }
    ]

  return (
    <div onClick={onClick} className={`absolute top-0 bg-black/10 w-full h-full ${style}`} >
        <div onClick={(e) => e.stopPropagation()} className={` w-[80%] relative z-20  px-3 pt-5 rounded-br-[50px] rounded-tr-[50px] ${darkMode ? 'bg-black text-white border-r border-white ' : 'bg-white shadow-[0_0_2px_rgba(0,0,0,0.2)] '} h-full`} >
            <div className='flex gap-3 items-center w-full justify-center p-5 ' >
                <img src="src/assets/image.png" alt="user" className='w-10 h-10' />
                <span className='flex flex-col ' >
                    <h1 className='text-sm' >Adam Ramadhan</h1>
                    <p className='text-xs' >ramadhanadam1104@gmail.com</p>
                </span>
            </div>
            <div className='space-y-5 mt-5' >
                    {
                        tabBar.map((val) => (
                            <Link key={val.title} className='flex gap-2 items-center 'to={val.path} >{val.icon}
                                <h1 className='text-[15px] select-none cursor-pointer font-semibold' >{val.title}</h1>
                            </Link>
                        ))
                    }
            </div>
            <h1 className='mt-10 text-lg font-bold select-none ' > Other</h1>
            <div className='space-y-5 mt-5' >
                    {
                        Other.map((val) => (
                            <Link key={val.title}  to={val.path} className='flex gap-2 items-center '  >
                                {val.icon}
                                <h1 className='text-[15px] cursor-pointer select-none font-semibold' >{val.title}</h1>
                            </Link>
                        ))
                    }
            </div>
            <div className="mt-20 flex justify-center gap-10 w-full">
  <button
    onClick={ligh}
    className={`px-5 rounded-full py-2 transition-all duration-300 
      ${!darkMode ? 
        'shadow-[0_0_15px_rgba(0,0,0,0.3)] scale-95 bg-yellow-300' : 
        'border border-white hover:bg-gray-200 scale-105'}`}
  >
    Light
  </button>
  <button
    onClick={night}
    className={`px-5 rounded-full py-2 transition-all duration-300 
      ${darkMode ? 
        'border border-yellow-500 shadow-[0_5px_15px_rgba(255,255,255,0.2)] scale-95 bg-gray-800' : 
        'shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:bg-gray-700 hover:scale-105'}`}
  >
    Dark
  </button>
</div>

        </div>
    </div>
  )
}

export default SideBar
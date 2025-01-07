import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { Link, Outlet, useLocation } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import SideBar from '../components/SideBar'

const Layout = () => {

    const [sideActive, setSideActive] = useState(false)
    const location = useLocation()

    const judulHeader = [
        {
            judul : 'GameStore',
            path : '/layout/layout'
        },
        {
            judul : 'Discover',
            path : '/layout/search'
        },
        {
            judul : 'My Order',
            path : '/layout/order'
        },
        {
            judul : 'My Wishlist',
            path : '/layout/profile'
        },
    ]

    const menuTab = [
        {
            icon : <AiOutlineHome size={30} />,
            path : '/layout'
        },
        {
            icon : <AiOutlineSearch size={30} />,
            path : '/layout/search'
        },
        {
            icon : <HiOutlineShoppingBag size={30} />,
            path : '/layout/order'
        },
        {
            icon :<AiOutlineUser size={30} />,
            path : '/layout/profile'
        },
    ]

    const pathActive = location.pathname
    const judulActif = judulHeader.find((item) => item.path === pathActive)?.judul || "GameStore"

    const handleCloseSideBar = () => {
        setSideActive(val => !val)
    }
  return (
    <div className='w-full scroll-smooth  relative overflow-hidden  h-[100dvh] ' >
       <div className='h-[95%] pt-2 pb-10' >
            <HeaderHome judul={judulActif} onCLick={() => setSideActive(true)} />
            <Outlet/>
       </div>
        <div className='h-14 bg-white flex items-center absolute bottom-0 justify-between px-5 w-full ' >   
            {
                menuTab.map((val) => (
                    <Link className={`${val.path === location.pathname ? 'text-gray-600' : 'text-gray-300'}`} to={val.path} >
                        {val.icon}
                    </Link>
                ))
            }
        </div>
        <SideBar onClick={handleCloseSideBar} style={sideActive ? 'block' : 'hidden'} />
    </div>
  )
}

export default Layout
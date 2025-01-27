import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const AdminService = () => {
  return (
    <div className='w-full h-[100dvh] ' >
        <div className='flex items-center border-b p-5 justify-between' >
            <Link to={-1} >
                <AiOutlineLeft/>
            </Link>
            <div>
                <img src="" alt="" />
                <h1>Admin</h1>
                <span></span>
            </div>
            <div></div>
        </div>
        <div className='p-5 space-y-10 ' >
            <div className='relative  space-y-3 ' >
                <p className='w-[85%] text-sm pl-3 py-3 bg-[rgb(151,151,255)] text-white rounded-md ' >Hallo! Can I help You ?</p>
                <p className='text-xs' >Today, 70:22pm</p>
                <span className="admin_triangle absolute top-[2px] -z-50 -left-3"></span>
            </div>
            <div className='relative space-y-3 flex w-full justify-end flex-col items-end ' >
                <p className='w-[85%] text-sm pl-3 py-3 bg-[#E6E8EC] rounded-md ' >Hallo! Can I help You ?</p>
                <p className='text-xs' >Today, 70:22pm</p>
                <span className="triangle absolute top-3 -z-50 -right-4 "></span>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 px-5 border-t w-full gap-2 flex py-3' >
                <input type="text" className='border rounded-sm flex-1 h-10 outline-none pl-3' placeholder='send your message'  />
                <button className='w-10 h-10 flex items-center rounded-md justify-center bg-black text-white' >
                    <AiOutlineRight/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default AdminService
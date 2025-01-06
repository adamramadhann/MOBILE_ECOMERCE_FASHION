import React from 'react'
import { AiOutlineBell, AiOutlineMenu  } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeaderHome = ({ onCLick, judul }) => {
  return (
    <div className='flex items-center px-4 justify-between w-full h-14' >
        <button onClick={onCLick} ><AiOutlineMenu size={20} /></button>
        <h1 className='text-xl font-bold' >{judul}</h1>
        <div className='relative' >
            <Link to={'notif'} >
                <AiOutlineBell size={25} className='' />
            <div className='w-3 h-3 absolute top-0 right-0 bg-red-500 rounded-full' ></div>
            </Link>
        </div>
    </div>
  )
}

export default HeaderHome
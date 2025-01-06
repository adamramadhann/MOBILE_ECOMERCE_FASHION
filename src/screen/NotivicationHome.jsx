import React from 'react'
import { AiOutlineBackward, AiOutlineRollback } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Notivication = () => {

  const notif = [
    {
      title : 'Good Morning! get 20% voucher',
      subTitle : 'Summer up to 20% off, Limited voucher. get now!! 🤗'
    },
    {
      title : 'Special ofter just for you',
      subTitle : 'new Antumn collection 30% off'
    },
    {
      title : 'Holiday Sale 50%',
      subTitle : 'Tap hare to get 50% voucher'
    },
  ]

  return (
    <div className='absolute top-0 bg-white z-10 h-[100dvh] p-3 w-full ' >
        <div className='full justify-between flex items-center ' >
            <Link to={-1} className='' >
              <button className='p-2 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.2)] ' >
                <IoIosArrowBack/>
              </button>
            </Link> 
            <h1 className='text-xl font-bold' >Notification</h1>
            <div className='w-10' ></div>
        </div>
        <div className='space-y-5 mt-5' >
            {
              notif.map((val) => (
                <div key={val.subTitle} className='w-full p-2 h-auto py-2 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)]' >
                    <h1 className='text-sm font-bold' >{val.title}</h1>
                    <p className='text-xs ' >{val.subTitle}</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Notivication
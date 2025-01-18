import React from 'react'
import HeadersCheckout from '../../components/HeadersCheckout'
import { IoCameraOutline } from 'react-icons/io5'

const Profile = () => {
  return (
    <div className='space-y-20 relative p-5 flex flex-col items-center w-full h-[100dvh] ' >
        <HeadersCheckout title={'Profile Setting'} />
        <div className='relative h-20  w-20' >
            <img src="/setting/image.png" alt="profile" className='h-20  w-20' />
            <span className='w-10 text-white flex items-center absolute -bottom-2 -right-1 justify-center h-10 bg-[#353945] rounded-full ' >
                <IoCameraOutline className='' c size={20} />
            </span>
        </div>
        <div className=' w-full grid gap-5 ' >
            <div className='flex justify-between gap-5 items-center w-full' >
                <span className=' block space-y-2 w-[50%] ' >
                    <h1 className='text-sm text-gray-700 ' >First Name</h1>
                    <input type='text' className=' text-xs outline-none text-gray-500 w-full border-b pb-1 ' placeholder='Adam' />
                </span>
                <span className='space-y-2 flex-1 ' >
                    <h1 className='text-sm text-gray-700 ' >Last Name</h1>
                    <input type='text' className=' text-xs outline-none text-gray-500 pb-1 border-b' placeholder='Ramadhan' />
                </span>
            </div>
            <span className='space-y-2 w-full ' >
                <h1 className='text-sm text-gray-700 ' >Email</h1>
                <input type='text' className=' text-xs outline-none text-gray-500 pb-1 border-b' placeholder='ramadhanAdam1104@gmail.com'/>
            </span>
            <div className='flex justify-between gap-5 items-center w-full' >
                <span className=' block space-y-2 w-[50%] ' >
                    <h1 className='text-sm text-gray-700 ' >Gender</h1>
                    <input type='text' className=' text-xs outline-none text-gray-500 w-full border-b pb-1' placeholder='Man' />
                </span>
                <span className='space-y-2 flex-1 ' >
                    <h1 className='text-sm text-gray-700 ' >Phone</h1>
                    <input type='text' className=' text-xs outline-none text-gray-500 pb-1 border-b' placeholder='( +62 ) 857-7479-9048 ' />
                </span>
            </div>
        </div>
        <button className='w-[80%] bg-[#343434] py-3 rounded-full text-white absolute bottom-4' >Save Change</button>
    </div>
  )
}

export default Profile
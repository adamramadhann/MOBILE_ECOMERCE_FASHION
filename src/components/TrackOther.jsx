import React from 'react'
import HeadersCheckout from './HeadersCheckout'
import { MdOutlineStarPurple500 } from 'react-icons/md'

const TrackOther = () => {

    const star = Array(5).fill(null).map(() => ({
        icon : <MdOutlineStarPurple500 size={20} />
    }))

  return (
    <div className='p-5 w-full min-h-screen space-y-16' >
        <div  > 
            <HeadersCheckout title={'Track Order'} />
        </div>
        <div className='space-y-7' >
            <span className='space-y-2' >
                <p className='text-sm text-gray-500 '  >Delivered on <span>15.05.21</span></p>
                <p className='text-sm space-x-5 text-gray-500 '  >Tracking Number : <span className='text-gray-800' > IK287368838</span></p>
            </span>
            <div className='flex flex-col h-full gap-2 items-start ' >
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
                <div className='border-dettod-bottom ml-1 w-1' ></div>
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
                <div className='border-dettod-bottom ml-1 w-1' ></div>
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
                <div className='border-dettod-bottom ml-1 w-1' ></div>
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
                <div className='border-dettod-bottom ml-1 w-1' ></div>
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
                <div className='border-dettod-bottom ml-1 w-1' ></div>
                <div className='flex w-full justify-between items-center' >
                    <input type="radio" value="" />
                    <p className='text-sm' >Parcel is successfully delivered</p>
                    <p className='text-sm text-gray-400' >15 May 10:20</p>
                </div>
            </div>
            <div className='flex items-center gap-4 pt-5 justify-center w-full' >
                <img src="public/image copy 13.png" className='w-[80px]' alt="" />
                <div className='    ' >
                   <p className='text-sm mb-1' > Don’t forget to rate</p>
                   <p className='text-xs mb-2 ' >Rate product to get 5 points for collect.</p>
                   <span className='space-x-3 text-gray-400' >
                    {
                        star.map((val) => (
                            <button>{val.icon}</button>
                        ))
                    }
                   </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackOther
import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const DetailCheckout = () => {
    const [activeBtn, setActiveBtn] = useState('Return home')

    const btnRate = [
        {
            title : 'Return home'
        },
        {
            title : 'Rate'
        },
    ]
  return (
    <div className='p-5 space-y-8 ' >
        <div className='w-full flex items-center justify-between' >
            <Link to={-1} >
                <AiOutlineLeft size={20} />
            </Link>
            <h1 className='text-xl text-gray-700' >Order <span className='text-gray-400 text-lg' >#1514</span></h1>
            <div></div>
        </div>
        <div className='w-[327px] px-5 flex justify-between items-center h-24 rounded-md bg-[#575757] text-white' >
            <div>
                <h1 className='text-sm '>Your order is delivered</h1>
                <p className='text-[10px]' >Rate product to get 5 points for collect.</p>
            </div>
            <img src="/image copy 12.png" alt="" className='w-20'  />
        </div>
        <div className='w-full p-2 shadow-lg rounded-sm space-y-2 ' >
            <span className='flex items-center justify-between' >
                <h1 className='text-sm text-gray-600 ' >Order number</h1>
                <p className='text-xs text-gray-500' >#1514</p>
            </span>
            <span className='flex items-center justify-between' >
                <h1 className='text-sm text-gray-600 '>Tracking Number</h1>
                <p className='text-xs text-gray-500' >IK987362341</p>
            </span>
            <span className='flex items-center justify-between' >
                <h1 className='text-sm text-gray-600 '>Delivery address</h1>
                <p className='text-xs text-gray-500' >SBI Building, Software Park</p>
            </span>
        </div>
       <div className='shadow-lg rounded-md py-5 p-2' >
            <div className='space-y-10' > 
                <div className='space-y-3' >
                    <div className='flex items-center justify-between' >
                        <h1 className='text-sm text-gray-600 ' >Maxi Dress</h1>
                        <p className='text-xs text-gray-500'  >1X</p>
                        <p className='text-xs text-gray-500'  >$68.00</p>
                    </div>
                    <div className='flex items-center justify-between' >
                        <h1 className='text-sm text-gray-600 ' >Linen Dress</h1>
                        <p className='text-xs text-gray-500'  >1X</p>
                        <p className='text-xs text-gray-500'  >$52.00</p>
                    </div>
                </div>
            <div className='space-y-3' >
                <div className='space-y-3 border-b pb-5 ' >
                        <div className='flex items-center justify-between' >
                            <h1 className='text-sm text-gray-600 ' >Sub Total</h1>
                            <p className='text-xs text-gray-500'  >120.00</p>
                        </div>
                        <div className='flex items-center justify-between' >
                            <h1 className='text-sm text-gray-600 ' >Shipping</h1>
                            <p className='text-xs text-gray-500'  >0.00</p>
                        </div>
                    </div>
                    <span className='flex items-center justify-between' >
                        <h1>Total</h1>
                        <p className='text-xs text-gray-500'  >$120.00</p>
                    </span>
                </div>
            </div>
       </div>
       <div className='flex items-center gap-8 justify-center' >
        {
            btnRate.map((e) => (
            <button onClick={() => setActiveBtn(e.title)} className={`border ${activeBtn === e.title && 'bg-[#343434] text-white'} px-7 py-2 rounded-full`} >{e.title}</button>
            ))
        }
       </div>
    </div>
  )
}

export default DetailCheckout
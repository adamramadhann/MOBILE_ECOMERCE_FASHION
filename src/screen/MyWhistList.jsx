import React, { useState } from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md'

const MyWhistList = () => {

  const [btnActive, setBtnActive] = useState('All items')

  const btnTopBar = [
    {
      title : 'All items'
    },
    {
      title : 'Board'
    },
  ]

const dataCard = [
  {
    img : '',
    nama_produck : '',
    price : '$ 80.00',
    discount_price : ''
  },
  {
    img : '',
    nama_produck : '',
    price : '$ 60.00',
    discount_price : ''
  },
  {
    img : '',
    nama_produck : '',
    price : '$ 70.00',
    discount_price : ''
  },
  {
    img : '',
    nama_produck : '',
    price : '$ 90.00',
    discount_price : ''
  },
  {
    img : '',
    nama_produck : '',
    price : '$ 50.00',
    discount_price : ''
  },
  {
    img : '',
    nama_produck : '',
    price : '$ 9s0.00',
    discount_price : ''
  },
]



  const star = Array(5).fill(null).map(() => ({
    icon : <MdOutlineStarPurple500 size={11} />
  }))
console.log(btnActive);

  return (
    <div className='w-full p-5 h-full' >
          <div className='w-full flex border h-auto' >
            {
              btnTopBar.map((val, index) => (
                <button key={index} onClick={() => setBtnActive(val.title)} className={`flex-1 py-2 ${btnActive === val.title && 'bg-black text-white'} `} >{val.title}</button>
              ))
            }
          </div>
            {
              btnActive === 'All items' && (
                <div className='grid mt-5 hide-scrollbar grid-cols-2 gap-10 overflow-auto w-full h-[100dvh] ' >
                {
                  dataCard.map((val) => (
                    <div className='w-[140px] h-[250px] ' >
                      <img src="/myWhislist/Mask Group (8).png" alt="" className=' w-full h-[186px]' />
                      <h1 className='text-sm text-gray-500 mt-2 ' >Front Tie Mini Dress</h1>
                      <span className='flex gap-2 items-end' >
                        <p className='font-semibold' >$ 59.00</p>
                        <p className='text-sm line-through text-gray-400 ' >{val.discount_price}</p>
                      </span>
                      <div className='flex text-green-500 items-center ' >
                          {
                            star.map((val) => (
                              <span >{val.icon}</span>
                                ))
                              }
                              <p className='text-[10px] pl-1 ' >(64)</p>
                              </div>
                      </div>
                  ))
                }
                <div className='h-44' ></div>
                </div>
              )
            }
            {
              btnActive === 'Board' && (
                <div className='grid mt-5 hide-scrollbar grid-cols-2 gap-10 overflow-auto w-full h-[100dvh] ' >
                <h1>ini board</h1>
                </div>
              )
            }
        </div>
  )
}

export default MyWhistList
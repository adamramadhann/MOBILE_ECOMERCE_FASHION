import React, { useState } from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { dataBoard, image_all_items } from '../data/data'
import { AiOutlineRight } from 'react-icons/ai'

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
                <div className='grid pb-48 mt-5 hide-scrollbar grid-cols-2 gap-10 overflow-auto w-full h-[100dvh] ' >
                {
                  image_all_items.map((val) => (
                    <div className='w-[140px] h-[250px] ' >
                      <img src={val.img} alt="" className=' w-full h-[186px] object-cover ' />
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
                </div>
              )
            }
            {
              btnActive === 'Board' && (
                <div className="container h-full overflow-auto hide-scrollbar mt-10 ">
                  {
                    dataBoard.map((val, index) => (
                      <div className='mb-12 overflow-auto' >
                      <div className="grid mb-2 grid-cols-12 h-[140px] gap-2 ">
                      {/* Large left image */}
                      <div className="col-span-4">
                        <img 
                          src={val.img1}
                          alt="Fashion 1"
                          className="h-[138px] object-cover object-top rounded-bl-lg rounded-tl-lg "
                        />
                      </div>
                      
                      {/* Large center image */} 
                      <div className="col-span-4 ">
                        <img 
                          src={val.img2}
                          alt="Fashion 2"
                          className="w-full h-[138px]  object-cover"
                        />
                      </div>
                      
                      {/* Right column with smaller images */}
                      <div className=" col-span-2 ">
                        <img 
                          src={val.img3}
                          alt="Fashion 3"
                          className="w-full h-[80px]  object-cover objeck-top"
                        />
                        <img 
                          src={val.img4}
                          alt="Fashion 4"
                          className=" h-[50px] w-full mt-2 object-cover object-top"
                        />
                      </div>
                      <div className=" col-span-2 ">
                        <img 
                          src={val.img5}
                          alt="Fashion 3"
                          className=" h-[50px] rounded-tr-lg w-full object-cover object-top"
                        />
                        <img 
                          src={val.img6}
                          alt="Fashion 4"
                          className="w-full h-[80px] rounded-br-lg mt-2 object-cover objeck-to"
                        />
                      </div>
                      </div>
                      <div className=' w-full border-b pb-5 space-y-1 ' >
                        <span className='flex items-center font-bold text-xl justify-between w-full' >
                            <h1>Goiing out Outfit</h1>
                            <AiOutlineRight/> 
                        </span>
                        <p className='text-xs ' >36 items</p>
                      </div>
                      </div>
                     ))
                    } 
                    <div className='h-20' ></div>
                </div>
              )
            }
        </div>
  )
}

export default MyWhistList
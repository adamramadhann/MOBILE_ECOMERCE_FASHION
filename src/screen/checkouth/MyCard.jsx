import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import HeadersCheckout from '../../components/HeadersCheckout'

const MyCard = () => {
    const [amount, setAmount] = useState(1)
  return (
    <div className=' space-y-16 relative p-5 w-full h-[100dvh]' >
        <HeadersCheckout path={-1} title={'My Card'} />
        {/* card */}
        <div className='w-full space-y-10 pb-5 overflow-auto ' >
            <div className='flex w-full h-auto gap-3 rounded-2xl bg-white  pr-1 shadow-lg' >
                <span className='w-24 object-cover rounded-bl-2xl rounded-tl-2xl h-24 flex-shrink-0 block' >
                    <img src="/Mask Group.png" className='object-cover w-full h-full object-top rounded-bl-2xl rounded-tl-2xl ' alt="" />
                </span>
                <div className='w-full flex ' >
                    <div className='flex w-full justify-between' >
                        <div className='grid gap-' >
                            <span>
                                <h1 className='text-lg text-gray-600' >Sportwear Set</h1>
                                <p className='text-gray-500'  >$ 80.00</p>
                            </span>
                            <span className='text-sm text-gray-400 ' >Size: l | color:Cream</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between py-2 gap-2 items-center' >
                        <input type="checkbox" className='w-5 h-5' />
                        <div className='flex items-center justify-between border-2 w-20  px-2 text- h-7 rounded-full' >
                            <button onClick={() => setAmount((val) => val > 1 ? val - 1 : val )} >-</button>
                            <p className='text-sm' >{amount}</p>
                            <button onClick={() => setAmount(val => val + 1)} >+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full h-auto gap-3 rounded-2xl bg-white  pr-1 shadow-lg' >
                <span className='w-24 object-cover rounded-bl-2xl rounded-tl-2xl h-24 flex-shrink-0 block' >
                    <img src="/Mask Group.png" className='object-cover w-full h-full object-top rounded-bl-2xl rounded-tl-2xl ' alt="" />
                </span>
                <div className='w-full flex ' >
                    <div className='flex w-full justify-between' >
                        <div className='grid gap-' >
                            <span>
                                <h1 className='text-lg text-gray-600' >Sportwear Set</h1>
                                <p className='text-gray-500'  >$ 80.00</p>
                            </span>
                            <span className='text-sm text-gray-400 ' >Size: l | color:Cream</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between py-2 gap-2 items-center' >
                        <input type="checkbox" className='w-5 h-5' />
                        <div className='flex items-center justify-between border-2 w-20  px-2 text- h-7 rounded-full' >
                            <button onClick={() => setAmount((val) => val > 1 ? val - 1 : val )} >-</button>
                            <p className='text-sm' >{amount}</p>
                            <button onClick={() => setAmount(val => val + 1)} >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* information */}
        <div className='w-full space-y-5' >
            <div className='w-full border-b pb-4 flex items-center justify-between' >
                <p className='text-sm text-gray-400 font-bold'   >Product price</p>
                <p className='text-sm text-gray-500 font-bold'   >$110</p>
            </div>
            <div className='w-full border-b pb-4 flex items-center justify-between' >
                <p className='text-sm text-gray-400 font-bold'  >Product price</p>
                <p className='text-sm text-gray-500 font-bold'   >$110</p>
            </div>
            <div className='w-full pb-4 flex items-center justify-between' >
                <p className='text-xl text-gray-700 font-bold' >Total</p>
                <p className='text-xl text-gray-700 font-bold'  >$110</p>
            </div>
        </div>
        <Link to={'/checkout'} >
            <button className='w-[95%] absolute bottom-5  left-1/2 -translate-x-1/2 mt-10 rounded-full py-3 bg-[#343434] text-white' >Proceed to checkout</button>
        </Link>
        <div className='' ></div>
    </div>
  )
}

export default MyCard
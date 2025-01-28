import React from 'react'
import { Link } from 'react-router-dom'

const Step3 = () => {
  return (
    <div className='w-full flex-col relative h-[100%] flex py-6 justify-center items-center' >
        <div className='w- h- gap-5 flex flex-col justify-center items-center' >
            <img src="/image copy 10.png" className='w-[50%]' alt="" />
            <p className='text-center' >Thank you for your purchase. You can view your order in ‘My Orders’ section.</p>
        </div>
        <Link to={'/layout'} className='w-full' >
          <button className={`bg-[#343434] my-5 w-full py-3 rounded-full text-white `} >Back To Home</button>
        </Link>
    </div>
  )
}

export default Step3
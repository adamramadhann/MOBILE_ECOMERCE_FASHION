import React from 'react'
import { Link } from 'react-router-dom'

const Step = () => {
  return (
    <div>
        <form className='space-y-10' >
         <div className='space-y-6' >
         <label className='flex flex-col text-sm text-gray-700 ' htmlFor="first_name">
                First Name
                <input className='border-b outline-none rounded-md text-sm ' type="text" name="" id="first_name" />
            </label>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="Last_name">
                Last Name
                <input className='border-b outline-none rounded-md text-sm ' type="text" name="" id="Last_name" />
            </label>
            <select className='w-full pb-2 text-sm outline-none bg-white border-b' name="adm" id="">
                <option  value="contoh">contoh select</option>
                <option  value="contoh">contoh 1</option>
                <option  value="contoh">contoh 2</option>
            </select>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="Street">
                Street name 
                <input className='border-b outline-none rounded-md text-sm ' type="text" id='Street' />
                <span className='w-full h-[2px] ' ></span>
            </label>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="City">
                City
                <input className='border-b outline-none rounded-md text-sm ' type="text" id='City' />
            </label>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="State_Province">
                State / Province
                <input className='border-b outline-none rounded-md text-sm ' type="text" id='State_Province' />
            </label>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="Zip-code">
                Zip-code 
                <input className='border-b outline-none rounded-md text-sm ' type="text" id='Zip-code' />
            </label>
            <label className='flex flex-col text-sm text-gray-700 ' htmlFor="Phone_number">
                Phone number  
                <input className='border-b outline-none rounded-md text-sm ' type="text" id='Phone_number' />
            </label>
            <div className='mt-10' >
                <h1 className='text-[15px] text-gray-700 font-bold' >Shipping method</h1>
               <div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-6 w-6' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >Free <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-6 w-6' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >$99.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-6 w-6' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >$50.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               </div>
            </div>
            <label className='py-10 flex justify-between text-green-600 items-center  gap-2 ' htmlFor="Coupon_Code">
                <input type="text" className='outline-none w-full text-gray-400 ' placeholder='Have a code? type it here...' />
                 Validate
            </label>
         </div>
            <div className='flex flex-col gap-3' >
                <h1 className='text-[15px] text-gray-700 font-bold' >Billing Address</h1>
                <span className='flex gap-5 items-center text-gray-500' >
                    <input className='' type="checkbox" />
                    <p>Copy address data from shipping</p>
                </span>
            </div>
        </form>
        <div className='h-10'></div>
    </div>
  )
}

export default Step
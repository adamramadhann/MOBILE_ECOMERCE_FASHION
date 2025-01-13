import React from 'react'

const CheckoutScreen = () => {
  return (
    <div>
        <form className='space-y-5' >
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="first_name">
                First Name
                <input className='border outline-none rounded-md mt-1 ' type="text" name="" id="first_name" />
            </label>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="Last_name">
                Last Name
                <input className='border outline-none rounded-md mt-1 ' type="text" name="" id="Last_name" />
            </label>
            <select name="adm" id="">
                <option disabled value="contoh">contoh select</option>
                <option  value="contoh">contoh 1</option>
                <option  value="contoh">contoh 2</option>
            </select>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="Street">
                Street name 
                <input className='border outline-none rounded-md mt-1 ' type="text" id='Street' />
            </label>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="City">
                City
                <input className='border outline-none rounded-md mt-1 ' type="text" id='City' />
            </label>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="State_Province">
                State / Province
                <input className='border outline-none rounded-md mt-1 ' type="text" id='State_Province' />
            </label>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="Zip-code">
                Zip-code 
                <input className='border outline-none rounded-md mt-1 ' type="text" id='Zip-code' />
            </label>
            <label className='flex flex-col text-lg text-gray-500 ' htmlFor="Phone_number">
                Phone number  
                <input className='border outline-none rounded-md mt-1 ' type="text" id='Phone_number' />
            </label>
            <div className='' >
                <h1 className='text-xl text-center mt-10' >Shipping method</h1>
               <div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-8 w-8' type="radio" />
                    <div>
                        <p className='font-bold text-lg' >Free <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-8 w-8' type="radio" />
                    <div>
                        <p className='font-bold text-lg' >$99.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-5 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input className='h-8 w-8' type="radio" />
                    <div>
                        <p className='font-bold text-lg' >$50.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               </div>
            </div>
            <label className='py-10 block  gap-2 ' htmlFor="Coupon_Code">
                <input type="text" className='outline-none ' placeholder='Have a code? type it here...' />
                 Validate
            </label>
            <div className='flex flex-col gap-3' >
                <h1 className='text-lg text-gray-500 font-bold' >Billing Address</h1>
                <span className='flex gap-5 items-center text-gray-500' >
                    <input type="checkbox" />
                    <p>Copy address data from shipping</p>
                </span>
            </div>
            <button className='bg-[#343434] w-full py-5 rounded-full text-white' >Continue to payment</button>
            </form>
            <div className='h-10'></div>
    </div>
  )
}

export default CheckoutScreen
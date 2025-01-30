import React, { useState } from 'react'
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom';

const Step = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        street: '',
        city: '',
        province: '',
        zep: '',
        phone: '',
        shipping_method: '',
        code_discount: '',
        copy_address: false,
    });
    const navigate = useNavigate()

    const { isForm, setIsForm } = useOutletContext()

    const handleChange = (e) => {
        const { name , value, type, checked } = e.target;
        setFormData((val) => ({
            ...val,
            [name] : type === 'checkbox' ? checked : value
        }));
    }

    console.log(isForm);
    

    const handleSubmitYo = (e) => {
        e.preventDefault()
        localStorage.setItem('step', JSON.stringify(formData))
        setIsForm(true)
        navigate('/checkout/step2')
    }    
    
    

  return (
    <div>
        <form onSubmit={handleSubmitYo} className='space-y-10' >
         <div className='space-y-6' >
            <label htmlFor='first_name' className="relative w-full text-sm">
                <input
                    required
                    placeholder="First Name "
                    className="w-full border-b outline-none text-sm  p-2 peer "
                    type="text"
                    id='first_name'
                    name='first_name'
                    value={formData.first_name}
                    onChange={handleChange}
                />
                <span className="absolute h-[2px] -bottom-2 left-1/2 w-0 
                    transition-all duration-500 peer-focus:w-full peer-focus:left-0 peer-focus:bg-[#2563EB]" />
            </label>
            <label className=' block relative  text-sm text-gray-700 ' htmlFor="last_name">
                <input 
                required
                className='border-b peer p-1 outline-none rounded-md text-sm ' 
                type="text" id="last_name" placeholder='Last Name' name="last_name" 
                value={formData.last_name}
                onChange={handleChange}
                />
                <span className='w-0 block h-[2px] transition-all duration-300 peer-focus:w-full absolute bottom-0  peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB]  ' />
            </label>
            <label className='flex flex-col relative text-sm text-gray-700 ' htmlFor="street">
                <input placeholder='Street Name' 
                className='border-b peer p-1 outline-none rounded-md text-sm ' 
                type="text" name='street' id='street' 
                value={formData.street}
                onChange={handleChange}
                required
            />
                <span className='w-0 transition-all duration-300 h-[2px] absolute bottom-0 peer-focus:w-full peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB] ' ></span>
            </label>
            <label className='flex flex-col relative text-sm text-gray-700 ' htmlFor="city">
                <input placeholder='City' 
                 required
                className='border-b peer p-1  outline-none rounded-md text-sm ' 
                type="text" name='city' id='city' 
                value={formData.city}
                onChange={handleChange}
            />
                <span className='w-0 transition-all duration-300 h-[2px] absolute bottom-0 peer-focus:w-full peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB] ' ></span>
            </label>
            <label className='flex flex-col relative text-sm text-gray-700 ' htmlFor="province">
                <input placeholder='State / Province' 
                 required
                className='border-b peer p-1  outline-none rounded-md text-sm ' 
                type="text" name='province' id='province'
                value={formData.province}
                onChange={handleChange}
                 />
                <span className='w-0 transition-all duration-300 h-[2px] absolute bottom-0 peer-focus:w-full peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB] ' ></span>
            </label>
            <label className='flex flex-col relative text-sm text-gray-700 ' htmlFor="zep">
                <input placeholder='Zep-code' 
                 required
                className='border-b p-1 peer  outline-none rounded-md text-sm ' 
                type="text" name='zep' 
                id='zep' 
                value={formData.zep}
                onChange={handleChange}
            />
                <span className='w-0 transition-all duration-300 h-[2px] absolute bottom-0 peer-focus:w-full peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB] ' ></span>
            </label>
            <label className='flex flex-col relative text-sm text-gray-700 ' htmlFor="phone">  
                <input 
                    placeholder='Phone number' 
                    required
                    className='border-b p-1 peer outline-none rounded-md text-sm ' 
                    name='phone' 
                    type="text" 
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
                <span className='block bottom-0 transition-all duration-300 w-0 h-[2px] peer-focus:w-full peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:bg-[#2563EB] absolute ' />
            </label>
            <div className='mt-10' >
                <h1 className='text-[15px] text-gray-700 font-bold' >Shipping method</h1>
               <div>
               <div className='flex w-full gap-7 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input  className='h-6 w-6' alue={formData.shipping_method} onChange={handleChange} name='shipping_method' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >$20.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-7 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input 
                     value={formData.shipping_method} onChange={handleChange} className='h-6 w-6' name='shipping_method' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >$99.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               <div className='flex w-full gap-7 shadow-md mt-5 rounded-lg py-3 justify-center' >
                    <input 
                     className='h-6 w-6' alue={formData.shipping_method} onChange={handleChange} name='shipping_method' type="radio" />
                    <div>
                        <p className='font-bold text-sm' >$50.00 <span className='font-light' >Delivery to home</span></p>
                        <p className='text-sm text-gray-400' >Delivery from 3 to 7 business days</p>
                    </div>
                </div>
               </div>
            </div>
            <label className='py-10 flex justify-between text-green-600 items-center  gap-2 ' htmlFor="Coupon_Code">
                <input 
                 type="text" name='code_discount' className='outline-none w-full text-gray-400 ' placeholder='Have a code? type it here...' />
                 Validate
            </label>
         </div>
            <div className='flex flex-col gap-3' >
                <h1 className='text-[15px] text-gray-700 font-bold' >Billing Address</h1>
                <span className='flex gap-7 items-center text-gray-500' >
                    <input 
                     className='' name='addres_checked' required type="checkbox" />
                    <p>Copy address data from shipping</p>
                </span>
            </div>
            <button type='submit'  className={`bg-[#343434] my-5 w-full py-3 rounded-full text-white `} >Continue to payment</button>
        </form>
    </div>
  )
}

export default Step
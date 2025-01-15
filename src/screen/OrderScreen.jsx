import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const OrderScreen = () => {

  const [dataButtonFilter, setButtonFilter] = useState(0)
  const buttonFilter = [
    {
      text : 'Padding'
    },
    {
      text : 'Delivered'
    },
    {
      text : 'Cancelled'
    },
  ]


  const dataOrder = [
    {
      id : '1124',
      status : 'Padding'
    },
    {
      id : '1324',
      status : 'Padding'
    },
    {
      id : '1154',
      status : 'Padding'
    },
    {
      id : '1624',
      status : 'Delivered'
    },
    {
      id : '1324',
      status : 'Delivered'
    },
    {
      id : '1154',
      status : 'Delivered'
    },
    {
      id : '1624',
      status : 'Cancelled'
    },
    {
      id : '1324',
      status : 'Cancelled'
    },
    {
      id : '1154',
      status : 'Cancelled'
    },
    {
      id : '1624',
      status : 'Cancelled'
    },
  ]


  return (
    <div className='w-full h-full mt-3 px-5' >
      <div className='flex pb-10 bg-white items-center justify-between' >
        {
          buttonFilter.map((e, index) => (
          <button onClick={() => setButtonFilter(index) } className={`px-5 py-2 rounded-full ${dataButtonFilter === index && 'bg-[#43484B] text-white'}`} >{e.text}</button>
          ))
        }
      </div>
      <div className='overflow-auto space-y-10 px-2 -mt-10 pb-32 w-full h-full hide-scrollbar ' >
         {
            dataOrder.map((val) => (
              <div className='space-y-2 mt-5 p-5 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md ' >
                  <span  className='flex w-full justify-between items-end'>
                    <h1 className='text-xl font-bold' >Order #1524 </h1>
                    <p className='text-xs' >13/05/2021</p>
                  </span>
                  <span className='text-gray-400 flex gap-3 items-center '  >
                  <p className='text-sm' >Tracking number: </p>
                  <p className='text-gray-700 text-sm '  >IK287368838</p>
                  </span>
                  <span className='flex w-full text-gray-400 justify-between items-center' > 
                    <p className='text-sm' >Quanlity: <span className='text-gray-700 text-sm '  >2</span></p>
                    <p className='text-sm'  >Subtotal: <span className='text-gray-700 text-sm '  > $ 20.00</span></p>
                  </span>
                  <span className='flex w-full pt-2 justify-between items-center'  >
                    <h1 className='text-red-500 text-[15px]' >PENDING</h1>
                    <Link to={'/detailCheckout'} >
                      <button className='px-5 py-1 rounded-full border' >Details</button>
                    </Link>
                  </span>
              </div>
            ))
         }
      </div>
    </div>
  )
}

export default OrderScreen
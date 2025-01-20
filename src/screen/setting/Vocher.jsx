import React from 'react'
import HeadersCheckout from '../../components/HeadersCheckout'

const Vocher = () => {

  const dataDiscount = [
    {
      discount : '50%',
      code : 'fridaysale',
      saleOf : '50%',
      day : '22 Dec'
    },
    {
      discount : '20%',
      code : 'fridaysale',
      saleOf : '20%',
      day : '12 Jan'
    },
    {
      discount : '40%',
      code : 'fridaysale',
      saleOf : '40%',
      day : '25 Oct'
    },
    {
      discount : '70%',
      code : 'fridaysale',
      saleOf : '70%',
      day : '10 Feb'
    },
  ]

  return (
    <div className='p-5' >
      <HeadersCheckout title={'Vocher'} />
        <div className='mt-20 space-y-5' >
            {
              dataDiscount.map((val) => (
                <div className='flex h-20  shadow-md items-center justify-between' >
                  <div className='flex w-full space-x-3 h-full' >
                  <span className=' bg-black h-full w-20 text-white flex items-center justify-center' >
                       {val.discount}
                    </span>
                    <span className='grid gap-1' >
                        <h1>Black Friday</h1>
                        <p className='text-xs text-gray-400' >sale off {val.saleOf}</p>
                        <p className='font-bold text-sm ' >Code : {val.code}</p>
                    </span>
                  </div>
                  <div className='flex border-l-black border border-dotted h-full ' >
                        <div className=' h-4 block ' ></div>
                        <span className='text-center grid gap-1 ' >
                            <p className='text-xs text-gray-400' >EXP.</p>
                            <p>{val.day}</p>
                        </span>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Vocher
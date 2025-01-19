import React from 'react'

const Vocher = () => {
  return (
    <div>
        <div className='flex h-20 bg-red-500 items-center justify-between' >
           <div className='flex w-full space-x-3 h-full' >
           <span className=' bg-black h-full w-20 text-white flex items-center justify-center' >
                50%
            </span>
            <span>
                <h1>Black Friday</h1>
                <p className='text-xs text-gray-400' >sale 50%</p>
                <p className='font-bold text-sm ' >Code : holiday 30</p>
            </span>
           </div>
           <div>
                <span></span>
                <span className='text-center' >
                    <p>EXP.</p>
                    <p>22 Dec</p>
                </span>
           </div>
        </div>
    </div>
  )
}

export default Vocher
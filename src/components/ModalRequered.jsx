import React, { useState } from 'react'

const ModalRequered = ({ openModal, handleCLose }) => {

  if(openModal) return (
    <div className='w-full absolute left-1/2 -translate-x-1/2 z-50 top-0 h-[100dvh] flex justify-center items-center bg-black/40 ' >
        <div className='bg-white rounded-md p-4 flex items-center  flex-col w-[85%] h-auto py-5 ' >
            <img src="/image copy 16.png" alt="checklis" className='w-20 mt-5 h-20' />
            <span className='space-y-7 mt-3'>
              <h1 className='text-lg text-center font-bold'>Please provide a rating and description!</h1>
              <p className='text-justify text-sm text-gray-600'>We value your feedback! Kindly fill in the rating and description fields to help us improve your experience.</p>
            </span>
            <button onClick={handleCLose} className='w-full py-2 bg-red-500 mt-8 text-white rounded-md' >Close</button>
        </div>
    </div>
  )
}

export default ModalRequered
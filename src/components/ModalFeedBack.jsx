import React, { useState } from 'react'

const ModalFeedBack = ({ openModal, handleCloseModal }) => {

  if(openModal) return (
    <div className='w-full absolute left-1/2 -translate-x-1/2 z-50 top-0 h-[100dvh] flex justify-center items-center bg-black/40 ' >
        <div className='bg-white rounded-md p-4 flex items-center space-y-8 flex-col w-[85%] h-auto py-5 ' >
            <img src="/image copy 15.png" alt="checklis" className='w-14 mt-5 h-14 rounded-full' />
            <span className='space-y-4'>
    <h1 className='text-lg text-center font-bold'>Thank You for Your Valuable Feedback!</h1>
    <p className='text-justify text-sm text-gray-600'>
    Thank you for giving an assessment of our service, we hope we can serve you better
    </p>
</span>

            <button onClick={handleCloseModal} className='w-full py-2 bg-[#2563EB] text-white rounded-md  ' >Done</button>
        </div>
    </div>
  )
}

export default ModalFeedBack
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ImGift } from 'react-icons/im'
import { IoCameraOutline } from 'react-icons/io5'
import { MdOutlinePermMedia, MdOutlineStarPurple500 } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Rate = () => {
    // const star = [
    //     {
    //         icon : <MdOutlineStarPurple500 />
    //     },
    //     {
    //         icon : <MdOutlineStarPurple500 />
    //     },
    //     {
    //         icon : <MdOutlineStarPurple500 />
    //     },
    //     {
    //         icon : <MdOutlineStarPurple500 />
    //     },
    //     {
    //         icon : <MdOutlineStarPurple500 />
    //     },
    // ]

    const star = Array(5).fill(null).map(() => ({
        icon: <MdOutlineStarPurple500 size={40} />
    }));

  return (
    <div className='w-full relative h-full space-y-7 p-5'  >
        <div className='flex items-center justify-between' >
            <span className='w-10 h-10 rounded-full shadow-lg flex items-center justify-center' >
                <Link to={-1}><AiOutlineLeft size={20} /></Link>
            </span> 
            <h1 className='text-xl text-gray-700' >Rate Product</h1>
            <div></div>
        </div>
        <div className='w-full bg-[#575757] px-7 rounded-md text-white h-16 flex items-center justify-between ' >
            <ImGift size={20} />
            <p className='text-xs w-[80%]' >Submit your review to get 5 points</p>
            <a href="">
                <AiOutlineRight size={15} />
            </a>
        </div>
        <div className='flex items-center px-5 justify-between' >
            {
                star.map((val, index) => (
                    <button className='text-green-500' >
                        {val.icon}
                    </button>
                ))
            }
        </div>
        <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] p-5 ' >
            <textarea className='w-full h-[200px] p-3 outline-none '  placeholder='Would you like to write anything about this product? ' name="coment" id="coment"></textarea>
            <h1 className='text-end text-gray-500 text-sm ' >50 characters</h1>
        </div>
        <div className='flex gap-3 items-center' >
            <span className='w-16 h-16 rounded-md border border-dotted flex items-center justify-center border-gray-400 ' >
                <MdOutlinePermMedia size={25} />
            </span>
            <span className='w-16 h-16 rounded-md border border-dotted flex items-center justify-center border-gray-400 ' >
                <IoCameraOutline size={25} />
            </span>
        </div>
        <button className='w-full mt-20 rounded-full py-3 bg-[#343434] text-white' >Submit Review</button>
    </div>
  )
}

export default Rate
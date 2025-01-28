import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { ImGift } from 'react-icons/im';
import { IoCameraOutline } from 'react-icons/io5';
import { MdOutlinePermMedia, MdOutlineStarPurple500 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ModalFeedBack from '../../components/ModalFeedBack';
import ModalRequered from '../../components/ModalRequered';

const RattingSettingProfile = () => {

    const [openModal, setOpenModal] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form, setForm] = useState({
        star_ratting : 0,
        descriptions_ratting : ''
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setForm((val) => ({
            ...val,
            [name] : value
        }))
    }

    const star = Array(5).fill(null).map(() => ({
        icon: <MdOutlineStarPurple500 size={40} />
    }));

    const handleClickStar = (e) => {
        setForm((val) => ({
            ...val,
            star_ratting : e + 1
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(form.star_ratting === 0 || !form.descriptions_ratting.trim()) {
            setIsModalVisible(true)
            setTimeout(() => {
            setIsModalVisible(false)
            return
            }, 10000)
            return
        }         

        const existingRatting = JSON.parse(localStorage.getItem('ratting')) || [];
        const rattingIsArray = Array.isArray(existingRatting) ? existingRatting : [];
        rattingIsArray.push(form)
        console.log(rattingIsArray);
        
        localStorage.setItem('ratting', JSON.stringify(rattingIsArray))

        setForm({
            star_ratting : 0,
            descriptions_ratting : ''
        })

        setOpenModal((val) => !val)
        setTimeout(() => {
            setOpenModal((val) => !val)
        }, 10000)
    }

    const handleCloseModal = (e) => {
        setOpenModal((val) => !val)
    }

  return (
    <div className='w-full relative h-[100dvh]  p-5'  >
        <ModalRequered handleCLose={() => setIsModalVisible(false)} openModal={isModalVisible} />
        <ModalFeedBack openModal={openModal} handleCloseModal={handleCloseModal} />
        <form onSubmit={handleSubmit} className='w-full h-full space-y-7' >
            <div className='flex items-center justify-between' >
                <span className='w-10 h-10 rounded-full shadow-lg flex items-center justify-center' >
                    <Link to={-1}><AiOutlineLeft size={20} /></Link>
                </span> 
                <h1 className='text-xl text-gray-700' >Share your feedback</h1>
                <div></div>
                <div></div>
            </div>
            <p className='text-center ' >What is your options Game Store  ?</p>
            <div className='flex items-center px-5 justify-between' >
                {
                    star.map((val, index) => (
                        <span onClick={() => handleClickStar(index)} className={`text-gray-500 block ${form.star_ratting > index && 'text-green-500'}`} >
                            {val.icon}
                        </span>
                    ))
                }
            </div>
            <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] p-5 ' >
                <textarea value={form.descriptions_ratting}  onChange={handleChange} className='w-full h-[200px] text-gray-500 outline-none '  placeholder='Would you like to write anything about this product? ' name="descriptions_ratting" id="descriptions_ratting"></textarea>
                <h1 className='text-end text-gray-500 text-sm ' >50 characters</h1>
            </div>
            <div className='flex gap-3 items-center' >
                <span className='w-16 h-16 relative rounded-md border border-dotted flex items-center justify-center border-gray-400 ' >
                    <MdOutlinePermMedia className='absolute pointer-events-none '  size={25} />
                    <input type="file" className='inset-0 w-full h-full  opacity-0 cursor-pointer top-0 ' />
                </span>
                <span className='w-16 h-16 relative rounded-md border border-dotted flex items-center justify-center border-gray-400 ' >
                    <IoCameraOutline className='absolute' size={25} />
                    <input type="file" className='inset-0 w-full h-full  opacity-0 cursor-pointer top-0 ' />
                </span>
            </div>
            <button type='submit' className='w-[90%] left-1/2 -translate-x-1/2 absolute bottom-4 rounded-full py-3 bg-[#343434] text-white' >Submit Review</button>
        </form>
    </div>
  )
}

export default RattingSettingProfile
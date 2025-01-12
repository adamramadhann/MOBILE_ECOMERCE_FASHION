import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineRight, AiOutlineStar } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { GiFurShirt } from 'react-icons/gi';
import { LuShirt } from 'react-icons/lu';
import { useOutletContext } from 'react-router-dom';

const FilterProduck = ({ style, openModal, closeModal }) => {
    const [dolar, setDolar] = useState(10);
    const [buttonActive, setButtonActive] = useState({
        colorActiv : false,
        startActive : false,
        selectCatagory : null
    });

    const handleColorActive = (index) => {
        setButtonActive(val => ({
            ...val,
        colorActiv : val.colorActiv === index ? null : index
        }))
    }

    const handleStarActive = (e) => {
        setButtonActive(val => ({
            ...val,
            startActive : val.startActive === e ? null : e
        }))
    } 

    const handleSelectCaagory = ()=>  {
        setButtonActive(val => ({
            ...val,
            selectCatagory : !val.selectCatagory
        }))
    }


    const dataColor = [
        {
            bg_color : 'bg-[#CE8722]'
        },
        {
            bg_color : 'bg-[#DC4447]'
        },
        {
            bg_color : 'bg-black'
        },
        {
            bg_color : 'bg-[#44565C]'
        },
        {
            bg_color : 'bg-[#E4E4E4]'
        },
        {
            bg_color : 'bg-[#6D4F44]'
        },
        {
            bg_color : 'bg-[#DFA8A9]'
        }
    ]
    const dataStar = [
        {
            star : 1
        },
        {
            star : 2
        },
        {
            star : 3
        },
        {
            star : 4
        },
        {
            star : 5
        },
    ]
    const dataCatagoriSelect = [
        {
            type : 'CLONING',
            catagory : [
                {
                    amount : '100',
                    title : 'Switer'
                },
                {
                    amount : '90',
                    title : 'Levis'
                },
                {
                    amount : '110',
                    title : 'Jacket'
                },
            ]
        },
        {
            type : 'ACCESSORIES',
            catagory : [
                {
                    amount : '60',
                    title : 'Switer'
                },
                {
                    amount : '80',
                    title : 'Levis'
                },
                {
                    amount : '120',
                    title : 'Jacket'
                },
            ]
        },
        {
            type : 'SHOES',
            catagory : [
                {
                    amount : '103',
                    title : 'Switer'
                },
                {
                    amount : '140',
                    title : 'Levis'
                },
                {
                    amount : '130',
                    title : 'Jacket'
                },
            ]
        },
        {
            type : 'COLLECTION',
            catagory : [
                {
                    amount : '50',
                    title : 'Switer'
                },
                {
                    amount : '109',
                    title : 'Levis'
                },
                {
                    amount : '70',
                    title : 'Jacket'
                },
            ]
        },
    ]

    const dataDiscount = [
        {
            sale : '20%'
        },
        {
            sale : '40%'
        },
        {
            sale : '60%'
        },
        {
            sale : '80%'
        },
    ]

    const handleDolarValue = (e) => {
        setDolar(Number(e.target.value));
    };

    // Formula yang benar untuk menghitung posisi
    const handleDolarPosition = () => {
        const percentage = ((dolar - 10) / (10000 - 10)) * 100;
        return Math.min(Math.max(percentage, 0), 100); // Memastikan nilai tetap dalam range 0-100%
    };

    return (
       <div onClick={closeModal} className={`w-full bg-black/20 top-0  h-[100dvh] absolute     ${style}`} >
         <div onClick={(e) =>e.stopPropagation()} className={`w-[85%] space-y-10 p-5 absolute right-0 bg-white h-full rounded-tl-[10%]  rounded-bl-[10%] border `}>
          
          <div className='flex items-center justify-between ' >
            <h1 className='text-xl font-bold' >Filter</h1>
            <button onClick={closeModal}  className='p-2 '>
                <BiGitCompare size={20} />
            </button>
          </div>
          
          
            {/* <div className='relative w-full  '>
                <h1>Price</h1>
                <div 
                    className='absolute top-14 text-black w-max bg-white px-2 py-1 rounded shadow-sm' 
                    style={{
                        left: `${handleDolarPosition()}%`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    ${dolar.toLocaleString()}
                </div>
                <input 
                    type="range"
                    min={10}
                    max={10000}
                    value={dolar}
                    onChange={handleDolarValue}
                    className='w-full h-2  rounded-lg  cursor-pointer'
                />
            </div> */}
            {/* color */}
            <div className='space-y-2' >
                <h1 className='font-semibold' >Color</h1>
                <div className='flex items-center justify-between' >
                    {
                        dataColor.map(((val, index) => (
                            <span onClick={() => handleColorActive(index)} className={`${val.bg_color} w-6 h-6 p-1 rounded-full block ${ buttonActive.colorActiv === index ? 'scale-125 shadow-[0_0_15px_rgba] ' : ''} `} ></span>
                        )))
                    }
                </div>
            </div>
            {/* star */}
            <div className='space-y-2' >
                <h1>Star Rating</h1>
                <div className=' w-full flex items-center justify-between' >
                    {
                        dataStar.map((val, index) => (
                            <span onClick={() => handleStarActive(index)}  className={`flex items-center justify-center text-xs gap-[2px   ] h-10 w-10 border-2 border-black rounded-full p-1  ${buttonActive.startActive === index ? 'bg-black text-white border-white' : ''}`} ><FaStar size={15} /> {index + 1} </span>
                        ))
                    }
                </div>
            </div>
            {/* select catagory */}
            <div className='space-y-4' >
                <div onClick={handleSelectCaagory} className='flex w-full h-auto rounded-full border p-2 py-3 items-center justify-between' >
                    <span className='flex font-semibold items-center gap-2' >
                        <LuShirt size={25} />
                        Catagory
                    </span>
                    <AiOutlineDown size={20} />
                </div>
                <div className={`overflow-auto  transition-all transform px-3 duration-1000 space-y-3 origin-top ${buttonActive.selectCatagory ? 'opacity-100 max-h-[200px]' : 'opacity-0 scale-y-0 max-h-0'}`} >
                   {
                    dataCatagoriSelect.map((val, index) => (
                        <div className='border-b pb-3' >
                            <button onClick={() => setButtonActive(e => ({
                                ...e,
                                selectCatagory : val.type
                            }))} className={`flex items-center border- pb-3 justify-between text-sm w-full`} >{val.type} <span className='flex items-center gap-2' ><AiOutlineRight/></span></button>
                                {
                                    buttonActive.selectCatagory === val.type && (
                                        <div onClick={(e) => e.stopPropagation()} className={`${buttonActive.selectCatagory  ? 'block' : 'hidden'}`}  >
                                            {
                                                val.catagory.map((val) => (
                                                    <div className='flex flex-col py-3 w-full' >
                                                        <button className='w-full flex text-xs  justify-between ' >{val.title} <span className='flex items-center gap-2 ' >{val.amount} <AiOutlineRight/></span></button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                        </div>
                    ))
                   }
                </div> 
            </div>
            {/* discount */}
            <div className='w-full  ' >
                <h1>Discoutn</h1>
                <div className='w-full mt-3 flex flex-wrap gap-3 ' >
                   {
                    dataDiscount.map((val) => (
                        <div className='w-[120px] flex items-center justify-center  gap-3 text-center text-sm  border rounded-full py-2' >
                            <p>{val.sale} off</p>
                            <button className='font-bold ' >X</button>
                        </div>
                    ))
                   }
                </div>
            </div>
            <div className='w-full flex justify-center gap-7' >
                   <button className={`px-8 py-2 rounded-full border`} >Reset</button>
                   <button className={`bg-green-400 px-8 py-2 rounded-full border`} >Apply</button>
            </div>
        </div>
       </div>
    );
};

export default FilterProduck;
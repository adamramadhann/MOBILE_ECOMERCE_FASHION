import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineSearch } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'

const SearchScreen = () => {
    const [activAcc, setActiveAcc] = useState(null)
    console.log(activAcc);
    

    const cardDetail = [
        {
            card : 'CLONING',
            img : '',
            bg : 'bg-[#A3A798]`}',
            items : [
                {
                    jenis : 'Switer',
                    items : '125 itsms'
                },
                {
                    jenis : 'Jacket',
                    items : '105 itsms'
                },
                {
                    jenis : 'Levis',
                    items : '90 itsms'
                },
            ]
        },
        {
            card : 'ACCESSORIES',
            img : '',
            bg : 'bg-[#A3A798]', 
            items : [
                {
                    jenis : 'Tas ',
                    items : '125 itsms'
                },
                {
                    jenis : 'Jam',
                    items : '105 itsms'
                },
                {
                    jenis : 'Emas',
                    items : '90 itsms'
                },
            ]
        },
        {
            card : 'SHOES',
            img : '',
            bg : 'bg-[#44565C]',
            items : [
                {
                    jenis : 'Sepatu',
                    items : '125 itsms'
                },
                {
                    jenis : 'Sandal',
                    items : '105 itsms'
                }
            ]
        },
        {
            card : 'COLLECTION',
            img : '',
            bg : 'bg-[#B9AEB2]',
            items : [
                {
                    jenis : 'Switer',
                    items : '125 itsms'
                },
                {
                    jenis : 'tas',
                    items : '105 itsms'
                },
                {
                    jenis : 'sepatu',
                    items : '90 itsms'
                },
               
            ]
        },
    ]

  return (
    <div className='w-full h-full flex flex-col items-center hide-scroll space-y-10 overflow-auto ' >
        <div className='flex w-full items-center justify-center mt-5 gap-2' >
                <div className='flex items-center gap-2 p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
                    <AiOutlineSearch size={20} />
                    <input type="search" placeholder='Search' className='text-sm text-gray-500 outline-none ' />
                </div>
                <button className='p-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]' >
                    <BiGitCompare size={20} />
                </button>
        </div>
        <div className='flex flex-col gap-8' >
            { 
                cardDetail.map((val, index) => (
                    <div>
                        <div onClick={() => setActiveAcc(activAcc === index ? null : index )} className={`w-[311px] cursor-pointer flex items-center justify-center relative h-[126px] bg-[#A3A798]`} >
                            <h1 className='absolute left-10 text-xl font-bold text-white' >CLONTING</h1>
                            <div className='absolute top-1/2 -translate-y-1/2 right-5 ' >
                                <div className='bg-[#BBBFAE] bg-opacity-25 w-[105px] p-3 h-[105px] rounded-full ' >
                                    <div className='bg-[#C2C7B5] bg-opacity-25 w-full h-full rounded-full ' >
                                    </div>
                                </div>
                            </div>
                                <img className='absolute right-0 ' src="/image 51.png" alt="" />
                        </div>
                        <div className={` h-[300px] w-full  transition-all duration-1000 ease-in-out origin-top ${activAcc === index ? 'opacity-100 max-h-[200px] py-3' : 'opacity-0 max-h-0 scale-y-0'}`} >
                        {
                            val.items.map((e) => (
                                <div className='flex items-center pt-10 justify-between' >
                                    <h1>{e.jenis}</h1>
                                    <button className='flex items-center text-sm' >{e.items} <AiOutlineRight/></button>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SearchScreen
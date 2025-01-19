import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full h-[100dvh]' >
        <div style={{backgroundImage:'url("/image copy 14.png")',backgroundSize:'cover'}} className='w-full  object-cover h-[247px] ' >
            <div className='w-full px-7 pt-10 h-full flex justify-between' >
                <Link to={'/layout'} >
                  <span className='h-8 flex justify-center items-center w-8 bg-white rounded-full' >
                      <AiOutlineLeft size={15}/>
                  </span>
                </Link>
                <h1 className='text-white text-2xl font-bold ' >
                  Autumn <br /> Colection <br /> 2021
                </h1>
            </div>
        </div>
        <div class="bg-gray-100 p-6 flex justify-center">
          <div class="grid grid-cols-2  gap-7 mt-10 w-full max-w-5xl">
            <div class="col-span-1 row-span-5">
              <img src="/image copy 14.png" alt="Gambar 1" class="w-full h-[250px]  object-cover rounded-lg"/>
            </div>
            
            <div class="col-span-1 row-span-2 -mt-5 h-[200px]" >
              <img src="/image copy 14.png" alt="Gambar 2" class="w-full h-[200px] object-cover rounded-lg"/>
            </div>


            <div class="col-span-1 row-span-5">
              <img src="/image copy 14.png" alt="Gambar 1" class="w-full h-[250px] object-cover rounded-lg"/>
            </div>
            
            <div class="col-span-1 row-span-2 h-[200px]" >
              <img src="/image copy 14.png" alt="Gambar 2" class="w-full h-[200px]  object-cover rounded-lg"/>
            </div>
          </div>
        </div>
        <button className='absolute px-11 py-3 rounded-tl-2xl rounded-bl-2xl bg-black text-white right-0 bottom-3 ' >View All</button>
    </div>
  )
}

export default About
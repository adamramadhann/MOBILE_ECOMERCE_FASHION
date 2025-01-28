import React, { useRef, useState } from 'react'
import { FaGlasses } from "react-icons/fa";
import { IoMdMale } from "react-icons/io";
import { RiWomenLine } from "react-icons/ri";
import { TiBrush } from "react-icons/ti";
import { useCard } from '../SaveCardContext';
import { useNavigate } from 'react-router-dom';
import { image_all_items, imageFeature } from '../data/data';

export const menuTopBarHomeScreen = [
    {
        icon : <RiWomenLine size={15} />
    },
    {
        icon : <IoMdMale size={15} />
    },
    {
        icon : <FaGlasses size={15} />
    },
    {
        icon : <TiBrush size={15} />
    },
]

const HomeScreen = () => {
  const [curentIndex, setCurentIndex] = useState(0)
  const [curentIndexRecomanded, setCurentIndexRecomanded] = useState(0)
  const refFeature = useRef(null)
  const refRecomanded = useRef(null)
  const {card,setCard} = useCard()
  const naviget = useNavigate()



  const handleDetailCard = (selectCard, id) => {
    setCard(selectCard)
    naviget(`/detailProduck/${id}`)
  }

  const handleScrollFeature = () => {
    if(refFeature.current) {
      const scrollPosition = refFeature.current.scrollLeft;
      const itemWidth = refFeature.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth)
      setCurentIndex(newIndex)
    }
  }


  const handleScrollRecomanded = () => {
    if(refRecomanded.current) {
      const scrollReco = refRecomanded.current.scrollLeft;
      const widtRef = refRecomanded.current.offsetWidth;
      const newIndex = Math.round(scrollReco / widtRef)
      setCurentIndexRecomanded(newIndex)
    }
  }




  const imageRecomanded = [
    {
      id:40,
      img : 'src/assets/Mask Group (5).png',
      nameProduck : 'White fashion hoodie',
      price : '$ 39.99'
    },
    {
      id:41,
      img : 'src/assets/Mask Group (6).png',
      nameProduck : 'Black fashion ',
      price : '$ 45.00'
    },
    {
      id:42,
      img : 'src/assets/Mask Group (5).png',
      nameProduck : 'White fashion hoodie',
      price : '$ 50.00'
    },
    {
      id:44,
      img : 'src/assets/Mask Group (6).png',
      nameProduck : 'Long Sleeve Dress',
      price : '$ 45.00'
    },
  ]


  return (
    <div className='w-full h-full overflow-auto px-4 pb-10 space-y-10 ' >
      {/* icon */}
        <div className='flex w-full items-center  mt-3 justify-between' >
            {
              menuTopBarHomeScreen.map((val, index) => (
                <div key={val.icon} className='w-14 h-14 flex items-center rounded-full justify-center p-2 border-2  ' >
                    <div className='w-full bg-[#3A2C27] rounded-full  h-full bg- text-white flex items-center justify-center' >
                        {val.icon}
                    </div>
                </div>
              ))
            }
        </div>
        {/* image */}
        <div>
            <div className='relative w-full flex justify-center  ' >
                <img className='object-cover w-full' src="/Mask Group copy.png" alt="" />
                <p className='absolute top-3 right-14 text-xl text-white font-bold' >Auntumn <br /> Colection <br /> 2021</p>
            </div>
        </div>
        {/* featur produck  */}
        <div>
            <div className='flex items-center mb-3 justify-between w-full' >
                <h1 className='font-bold text-xl' > Featur Produck </h1>
                <button className='text-xs text-gray-400 ' >Show ALl</button>
            </div>
            <div 
            ref={refFeature}
            onScroll={handleScrollFeature}
            className='flex overflow-x-auto hide-scrollbar snap-mandatory scroll-smooth hide scrollbar-hide gap-6'
            >
              {
                image_all_items.map((val, index) => (
                  <div onClick={() => handleDetailCard(val, val.id)} className='flex-none  ' >
                    <div className='mt-2' >
                        <img className='w-[126px] rounded-md h-[172px]' src={val.img} alt="" />
                        <h1 className='text-sm mt-3 text-gray-500 ' >{val.nameProduck}</h1>
                        <p className='font-bold' >{val.price}</p>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
        {/* section */}
        <div className='w-full flex items-center justify-between' >
              <div className='w-1/2 space-y-2 ' >
                  <h1 className='text-gray-500 text-xs' >| NEW COLLECTION</h1>
                  <h1 className='text-xl' >HANG OUT & PARTY</h1>
              </div>
            <div className='w-[45%] h-[150px] relative rounded-full bg-[#EDEDEE] p-4  ' >
                <div className='w-full h-full  bg-[#E2E2E2] rounded-full' >
                    <img className='absolute top-0' src="src/assets/image 64.png" alt="" />
                </div>
            </div>
        </div>
        <div 
        ref={refRecomanded}
        onScroll={handleScrollRecomanded}
        className='flex gap-8 hide-scrollbar overflow-x-auto scroll-smooth hide-scroll snap-mandatory'
        >
            {
              imageRecomanded.map((val, index) => (
                <div onClick={() => handleDetailCard(val, val.id)} className='flex-none items-center' >
                    <div className='flex items-center gap-5' >
                    <img  className='w-20 h-20 ' src={val.img} alt="" />
                    <div>
                        <h1 className='text-sm text-gray-500' >{val.nameProduck}</h1>
                        <p className='font-semibold' >{val.price}</p>
                    </div>
                    </div>
                </div>
              ))
            }
        </div> 
        <div className='' > 
          <div className='flex items-center mb-3 justify-between' >
              <h1 className='text-xl text-gray-500' >Top Collection </h1>
              <button className='text-gray-400 text-xs' >Show All</button>
          </div>
          <div className='w-full flex items-center justify-between' >
                <div className='w-1/2 space-y-3 px-7 ' >
                    <h1 className='text-gray-500 text-xs ' >Sale up to 40%</h1>
                    <h1 className='text-[20px] text-gray-600 ' >FOR SLIM & BEAUTY</h1>
                </div>
              <div className='w-[115px] h-[115px]  relative rounded-full p-  ' >
                  <div className='w-full h-full  bg-[#E2E2E2] rounded-full' >
                      <img className='absolute h-[120px] left-1/2 -translate-x-1/2 rounded-b-full -top-1' src="/homeScreen/image 48.png" alt="" />
                  </div>
              </div>
          </div>
          <div className='w-full flex items-end justify-between' >
                <div className='w-1/2 space-y-2 px-7 relative ' >
                    <h1 className='text-gray-500 absolute w-[200px] -top-7 text-xs  '  >| Summer Collection 2021</h1>
                    <h1 className='text-[20px] text-gray-600 ' >FOR SLIM & BEAUTY</h1>
                </div>
              <div className='w-[45%] h-[150px] relative rounded-full p-4  ' >
                  <img className='absolute top-0 h-[190px] ' src="src/assets/image 69.png" alt="" />
              </div>
          </div>
        </div>
        {/* card blog */}
        <div className='relative flex items-center justify-center w-full bg-white h-[194px]  rounded-md top-16' >
            <img className='absolute rounded-md right-0' src="src/assets/Mask Group(1).png" alt="" />
            <img className='absolute rounded-md left-0' src="src/assets/image 72 copy.png" alt="" />
            <div className='flex  justify-between items-start' >
                <div className='w-20 text-start' >
                    <h1 className='text-[13px] text-gray-400' >T-shirts</h1>
                    <p className='text-lg font-semibold ' >The Office Live</p>
                </div>
                <div className='w-20 relative left-3 text-start'  >
                    <h1 className='text-[13px] text-gray-400' >Dresss</h1>
                    <p className='text-lg font-semibold ' >Elegan Design</p>
                </div>
            </div>
        </div>
        <div className='h-16 w-full' ></div>
    </div>
  )
}

export default HomeScreen
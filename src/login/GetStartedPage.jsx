import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../DarkMode'

const GetStartedPage = () => {

  const [curent, setCurent] = useState(0)
  const scrollRef = useRef(null)

  
  const {darkMode} = useTheme()


  console.log('darkMode', darkMode);
  


  const imageScroll = [
    // { img : 'src/assets/kisspng-model-fashion-trousers-leather-european-and-american-fashion-beautiful-models-5aa8c749eb0b75 1.png'},
    { 
      img : 'src/assets/pngegg (1)_auto_x2 1.png',
      title : 'Discover Something New',
      subTitle : 'Special New Arrival just for you'
    },
    { 
      img : 'src/assets/fashion-png-7178 1.png',
      title : 'Update trendy Outfit',
      subTitle : 'Favorit  brands and hottest trend'
    },
    { 
      img : 'src/assets/pngegg (1)_auto_x2 1.png',
      title : 'Explore you true style',
      subTitle : 'Relax and let use bring style to you'
    },
  ]

  const handleScroll = () => {
    if(scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth)
      setCurent(newIndex)
    }
  }

  return (
    <div className={`w-full flex flex-col items-center justify-center relative h-[100dvh]`} >
        <div className=' w-[300px] mb-20 z-50 text-center ' >
          {
            imageScroll.map((val, index) => (
              curent ===  index && (
                <div key={val.title} >
                  <h1 className={`text-gray-500 font-bold text-xl`} > {val.title} </h1>
                  <p className='mt-3 text-gray-400 text-sm font-semibold' > {val.title} </p>
                </div>
              )
            ))
          }
           <div className='relative mt-5' >
              <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className='snap-x flex gap-5  overflow-x-auto snap-mandatory scroll-smooth scrollbar-hide'
              >
                {
                  imageScroll.map((val) => (
                    <div key={val.img} className='flex-none w-full snap-center' >
                        <div className='bg-[#E7E8E9] rounded-sm w-full flex pt-5 mt-10 justify-center h-auto ' >
                          <img className='max-w-full h-auto' src={val.img} alt="" />
                        </div>
                    </div>  
                  ))
                }
              </div>
              <div className='flex justify-center gap-2 mt-7' >
                {
                  imageScroll.map((_, index) => (
                    <div 
                    key={index}
                    className={`h-2 rounded-full transition-all duration-1000 ${curent === index ? 'w-4 bg-gray-400' : 'w-2 bg-gray-400'} `}
                    ></div>
                  ))
                }
              </div>
           </div>
        </div>
        <div className='h-1/2 w-full absolute bottom-0 bg-[#464447]' >
        <Link to={'/layout'} >
            <button className='absolute bottom-12 left-1/2 -translate-x-1/2 border-white border text-white w-[180px] py-3 rounded-full bg-[#777779] ' >Shopping Now</button>
        </Link>
        </div>
    </div>
  )
}

export default GetStartedPage
import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import { IoBag } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const DetailsCard = () => {

const [clickButton, setClickButton] = useState({
  sizeProduck : 'M',
  colorProduck : 'bg-[#E7C0A7]',
  accor : true,
  accorReview : true,
  accorSemilar : true
})


  const color = [
    {
      clr : 'bg-[#E7C0A7]'
    },
    {
      clr : 'bg-black'
    },
    {
      clr : 'bg-[#EE6969]'
    },
  ]
  const size = [
    {
      size : 'M'
    },
    {
      size : 'XL'
    },
    {
      size : 'XXL'
    },
  ]
  const dataReview = [
    {
      id : '1',
      skala : '00%',
    },
    {
      id : '2',
      skala : '20%',
    },
    {
      id : '3',
      skala : '40%',
    },
    {
      id : '4',
      skala : '60%',
    },
    {
      id : '5',
      skala : '80%',
    },
  ]
  const dataREviewUser = [
    {
      message : "I love it. Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!"
    },
    {
      message : "I'm very happy with order, It was delivered on and good quality. Recommended!"
    },
  ]
  const dataSemilarProduck = [
    {
      merek : 'Gym Crop Top',
      price : '$ 39.99',
      img : 'public/image 55.png'
    },
    {
      merek : 'Gym Crop Top',
      price : '$ 39.99',
      img : '/Mask Group(6).png'
    },
    {
      merek : 'Gym Crop Top',
      price : '$ 39.99',
      img : 'public/image 55.png'
    },
    {
      merek : 'Gym Crop Top',
      price : '$ 39.99',
      img : '/Mask Group(6).png'
    },
    {
      merek : 'Gym Crop Top',
      price : '$ 39.99',
      img : 'public/image 55.png'
    },
  ]



  const handleClickSize = (value) => {
    setClickButton((e) => ({
      ...e,
      sizeProduck : value
    }))
  }

  const handleCickColor = (value) => {
    setClickButton((prev) => ({
      ...prev, 
      colorProduck : value
    }))
  }

  const handleClickAccor = () => {
    setClickButton(prev => ({
      ...prev,
    accor : !prev.accor
    }))
  }


  const handleAccorRevie = () => {
    setClickButton((val) => ({
      ...val,
      accorReview : !val.accorReview
    }))
  }


  const handleCLickSemilarProduck = () => {
    setClickButton((val) => ({
      ...val,
      accorSemilar : !val.accorSemilar
    }))
  }


  return (
    <div className='w-full h-[100dvh] p-3 space-y-6 ' >
      <div className="w-full relative max-h-[350px] ">
      <div className="flex absolute top-5 items-center justify-between w-full">
        <Link to={-1} ><AiOutlineLeft size={25} /></Link>
        <span className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <BiHeart size={25} className="fill-red-500" />
        </span>
      </div>
        <img
          src="/image 87.png"
          alt=""
          className="object-cover object-top  w-full max-h-[350px]"  
        />
      </div>
      <div className='flex items-start justify-between ' >
          <span>
              <h1 className='text-xl font-semibold ' >Spoartweart Set</h1>
              <h1 className='text-lg text-gray-500 ' >★★★★☆<span className='text-[12px] ml-1 ' >(83)</span></h1>
          </span>
          <h1 className='text-2xl font-semibold text-gray-500 ' >$ 80.00</h1>
      </div>
      <div className='flex w-full h-auto gap-16 pb-5  ' >
          <div className='flex-1 space-y-3 ' >
              <h1 className='text-[1.2em] text-gray-400' >Color</h1>
              <div className='flex items-center justify-between' >
                {
                  color.map((val, index) => (
                    <div onClick={() => handleCickColor(val.clr)} className={`w-8 h-8 rounded-full p-1 transition-all  ${clickButton.colorProduck === val.clr && 'bg-white scale-125 shadow-sm duration-500 ease-in-out '} `} >
                      <button className={`h-full w-full ${val.clr} rounded-full  `} ></button>
                    </div>
                  ))
                }
              </div>
          </div>
          <div className='flex-1 ' >
          <div className='flex-1 space-y-3 ' >
            <h1 className='text-[1.2em] text-gray-500' >Size</h1>
            <div className='flex items-center justify-between' >
                {
                  size.map((val, index) => (
                    <div onClick={() => handleClickSize(val.size) } className={`w-8 h-8 p-1 transition-all ${clickButton.sizeProduck === val.size && 'bg-[#515151] text-white shadow-lg duration-500 ease-in-out scale-125 flex items-center justify-center  rounded-full '}   `} >
                        <button className='h-full w-full text-[10px] rounded-full' >{val.size}</button>
                    </div>
                  ))
                }
            </div>
          </div>
          </div>
      </div>
      <div  className='w-full h-auto '>
      {/* sDescription */}
        <div className={`w-full   pb-5 ${!clickButton.accor && 'border-b'}`} >
          <div onClick={handleClickAccor} className='w-full flex items-center justify-between cursor-pointer' > 
              <h1 className='text-[1.2em] font-bold ' >Descriptions</h1>
              { clickButton.accor ? <AiOutlineDown size={20} /> : < AiOutlineRight  size={20} />}       
          </div>
          <div className={`transition-all duration-1000 ease-in-out origin-top ${clickButton.accor ? 'opacity-100 max-h-[200px] ' : 'opacity-0 max-h-0 scale-y-0 '}`} >
                <p className='text-justify text-sm text-gray-400  mt-2' >
                  Sportswear is no longer under culture, it is no longer indie 
                  or cobbled together as it once was. Sport is fashion today. 
                  The top is oversized in fit and style, may need to size down.
                </p>
          </div>
        </div>
          {/* revies */}
        <div className={`w-full mt-3 ${!clickButton.accorReview && 'border-b'} `} >
        <div onClick={handleAccorRevie} className={`w-full flex mt items-center overflow-hidden  pb-4 justify-between `} >
                    <h1 className='text-[1.2em] font-bold ' >Review</h1>
                    { clickButton.accorReview ? <AiOutlineDown size={20} /> : <AiOutlineRight  size={20} />}
                </div>
                <div className={`transition-all duration-1000 origin-top p-2 overflow-hidden transform ${clickButton.accorReview ? 'opacity-100 max-h-[1000px] overflow-y-auto  scale-y-100 ' : 'opacity-0 max-h-0 scale-y-0 duration-1000 '} `} >
                    <div className=' space-y-10 mt-2 ' >
                        <div className='shadow-[0_0_5px_rgba(0,0,0,0.2)] h-auto py-2 rounded-md p-2 space-y-5' > 
                          <div className='flex items-center justify-between'  >
                            <span className='flex items-center gap-2' >
                              <p className='text-3xl font-bold ' >4.9</p>
                              <p className='text-xs text-gray-500 ' >OUT OF 5</p>
                            </span>
                            <span className='text-end' >
                                <span className='text-2xl text-green-500' >★★★★★</span>
                                <p className='text-xs text-gray-400 ' >83 ratings</p>
                            </span>
                          </div>
                          <div>
                              {
                                dataReview.reverse().map((e) => (
                                  <div className='w-full flex items-center gap-3 ' >
                                    <p className='flex-1 flex items-center ' >{e.id} </p>
                                      <div className={`w-[90%] h-2 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.4)]`} >
                                          <span style={{ width: e.skala }} className={` h-full bg-green-700 rounded-full block`}  ></span>
                                      </div>
                                    <p className='flex-1 text-gray-500 ' >{e.skala}</p>
                                  </div>
                                ))
                              }
                          </div> 
                        </div>
                        <div className='space-y-5' >
                          <div className='flex w-full justify-between items-center' >
                              <h1 className='text-sm text-gray-400' >47 Reviews</h1>
                              <button className='text-gray-400' >WRITE A REVIEW</button>
                          </div>
                          {
                            dataREviewUser.map((val) => (
                              <div className='w-ful space-y-5 h-auto py-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] p-2 rounded-md ' >
                                  <div className='flex justify-between items-center ' >
                                    <div className='flex items-center gap-3 ' >
                                      <img src="/Mask Group (2) copy.png" alt="" className='h-12 w-12 rounded-full ' />
                                      <span className='space-y-2' >
                                          <h1 className='text-xl font-extralight' >Jennifer Rose</h1>
                                          <span className='text-xs text-green-500' >★ ★ ★ ★ ★</span>
                                      </span>
                                    </div>
                                    <p className='text-xs text-gray-400' >5m ago</p>
                                  </div>
                                  <p className='text-gray-400 text-xs text-justify' >  
                                      {val.message}
                                  </p>
                              </div>
                            ))
                          } 
                        </div>
                    </div>
                </div>
        </div>
        {/* semilar Produck */}
        <div className={`w-full mt-3 space-y-8 `} >
            <span onClick={handleCLickSemilarProduck} className='flex items-center justify-between' >
                <h1 className='text-xl font-bold' >Similar Product</h1>
                { clickButton.accorReview ? <AiOutlineDown size={20} /> : <AiOutlineRight  size={20} />}
            </span>
            <div className={`overflow-x-auto hide-scrollbar flex duration-1000 gap-5 scroll-smooth transition-all transform origin-top  ${clickButton.accorSemilar ? 'opacity-100 max-h-[500px] scale-y-100 ' : 'opacity-0 duration-1000 scale-y-0 max-h-0'}`} >
                  {
                    dataSemilarProduck.map((val) => (
                      <div className='flex-none' >
                          <img src={val.img} alt="" />
                          <span>  
                              <h1 className='text-[1rem]  ' >{val.merek}</h1>
                              <p className='text-lg font-bold ' >{val.price}</p>
                          </span>
                      </div>
                    ))
                  }
            </div>
            <div className='h-20' ></div>
        </div>
      </div>
      <div className='w-full h-20 text-white flex items-center justify-center rounded-[20px_20px_0_0] bg-black fixed bottom-0 left-1/2 -translate-x-1/2' >
          <h1 className='font-bold text-lg flex gap-3 border-b-2 border-white pb-5  ' > <IoBag size={25} /> Add To Cart</h1>
      </div>
    </div>
  )
}

export default DetailsCard
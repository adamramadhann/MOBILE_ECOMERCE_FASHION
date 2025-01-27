import React, { useEffect, useState } from 'react';
import { useCard } from '../SaveCardContext';
import { useNavigate } from 'react-router-dom';

const Search = React.forwardRef(({ data, onScroll }, ref) => {
  const {card,setCard} = useCard()
  const navigate = useNavigate()

  const handleClick = (selectCard, id) => {
    console.log(selectCard.price);
    setCard(selectCard)
    navigate(`/detailProduck/${id}`)
  }

  console.log("serchProduck", card);
  

  const dataProduck = data.produkAll.reduce((acc, value) => acc.concat(value.produck), []) 


  return (
    <div className='w-full overflow-y-auto hide-scrollbar h-[100dvh] '>
    <div className='w-full space-y-5' >
    <span className={`w-full flex items-center justify-between ${!data.populer.length && 'hidden'} `}>
        <h1 className='text-gray-500 text-xl font-bold'>Popular this week</h1>
        <button className='text-sm text-gray-400'>Show All</button>
      </span>
      <div
        ref={ref}
        onScroll={onScroll}
        className='flex  overflow-x-auto pb-3 hide-scrollbar snap-mandato ry scroll-smooth space-x-5'
      >
        {
          data?.populer?.map((val, index) => (
            <div onClick={() => handleClick(val, val.id)} key={index} className='flex-none '>
              <img className='w-[126px] rounded-md h-[162px] object-cover ' src={val.img} alt={val.nameProduck} />
              <h1 className='text-sm mt-2 font-semibold text-gray-600'>{val.nameProduck}</h1>
              <p className='text-xs text-gray-500'>{val.price}</p>
            </div>
          ))
        }
      </div>
    </div>
      <div className='space-y-5' >
        <span className={`text-gray-500 text-xl font-bold ${!data.produkAll.length && 'hidden'} `} >produck all</span>
          <div style={{ scrollBehavior: 'smooth' }} className='w-full hide-scrollbar flex overflow-x-auto scroll-smooth space-x-5' >
              {
                dataProduck.map((e) => (
                  <div onClick={() => handleClick(e, e.id)} className='flex-none  w-[120px]' >
                    {e.type}
                    <img className='w-[126px] rounded-md h-[162px]' src={e.img} alt="" />
                    <h1 className='text-sm mt-2 font-semibold text-gray-600' >{e.nameProduck}</h1>
                    <p className='text-xs text-gray-400' >{e.price}</p>
                  </div>
                ))
              }
          </div>
      </div>
    </div>
  );
});

export default Search;

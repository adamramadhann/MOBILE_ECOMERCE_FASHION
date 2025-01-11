import React, { useEffect, useState } from 'react';
import { useCard } from '../SaveCardContext';
import { useNavigate } from 'react-router-dom';

const Search = React.forwardRef(({ data, onScroll }, ref) => {
  const {card,setCard} = useCard()
  const navigate = useNavigate()

  const handleGetCard = () => {
    if(card) return setCard(data)
  }

  const handleClick = (selectCard, id) => {
    setCard({...selectCard})
    navigate(`/detailProduck/${id}`)
  }
  
  useEffect(() => {
    handleGetCard()
  }, [card])
  

  return (
    <div className='w-full overflow-y-auto hide-scrollbar h-[100dvh]  space-y-5'>
      <span className={`w-full flex items-center justify-between ${!data.length && 'hidden'} `}>
        <h1 className='text-gray-500'>Popular this week</h1>
        <button className='text-sm text-gray-400'>Show All</button>
      </span>
      <div
        ref={ref}
        onScroll={onScroll}
        className='flex  overflow-x-auto pb-3 snap-mandato ry scroll-smooth space-x-5'
      >
        {
          data.map((val, index) => (
            <div onClick={() => handleClick(val, val.id)} key={index} className='flex-none'>
              <img src={val.img} alt={val.nameProduck} />
              <h1 className='text-sm font-semibold text-gray-600'>{val.nameProduck}</h1>
              <p className='text-xs text-gray-500'>{val.price}</p>
            </div>
          ))
        }
      </div>
      <div className='w-ful h-[300px] ' >
        <h1 className='text-xl font-bold my-4' >Produck All</h1>
          <div className='w-full h-auto' >
          {
            data?.map((val) => (
            <div className='w-full grid grid-cols-2  ' >
              <div onClick={() => handleClick(val, val.id)} className='w-[126px] h-auto mx-auto grid gap-2  my-8 overflow-auto' >
                  <img src={val.img} alt="" />
                  <span className='' >
                    <h1 className='text-xs text-gray-600 ' >{val.id}</h1>
                    <p className='text-xs text-gray-400 mt-1  ' >$ {val.price}</p>
                    <p>★★★★☆<span className='text-xs pl-2' >(10)</span></p>
                  </span>
              </div>
            </div>
            ))
          }
          <div className='h-52'></div>
          </div>
      </div>
    </div>
  );
});

export default Search;

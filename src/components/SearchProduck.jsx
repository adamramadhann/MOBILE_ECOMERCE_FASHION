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

  const dataProduck = data.produkAll.reduce((acc, value) => acc.concat(value.produck), []) 
  
  useEffect(() => {
    handleGetCard()
  }, [card])
  

  return (
    <div className='w-full overflow-y-auto hide-scrollbar h-[100dvh]  space-y-10'>
    <div className='w-full space-y-5' >
    <span className={`w-full flex items-center justify-between ${!data.populer.length && 'hidden'} `}>
        <h1 className='text-gray-500'>Popular this week</h1>
        <button className='text-sm text-gray-400'>Show All</button>
      </span>
      <div
        ref={ref}
        onScroll={onScroll}
        className='flex  overflow-x-auto pb-3 snap-mandato ry scroll-smooth space-x-5'
      >
        {
          data?.populer?.map((val, index) => (
            <div onClick={() => handleClick(val, val.id)} key={index} className='flex-none'>
              <img src={val.img} alt={val.nameProduck} />
              <h1 className='text-sm font-semibold text-gray-600'>{val.nameProduck}</h1>
              <p className='text-xs text-gray-500'>{val.price}</p>
            </div>
          ))
        }
      </div>
    </div>
      <div className='space-y-5' >
        <span>ini data produck all</span>
                <div className='w-full flex overflow-x-auto scroll-smooth space-x-5' >
                    {
                      dataProduck.map((e) => (
                        <div className='flex-none' >
                          {e.type}
                          <img src={e.img} alt="" />
                          <h1>{e.nama_produck}</h1>
                        </div>
                      ))
                    }
                </div>
      </div>
    </div>
  );
});

export default Search;

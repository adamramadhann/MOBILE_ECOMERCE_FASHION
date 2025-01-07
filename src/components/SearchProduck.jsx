import React, { useState } from 'react';

const Search = React.forwardRef(({ data, onScroll }, ref) => {

  return (
    <div className='w-full overflow-hidden space-y-5'>
      <span className='w-full flex items-center justify-between'>
        <h1 className='text-gray-500'>Popular this week</h1>
        <button className='text-sm text-gray-400'>Show All</button>
      </span>
      <div
        ref={ref}
        onScroll={onScroll}
        className='flex hide-scrollbar overflow-x-auto snap-mandatory scroll-smooth space-x-5'
      >
        {
          data?.map((val, index) => (
            <div key={index} className='flex-none'>
              <img src={val.img} alt={val.nameProduck} />
              <h1 className='text-sm font-semibold text-gray-600'>{val.nameProduck}</h1>
              <p className='text-xs text-gray-500'>{val.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
});

export default Search;

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeadersCheckout from '../../components/HeadersCheckout'
import { MdDelete } from 'react-icons/md'

const MyCard = () => {
    const [amount, setAmount] = useState({})
    const [filterCard, setFilterCard] = useState([])
    const [selectCard, setSelectCard] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    const handleFilterData = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('card')) || []
    // setProduckCheckout(getProduckCheckout)
    // console.log(produckCheckout);
    
    setFilterCard(dataCheckout)
    console.log(filterCard);
    
    }

    const handleNextStep = (e) => {
        e.preventDefault()
        if (!selectCard.length) {
            alert('card not a select')
        } else {
            navigate('/checkout')
        }
    }

    const handleSelectCard = (id) => {
        setSelectCard((prev) => prev.includes(id) ? prev.filter(item => item !== id ) : [...prev,id] )
        console.log('ini select card',selectCard);         
    }

    const handleDeleteCard = (e) => {
        e.preventDefault()
        const updateData = filterCard.filter((val) => !selectCard.includes(val.id))
        localStorage.setItem('card',JSON.stringify( updateData))
        setFilterCard(updateData)
        setSelectCard([])
    }    

    const handleAmountByProduck = (id, items) => {
        setAmount((val) => ({
            ...val,
            [id] : Math.max((val[id] || 1) + items, 1)
        }))
    }



    useEffect(() => {
        handleFilterData()

        const totalpriceCard = filterCard.filter((val) => selectCard.includes(val.id))
        .reduce((val, item) => val + (amount[item.id] || 1) * parseFloat(item.price.replace('$', '').trim()), 0) 
        setTotalPrice(totalpriceCard)



        const selectCardCheckout = filterCard.filter((val) => selectCard.includes(val.id))
        localStorage.setItem('checkout_produck', JSON.stringify(selectCardCheckout))
        localStorage.setItem('total_price',JSON.stringify(totalPrice))
        localStorage.setItem('amount', JSON.stringify(amount))
        console.log('selectProduck', selectCardCheckout);
    }, [selectCard, amount])

    useEffect(() => {
        localStorage.setItem('total_price',JSON.stringify(totalPrice))
    },[totalPrice])

    console.log({totalPrice, selectCard});
    

  return (
    <div className='  space-y-16 relative overflow-y-auto p-5 w-full h-[100dvh]' >
        <HeadersCheckout path={-1} title={'My Card'} />
        <button className={`absolute -top-10 right-5 text-red-500 w-auto h-auto p-3 bg-white shadow-[0_6px_2px_rgba(0,0,0,0.2)] active:border active:shadow-sm rounded-full ${!selectCard.length && 'hidden'} `} onClick={handleDeleteCard} ><MdDelete size={20} /></button>
       <div className='w-full   space-y-7 ' >
             {/* card */}
        <div className='w-full h-full hide-scrollbar  space-y-10 pb-5 overfluto ' >
        {
            !filterCard.length ? (
                <h1 className='text-center font-bold text-xl' >Your Not Card</h1>
            ) : filterCard.map((val) => (
                <div className='flex w-full h-auto gap-3 rounded-2xl bg-white  pr-1 shadow-lg' >
                    <span className='w-24 object-cover rounded-bl-2xl rounded-tl-2xl h-24 flex-shrink-0 block' >
                        <img src={val.img} className='object-cover w-full h-full object-top rounded-bl-2xl rounded-tl-2xl ' alt="" />
                    </span>
                    <div className='w-full flex ' >
                        <div className='flex w-full justify-between' >
                            <div className='grid gap-' >
                                <span>
                                    <h1 className='text-lg text-gray-600' >{val.nameProduck}  </h1>
                                    <p className='text-gray-500'  >{val.price}</p>
                                </span>
                                <span className='text-xs text-gray-400 ' >Size: {val.size} | color: {val.color}</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 items-center' >
                            <input onChange={() => handleSelectCard(val.id)} checked={selectCard.includes(val.id)}  type="checkbox" className='w-5 h-5' />
                            <div className='flex items-center justify-between border-2 w-20  px-2 text- h-7 rounded-full' >
                                <button onClick={() => handleAmountByProduck(val.id, -1)} >-</button>
                                <p className='text-sm' >{amount[val.id] || 1}</p>
                                <button onClick={() => handleAmountByProduck(val.id, 1)} >+</button>
                            </div>
                        </div>
                    </div>
                </div>
        ))
        }
        </div>
        {/* information */}
        <div className='w-full mb-5 space-y-5' >
            {
                filterCard
                .filter((val) => selectCard.includes(val.id))
                .reverse()
                .map((val) => (
                    <div className='w-full border-b pb-4 flex items-center justify-between' >
                        <p className='text-sm text-gray-400 font-bold'   >{val.nameProduck} || {amount[val.id] || 1}pcs</p>
                        <p className='text-sm text-gray-500 font-bold'   >$ {(val.price.replace('$', '')) * (amount[val.id] || 1)}.00</p>
                    </div>
                ))
            }
           {
                !filterCard && (
                    <div className='w-full pb-4 flex items-center justify-between' >
                    <p className='text-xl text-gray-700 font-bold' >Total</p>
                    <p className='text-xl text-gray-700 font-bold'  >$ {totalPrice}</p>
                </div>
                )
           }
        </div>
       </div>
        <button onClick={handleNextStep} className='w-[95%] my-3 rounded-full py-3 bg-[#343434] text-white' >{selectCard.length > 0 ? 'Proceed to checkout' : 'Select to produck'}</button>
    </div>
  )
}

export default MyCard
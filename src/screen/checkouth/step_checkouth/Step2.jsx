import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsCashCoin, BsCreditCard2FrontFill, BsCreditCardFill } from 'react-icons/bs';
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const payment = [
    {
        id: 1,
        img: <BsCashCoin  size={25} />,
        pay: 'Cash',
        card : [
            {
                card_image : '/image copy 9.png',
                no_virtual_acount : '',
                title : 'Prepare the exact money and please wait for your goods'
            }
        ]
    },
    {
        id: 2,
        img: <BsCreditCardFill  size={25} />,
        pay: 'Credit Card',
        card : [
            {
                card_image : '/image copy 4.png',
                no_virtual_acount : '123456789012345',
             },
            {
                card_image : '/image copy.png',
                no_virtual_acount : '987654321098765',
            },
            {
                card_image : '/image copy.png',
                no_virtual_acount : '102938475610283',
            },
        ]
        
    },
    {
        id: 3,
        img: <BsCreditCard2FrontFill  size={25} />,
        pay: 'QRIS',
        card : [
            {
                card_image : '/image copy 8.png',
                no_virtual_acount : '564738291065432',
            },
            {
                card_image : '/image copy 7.png',
                no_virtual_acount : '111223344556677',
            }
        ]
    }
];

const Step2 = () => {
    const [centerCard, setCenterCard] = useState(null);
    const [dataCheckout, setDataCheckout] = useState([]);
    const [amount, setAmount] = useState([]);
    const [agree, setAgree] = useState('');
    const containerRef = useRef(null);
    const navigate = useNavigate()
    
    const price = JSON.parse(localStorage.getItem('total_price'))
    const cardItem = JSON.parse(localStorage.getItem('checkout_produck'))

    const filterCheckout = cardItem.filter((val) => val.id !== cardItem.id)
    console.log('tex',filterCheckout);
    
    
    const getAmount = JSON.parse(localStorage.getItem('amount')) 
    console.log('amount',getAmount);
    
    


    const handleRemoveItem = (id) => {
        const filterCard = cardItem.filter((val) => val.id !== id)
        

        localStorage.setItem('checkout_produck', JSON.stringify(filterCard))
        localStorage.setItem('card', JSON.stringify(filterCard))

        setDataCheckout(filterCard)
        console.log('card berhasil di check : ', filterCard );
    }

    const handleSUbmit = (e) => {
        e.preventDefault()
        localStorage.setItem('step_2',JSON.stringify(agree))
        const filter = cardItem.filter((val) => val.id !== e)
        localStorage.removeItem(filter)
        navigate('/checkout/step3')
        handleRemoveItem(e.id)
    }
    
    

    const extendedPayment = Array(5).fill(payment).flat()
    
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        let closestIndex = null;
        let closestDistance = Infinity;

        const containerRect = container.getBoundingClientRect();
        const cards = container.querySelectorAll('.card');
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        const normalizedIndex = closestIndex % payment.length;
        setCenterCard(normalizedIndex);
    };






    const selectPayment = payment[centerCard] || null

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft = container.scrollWidth / 3;
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="mb-10 w-full full ">
            <div
                ref={containerRef}
                className="flex overflow-x-auto hide-scrollbar items-center gap-10 scroll-smooth"
            >
                {extendedPayment.map((val, index) => (
                    <div
                        key={`${val.id}-${index}`}
                        data-id={val.id}
                        className={`card w-[110px] rounded-md flex-none -z-10 px-2 pt-2 pb-1 flex items-center flex-col justify-center transition-transform duration-300 ${
                            index % payment.length === centerCard
                                ? 'scale-105 rounded-md text-white bg-[#585C60]'
                                : ' bg-white text-black '
                        }`} 
                    >
                        <span>{val.img}</span>
                        <h1
                            className={`text-sm font-semibold ${
                                index % payment.length === centerCard ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            {val.pay}
                        </h1>
                    </div>
                ))}
            </div>
            <div className='mt-7 flex flex-col overflow-hidden justify-center h-[300px] ' >
            {
                selectPayment && selectPayment.pay !== 'Cash' && (
                    <div>
                        <h1 className='text-lg text-gray-800 font-bold' >Choose your card</h1>
                    </div>
                )
            }
                <div className='flex w-full -mt-10 h-full hide-scrollbar items-center gap-10 overflow-x-auto' >
                    {
                        selectPayment && selectPayment.card.map((val) => (
                            <div className={`flex-none  ${selectPayment.pay === 'Cash' && 'flex items-center flex-col justify-center gap-6 w-full '}`} >
                                <img src={val.card_image} alt="" className={`w-[180px] ${selectPayment.pay === 'Cash' && 'w-[160px] mt-10  '}  ${selectPayment.pay === 'QRIS' && 'w-[160px] py-3  '} `} />
                                <p className='text-center font-semibold text-gray-400 ' >{val.title}</p>
                               <div className='-mt-3' >
                                    <p className={`flex-none text-sm font-bold text-gray-500  ${selectPayment.pay === 'Cash' && 'hidden  '}`} >Virtual Account</p>
                                    <span className='flex items-center justify-between' >
                                        <p className='font-semibold' >{val.no_virtual_acount}</p>
                                        <AiOutlineCopy className={`${selectPayment.pay === 'Cash' ? 'hidden' : ''}`} />
                                    </span>
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full mt-5 grid gap-3 ' >
                    <h1 className='text-lg text-gray-800 font-bold' >or check out with</h1>
                    <img src="/payments copy.png" className='mx-auto' alt="" />
                </div>
            <div className='w-full space-y-10 mt-20 ' >
                   {
                    cardItem.map((val) => (
                        <span className='flex items-center justify-between border-b pb-3 ' >
                            <h1 className='text-sm text-gray-500 font-bold' >{val.nameProduck}</h1>
                            <p className='text-sm text-gray-500 font-bold' >{(getAmount[val.id] && !isNaN(getAmount[val.id]) ? (val.price * getAmount[val.id]) : 0)}</p>
                        </span>
                    ))
                   }
                   {/* <span className='flex items-center justify-between border-b pb-3 ' >
                        <h1 className='text-sm text-gray-500 font-bold' >Shipping</h1>
                        <p className='text-sm text-gray-500 font-bold' >Shipping Freeship</p>
                   </span> */}
                   <span className='flex items-center justify-between border-b pb-3 ' >
                        <h1 className='text-lg text-gray-500 font-bold' >Subtotal</h1>
                        <p className='text-lg text-gray-500 font-bold' >$ {price} </p>
                   </span>
                <form onSubmit={handleSUbmit} >
                <span className='flex w-full gap-5 items-center' >
                    <input required type="checkbox" />
                    <p>I agree to Terms and conditions</p>
                </span>
                <button type='submit' className={`bg-[#343434] my-5 w-full py-3 rounded-full text-white `} >Continue to payment</button>
                </form>
            </div>
        </div>
    );
};

export default Step2;
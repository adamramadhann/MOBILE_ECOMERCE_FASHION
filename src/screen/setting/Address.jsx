import React, { useEffect, useState } from 'react'
import HeadersCheckout from '../../components/HeadersCheckout'
import { LuHotel } from 'react-icons/lu'
import { IoHomeOutline } from 'react-icons/io5'
import ModalAddress from '../../components/ModalAddress'

const Address = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectAddress, setSelectAddress] = useState('');
    const [location, setLocation] = useState('');
    const [valueAddress, setValueAddress] = useState({
        home: '',
        office: ''
    });

    const addressData = [
        {
            icon: <LuHotel size={40} />,
            location: 'office'
        },
        {
            icon: <IoHomeOutline size={40} />,
            location: 'home'
        },
    ];

    const handleModalActive = (loc, event) => {
        if (event) event.preventDefault();
        setLocation(loc);
        setModalActive(true);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSelectAddress(value);
        localStorage.setItem('selectAddress', JSON.stringify(value));
    };

    const handleInputChange = (e) => {
        setValueAddress((prev) => ({
            ...prev,
            [location]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAddress = { ...valueAddress, [location]: e.target.address.value };
        setValueAddress(newAddress);
        localStorage.setItem('address', JSON.stringify(newAddress));
        setModalActive(false);
    };

    useEffect(() => {
        const savedAddress = localStorage.getItem('address');
        if (savedAddress) {
            setValueAddress(JSON.parse(savedAddress));
        }

        const savedSelectAddress = localStorage.getItem('selectAddress');
        if (savedSelectAddress) {
            setSelectAddress(JSON.parse(savedSelectAddress));
        }
    }, []);

    return (
        <div className='p-5 relative'>
            {/* Modal Address */}
            <ModalAddress 
                handleSubmit={handleSubmit} 
                onChange={handleInputChange} 
                value={valueAddress[location] || ''} 
                isActive={modalActive} 
                setModalActive={setModalActive} 
            />

            <HeadersCheckout title={'Delivery Address'} />

            <div className='mt-20 space-y-16'>
                {addressData.map((val) => (
                    <form key={val.location} onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center  w-full'>
                        <div  className='flex items-center justify-between w-full' >
                        <input 
                            checked={selectAddress === val.location} 
                            value={val.location} 
                            name='address' 
                            onChange={handleChange} 
                            type="radio" 
                            className='h-5 w-5' 
                        />
                        <div className='flex w-full items-start justify-between'>
                            <div className='flex ml-3 items-center gap-5'>
                                {val.icon}
                                <span className='text-center'>
                                    <h1 className='text-gray-500 text-base'>SEND TO</h1>
                                    <p className='text-gray-700 font-bold text-base'>My {val.location}</p>
                                </span>
                            </div>
                            <button 
                                onClick={(e) => handleModalActive(val.location, e)} 
                                className='text-green-500 px-2 border-green-500 border-b'
                            >
                                Edit
                            </button>
                        </div>
                        </div>
                        <p className='text-sm text-start  relative left-0  text-gray-400'>{valueAddress[val.location]}</p>
                    </form>
                ))}
            </div>
        </div>
    );
};

export default Address;

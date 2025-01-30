import React from 'react';

const ModalAddress = ({ isActive, setModalActive, value, onChange, handleSubmit }) => {
  
    const handleCloseModal = (e) => {
        e.preventDefault();
        setModalActive(false); 
    };

    if (!isActive) return null; 

    return (
        <div className='bg-black/30 w-full left-1/2 -translate-x-1/2 z-50 absolute top-0 h-[100dvh] flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='w-[80%] p-5 rounded-md relative bg-white h-auto space-y-5 flex items-center flex-col py-10'>
                <h1 className='text-xl font-bold'>Form Edit Address</h1>
                <label className='w-full text-sm' htmlFor="address">
                    Edit Your Address
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e)}
                        name="address"
                        id="address"
                        className='w-full text-sm text-gray-500 border-2 mt-3 border-gray-300 rounded-md outline-none p-3 h-[60px]'
                    />
                </label>
                <button className='w-full py-2 text-sm rounded-md bg-blue-500 text-white'>Submit</button>
                <button onClick={handleCloseModal} className='text-red-500 absolute font-bold -top-2 right-4'>X</button>
            </form>
        </div>
    );
};

export default ModalAddress;

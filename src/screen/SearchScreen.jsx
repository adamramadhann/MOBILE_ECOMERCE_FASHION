import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import Search from '../components/SearchProduck'
import { useOutletContext } from 'react-router-dom';
import { combinedData } from '../data/data';




     

const SearchScreen = () => {
    const [activAcc, setActiveAcc] = useState(null)
    const [inputSearch, setInputSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filterData, setFileterData] = useState(combinedData)
    const searchContainerRef = useRef(null)
    const [data, setData] = useState([])
    const [curent, setCurent] = useState(0)
    const refProduckScroll = useRef()
    const { handleOpenModal } = useOutletContext()


    const { hideHeaderHome, setInputSearche} = useOutletContext()

    console.log(searchValue);
    
  

    const cardDetail = [
        {
            card: 'CLONING',
            img: '/image 51.png',
            bg: 'bg-[#BBBFAE]', 
            items: [
                { jenis: 'Switer', items: '125 itsms' },
                { jenis: 'Jacket', items: '105 itsms' },
                { jenis: 'Levis', items: '90 itsms' },
            ]
        },
        {
            card: 'ACCESSORIES',
            img: '/Mask Group(2).png',
            bg: 'bg-[#A3A798]',
            items: [
                { jenis: 'Tas', items: '125 itsms' },
                { jenis: 'Jam', items: '105 itsms' },
                { jenis: 'Emas', items: '90 itsms' },
            ]
        },
        {
            card: 'SHOES',
            img: '/shoes2.png',
            bg: 'bg-[#44565C]',
            items: [
                { jenis: 'Sepatu', items: '125 itsms' },
                { jenis: 'Sandal', items: '105 itsms' },
                { jenis: 'Topi', items: '105 itsms' },
            ]
        },
        {
            card: 'COLLECTION',
            img: '/Mask Group(3).png',
            bg: 'bg-[#B9AEB2]',
            items: [
                { jenis: 'Switer', items: '125 itsms' },
                { jenis: 'tas', items: '105 itsms' },
                { jenis: 'sepatu', items: '90 itsms' },
            ]
        },
    ]
 
    const handleSerch = (value) => {
        const filterDataProduckPopuler = combinedData.populer.filter((prev) => {
            return prev.nameProduck.toLowerCase().includes(value.toLowerCase())
        })

        const dataProduckAll = combinedData.produkAll.reduce((acc, curr) => {
            const filterDataAll =  curr.produck.filter(item => item.nameProduck.toLowerCase().includes(value.toLowerCase()))

            if(filterDataAll.length > 0)  {
                acc.push({
                    type : curr.type,
                    produck : filterDataAll
                })
            }
            return acc
        }, [])

        setFileterData( (val => ({
            ...val,
            populer : filterDataProduckPopuler ,
            produkAll: dataProduckAll
        })) )

    }

    const handleScroll = () => {
        if(refProduckScroll.current) {
            const scrollPosition = refProduckScroll.current.scrollLeft;
            const widthScroll = refProduckScroll.current.offsetWidth;
            const newIndex = Math.round( scrollPosition / widthScroll )
            setCurent(newIndex)
        }
    }

    const handleSearchValue = (e) => {
        if (e.target) {  
            const searchTerm = e.target.value;
            setSearchValue(searchTerm);
            handleSerch(searchTerm); 
            setInputSearche(true);
            
        }
        console.log(e);
    }


    const handleRemoveLocalStorage = (e) => {
        e.preventDefault()
        localStorage.removeItem('searchData')
        setData([])
    }


    const handleDeleteSinggle = (itemRemove) => {
        const dataLocal = JSON.parse(localStorage.getItem('searchData')) || []
        const update = dataLocal.filter((prev) => prev !== itemRemove)

        setData(update)
        localStorage.setItem('searchData', JSON.stringify(update))
    }
    

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setInputSearch(false)
            }
        }

        const savedSearch = localStorage.getItem('searchValue')
        if (savedSearch  && savedSearch.trim() !== '') {
            setSearchValue(savedSearch)
        }

        
        const savedData = localStorage.getItem('searchData')
        if (savedData) {
            try {
                setData(JSON.parse(savedData)) 
            } catch (error) {
                console.error("Error parsing saved data:", error)
            }
        }

        handleClickOutside()
    }, [])


    useEffect(() => {
        if (searchValue.trim() !== '') {
            localStorage.setItem('searchValue', searchValue)
        }
    }, [searchValue])


    useEffect(() => {
        if (data.length > 0) {
            try {
                localStorage.setItem('searchData', JSON.stringify(data))
            } catch (error) {
                console.error("Error saving data:", error)
            }
        }
    }, [data])

    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);
    

    return (
        <div className={`w-full  fixed  h-full flex overflow-hidden smooth-scroll-container flex-col items-center hide-scroll space-y-5 ${activAcc ? 'overflow-auto' : 'overflow-hidden'}`}>
            <div className='flex w-full items-center justify-center mt-2 gap-2'>
            <button onClick={() => setInputSearch(false)} className={`p-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] ${inputSearch ? 'blcok' : 'hidden'} `}>
                    <AiOutlineLeft size={20} />
            </button>
                <div className='flex items-center gap-2 p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
                    <AiOutlineSearch size={20} />
                    <input
                        onClick={() => { setInputSearch(true) }}
                        type="search"
                        placeholder='Search'
                        className='text-sm text-gray-500 outline-none'
                        value={searchValue}
                        onChange={handleSearchValue}
                    />
                </div>
                <button onClick={() => handleOpenModal(inputSearch)}  className='p-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
                    <BiGitCompare size={20} />
                </button>
            </div>
            {
                !inputSearch && (
                    <div className={`flex flex-col gap-2 xl:gap-20 `}>
                        {cardDetail.map((val, index) => (
                            <div key={index}>
                                <div
                                    onClick={() => setActiveAcc(activAcc === index ? null : index)}
                                    className={`w-[311px] cursor-pointer flex items-center justify-center relative h-[126px] ${val.bg}`}
                                >
                                    <h1 className={`absolute left-5 text-xl font-bold text-white ${activAcc === index ? 'block' : 'hidden'}`}>{val.card}</h1>
                                    <div className='absolute top-1/2 -translate-y-1/2 right-1'>
                                        <div className='bg-[#BBBFAE] bg-opacity-25 w-[105px] p-3 h-[105px] rounded-full'>
                                            <div className='bg-[#C2C7B5] bg-opacity-25 w-full h-full rounded-full'></div>
                                        </div>
                                    </div>
                                    <img className='absolute right-0' src={val.img} alt="" />
                                </div>
                                <div className={`h-[400px] w-full transition-all duration-1000 ease-in-out origin-top ${activAcc === index ? 'opacity-100 max-h-[250px] py-3' : 'opacity-0 max-h-0 scale-y-0'}`}>
                                    {val.items.map((e, idx) => (
                                        <div key={idx} className='flex items-center pt-10 justify-between'>
                                            <h1>{e.jenis}</h1>
                                            <button className='flex items-center text-sm'>{e.items} <AiOutlineRight /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }

            {
                inputSearch && (
                    <div className='w-full' >
                        <div className={`w-full px-3 overflow-hidden  `} >
                            <div className={`w-full `} >
                                    <div className={`w-full flex justify-between ${!data.length && 'hidden'} `} >
                                        <h1 className='text-lg text-gray-600 ' >Recent Searches</h1>
                                        <button onClick={handleRemoveLocalStorage} className='text-red-500' ><AiOutlineDelete size={18} /></button>
                                    </div>
                                    <div className='flex max-h-[150px]  overflow-auto hide-scrollbar ' >
                                        {data.length > 0 && (
                                            <div className='flex flex-wrap gap  rounded-full items-center gap-3' >
                                                {data.map((item, index) => (
                                                <div onClick={() => handleSearchValue({ target: { value: item } })} className='flex border items-center w-auto px-3 py-1 rounded-full gap-3 ' >
                                                        <h1 key={index} className='text-sm select-none ' >{item}</h1> 
                                                        <button onClick={() => handleDeleteSinggle(item)} className='text-red-500 font-bold ' >X</button>
                                                </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                            </div>
                            <Search
                                ref={refProduckScroll}
                                data={filterData}
                                onScroll={handleScroll}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SearchScreen

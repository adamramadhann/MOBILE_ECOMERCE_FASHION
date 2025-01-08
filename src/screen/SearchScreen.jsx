import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import Search from '../components/SearchProduck'



const dataProduck = [
    {
    img : '/Mask Group (1) copy.png',
    nameProduck : 'Skrit Dress',
    price : '$ 34.00'
    },
    {
    img : '/Mask Group (2) copy.png',
    nameProduck : 'Lihua Tonic White',
    price : '$ 53.00'
    },
    {
    img : '/Mask Group (1) copy.png',
    nameProduck : 'Lihua Tonic White',
    price : '$ 53.00'
    },
    {
    img : '/Mask Group (2) copy.png',
    nameProduck : 'Lihua Tonic White',
    price : '$ 53.00'
    },
    {
    img : '/Mask Group (1) copy.png',
    nameProduck : 'Lihua Tonic White',
    price : '$ 53.00'
    },
    {
    img : '/Mask Group (2) copy.png',
    nameProduck : 'Lihua Tonic White',
    price : '$ 53.00'
    },
]


const dataProduckAll = [
    {
        type: 'accessories',
        produck: [
            { nama_produck: 'Kalung Emas', brand: 'Tiffany & Co.' },
            { nama_produck: 'Gelang Berlian', brand: 'Cartier' },
            { nama_produck: 'Anting Berlian', brand: 'Swarovski' },
            { nama_produck: 'Jam Tangan', brand: 'Rolex' }
        ]
    },
    {
        type: 'pakaian',
        produck: [
            { nama_produck: 'Kaos Lengan Panjang', brand: 'Zara' },
            { nama_produck: 'Kemeja Formal', brand: 'H&M' },
            { nama_produck: 'Jaket Bomber', brand: 'Uniqlo' },
            { nama_produck: 'Sweater Hoodie', brand: 'Nike' }
        ]
    },
    {
        type: 'celana',
        produck: [
            { nama_produck: 'Celana Jeans', brand: 'Levi\'s' },
            { nama_produck: 'Celana Chinos', brand: 'Dockers' },
            { nama_produck: 'Celana Pendek', brand: 'Adidas' },
            { nama_produck: 'Celana Jogger', brand: 'Puma' }
        ]
    },
    {
        type: 'beauty',
        produck: [
            { nama_produck: 'Lipstik Matte', brand: 'MAC' },
            { nama_produck: 'Foundation', brand: 'Fenty Beauty' },
            { nama_produck: 'Masker Wajah', brand: 'L\'Oreal' },
            { nama_produck: 'Parfum', brand: 'Chanel' }
        ]
    },
    {
        type: 'sepatu_sandal',
        produck: [
            { nama_produck: 'Sepatu Sneaker', brand: 'Adidas' },
            { nama_produck: 'Sepatu Formal', brand: 'Gucci' },
            { nama_produck: 'Sandal Santai', brand: 'Havaianas' },
            { nama_produck: 'Sepatu Boots', brand: 'Timberland' }
        ]
    }
];      

const SearchScreen = () => {
    const [activAcc, setActiveAcc] = useState(null)
    const [inputSearch, setInputSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [clickValueINput, setClickValueInput] = useState(false)
    const [filterData, setFileterData] = useState(dataProduck)
    const [filterDataAll, setFileterDataAll] = useState(dataProduckAll)
    const searchContainerRef = useRef(null)
    const [data, setData] = useState([])
    const [curent, setCurent] = useState(0)
    const refProduckScroll = useRef()
  

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
        const filterDataProduck = dataProduck.filter((prev) => {
            return prev.nameProduck.toLowerCase().includes(value.toLowerCase())
        })


        const dataAll = dataProduckAll.map((val) => {
            const filterDataAll = val.produck.filter((prev) =>  {
                return prev.nama_produck.toLowerCase().includes(value.toLowerCase())
            })
            return {...val, produck : filterDataAll}
        })


        setFileterData([
            filterDataProduck,
            dataAll.flatMap((prev) => prev.produck  )
        ])
    }





    const handleScroll = () => {
        if(refProduckScroll.current) {
            const scrollPosition = refProduckScroll.current.scrollLeft;
            const widthScroll = refProduckScroll.current.offsetWidth;
            const newIndex = Math.round( scrollPosition / widthScroll )
            setCurent(newIndex)
        }
    }


    const handleSaveLocalStorage = (e) => {
        e.preventDefault()
        if (searchValue.toLocaleLowerCase().trim()) {
            setData(prevData => {
                const newData = [...prevData, searchValue]
                localStorage.setItem('searchData', JSON.stringify(newData)) 
                return newData
            })
            setSearchValue('') 
        }
    }

    const handleSearchValue = (e) => {
        if (e.target) {  
            const searchTerm = e.target.value;
            setSearchValue(searchTerm);
            handleSerch(searchTerm); 
            // setClickValueInput(true)
        }
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
        if (savedSearch && typeof savedSearch === String && savedSearch.trim() !== '') {
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

    console.log(data);
    
    

    return (
        <div className={`w-full h-full flex smooth-scroll-container flex-col items-center hide-scroll space-y-5 ${activAcc ? 'overflow-auto' : 'overflow-hidden'}`}>
            <div className='flex w-full items-center justify-center mt-2 gap-2'>
            <button onClick={() => setInputSearch(false)} className={`p-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] ${inputSearch ? 'blcok' : 'hidden'} `}>
                    <AiOutlineLeft size={20} />
            </button>
                <div className='flex items-center gap-2 p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
                    <AiOutlineSearch size={20} />
                    <input
                        onClick={() => { setInputSearch(true) }}
                        // onBlur={() => { if (searchValue.trim() === '') setInputSearch(false) }}
                        type="search"
                        placeholder='Search'
                        className='text-sm text-gray-500 outline-none'
                        value={searchValue}
                        onChange={handleSearchValue}
                    />
                </div>
                <button onClick={handleSaveLocalStorage} className='p-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
                    <BiGitCompare size={20} />
                </button>
            </div>


            {
                !inputSearch && (
                    <div className={`flex flex-col gap-2`}>
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

                                {/* Menampilkan div dengan detail items */}
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
                    <div>
                        <div className={`w-full px-3 space-y-4 overflow-hidden ${clickValueINput ? 'hidden' : 'block'} `} >
                       <div className={`w-full ${data.length ? 'block' : 'hidden'}`} >
                            <div className='w-full flex justify-between' >
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
                        <div>
                            {
                                filterDataAll.map((val) => (
                                    <div>
                                        {
                                            val.produck.map((e) => (
                                                <h1>{e.brand}</h1>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SearchScreen

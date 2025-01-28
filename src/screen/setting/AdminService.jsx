import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const AdminService = () => {

    const [chatUser, setChatUser] = useState('')
    const [historyChat, setHistoryChat] = useState([])
    const chatEndRef = useRef(null);

    const handleSaveLocal = () => {
        if(chatUser.trim()) {
            const time = new Date().toLocaleTimeString()
            const historyChats = [...historyChat, { message : chatUser, date : time}]
            localStorage.setItem('chat_user', JSON.stringify(historyChats))
            setHistoryChat(historyChats)
            setChatUser('')
        }
    }


    useEffect(() => {
        const parse = JSON.parse(localStorage.getItem('chat_user')) || [];
        if(Array.isArray(parse)) {
            setHistoryChat(parse)
        }
    }, [])    

    useEffect(() => {
        if(chatEndRef.current) {
            chatEndRef.current.scrollIntoView({behavior : 'smooth'})
        }
    }, [historyChat])

    

  return (
    <div className='w-full h-[100dvh] ' >
        <div className='flex items-center border-b p-5 justify-between' >
            <Link to={-1} >
                <AiOutlineLeft/>
            </Link>
            <div>
                <img src="" alt="" />
                <h1>Admin</h1>
                <span></span>
            </div>
            <div></div>
        </div>
        <div className=' space-y-10 ' >
          <div  className='w-full space-y-10 p-5 h-[550px] overflow-y-auto '>
            <div className='relative w-fulls  space-y-3 ' >
                    <span className='w-[85%] block relative  text-xs pl-3 py-3 bg-[rgb(151,151,255)] text-white rounded-md ' >
                        Hallo! Can I help You ?
                        <p className=' absolute right-3  bottom-0 text-[10px]' >Today, 70:22pm</p>
                    </span>
                    <span className="admin_triangle absolute -top-[2px] -z-50 -left-3"></span>
                </div>
                    {
                        historyChat.map((val) => (
                            <div className='relative flex-none space-y-3 flex w-full justify-end flex-col items-end ' >
                                <span className='w-[85%] block relative text-xs pl-3 py-3 bg-[#E6E8EC] rounded-md ' >
                                    {val.message}
                                    <p className='text-[10px] absolute bottom-0 right-3 ' >{val.date}</p>
                                </span>
                                <span className="triangle absolute top-2 -z-50 -right-3  "></span>
                            </div>
                        ))
                    }
                    <div ref={chatEndRef} />
        </div>
            <div className='absolute  left-1/2 -translate-x-1/2 bottom-0 px-5 border-t w-full gap-2 flex py-3' >
                <input value={chatUser} onChange={(e) => setChatUser(e.target.value)} type="text" className='border rounded-sm flex-1 h-10 outline-none pl-3' placeholder='send your message'  />
                <button onClick={handleSaveLocal} className='w-10 h-10 flex items-center rounded-md justify-center bg-black text-white' >
                    <AiOutlineRight/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default AdminService
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div 
    className='h-[100dvh] relative w-screen object-cover ' 
    style={{
        backgroundImage:'url("src/assets/image 45.png")',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
        }}  
    >
        <div className='w-full h-full bg-black/60' >
            <div className='text-white flex flex-col gap-20  absolute bottom-16 w-full h-auto text-center ' >
                <span className='space-y-5' >
                    <h1 className='text-2xl font-bold' > Welcome to GemStore! </h1>
                    <h2 className='text-sm font-bold' > The home for a fashionista </h2>
                </span>
                <Link to={'/getStarted'} >
                    <button className='border-white border px-12 py-3 rounded-full bg-[#777779] ' >Get Started</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
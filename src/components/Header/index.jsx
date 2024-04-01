import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <div className='fixed z-40 flex flex-col items-center content-center bg-white w-full py-2 md:py-4 top-0 left-0 border-b border-gray-200'>
        <div className='flex justify-between overflow-x-auto flex-wrap items-center max-w-7xl w-full px-4'>
            <Link to={'/'} className="font-semibold text-xl whitespace-nowrap">Technical Test Salwa</Link>
            <Link to={'/cart'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>
        </div>
    </div>
  )
}

export default Header
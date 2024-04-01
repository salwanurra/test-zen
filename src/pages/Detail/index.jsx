import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../../store/products/CartSlice'

const Detail = () => {
  const [confirm, setConfirm] = useState()
  const state = useLocation().state
  const dispatch = useDispatch()

  const desc = state.description.split(',')

    const handleCart = async (e) => {
      e.preventDefault()
      dispatch(addToCart({
        id: state.id,
        title: state.title,
        brand: state.brand,
        image: state.images[0],
        price: state.price
      }))
      setConfirm("Product dimasukkan keranjang")
    };

  return (
    <div className='w-11/12 md:w-4/5 mx-auto my-10'>
      <div className='flex gap-4'>
        <img src={state.images[0]} className="w-60 h-60 object-contain" alt={state.title}/>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-xl'>{state.title}</h2>
          <h4 className='font-semibold'>{state.brand}</h4>
          {desc.map((i) => (
            <p>{i}</p>
          ))}
          <h3 className='text-lg font-semibold'>${state.price}</h3>
          <button
            onClick={(e) => handleCart(e)}
            className="w-full p-2 bg-gray-200 text-black font-semibold font-jost my-5 flex justify-center items-center rounded-md"
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <span>{confirm}</span>
        </div>
      </div>
    </div>
  )
}

export default Detail
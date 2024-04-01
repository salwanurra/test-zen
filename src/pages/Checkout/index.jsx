import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seLocation, useNavigate } from 'react-router-dom'
import { checkoutProduct, getCart } from '../../store/products/CartSlice'

const Checkout = () => {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(getCart())
    }, [dispatch])

    const handleCheckout = () => {
        dispatch(checkoutProduct())
        navigate('/')
    }

  return (
    <div className='my-10 w-1/2 mx-auto'>
        <h2 className='mb-4 font-bold text-lg'>Formulir Pembayaran</h2>
        <form action="" className='flex flex-col gap-5'>
            <input type="text" placeholder='Nama Penerima' className='border border-gray-300 p-4 rounded-md' />
            <input type="text" placeholder='Alamat Pengiriman' className='border border-gray-300 p-4 rounded-md' />
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h2>Total Product</h2>
                    <h2>{carts.length}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold'>Total Price</h2>
                    <h2 className='font-semibold'>$ {carts.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
                </div>
                <button onClick={handleCheckout} className='p-2.5 bg-blue-500 rounded-lg border-none text-white font-bold'>Confirm</button>
            </div>
        </form>
    </div>
  )
}

export default Checkout
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getProducts } from '../../store/products/ProductSlice';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
  return (
    <>
        <h2 className="text-center text-xl md:text-2xl font-bold mb-5 ">
              Our Best Seller
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
              {products?.map((item) => (
                <Link to={`/detail/${item.id}`} state={item} className="border border-gray-200 rounded-md">
                   <img src={item.images[0]} alt="img" className="w-44 h-44 object-cover" />
                    <div className="text-left p-3">
                        <p className=" font-bold text-sm line-clamp-1">{item.title}</p>
                        <p className="text-xs">{item.brand}</p>
                        <p className=" font-bold mt-2">${item.price}</p>
                    </div>
                </Link>
              ))}
            </div>
    </>
  )
}

export default Home
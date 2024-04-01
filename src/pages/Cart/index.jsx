import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React } from "react";
import { decrementQuantity, getCart, incrementQuantity, removeFromCart } from "../../store/products/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };

  const handleIncrementQuantity = id => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = id => {
    dispatch(decrementQuantity(id));
  };

  const totalPrice = () => {
    let total = carts?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return total
  }

  console.log(carts)

  return (
        <div className="">
          <div className="w-11/12 mx-auto ">
            <div className="mt-20">
              <div className="flex items-center justify-center space-x-6 mr-10">
                <Link to={'/'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </Link>
                <h2 className="text-center text-xl md:text-2xl font-bold text-center">
                  Cart
                </h2>
              </div>
                {!carts ? (
                    <div className="justify-center items-center mt-24">
                        <i
                        class="fa fa-shopping-cart text-6xl mt-8 mb-6"
                        aria-hidden="true"
                        ></i>
                        <div className="justify-center text-center items-center h-3/5 text-lg">
                        {" "}
                        Your shoping cart is empty
                        </div>
                    </div>
                ) : (
                    <div className="w-5/6 md:w-4/6 lg:w-3/6 mx-auto mt-4">
                        <div className="flex items-center justify-between">
                            <div className="text-left mt-5 ml-2 text-sm sm:text-xl ">
                            {" "}
                            Total = ${totalPrice()}
                            </div>
                            <div className="  mt-5 ml-auto mr-2 ">
                            <Link to={'/checkout'} state={totalPrice()}
                                // onClick={() => handleCheckout()}
                                className="disabled:opacity-30 bg-[#cf6137] py-1 px-4 text-white font-base rounded-md text-sm sm:text-medium"
                            >
                                Checkout
                            </Link>
                            </div>
                        </div>
                        <div className="my-8 rounded-md bg-white flex flex-col gap-10">
                            {carts?.map((cart) => (
                            <div className="flex justify-around">
                            <img src={cart.image} alt="img" className="w-36 h-36 object-cover" />
                            <div className="w-1/2 text-left relative flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                <h2 className=" text-sm sm:text-base font-bold line-clamp-2 order-last sm:order-none">{cart.title}</h2>
                                <button
                                    onClick={() => handleRemoveFromCart(cart.id)}
                                    className="rounded-md  bg-[#cf6137]  text-white text-xs lg:text-sm font-medium px-1 h-8 w-7 hidden sm:block"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                    </svg>
                                </button>
                            
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <div>
                                            <button onClick={() => handleDecrementQuantity(cart.id)} className="text-lg w-8 border-2 hover:bg-[#cf6137]">
                                            -
                                            </button>
                                        </div>

                                        <div className=" text-base font-bold">
                                            {cart.quantity}
                                        </div>

                                        <div>
                                            <button onClick={() => handleIncrementQuantity(cart.id)} className="text-lg w-8 border-2 hover:bg-[#cf6137]">
                                            +
                                            </button> 
                                        </div>

                                    </div>
                                    
                                    <div className=" text-base font-bold order-first sm:order-none">
                                        ${cart.price * cart.quantity}
                                    </div>
                                </div>
                            </div>
                            </div>
                            ))}
                         </div>
                    </div>
                ) }
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20"></div>
            </div>
          </div>
        </div>
  );
}

export default Cart;
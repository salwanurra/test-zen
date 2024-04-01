import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/ProductSlice.js'
import cartReducer from './products/CartSlice.js'

export const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer,
    },
    devTools: true,
})
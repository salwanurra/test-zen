import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/all", async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/products`);
    console.log("All Product", response);
    return response.data.products;
  } catch (error) {
    throw error;
  }
});

// export const getDetailProduct = createAsyncThunk("product/detail", async ({ id }) => {
//   try {
//     const response = await axios.get(
//       `https://fakestoreapi.com/products/${id}`
//     );
//     console.log("Detail Product", response);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const getCategory = createAsyncThunk("product/category", async ({ category }) => {
//   try {
//     const response = await axios.get(
//       `https://fakestoreapi.com/products/category/${category}`
//     );
//     console.log("All Product", response);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    })
  },
});

export const productSelector = (state) => state.product;
export default productSlice.reducer;
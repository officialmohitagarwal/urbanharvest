import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Organic Apples",
      price: "$12",
      status: "Available",
    },
    {
      id: 2,
      name: "Fresh Carrots",
      price: "$8",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Avocados",
      price: "$15",
      status: "Available",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
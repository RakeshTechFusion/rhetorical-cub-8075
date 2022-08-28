import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    totalprice: (state, action) => {
      state.total = action.payload
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
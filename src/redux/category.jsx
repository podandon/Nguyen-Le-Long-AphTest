import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCategory: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
  },
});

export const { setProductCategory } = categorySlice.actions;

export default categorySlice.reducer;

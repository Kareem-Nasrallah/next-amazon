import { createSlice } from "@reduxjs/toolkit";
import { ProductCartType } from "../../type";

interface initialStateTyp {
  allProducts: ProductCartType[];
}

const initialState: initialStateTyp = {
  allProducts: [],
};

const allProductsSlice = createSlice({
  name: "allProductsSlice",
  initialState,
  reducers: {
    fullProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export default allProductsSlice.reducer;
export const allProductsActions = allProductsSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductsType from "../../type";

interface initialStateTyp {
  productData: ProductsType[];
  favoritData: ProductsType[];
  allProducts: ProductsType[];
  userInfo: null;
}

const initialState: initialStateTyp = {
  productData: [],
  favoritData: [],
  allProducts: [],
  userInfo: null,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      const isExistingProduct = state.productData.findIndex(
        (x) => x._id == action.payload._id
      );
      isExistingProduct
        ? state.productData[isExistingProduct].quantity++
         : state.productData.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

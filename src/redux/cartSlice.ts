import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "../../type";

interface initialStateTyp {
  cartProducts: ProductCartType[];
  allProducts: ProductCartType[];
  userInfo: null | string;
}

const initialState: initialStateTyp = {
  cartProducts: [],
  allProducts: [],
  userInfo: null,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      existingProduct
        ? (existingProduct.quantity += action.payload.quantity)
        : state.cartProducts.push(action.payload);
    },
    decreaseQuantity: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      existingProduct?.quantity == 1
        ? (existingProduct.quantity = 1)
        : existingProduct!.quantity--;
    },
    deleteProduct: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      state.cartProducts;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

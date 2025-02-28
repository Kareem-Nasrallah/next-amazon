import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "../../type";

interface initialStateTyp {
  cartProducts: ProductCartType[];
  allProducts: ProductCartType[];
}

const initialState: initialStateTyp = {
  cartProducts: [],
  allProducts: [],
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
        (product: ProductCartType) => product._id == action.payload._id
      );
      state.cartProducts.filter(
        (product: ProductCartType) => product._id !== existingProduct!._id
      );
    },
    resetCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

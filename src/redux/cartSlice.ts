import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "../../type";

interface initialStateTyp {
  cartProducts: ProductCartType[];
}

const initialState: initialStateTyp = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      if (existingProduct?.quantity == 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.cartProducts.find(
        (product: ProductCartType) => product._id == action.payload._id
      );
      state.cartProducts = state.cartProducts.filter(
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

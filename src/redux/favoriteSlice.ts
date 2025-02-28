import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCartType } from "../../type";

interface initialStateTyp {
  favoritData: ProductCartType[];
}

const initialState: initialStateTyp = {
  favoritData: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorit: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.favoritData.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      existingProduct
        ? (existingProduct.quantity += action.payload.quantity)
        : state.favoritData.push(action.payload);
    },
    decreaseQuantity: (state, action: PayloadAction<ProductCartType>) => {
      const existingProduct = state.favoritData.find(
        (x: ProductCartType) => x._id == action.payload._id
      );
      existingProduct?.quantity == 1
        ? (existingProduct.quantity = 1)
        : existingProduct!.quantity--;
    },
  },
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;

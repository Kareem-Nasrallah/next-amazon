import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface initialStateTyp {
  favoriteData: ProductType[];
}

const initialState: initialStateTyp = {
  favoriteData: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorit: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favoriteData.find(
        (x: ProductType) => x._id == action.payload._id
      );
      if (!existingProduct) {
        state.favoriteData.push(action.payload);
      }
    },
    removeFavProduct: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favoriteData.find(
        (product: ProductType) => product._id == action.payload._id
      );
      state.favoriteData = state.favoriteData.filter(
        (product: ProductType) => product._id !== existingProduct!._id
      );
    },
    resetFavorite: (state) => {
      state.favoriteData = [];
    },
  },
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;

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
      !existingProduct && state.favoriteData.push(action.payload);
    },
  },
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;

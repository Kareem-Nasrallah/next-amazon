import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import favoriteSlice from "./favoriteSlice";
import allProductsSlice from "./allProductsSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  favorite: favoriteSlice,
  allProducts: allProductsSlice,
});

export default rootReducer;

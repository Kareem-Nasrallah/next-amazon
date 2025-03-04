import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import favoriteSlice from "./favoriteSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  favorite: favoriteSlice,
});

export default rootReducer;

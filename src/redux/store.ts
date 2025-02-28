import { configureStore } from "@reduxjs/toolkit";
import favoriteReduser from "./favoriteSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReduser,
  },
});

export default store;

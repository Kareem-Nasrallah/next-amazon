import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  name: undefined | null | string;
  email: undefined | null | string;
  image: undefined | null | string;
}

const initialState: initialStateType = {
  name: null,
  email: null,
  image: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<initialStateType>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
    removeUser: (state) => {
      state.name = null;
      state.email = null;
      state.image = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

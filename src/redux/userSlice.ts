import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  userInfo: null | string;
}

const initialState: initialStateType = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

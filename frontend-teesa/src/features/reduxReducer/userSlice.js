import { createSlice } from '@reduxjs/toolkit';

//Estados
const initialState = {
  user: false,
  userData: {
    userId: null,
    userName: null,
    userType: null,
  },
};

// Slice Login
const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = true;
      state.userData.userId = action.payload.userId;
      state.userData.userName = action.payload.userName;
      state.userData.userType = action.payload.userType;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

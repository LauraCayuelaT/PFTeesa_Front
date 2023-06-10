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

      //Guardar data en el localStorage.

      // const userData = {
      //   userId: action.payload.userId,
      //   userName: action.payload.userName,
      //   userType: action.payload.userType,
      // };

      // localStorage.setItem('userData', JSON.stringify(userData));
    },
    // eslint-disable-next-line no-unused-vars
    resetUserState: (state) => initialState,
  },
});

export const { setUser, resetUserState } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isAuthenticated: false,
  // ...otros estados iniciales
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    // ...otras acciones y reducers
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;

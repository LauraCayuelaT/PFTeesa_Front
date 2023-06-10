import { createSlice } from '@reduxjs/toolkit';

//Estados
const initialState = {
  user: null,
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
      console.log(action.payload); // Verificar los datos recibidos
    state.user = true;
    state.userData = action.payload; // Asignar los datos al estado
    },
    },
  },
);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

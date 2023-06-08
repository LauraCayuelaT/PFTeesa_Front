import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Estados
const initialState = {
  loading: false,
  error: null,
  sucess: [],
};

// Comunicación con POST.
export const loginUser = createAsyncThunk(
  'product/loginUser',
  async ({ user_email, user_password }) => {
    try {
      const response = await axios.post(
        'https://servidor-teesa.onrender.com/login',
        { user_email, user_password }
      );
      return response.data;
    } catch (error) {
      // Manejar cualquier error aquí
      throw new Error(error.response.data);
    }
  }
);

// Slice Login
const loginSlice = createSlice({
  name: 'loginState',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    // Acciones relacionadas con el inicio de sesión
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
      //   state.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Estados
const initialState = {
  loading: false,
  error: null,
  errorMessage: '',
  success: false,
  token:'',
  googleAuthLink: 'https://servidor-teesa.onrender.com/google/signup'
};

// Comunicación con BACK.
export const registerUser = createAsyncThunk(
  'product/registerUser',
  async ({ nit, nombre, direccion, telefono, correo,  contrasena, confirmarContrasena, tipo  }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://servidor-teesa.onrender.com/signup',
        { nit, nombre, direccion, telefono, correo, contrasena, confirmarContrasena, tipo }
      );
      console.log(response.data.token);
      return response.data.token;
    } catch (error) {
      // Manejar cualquier error aquí
      console.log(error.response.data.message)
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Slice Login
const registerSlice = createSlice({
  name: 'registerState',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    // Acciones relacionadas con el inicio de sesión
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorMessage = null; 
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
  },
});

export default registerSlice.reducer;

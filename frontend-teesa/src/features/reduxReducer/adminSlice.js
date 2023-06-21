import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  success: false,
  errorMessage: '',
  users: [],
  historialCompras: {},
};

export const getUser = createAsyncThunk('users/getUsers', async () => {
    try {
      const response = await axios.get(`https://servidor-teesa.onrender.com/users`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  });


  export const getShopId = createAsyncThunk('users/getShopId', async (userId) => {
    try {
      const response = await axios.get(`https://servidor-teesa.onrender.com/purchase/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener historial del usuario:', error);
      throw error;
    }
  });
  
  export const enableUserfalse = createAsyncThunk(
    'users/enableUserfalse',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.put(`https://servidor-teesa.onrender.com/enable/${userId}`, null, {
          params: {
            enable: false // Aquí puedes ajustar el valor según sea necesario
          }
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


  export const enableUser = createAsyncThunk(
    'users/enableUser',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.put(`https://servidor-teesa.onrender.com/enable/${userId}`, null, {
          params: {
            enable: true // Aquí puedes ajustar el valor según sea necesario
          }
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.users = action.payload; // Actualiza la propiedad 'users' con los datos de respuesta
      })
      .addCase(getShopId.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.historialCompras = action.payload; 
      })
   
      .addCase(getUser.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          state.errorMessage = action.error.message; // Utiliza action.error.message para obtener el mensaje de error
        })
        .addCase(enableUser.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          state.errorMessage = action.error.message; // Utiliza action.error.message para obtener el mensaje de error
        })
    },
  });
  
  export default adminSlice.reducer;
  
  
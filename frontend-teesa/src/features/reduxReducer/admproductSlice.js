import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    errorMessage: '',
    success: false,
}

export const createProduct = createAsyncThunk('admin/createProduct', 
    async (payload, { rejectWithValue }) => {
        const {nombre, tipo, caracteristicas, categoria, imagenes, precio, stock, marca, descripcion, ref, estado}=payload
        console.log(payload)
        try {
          const response = await axios.post(
            'https://servidor-teesa.onrender.com/products',
            payload
          );
          console.log(response);
          return response; 
        } catch (error) {
          // Manejar cualquier error aquí
          console.log(error.response.data.message)
          return rejectWithValue(error.response.data.message);
        }
})


export const editProduct = createAsyncThunk('admin/editProduct', async (payload) => {
  
  try {
    const {imagenes, precio, stock, idProduct}=payload;
    const response=await axios.put(`https://servidor-teesa.onrender.com/detail/${idProduct}`)
    console.log('Respuesta de la solicitud PUT:', response);
    Swal.fire({
      title: 'Cambios realizados',
      text: 'Tus cambios se realizaron con éxito 😁.',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
    return response
  } catch (error) {
    console.log('error', error.response.data.message);
    Swal(
      'Error',
      'Hubo un error al actualizar su información, intentelo de nuevo',
      'error'
    );
    throw error;
  }
})

const adminProductSlice = createSlice({
    name: 'adminProductState',
    initialState,
  
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.errorMessage = null; 
          });
          builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
          });
          builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
          });
          builder.addCase(editProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.success = true;
          })
    }
})


export default adminProductSlice.reducer;
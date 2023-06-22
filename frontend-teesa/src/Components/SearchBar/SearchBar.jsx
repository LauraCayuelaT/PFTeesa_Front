import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFilter,
  fetchProducts,
} from '../../features/reduxReducer/filterSlice';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    const filters = {
      nombre: searchTerm,      
    };

    dispatch(addFilter(filters));
    dispatch(fetchProducts(filters))
      .then((response) => {
        if (response.payload.products.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
        setNoResults(true);
      });
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleGoBack = () => {
    dispatch(fetchProducts())
    setNoResults(false);
  };

  return (
    <div className='flex items-center justify-evenly md:justify-start w-full md:w-auto'>
      <input
        className='w-full md:w-56 h-8 px-2 outline-none text-black bg-blue-200 rounded-md mb-2 md:mb-0 md:mr-2'
        type='search'
        placeholder='Buscar productos...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <button
          type='submit'
          className='bg-green-500 text-white px-4 py-1 rounded-md'
          onClick={() => {
            handleSearch();
            clearSearch(); // Limpia el input de búsqueda después de aplicar el filtro
          }}
        >
          Buscar
        </button>
      </div>
      {noResults && (
        <div className="flex items-center justify-evenly md:justify-start w-full md:w-auto">
          <p>No hay productos con ese nombre en este momento.</p>
          <button
            className="bg-teesaGreen text-white px-4 py-1 rounded-md ml-2"
            onClick={handleGoBack}
          >
            Mostrar todos los productos
          </button>
        </div>
      )}
    </div>
  );
};



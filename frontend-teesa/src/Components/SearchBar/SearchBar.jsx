
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, fetchProducts } from '../../features/reduxReducer/filterSlice';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();

  const handleSearch = () => {
    const filters = {
      nombre: searchTerm,
    };

    dispatch(addFilter(filters));
    dispatch(fetchProducts(filters));
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
          className='bg-green-500 text-white px-4 py-2 rounded-md'
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};




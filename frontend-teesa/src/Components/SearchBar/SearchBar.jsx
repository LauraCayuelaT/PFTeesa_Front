import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { filterByBrand } from '../../features/reduxReducer/brandsSlice.js';
// import { fetchProducts } from '../../features/reduxReducer/brandsSlice.js';

export const SearchBar = () => {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.items);
  // const isLoading = useSelector((state) => state.products.isLoading);
  // const error = useSelector((state) => state.products.error);
  // const [searchTerm, setSearchTerm] = useState('');
//   // const filteredProducts = useSelector(state => state.productState.filteredProducts);
  // const error = useSelector(state => state.productState.error);



    return (
        <div className="flex items-center justify-evenly w-1/3">
          <input
            className="w-3/5 h-8 px-2 outline-none text-black bg-blue-200 rounded"
            type="search"
            placeholder="Buscar..."
            
          />
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              
            >
              <box-icon name="search-alt"></box-icon>
            </button>
          </div>
          </div>
          )
}
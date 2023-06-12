/* eslint-disable no-unused-vars */
//Instalaciones:
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Redux:
import {
  addFilter,
  fetchProducts,
} from '../../features/reduxReducer/filterSlice';
import {
  sortByName,
  sortByPrice,
  getPaginationData,
} from '../../features/reduxReducer/productSlice';
//Gif
import loadingGif from '../../assets/icon/Loading.gif';
//Componentes:
import { SearchBar } from '../SearchBar/SearchBar';
import { Card } from '../Card/Card';
import FilterComponent from './FilterComponent';
import Pagination from '../Pagination/Pagination';
import {
  getUserDataFromCookie,
  saveUserNameToCookie,
} from '../../features/reduxReducer/userSlice';
import Cookies from 'universal-cookie';
import axios from 'axios';

function Home() {
  const [effectExecuted, setEffectExecuted] = useState(false);
  //Sol - Ordenamientos:
  //FUNCIONANDO PERFECTO
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(sortByName(e.target.value)); // Pasa el valor directamente
    setOrden(`Ordenado ${e.target.value}`);
  };

  //FUNCIONANDO PERFECTO
  const handleSortPrices = (e) => {
    e.preventDefault();
    dispatch(sortByPrice({ minPrice: 100000000, maxPrice: 500000000 }));
    dispatch(sortByPrice(e.target.value.toLowerCase()));
    setOrden(`Ordenado por precio ${e.target.value}`);
  };

  // Tiago y Juan - Estado de Páginación:

  //Tiago y Juan - Paginación.

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const isDataLoaded = useSelector(
    (state) => state.productState.allProducts.length > 0
  );
  // Codigo de Sol:
  const [orden, setOrden] = useState('');
  useEffect(() => {
    dispatch(getPaginationData(currentPage));
  }, [dispatch, currentPage]);

  //isLoading
  let loading = useSelector((state) => state.productState.loading);
  let googleUser = useSelector((state) => state.loginState.loading);

  //*Filtros Nuevos:

  const { filters, products, status, error } = useSelector(
    (state) => state.filters
  );

  //useEffect para evitar errores al momento de la carga de información
  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get('token', { path: '/' }) && !effectExecuted) {
      dispatch(getUserDataFromCookie());
      setEffectExecuted(true);
    }
  }, [dispatch, effectExecuted]);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(fetchProducts(filters));
    }
  }, [filters, dispatch]);

  const handleApplyFilters = (selectedFilters) => {
    dispatch(addFilter(selectedFilters));
  };

  //*Google Auth

  useEffect(() => {
    const url = new URL(window.location.href);
    const nombre = url.searchParams.get('nombre');
    console.log(`Nombre Google: ${nombre}`);
    if (nombre) {
      dispatch(saveUserNameToCookie({ nombre }));
    }
  }, [dispatch]);

  return (
    <div className='flex w-full h-full flex-col flex-wrap'>
      {/* Second Navbar */}
      <div className='flex bg-teesaBlueDark w-full m-0 items-center justify-center mt-[-1px] border-t-4 border-teesaGreen text-teesaWhite h-[60px] text-[16px]'>
        <h2 className='mx-4 transition duration-300 ease-in-out transform  hover:text-teesaGreen cursor-pointer'>
          Eléctrico
        </h2>
        <h2 className='mx-4 transition duration-300 ease-in-out transform  hover:text-teesaGreen cursor-pointer'>
          Gas
        </h2>
        <h2 className='mx-4 transition duration-300 ease-in-out transform  hover:text-teesaGreen cursor-pointer'>
          Refrigeración
        </h2>
        <h2 className='mx-4 transition duration-300 ease-in-out transform  hover:text-teesaGreen cursor-pointer'>
          Hornos
        </h2>
        <h2 className='mx-4 transition duration-300 ease-in-out transform  hover:text-teesaGreen cursor-pointer'>
          Repuestos
        </h2>
        <SearchBar />
      </div>
      {/* Hero */}
      <div className='heroContainer flex w-full h-[800px]'>
        {/* Inicia parte de Sol. */} {/* FILTROS */}
        <div className='filters w-1/6 m-4 bg-gray-100 p-4 rounded-lg'>
          <h1 className='text-xl font-bold mb-4'>Filtros</h1>
          <FilterComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onApplyFilters={handleApplyFilters}
          />
        </div>
        {/* Termina parte de Sol. */}
        {/* Inicia parte de Juan. */}
        {/* Cards */}
        <div className='cardsContainer w-5/6 h-fit m-5 bg-teesaWhite  items-end '>
          {status === 'loading' && (
            <div className='flex justify-center items-center w-full h-[800px]'>
              <img src={loadingGif} alt='gif' />
            </div>
          )}
          {status === 'failed' && (
            <div>Error al cargar los productos: {error}</div>
          )}
          {status === 'succeeded' && (
            <div className='flex flex-wrap m-auto justify-center'>
              {products.products?.map((product) => (
                <Card
                  id={product.id}
                  key={product.id}
                  nombre={product.nombre}
                  categoria={product.categoria}
                  precio={product.precio}
                  imagenes={product.imagenes}
                  marca={product.marca}
                />
              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

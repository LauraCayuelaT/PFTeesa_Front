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

import { NavLink } from 'react-router-dom';
//Gif
import loadingGif from '../../assets/icon/Loading.gif';
//Componentes:
import { Card } from '../Card/Card';
import FilterComponent from './FilterComponent';
import NoRepuestosDisponibles from '../NoHayRep/NoRepuestos';
import NoHayProductosRango from '../NoHayProductosRango/NoHayProductosRango';
import Pagination from '../Pagination/Pagination';

function Home() {
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
  const [currentPage, setCurrentPage] = useState(1);

  const allBrands = useSelector(
    (state) => state?.productState?.allProducts.products
  );
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(
    (state) => state.productState.allProducts.length > 0
  );
  // Codigo de Sol:
  const [orden, setOrden] = useState('');

  //Tiago y Juan - Paginación.

  useEffect(() => {
    dispatch(getPaginationData(currentPage));
  }, [dispatch, currentPage]);

 
  //isLoading
  let loading = useSelector((state) => state.productState.loading);

  //*Filtros Nuevos:

  const { filters, products, status, error } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(fetchProducts(filters));
    }
  }, [filters, dispatch]);

  const handleApplyFilters = (selectedFilters) => {
    dispatch(addFilter(selectedFilters));
  };

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
        <div className='flex items-center w-[30%] justify-evenly '>
          <input
            className='w-[60%] h-[50%] outline-none text-black'
            type='search'
            placeholder='Buscar...'
          />
          <NavLink className='buttonadd' to='/home'>
            <button type='submit'>
              <box-icon name='search-alt' color='#fbfef8'></box-icon>
            </button>
          </NavLink>
        </div>
      </div>
      {/* Hero */}
      <div className='heroContainer flex w-full h-[800px]'>
        {/* Inicia parte de Sol. */} {/* FILTROS */}
        <div className='filters w-1/6 m-4 bg-gray-100 p-4 rounded-lg'>
          <h1 className='text-xl font-bold mb-4'>Filtros</h1>
          <FilterComponent onApplyFilters={handleApplyFilters} />
          {/* <div className='mb-4'>
            <FilterComponent onApplyFilters={handleApplyFilters} />
            <label htmlFor='sort'>Orden Alfabético</label>
            <select
              id='sort'
              className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
              value=''
              onChange={(e) => handleSort(e)}
            >
              <option value='' disabled>
                Seleccionar
              </option>
              <option value='ascendente'>A-Z</option>
              <option value='descendente'>Z-A</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='sortPrice'>Precio</label>
            <select
              id='sortPrice'
              className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
              value=''
              onChange={(e) => handleSortPrices(e)}
            >
              <option value='' disabled>
                Seleccionar
              </option>
              <option value='precio_min'>Precio Mínimo</option>
              <option value='precio_max'>Precio Máximo</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='sortPrice'>Precio</label>
          </div>

          <div className='mb-4'>
            <label htmlFor='filterCreated'>Condición</label>
            <select
              id='filterCreated'
              className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
              value={selectedCondition}
              onChange={(e) => handleSortCondition(e)}
            >
              <option value='' disabled>
                Seleccionar
              </option>
              <option value=''>Todos</option>
              <option value='nuevos'>Nuevos</option>
              <option value='usados'>Usados</option>
            </select>
          </div>
          <div>
            <label htmlFor='brands'>Marcas</label>
            <select
              id='brands'
              className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
              value={selectedBrand}
              // onChange={(e) => handleSortBrands(e)}
            >
              <option value='' disabled>
                Seleccionar
              </option>
              <option value='todos'>Todos</option>
              {allBrands?.map((b) => (
                <option value={b.marca} key={b.id}>
                  {b.marca}
                </option>
              ))}
            </select>
          </div>
          <div className='mt-4'>
            <label htmlFor='types'>Tipo</label>
            <select
              id='types'
              className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
              value={selectedType}
              onChange={(e) => handleSortTypes(e)}
            >
              <option value='' disabled>
                Seleccionar
              </option>
              <option value=''>Todos</option>
              <option value='equipo'>Equipo</option>
              <option value='repuesto'>Repuesto</option>
            </select>
          </div> */}
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
              {products.products.map((product) => (
                <Card
                  id={product.id}
                  key={product.id}
                  nombre={product.nombre}
                  categoria={product.categoria}
                  precio={product.precio}
                  imagen={product.imagen}
                  marca={product.marca}
                />
              ))}
            </div>
          )}
         <Pagination/>

          {/* Termina parte de Juan. */}
          {/* sol */}

          {/* {filteredProducts.length === 0 && selectedType === 'repuesto' && (
            <NoRepuestosDisponibles />
          )} */}

          {/* {filteredProducts.length === 0 &&
            showNoProductsInRange &&
            selectedType !== 'repuesto' && <NoHayProductosRango />} */}
        </div>
      </div>
      {/* //paginacion */}
      {/* <div>
      <div className="flex flex-wrap m-auto justify-center">
        {allProducts?.map((product) => (
          <Card
            id={product?.id}
            key={product?.id}
            nombre={product?.nombre}
            categoria={product?.categoria}
            precio={product?.precio}
            imagen={product?.imagen}
            marca={product?.marca}
          />
        ))}
      </div>
      {paginasFinal?.map((pagina) => (
        <button
          onClick={() => pagesChange(pagina)}
          className="w-5"
          key={pagina}
        >
          {pagina}
        </button>
      ))}
    </div> */}
    </div>
  );
}

export default Home;

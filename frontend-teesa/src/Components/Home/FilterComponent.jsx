import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFilter,
  fetchProducts,
  sortByName,
  sortByPrice,
} from '../../features/reduxReducer/filterSlice';

const FilterComponent = () => {
  //Filtrado General
  const [estado, setEstado] = useState('');
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [precio, setPrecio] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      estado: estado,
      tipo: tipo,
      marca: marca,
      // precio: precio,
    };

    // const [precioMin, precioMax] = precio.split('-');
    // const precioQuery = `?precioMinimo=${precioMin}&&precioMaximo=${precioMax}`;
    //   dispatch(addFilter(filters));
    //   dispatch(fetchProducts(filters));
    // }, [estado, tipo, marca, precio, dispatch]);

    dispatch(addFilter(filters));
    dispatch(fetchProducts(filters));
  }, [estado, tipo, marca, dispatch]);

  //Sol
  //agrego ordenamientos y filtror- sol - componentes ultimos
  // const [selectedType, setSelectedType] = useState('');
  // const [showNoProductsInRange, setShowNoProductsInRange] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [orden, setOrden] = useState('');

  // const handleFilterPrice = (e) => {
  //   e.preventDefault();
  //   const selectedPrice = e.target.value;
  //   const [minPrice, maxPrice] = selectedPrice.split(',')

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(sortByName(e.target.value)); // Pasa el valor directamente
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleSortPrices = (e) => {
    e.preventDefault();
    dispatch(sortByPrice({ minPrice: 100000000, maxPrice: 500000000 }));
    dispatch(sortByPrice(e.target.value.toLowerCase()));
    setOrden(`Ordenado por precio ${e.target.value}`);
  };

  return (
    <div className='mb-4'>
      <div className='mb-4'>
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
      <label className='mb-4'>
        Estado:
        <select
          value={estado}
          className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value=''>Todos</option>
          <option value='usado'>Usado</option>
          <option value='nuevo'>Nuevo</option>
        </select>
      </label>
      <br />
      <label className='mb-4'>
        Tipo:
        <select
          value={tipo}
          className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value=''>Todos</option>
          <option value='equipo'>Equipo</option>
          <option value='repuesto'>Repuesto</option>
        </select>
      </label>
      <br />
      <label className='mb-4'>
        Marca:
        <select
          className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        >
          <option value=''>Todas</option>
          <option value='unox'>Unox</option>
          <option value='rational'>Rational</option>
          <option value='fagor'>Fagor</option>
          <option value='winterhalter'>WinterHalter</option>
          <option value='lainox'>Lainox</option>
          <option value='uniox'>Uniox</option>
        </select>
      </label>
      <br />

      <label className='mb-4'>
        Precio (no funcional):
        <select
          className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        >
          <option value='0-10000000'>0 - 10,000,000</option>
          <option value='10000000-20000000'>10,000,000 - 20,000,000</option>
          <option value='20000000-30000000'>20,000,000 - 30,000,000</option>
          <option value='30000000-40000000'>30,000,000 - 40,000,000</option>
          <option value='40000000-50000000'>40,000,000 - 50,000,000</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;

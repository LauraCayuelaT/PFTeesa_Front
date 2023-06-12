import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { useSelector } from 'react-redux';
import {
  fetchProducts,
  sortByName,
  sortByPrice,
} from '../../features/reduxReducer/filterSlice';
// import NoRepuestosDisponibles from '../NoHayRep/NoRepuestos';
// import NoHayProductosRango from '../NoHayProductosRango/NoHayProductosRango';


const FilterComponent = () => {
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
      precioMinimo: precio.split('-')[0],
      precioMaximo: precio.split('-')[1],

    };


    // dispatch(addFilter(filters));
    dispatch(fetchProducts( filters ));
  }, [estado, tipo, marca, precio, dispatch]);

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
  };

  const handleSortPrices = (e) => {
    e.preventDefault();
    dispatch(sortByPrice(e.target.value.toLowerCase()));
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
        </select>
      </label>
      <br />

      <label className='mb-4'>
        Precio:
        <select
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen'
        >
          <option value=''>Todos</option>
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

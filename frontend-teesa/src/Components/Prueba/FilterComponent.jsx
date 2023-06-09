import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFilter,
  fetchProducts,
} from '../../features/reduxReducer/filterSlice';

const FilterComponent = () => {
  const [estado, setEstado] = useState('');
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      estado: estado,
      tipo: tipo,
      marca: marca,
      precio: `${precioMin},${precioMax}`,
    };

    dispatch(addFilter(filters));
    dispatch(fetchProducts(filters));
  }, [estado, tipo, marca, precioMin, precioMax, dispatch]);

  return (
    <div>
      <h2>Aplicar filtros:</h2>
      <label>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value=''>Todos</option>
          <option value='usado'>Usado</option>
          <option value='nuevo'>Nuevo</option>
        </select>
      </label>
      <br />
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value=''>Todos</option>
          <option value='equipo'>Equipo</option>
          <option value='repuesto'>Repuesto</option>
        </select>
      </label>
      <br />
      <label>
        Marca:
        <select value={marca} onChange={(e) => setMarca(e.target.value)}>
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
      <label>
        Precio Mínimo:
        <input
          type='number'
          value={precioMin}
          onChange={(e) => setPrecioMin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Precio Máximo:
        <input
          type='number'
          value={precioMax}
          onChange={(e) => setPrecioMax(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterComponent;

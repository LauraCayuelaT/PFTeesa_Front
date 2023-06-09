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
  const [precio, setPrecio] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      estado: estado,
      tipo: tipo,
      marca: marca,
      precio: precio,
    };

    dispatch(addFilter(filters));
    dispatch(fetchProducts(filters));
  }, [estado, tipo, marca, precio, dispatch]);

  //New

  return (
    <div>
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
        Precio:
        <select value={precio} onChange={(e) => setPrecio(e.target.value)}>
          <option value=''>Cualquier Precio</option>
          {/* En el value cambias como es el query, me sirvio preguntarle a ChatGPT como hacerlo */}
          <option value='0,10000000'>Menos de 10,000,000</option>
          <option value='20000000,30000000'>20,000,000 - 30,000,000</option>
          <option value='30000000,40000000'>30,000,000 - 40,000,000</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;

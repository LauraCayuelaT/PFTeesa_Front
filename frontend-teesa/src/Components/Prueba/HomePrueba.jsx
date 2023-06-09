import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterComponent from './FilterComponent';
import {
  addFilter,
  fetchProducts,
} from '../../features/reduxReducer/filterSlice';
import { Card } from '../Card/Card';

const HomePrueba = () => {
  const dispatch = useDispatch();
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
    <div>
      <h1>Aplicación de filtros</h1>
      <FilterComponent onApplyFilters={handleApplyFilters} />
      {status === 'loading' && <div>Cargando productos...</div>}
      {status === 'failed' && <div>Error al cargar los productos: {error}</div>}
      {status === 'succeeded' && (
        <div>
          <h2>Productos filtrados:</h2>
          {products.map((product) => (
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
    </div>
  );
};

export default HomePrueba;

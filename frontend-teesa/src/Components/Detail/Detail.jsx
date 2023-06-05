import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../../features/reduxReducer/detailProductSlice';
import { useEffect } from "react";
import { Card } from '../Card/Card';

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productState.allProducts);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  // isLoading
  return (
    
    <div>
      <div className='flex cardsContainer w-5/6 h-fit m-5 bg-teesaWhite items-end'>
        <div className='flex flex-wrap m-auto justify-center'>

          {product && (
            <Card
              key={product.id}
              nombre={product.nombre}
              categoria={product.categoria}
              precio={product.precio}
              imagen={product.imagen}
              marca={product.marca}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
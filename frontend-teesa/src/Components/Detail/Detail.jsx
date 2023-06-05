/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../features/reduxReducer/detailSlice';
import { useParams } from 'react-router-dom';
import CardDetail from '../Card/CardDetail';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state?.detailState?.productDetail);

  useEffect(() => {
    dispatch(getProductById(id));
    //return dispatch(clearDetail()); => Clear
  }, [dispatch]);

  console.log(detail);

  return (
    <div>
      <CardDetail
        id={detail?.id}
        key={detail?.id}
        nombre={detail?.nombre}
        descripcion={detail?.descripcion}
        tipo={detail?.tipo}
        caracteristicas={detail?.caracteristicas}
        categoria={detail?.categoria}
        precio={detail?.precio}
        imagen={detail?.imagen}
        marca={detail?.marca}
        stock={detail?.stock}
        estado={detail?.estado}
      />
    </div>
  );
}

export default Detail;

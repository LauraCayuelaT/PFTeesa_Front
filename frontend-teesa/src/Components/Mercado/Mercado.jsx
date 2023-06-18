import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLinkMercado } from '../../features/reduxReducer/mercadoSlice';

const Mercado = () => {
  //MercadoPago - Botón.

  const userId = useSelector((state) => state.userState.userData.userId);
  console.log(userId);

  const linkMercadoPago = useSelector(
    (state) => state.mercadoState.linkMercado
  );
  const status = useSelector((state) => state.mercadoState.status);
  const error = useSelector((state) => state.mercadoState.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== null) {
      dispatch(postLinkMercado(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className='buttonContainer m-5'>
      <div>
        {status === 'pending' && (
          <button className='w-80 px-4 py-2 border-4 bg-blue-500  rounded-2xl font-bold text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'>
            Cargando...
          </button>
        )}
        {status === 'fulfilled' && (
          <a
            onClick={() => {
              window.open(linkMercadoPago, '_blank', 'width=800,height=800');
            }}
          >
            <button className='w-80 px-4 py-2 border-4 bg-blue-500  rounded-2xl font-bold text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'>
              Comprar con MercadoPago
            </button>
          </a>
        )}
        {status === 'rejected' && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Mercado;

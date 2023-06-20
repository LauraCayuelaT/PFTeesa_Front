import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getCart } from '../../features/reduxReducer/carritoSlice';
import { Carrito } from '../Carrito/Carrito';
import { Link } from 'react-router-dom';
import { postLinkMercado } from '../../features/reduxReducer/mercadoSlice';

function calculateTotal(cartProducts) {
  let total = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    total += cartProducts[i].precioTotal;
  }
  return total;
}

export const Cart = () => {
  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState.userData);

  const carrito = useSelector((state) => state.cart);

  const [cartId, setCartId] = useState('');

  const [cart, setCart] = useState({
    CartId: cartId,
  });
  const [info, setInfo] = useState({
    items: '',
  });

  useEffect(() => {
    dispatch(getUser()).then((action) => {
      const response = action.payload;
      console.log(response);
      const cartId = response.find((user) => user.id === userData.userId)?.Cart
        .id;
      console.log(cartId);
      if (cartId) {
        dispatch(getCart(cartId)).then((action) => {
          const response = action.payload;
          console.log(response);
          setInfo((prevInfo) => ({
            ...prevInfo,
            items: response,
          }));
        });
      }
    });
  }, [dispatch, userData]);
  console.log(info.items);

  //*MercadoPago Button:

  const userId = useSelector((state) => state.userState.userData.userId);
  console.log(userId);

  const linkMercadoPago = useSelector(
    (state) => state.mercadoState.linkMercado
  );
  const status = useSelector((state) => state.mercadoState.status);
  const error = useSelector((state) => state.mercadoState.error);

  useEffect(() => {
    if (userId !== null) {
      dispatch(postLinkMercado(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2 className='text-4xl font-medium text-gray-800 mb-4'>
        Carrito de Productos
      </h2>
      <main>
        <div className='max-w-3xl p-8 bg-white shadow-lg rounded-lg'>
          {info.items === '' ? (
            <p className='text-2xl font-bold text-gray-800'>Cargando...</p>
          ) : info.items?.cartProducts?.length > 0 ? (
            <>
              {info.items.cartProducts.map((item) => (
                <Carrito
                  key={item.id}
                  id={item.id}
                  cantidad={item.cantidad}
                  precioTotal={item.precioTotal}
                  nombre={item.Product.nombre}
                  precio={item.Product.precio}
                  imagen={item.Product.imagenes}
                />
              ))}
              <div className='mt-8'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Total:{' '}
                  <span className='text-2xl font-bold text-black'>
                    ${' '}
                    {calculateTotal(info.items?.cartProducts).toLocaleString(
                      'es-ES',
                      options
                    )}
                  </span>
                </h2>
              </div>
              <div className='flex justify-center mt-8'>
                <Link
                  to='/home'
                  className='bg-teesaBlueDark text-white px-6 py-3 rounded-lg mr-4'
                >
                  Seguir comprando
                </Link>
                <div>
                  {status === 'pending' && (
                    <button className='w-70 px-4 py-3 border-4 bg-blue-500  rounded-2xl font-bold text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'>
                      Cargando...
                    </button>
                  )}
                  {status === 'fulfilled' && (
                    <a href={linkMercadoPago}>
                      <button className='7-80 px-4 py-3 border-4 bg-blue-500  rounded-2xl font-bold text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'>
                        Comprar con MercadoPago
                      </button>
                    </a>
                  )}
                  {status === 'rejected' && <p>Error: {error}</p>}
                </div>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <p className='text-2xl font-bold text-gray-800 mb-4'>
                No hay productos en el carrito
              </p>
              <Link
                to='/home'
                className='bg-teesaBlueDark text-white px-6 py-3 rounded-lg'
              >
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;

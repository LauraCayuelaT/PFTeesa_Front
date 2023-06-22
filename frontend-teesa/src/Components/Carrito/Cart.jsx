import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getCart } from '../../features/reduxReducer/carritoSlice';
// import { getCartGuestProducts } from '../../features/reduxReducer/cartGuestSlice';
import { Carrito } from '../Carrito/Carrito';
import { Link } from 'react-router-dom';
import { postLinkMercado } from '../../features/reduxReducer/mercadoSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  //*Validar User:
  const navigate = useNavigate();

  const alertGoodbye = () => {
    Swal.fire({
      title: '¡Un momento!',
      text: 'Tienes que logearte para ingresar al carrito.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#192C8C',
    }).then(() => {
      navigate('/login');
    });
  };

  const user = useSelector((state) => state.userState.user);
  console.log(user);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    if (user === null) {
      const timeout = setTimeout(() => {
        if (waiting) {
          alertGoodbye();
        }
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setWaiting(false);
    }
  }, [user, waiting]);

  useEffect(() => {
    if (user !== null && !waiting) {
      // Validar los datos después de que se hayan obtenido
      if (user === false) {
        alertGoodbye();
      }
    }
  }, [user, waiting]);

  //Andres

  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };

  function calculateTotal(cartProducts) {
    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      total += cartProducts[i].precioTotal;
    }
    return total;
  }

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState.userData);

  // const carrito = useSelector((state) => state.cart);

  // const userUUID = props.userId;
  // console.log(userUUID);
  const [cartId, setCartId] = useState('');

  // const [cart, setCart] = useState({
  //   CartId: cartId,
  // });
  const [info, setInfo] = useState({
    items: '',
  });

  useEffect(() => {
    dispatch(getUser()).then((action) => {
      const response = action.payload;

      const cartId = response.find((user) => user.id === userData.userId)?.Cart
        .id;

      if (cartId) {
        dispatch(getCart(cartId)).then((action) => {
          const response = action.payload;

          setInfo((prevInfo) => ({
            ...prevInfo,
            items: response,
          }));
        });
      }
    });
  }, [dispatch, userData, info]);
  console.log(info.items);

  //*MercadoPago Button:

  const userId = useSelector((state) => state.userState.userData.userId);

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
          {status === 'pending' ? (
            <p className='text-2xl font-bold text-gray-800'>Cargando...</p>
          ) : (
            <>
              {info.items ? (
                info.items.cartProducts?.length > 0 ? (
                  <>
                    {info.items.cartProducts.map((item) => (
                      <Carrito
                        key={item.id}
                        id={item.id}
                        cantidad={item.cantidad}
                        precioTotal={item.precioTotal}
                        nombre={item.Product?.nombre}
                        precio={item.Product?.precio}
                        imagen={item.Product?.imagenes}
                      />
                    ))}
                    <div className='mt-8'>
                      <h2 className='text-2xl font-bold text-gray-800'>
                        Total:{' '}
                        <span className='text-2xl font-bold text-black'>
                          ${' '}
                          {calculateTotal(
                            info.items.cartProducts ||
                              info.items.cartGuestProducts
                          ).toLocaleString('es-ES', options)}
                        </span>
                      </h2>
                    </div>
                    <div className='flex justify-center mt-8'>
                      <Link
                        to='/home'
                        className='7-80 px-4 py-3 border-4 bg-teesaBlueDark rounded-lg text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105 mr-4'
                      >
                        Seguir comprando
                      </Link>

                      <a href={linkMercadoPago}>
                        <button className='7-80 px-4 py-3 border-4 bg-teesaGreen rounded-lg text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'>
                          Comprar con MercadoPago
                        </button>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl font-bold text-gray-800 mb-4'>
                      No hay productos en el carrito
                    </p>
                    <Link
                      to='/home'
                      className='7-80 px-4 py-3 border-4 bg-teesaBlueDark rounded-lg text-white hover:bg-blue-600 transition duration-100 transform hover:scale-105'
                    >
                      Seguir comprando
                    </Link>
                  </div>
                )
              ) : (
                <p className='text-2xl font-bold text-gray-800'>Cargando...</p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;

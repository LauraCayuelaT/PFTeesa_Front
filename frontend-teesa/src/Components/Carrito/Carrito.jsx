/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateCart,
  deleteCart,
} from '../../features/reduxReducer/carritoSlice';
import { updateCartGuestProducts, deleteCartGuestProducts } from '../../features/reduxReducer/cartGuestSlice';

// import Cart from './Cart';
// import Card from '../Card/Card';

export const Carrito = ({
  id,
  cantidad,
  precioTotal,
  nombre,
  precio,
  imagen,
  userUUID
}) => {
  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };
  const userData = useSelector((state) => state.userState.userData);
  const [cart, setCart] = useState({
    cantidad: cantidad,
  });
  const [cartGuest, setCartGuest] = useState({
    cantidad: cantidad,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if(userData.userId){
    setCart((prevCart) => ({
      ...prevCart,
      cantidad: cantidad,
    }))}else setCartGuest((prevCartGuest) => ({
      ...prevCartGuest,
      cantidad: cantidad
    }))
  }, [cantidad, userData.userId]);

  useEffect(() => {
    if(userData.userId){
    const total = precio * cart.cantidad;
    setCart((prevCart) => ({
      ...prevCart,
      precioTotal: total,
    }))} else {const totalGuest = precio * cartGuest.cantidad;
    setCartGuest((prevCartGuest) => ({
      ...prevCartGuest,
      precioTotal: totalGuest,
    }))}
  }, [precio, cart.cantidad, cartGuest.cantidad, userData.userId]);

  const handleIncrement = () => {
    if (userData.userId) {
    setCart((prevCart) => ({
      ...prevCart,
      cantidad: prevCart.cantidad + 1,
    }));

    dispatch(updateCart({ CartProductId: id, cantidad: cart.cantidad + 1 }))
    } else setCartGuest((prevCartGuest) => ({
      ...prevCartGuest,
      cantidad: prevCartGuest.cantidad + 1,
    })); 
    dispatch(updateCartGuestProducts({CartGuestProductId: id, cantidad: cartGuest.cantidad +1 }))
  };

  const handleDecrement = () => {
    if (userData.userId) {
      if (cart.cantidad > 1) {
        setCart((prevCart) => ({
          ...prevCart,
          cantidad: prevCart.cantidad - 1,
        }));
        dispatch(
          updateCart({ CartProductId: id, cantidad: cart.cantidad - 1 })
        );
      }
    } else {
      if (cartGuest.cantidad > 1) {
        setCartGuest((prevCartGuest) => ({
          ...prevCartGuest,
          cantidad: prevCartGuest.cantidad - 1,
        }));
        dispatch(
          updateCartGuestProducts({
            CartGuestProductId: id,
            cantidad: cartGuest.cantidad - 1,
          })
        );
      }
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if(userData.userId){
    dispatch(deleteCart(id))
      .then(() => {
        // window.location.reload();
      })
    } else dispatch(deleteCartGuestProducts(id))
      .then(() => {
      })
      .catch((error) => {
        console.error('Error al eliminar el producto del carrito de invitado:', error);
      });
  };

  return (
    <div className='flex items-center border-b-2 pb-4'>
      <img
        className='w-40 h-36 object-cover rounded-lg'
        src={imagen[0]}
        alt={nombre}
      />
      <div className='ml-4'>
        <h2 className='text-lg font-medium text-gray-800 mb-1'>{nombre}</h2>
        <div className='flex items-center mt-2'>
          <label
            htmlFor='quantity'
            className='mr-2'
          >
            Cantidad:
          </label>
          <button
            type='button'
            id='decrement'
            onClick={handleDecrement}
            className='px-2 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none'
            disabled={userData.userId ? cart.cantidad <= 1 : cartGuest.cantidad <= 1}
          >
            -
          </button>
          <span
            id='quantity'
            className='px-2 text-gray-700'
          >
             {userData.userId ? cart.cantidad : cartGuest.cantidad}
          </span>
          <button
            type='button'
            id='increment'
            onClick={handleIncrement}
            className='px-2 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none'
          >
            +
          </button>
        </div>
        <h4 className='text-gray-600 text-base font-medium mt-2'>
  $ {cart.precioTotal ? cart.precioTotal.toLocaleString('en-US', options) : 
  (cartGuest.precioTotal ? cartGuest.precioTotal.toLocaleString('en-US', options) : '0')}
</h4>
        <button
          onClick={handleDelete}
          className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none'
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
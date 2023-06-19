import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getCart } from '../../features/reduxReducer/carritoSlice';
import { Carrito } from '../Carrito/Carrito';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo - Screenshot.jpg';

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
      const cartId = response.find((user) => user.id === userData.userId)?.Cart.id;
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

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-4xl font-medium text-gray-800 mb-4">Carrito de Productos</h2>
      <main>
        <div className="max-w-3xl p-8 bg-white shadow-lg rounded-lg">
          {/* {info.items === '' ? (
            <p className="text-2xl font-bold text-gray-800">Cargando...</p>
          ) : info.items?.cartProducts?.length > 0 ? ( */}
          {info.items?.cartProducts?.length > 0 ? (
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
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Total:{' '}
                  <span className="text-2xl font-bold text-black">
                    ${' '}
                    {calculateTotal(info.items?.cartProducts).toLocaleString('es-ES', options)}
                  </span>
                </h2>
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/home" className="bg-teesaBlueDark text-white px-6 py-3 rounded-lg mr-4">
                  Seguir comprando
                </Link>
                <Link to="/checkout" className="bg-teesaGreen text-white px-6 py-3 rounded-lg">
                  Terminar compra
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-800 mb-4">No hay productos en el carrito</p>
              <Link to="/home" className="bg-teesaBlueDark text-white px-6 py-3 rounded-lg">
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

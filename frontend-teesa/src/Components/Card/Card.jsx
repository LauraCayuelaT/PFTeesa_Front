// eslint-disable-next-line no-unused-vars
import React from 'react';
import { getUserDataFromCookie } from '../../features/reduxReducer/userSlice';
import { useState, useEffect } from 'react';
import { postCart, getUser } from '../../features/reduxReducer/carritoSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export const Card = ({ nombre, categoria, imagenes, precio, marca, id }) => {
  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userState.userData);
  const [cartId, setCartId] = useState('');
  const [cart, setCart] = useState({
    ProductId: id,
    CartId: cartId,
    cantidad: 0,
  });

  useEffect(() => {
    dispatch(getUser()).then((action) => {
      const response = action.payload;
      // console.log(response);
      const cartId = response.find((user) => user.id === userData.userId)?.Cart
        .id;
      // console.log(cartId);
      setCartId(cartId);
      setCart((prevCart) => ({
        ...prevCart,
        CartId: cartId,
      }));
    });
  }, [dispatch, userData]);

  const [cantidad, setCantidad] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setCart((prevCart) => ({
      ...prevCart,
      cantidad: value,
    }));
  };

  const handleIncrement = () => {
    setCart((prevCart) => ({
      ...prevCart,
      cantidad: Number(prevCart.cantidad) + 1,
    }));
  };

  const handleDecrement = () => {
    if (cart.cantidad > 0) {
      setCart((prevCart) => ({
        ...prevCart,
        cantidad: Number(prevCart.cantidad) - 1,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(cart);
    dispatch(postCart(cart));
    setCart({
      ProductId: id,
      CartId: cartId,
      cantidad: 0,
    });
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
        toast.style.marginTop = '80px';
      },
    });
    // navigate('/carrito');
  };


  // carro 
  

      
      // const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = () => {
  //   const newItem = {
  //     id,
  //     nombre,
  //     precio,
  //     cantidad: cart.cantidad,
  //   };
  //   setCartItems((prevItems) => [...prevItems, newItem]);
  //   setCart({
  //     ProductId: id,
  //     CartId: cart.CartId,
  //     cantidad: 0,
  //   });
  // };



  // const handleAddToCart = () => {
  //   const newItem = {
  //     id,
  //     nombre,
  //     precio,
  //     cantidad: cart.cantidad,
  //   };
  //   setCartItems((prevItems) => [...prevItems, newItem]);
  //   setCart({
  //     ProductId: id,
  //     CartId: cart.CartId,
  //     cantidad: 0,
  //   });
  //   // setShowCart(true);
  // };


  return (
    <div className='flex w-[260px] h-[460px] my-2 mx-6 transition duration-100 transform hover:scale-105 hover:cursor-pointer'>
      <div className='shadow-md border bg-teesaWhite border-gray-400 rounded-md flex flex-col'>
        <div>
          <NavLink to={`/home/${id}`}>
            <img
              className='w-[290px] h-[260px] object-fill rounded-lg'
              src={imagenes[0]}
              alt='x'
            />
          </NavLink>
          <div className='flex flex-col p-5'>
            <p className='text-[15px] m-0 font-medium'>
              {categoria} {marca}
            </p>
            <h2 className='h-[55px] text-[18px] mb-1 text-black font-light'>
              {nombre}
            </h2>
            <h4 className='text-black text-[15px] font-bold'>
              {`$${precio.toLocaleString('es-ES', options)}`}
            </h4>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='flex items-center mt-2'>
                <button
                  type='button'
                  id='decrement'
                  onClick={handleDecrement}
                  className='px-1 py-1 border rounded-md border-gray-400 text-sm'
                >
                  -
                </button>
                <span
                  id='quantity'
                  className='px-2'
                >
                  {cart.cantidad}
                </span>
                <button
                  type='button'
                  id='increment'
                  onClick={handleIncrement}
                  className='px-1 py-1 border rounded-md border-gray-400 text-sm'
                >
                  +
                </button>
                <button
                  type='submit'
                  className='ml-2 px-8 py-0.3 bg-teesaBlueDark text-white rounded-md'
                >
                  Agregar al Carrito{' '}
                  <i className='fa-solid fa-cart-shopping rounded-md'></i>
                </button>
              </div>
              <h6 className='hidden'>{id}</h6>
              <h6 className='hidden'>{cart.CartId}</h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

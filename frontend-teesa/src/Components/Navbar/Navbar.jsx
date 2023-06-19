import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import 'boxicons/css/boxicons.min.css';
import title from '../../title.png';
import {
  resetUserState,
  updateUserDataFromCookie,
} from '../../features/reduxReducer/userSlice';
import { postCart } from '../../features/reduxReducer/carritoSlice';
// import { addToCartWithQuantity } from '../../features/reduxReducer/carritoSlice';
// import Cookies from 'universal-cookie';
// import CartIcon from '../Carrito/CartIcon';

export default function NavBar() {
  //Traer Data del User - Nuestro Login y Register
  const userData = useSelector((state) => state.userState);
  const {
    user,
    userData: { userName },
  } = userData;

  //Google
  const [nombreGoogle, setNombreGoogle] = useState(null);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  //Sesión Continúa: Data del User - Google Auth

  useEffect(() => {
    const nombreGoogleCookie = cookies.get('nombreGoogle');
    // const idGoogleCookie = cookies.get('idGoogle');
    // const emailGoogleCookie = cookies.get('correoGoogle');

    if (nombreGoogleCookie) {
      dispatch(updateUserDataFromCookie());
      setNombreGoogle(nombreGoogleCookie);
    }

    //Parte Original:
    // if (nombreGoogleCookie && !user) {
    //   dispatch(saveUserDataToCookie({ nombre: nombreGoogleCookie }));
    //   setNombreGoogle(nombreGoogleCookie);
    // }
  }, []);

  //Log Out Button

  const handleLogout = () => {
    // Vaciar estados de Login, Register y vaciar data del User.
    const cookies = new Cookies();
    cookies.remove('token', { path: '/' });
    cookies.remove('idGoogle', { path: '/' });
    cookies.remove('nombreGoogle', { path: '/' });
    cookies.remove('correoGoogle', { path: '/' });
    cookies.remove('OursUserEmail', { path: '/' });
    resetUserState();
    navigate('/home', { replace: true });
    window.location.reload();
  };

  //Mostrar Botón
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip(!showTooltip);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


//carrito
// const cartt = useSelector((state) => state.app.cart);

// console.log("Cart Length:", cartt.length);

const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (id, nombre, precio) => {
  const newItem = {
    id,
    nombre,
    precio,
    cantidad: 0,
  };
  setCartItems((prevItems) => [...prevItems, newItem]);
};

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
    <div className='flex flex-row justify-between items-center w-full h-[4em] border-b-2 border-gray-300 bg-teesaBlueDark text-white text-xl sm:text-lg relative'>
      <div className='flex items-center'>
        <img
          className='w-[10%] my-0'
          src={title}
          alt='Icono Teesa'
        />
        <div className='hidden sm:flex gap-[4%]'>
          <NavLink
            to='/home'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Inicio
          </NavLink>
          <NavLink
            to='/services'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Servicios
          </NavLink>
          <NavLink
            to='/contact'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Contáctanos
          </NavLink>
          <NavLink
            to='/about'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Nosotros
          </NavLink>
          <NavLink
            to='/aboutdevs'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Devs
          </NavLink>
        </div>
        <div className='sm:hidden'>
          <i
            className={`bx ${
              isMobileMenuOpen ? 'bx-x' : 'bx-menu'
            } text-3xl text-white ml-4 cursor-pointer`}
            onClick={handleMobileMenuToggle}
          ></i>
        </div>
      </div>

      <div className='flex items-end justify-end xl:mr-[4%] lg:mr-[4%] md:mr-[3%] sm:mr-[3%]'>
        {user || nombreGoogle ? (
          <div
            className={`mr-5 cursor-pointer relative flex items-center ${
              isMobileMenuOpen ? 'hidden sm:flex' : 'flex'
            }`}
            onMouseEnter={handleTooltipToggle}
            onMouseLeave={handleTooltipToggle}
          >
            <span className='hover:text-teesaGreen transition duration-300 ease-in-out'>
              {nombreGoogle ? nombreGoogle : userName}
            </span>
            <i
              className='bx bxs-user ml-5 flex transition duration-300 ease-in-out transform hover:text-teesaGreen'
              style={{ fontSize: '1.5rem' }}
            ></i>

            {showTooltip && (
              <div className='absolute flex-col h-auto bg-black top-full'>
                <div className=' right-0 w-40 bg-gray-100 text-gray-700 py-1 px-2 rounded-sm text-center hover:text-gray-900 hover:font-medium text-sm'>
                  <NavLink to='/profile'>
                    <p>Mi Perfil</p>
                  </NavLink>
                </div>

                <div
                  onClick={handleLogout}
                  className=' right-0 w-40 bg-gray-100 text-gray-700 py-1 px-2 rounded-sm text-center hover:text-gray-900 hover:font-medium text-sm'
                >
                  Cerrar sesión
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to='/login'
            className={`mr-5 transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen ${
              isMobileMenuOpen ? 'hidden sm:flex' : 'flex'
            }`}
          >
            Ingresar
          </NavLink>
        )}
        {!user && (
          <NavLink
            to='/login'
            className={`flex transition duration-300 ease-in-out transform hover:text-teesaGreen ${
              isMobileMenuOpen ? 'hidden sm:flex' : 'flex'
            }`}
          >
            <i
              className='bx bxs-user mr-6'
              style={{ fontSize: '1.5rem' }}
            ></i>
          </NavLink>
        )}
        {/* <i
          className={`bx bx-cart mr-6 ${
            isMobileMenuOpen ? 'hidden sm:flex' : 'flex'
          }`}
          style={{ fontSize: '1.5rem' }}
        ></i> */}

{/* Boton carrito*/}
<div className="relative">
        <NavLink to="/carrito">
          <i className="fa-solid fa-cart-shopping rounded-md hover:text-teesaGreen"></i>
        </NavLink>
</div>
      </div>

      {isMobileMenuOpen && (
        <div className='sm:hidden w-full absolute top-full left-0 bg-teesaBlueDark text-white py-2 z-10'>
          <NavLink
            to='/home'
            className='w-full px-4 py-2 hover:bg-teesaGreen hover:text-teesaBlueDark text-base block'
          >
            Inicio
          </NavLink>
          <NavLink
            to='/services'
            className='w-full px-4 py-2 hover:bg-teesaGreen hover:text-teesaBlueDark text-base block'
          >
            Servicios
          </NavLink>
          <NavLink
            to='/contact'
            className='w-full px-4 py-2 hover:bg-teesaGreen hover:text-teesaBlueDark text-base block'
          >
            Contáctanos
          </NavLink>
          <NavLink
            to='/about'
            className='w-full px-4 py-2 hover:bg-teesaGreen hover:text-teesaBlueDark text-base block'
          >
            Nosotros
          </NavLink>
          <NavLink
            to='/aboutdevs'
            className='w-full px-4 py-2 hover:bg-teesaGreen hover:text-teesaBlueDark text-base block'
          >
            Devs
          </NavLink>
        </div>
      )}
    </div>
  )}

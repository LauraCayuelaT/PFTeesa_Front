import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import title from '../../title.png';
import 'boxicons/css/boxicons.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { resetLoginState } from '../../features/reduxReducer/loginSlice';
import {
  resetUserState,
  saveUserNameToCookie,
} from '../../features/reduxReducer/userSlice';
import Cookies from 'universal-cookie';

export default function NavBar() {
  //Traer Data del User - Nuestro Login y Register
  const userData = useSelector((state) => state.userState);
  //Google
  const [nombreGoogle, setNombreGoogle] = useState(null);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const {
    user,
    userData: { userName },
  } = userData;

  //Traer Data del User - Google Auth

  useEffect(() => {
    const nombreGoogleCookie = cookies.get('nombreGoogle');
    if (nombreGoogleCookie && !user) {
      dispatch(saveUserNameToCookie({ nombre: nombreGoogleCookie }));
      setNombreGoogle(nombreGoogleCookie);
    }
  }, []);

  //Log Out Button

  const handleLogout = () => {
    // Vaciar estados de Login, Register y vaciar data del User.
    const cookies = new Cookies();
    cookies.remove('token', { path: '/' });
    cookies.remove('nombreGoogle', { path: '/' });
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

  return (
    <div className='flex flex-row justify-between items-center w-full h-[4em] border-b-2 border-gray-300 bg-teesaBlueDark text-white text-xl sm:text-l '>
      <div className='flex items-center'>
        <img
          className='xl:w-[10%] lg:w-[10%] md:w-[10%] sm:w-[10%] my-0 '
          src={title}
          alt='Icono Teesa'
        />
        <div className='flex xl:gap-[12%] lg:gap-[12%] md:gap-[8%] sm:gap-[4%] '>
          <NavLink
            to='/home'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Inicio
          </NavLink>
          <NavLink
            to='/services'
            className=' transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
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
            className=' transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Nosotros
          </NavLink>
        </div>
      </div>

      <div className='flex items-end justify-end xl:mr-[4%] lg:mr-[4%] md:mr-[3%] sm:mr-[3%] '>
        {user || nombreGoogle ? (
          <div
            className='mr-5 cursor-pointer relative flex items-center'
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
              <div
                onClick={handleLogout}
                className='absolute top-full right-0 w-40 bg-gray-100 text-gray-700 py-1 px-2 rounded text-center hover:text-gray-900
                hover:font-medium'
              >
                Cerrar sesión
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to='/login'
            className='mr-5 transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Ingresar
          </NavLink>
        )}
        {!user && (
          <NavLink
            to='/login'
            className='flex transition duration-300 ease-in-out transform hover:text-teesaGreen'
          >
            <i className='bx bxs-user mr-6' style={{ fontSize: '1.5rem' }}></i>
          </NavLink>
        )}
        <i className='bx bx-cart mr-6' style={{ fontSize: '1.5rem' }}></i>
      </div>
    </div>
  );
}

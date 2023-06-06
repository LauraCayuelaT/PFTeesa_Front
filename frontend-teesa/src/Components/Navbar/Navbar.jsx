import { NavLink } from 'react-router-dom';
import title from '../../title.png';
import 'boxicons/css/boxicons.min.css';

export default function NavBar() {
  return (
    <div className='flex flex-row justify-between items-center w-full h-[4em] border-b-2 border-gray-300 bg-teesaBlueDark text-white text-xl sm:text-l'>
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
          <NavLink
            to='/login'
            className='transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            Login
          </NavLink>
        </div>
      </div>
      <div className='flex items-end justify-end xl:mr-[4%] lg:mr-[4%] md:mr-[3%] sm:mr-[3%] '>
        <i className='bx bx-cart mr-6' style={{ fontSize: '1.5rem' }}></i>
        <i className='bx bxs-user' style={{ fontSize: '1.5rem' }}></i>
      </div>
    </div>
  );
}

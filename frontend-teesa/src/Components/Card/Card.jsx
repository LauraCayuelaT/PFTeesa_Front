/* eslint-disable react/prop-types */
//Imports:
import { NavLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Card = ({ nombre, categoria, imagenes, precio, marca, id }) => {
  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };

  return (
    <div className='flex w-[260px] h-[460px]  my-2 mx-6 transition duration-100 transform hover:scale-105 hover:cursor-pointer'>
      <div className=' shadow-md border  bg-teesaWhite border-gray-400 rounded-md'>
        <div>
          <NavLink to={`/home/${id}`}>
            <img
              className='w-[290px] h-[260px] object-fill rounded-lg'
              src={imagenes[0]} // Comprobación de la longitud del array
              alt='x'
            />

            <div className='flex flex-col content-between p-5 h-[220px] items-start justify-between'>
              <p className='text-[15px] m-0 font-medium'>
                {categoria} {marca}
              </p>
              <h2 className='h-[55px]  text-[18px]  mb-1 text-black font-light'>
                {nombre}
              </h2>

              <h4 className='text-black text-[15px] font-bold'>
                {' '}
                {`$${precio.toLocaleString('es-ES', options)}`}
              </h4>

              <div
                href='#'
                className='text-white   font-medium  text-md px-3 py-2 text-center items-end  dark:bg-blue-600 hover:bg-blue-700 flex justify-center w-45 m-auto rounded-md'
              >
                <p href=''>
                  Agregar al Carrito{' '}
                  <i className='fa-solid fa-cart-shopping rounded-md'></i>
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

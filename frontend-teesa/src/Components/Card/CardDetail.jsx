import { useNavigate, NavLink } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carrusel from '../Carrusel/Carrusel';
//Reviews
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

/* eslint-disable react/prop-types */
const CardDetail = ({
  nombre,
  descripcion,
  caracteristicas,
  categoria,
  precio,
  stock,
  marca,
  estado,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  let reviews = 4;

  return (
    <div className='mt-12 flex justify-center items-start'>
      <div className='max-w-6xl rounded overflow-hidden shadow-lg flex relative'>
        <NavLink className='mb-1 transition duration-300 ease-in-out transform'>
          <button
            onClick={handleGoBack}
            className='bg-blue-600 rounded-md text-white hover:bg-blue-700 '
          >
            Volver al listado
          </button>
        </NavLink>
        <div className='w-8/2 lg:w-1/3 xl:w-1/4 flex items-center justify-center '>
          <Carrusel />
        </div>
        <div className='w-1/2 lg:w-2/3 xl:w-3/4 px-8 py-6'>
          <div className='w-full md:w-2/3 xl:w-3/4 px-8 py-6'>
            <div className='text-teesaBlueDark font-bold text-4xl mb-6'>
              {categoria} {marca}
            </div>
            <h2 className='text-teesaBlueDark text-3xl font-light mb-4'>
              {nombre}
            </h2>
            <div className='flex my-4 items-center '>
              <Rating
                name='size-medium'
                defaultValue={reviews}
                precision={1}
                size='medium'
                readOnly
                emptyIcon={<StarBorderIcon style={{ color: '#192C8C' }} />}
                icon={<StarIcon style={{ color: '#192C8C' }} />}
              />
              <span className='ml-2 text-teesaBlueDark '>{`(${reviews})`}</span>
            </div>
            <p className='text-gray-700 text-xl mb-6'>
              Descripcion: {descripcion}
            </p>
            <p className='text-gray-700 text-xl mb-6'>
              Caracteristicas: {caracteristicas}
            </p>
            <div className='flex flex-col md:flex-row justify-between mb-6'>
              <div className='text-teesaGreenDark text-3xl font-bold'>
                ${precio}
              </div>
              <div
                className='text-xl'
                style={{ color: stock === 0 ? 'darkRed' : 'teesaGreenDark' }}
              >
                Stock: {stock === 0 ? 'Bajo pedido' : stock}
              </div>
              <div className='text-gray-700 text-xl'>Estado: {estado}</div>
            </div>
            <div className='mt-6'>
              <a
                href='#'
                className='block text-center text-white font-medium py-3 px-6 bg-blue-600 rounded-md text-2xl hover:bg-blue-700  justify-center w-45 m-auto'
              >
                Agregar <i className='fas fa-shopping-cart'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

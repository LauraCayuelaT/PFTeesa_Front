import { useNavigate, NavLink } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carrusel from '../Carrusel/Carrusel';
//Reviews
import Review from './Review';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReviewForm from './ReviewForm';

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

  //* Datos Descripción:

  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
  };

  function capitalizeWord(word) {
    if (!word) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const estadoMayus = capitalizeWord(estado || '');

  //*Datos

  const userReviews = [
    {
      userName: 'Pepito Perez',
      userRating: 4,
      userTitle: 'Buen producto.',
      userComment:
        'Después de haberlo utilizado puedo decir que es un buen producto, buena calidad.',
    },
    {
      userName: 'Fito Paez',
      userRating: 3,
      userTitle: 'No está mal',
      userComment: 'No está mal, aunque sinceramente habría cosas por mejorar.',
    },
    {
      userName: 'Camilo Nuñez',
      userRating: 5,
      userTitle: 'Me gustó bastante.',
      userComment: 'Me gustaria comprarlo de nuevo, no decepciona.',
    },
  ];

  //*General Reviews - Product
  let reviews = 4;

  return (
    <div className='w-full mt-12 flex flex-col justify-center items-center '>
      <div className='detailContainer flex flex-col lg:flex-row w-full lg:w-3/4 rounded  shadow-lg  bg-gray-100'>
        <div className='flex justify-start items-start w-5 -mt-10'>
          <NavLink className=' justify-self-start mb-1  transition duration-300 ease-in-out transform m-2'>
            <button
              onClick={handleGoBack}
              className='bg-blue-600 rounded-md text-white hover:bg-blue-700 p-2'
            >
              Volver
            </button>
          </NavLink>
        </div>
        <div className='w-full lg:w-1/2 m-4 flex items-center justify-center '>
          <Carrusel />
        </div>
        <div className='w-full lg:w-1/2  px-8 py-6'>
          <div className='text-teesaBlueDark font-bold text-lg mb-2'>
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
          <p className='text-gray-900 text-xl mb-6'>
            <span className='font-bold text-md'>Descripcion</span> <br />{' '}
            {descripcion}
          </p>
          <p className='text-gray-900 text-xl mb-6'>
            <span className='font-bold text-md'>Caracteristicas</span> <br />{' '}
            {caracteristicas}
          </p>
          <div className='flex flex-col mb-6'>
            <h2 className='text-teesaBlueDark text-2xl font-bold'>{`$${
              precio ? precio.toLocaleString('es-ES', options) : ''
            }`}</h2>

            <h2 className='text-xl text-teesaBlueDark'>
              Stock: {stock === 0 ? 'Bajo Pedido.' : stock}
            </h2>
            <h2 className='text-teesaBlueDark text-xl'>
              Estado: {estadoMayus}.
            </h2>
          </div>
          <div className='mt-6'>
            <a
              href='#'
              className='block text-center text-white font-medium py-3 px-6 bg-blue-600 rounded-md text-2xl hover:bg-blue-700  justify-center w-45 m-auto'
            >
              Agregar al Carrito <i className='fas fa-shopping-cart'></i>
            </a>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className='reviewsContainer w-full m-8 lg:m-4 lg:w-3/4   border-t-2 border-blue-950'>
        <ReviewForm />
        <h1 className='font-bold text-lg m-4'>Opiniones:</h1>

        {userReviews.map((review, index) => (
          <Review
            key={index}
            userName={review.userName}
            userRating={review.userRating}
            userComment={review.userComment}
            userTitle={review.userTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDetail;

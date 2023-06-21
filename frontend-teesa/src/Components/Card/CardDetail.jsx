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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUser, postCart } from '../../features/reduxReducer/carritoSlice';
import {
  fetchReviews,
  verifyUserReview,
} from '../../features/reduxReducer/reviewSlice';

/* eslint-disable react/prop-types */
const CardDetail = ({
  id,
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

  const dispatch = useDispatch();
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

  // const [cantidad, setCantidad] = useState(0);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     cantidad: value,
  //   }));
  // };

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
    // navigate('/carrito');
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

  //*Datos de las Reviews: reviewState
  //General
  const reviewState = useSelector((state) => state?.reviewState);
  let avgStars = reviewState?.reviewsData?.avgStars;
  let totalReviews = reviewState?.reviewsData?.users;
  //Reviews
  let reviews = reviewState?.reviewsData?.reviews;

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  // console.log(reviewState);
  // console.log(reviews, avgStars, totalReviews);

  if (avgStars === null && totalReviews === null) {
    avgStars = 0;
  }

  //*Datos Usuario
  const userId = useSelector((state) => state.userState.userData.userId);

  //*Verify User Review

  const userReviewEnabled = useSelector(
    (state) => state.reviewState.userReviewEnabled
  );

  //console.log('E', userReviewEnabled);

  useEffect(() => {
    dispatch(verifyUserReview({ userID: userId, productID: id }));
  }, [dispatch, userId, id]);

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
            {avgStars !== null && totalReviews !== null ? (
              <div className='flex my-4 items-center '>
                <Rating
                  name='size-medium'
                  value={avgStars}
                  precision={1}
                  size='medium'
                  readOnly
                  emptyIcon={<StarBorderIcon style={{ color: '#192C8C' }} />}
                  icon={<StarIcon style={{ color: '#192C8C' }} />}
                />
                <span className='ml-2 text-teesaBlueDark '>{`(${totalReviews} opiniones).`}</span>
              </div>
            ) : (
              <div className='h-[24px]'></div>
            )}
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='flex items-center mt-2'>
              <button
                type='button'
                id='decrement'
                onClick={handleDecrement}
                className='px-3 py-1 border rounded-md border-gray-400 text-sm'
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
                className='px-3 py-1 border rounded-md border-gray-400 text-sm'
              >
                +
              </button>
              <button
                type='submit'
                className='ml-2 px-8 py-3 bg-teesaBlueDark text-white rounded-md'
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
      {/* Reviews */}
      <div className='reviewsContainer w-full m-8 lg:m-4 lg:w-3/4   border-t-2 border-blue-950'>
        {/* Review Form */}
        {userReviewEnabled && (
          <ReviewForm
            productId={id}
            userId={userId}
          />
        )}

        <h1 className='font-bold text-lg m-4'>Opiniones:</h1>
        {/* Client Reviews*/}
        {totalReviews === 0 ||
        totalReviews === null ||
        totalReviews === undefined ? (
          <h1 className=' text-lg m-4'>
            Aún no hay opiniones de este producto.
          </h1>
        ) : (
          reviews.map((review, index) => (
            <Review
              key={index}
              userName={review.User.nombre}
              userRating={review.estrellas}
              userComment={review.comentario}
              userDate={reviews.fecha}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CardDetail;

/* eslint-disable no-unused-vars */
//Redux
import { loginUser } from '../../features/reduxReducer/loginSlice';
import { setUser } from '../../features/reduxReducer/userSlice';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
//NPMs
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
//Icon & Images
import kichen from '../../assets/kitchen.jpg';
import googleIcon from '../../assets/icon/Google.svg';
import waves from '../../assets/icon/waves.svg';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginState.error);
  const loading = useSelector((state) => state.loginState.loading);
  const success = useSelector((state) => state.loginState.success);
  const errorMessage = useSelector((state) => state.loginState.errorMessage);
  const userData = useSelector((state) => state.userState.userData);

  //Data del Usuario - Token.

  const [tokenValue, setTokenValue] = useState('');
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const token = useSelector((state) => state.loginState.token);

  const setUserWithTokenData = () => {
    if (tokenValue) {
      //Decodificamos el Token
      const decodedToken = jwt_decode(tokenValue);
      //Sacamos la data.
      const userId = decodedToken.sub;
      const userName = decodedToken.nombre;
      const userType = decodedToken.tipo;
      //Despachamos la action.
      dispatch(setUser({ userId, userName, userType }));
    }
  };

  //GoogleAuth

  const googleAuthLink = useSelector(
    (state) => state.loginState.googleAuthLink
  );

  const handleGoogleLogin = () => {
    if (googleAuthLink) {
      window.location.href = googleAuthLink;
    }
  };

  //Alerts

  //AlertMessage
  const alertErrorMessage = (errorMessage) => {
    Swal.fire({
      title: 'Sucedió un error',
      text: JSON.stringify(errorMessage),
      icon: 'error',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };

  const alertSucess = () => {
    Swal.fire({
      title: '¡Felicidades!',
      text: 'Has ingresado a tu cuenta con éxito.',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };

  useEffect(() => {
    if (errorMessage) {
      alertErrorMessage(errorMessage);
    }
  }, [errorMessage]);

  //Hook Form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  const onSubmit = async (data) => {
    const resultAction = await dispatch(loginUser(data));
    if (resultAction.error) {
      const errorMessage = resultAction.error.response.data.message;
      alertErrorMessage(errorMessage);
    } else {
      const ntoken = resultAction.payload;
      alertSucess();
      setTokenValue(ntoken);
      await setUserWithTokenData();
      setIsUserLoaded(true);
    }
    reset();
  };

  //Llamar a la  función Token Data.

  useEffect(() => {
    if (tokenValue) {
      setUserWithTokenData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenValue]);

  useEffect(() => {
    if (userData) {
      //console.log(`User Data: ${JSON.stringify(userData)}`);
    }
  }, [userData]);

  useEffect(() => {
    if (isUserLoaded) {
      navigate('/home');
    }
  }, [isUserLoaded, navigate]);

  //Prueba Token

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://servidor-teesa.onrender.com/loginCheck',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     // Aquí puedes manejar la respuesta de la API
  //   } catch (error) {
  //     console.error(error.response.data);
  //      //Aquí puedes manejar cualquier error ocurrido durante la solicitud
  //   }
  // };

  //Tengo que llamar la funcion dos veces o no actualiza la data.

  return (
    <div
      style={{
        backgroundImage: `url(${waves})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
      className='allContainer flex flex-col justify-center items-center w-full h-screen bg-bottom bg-cover -mt-1'
    >
      <div className='formContainer flex justify-center items-center flex-col-reverse sm:flex-col-reverse  lg:flex-row w-3/4 p-5 -mt-36'>
        <div className='hidden w-2/3 h-full lg:flex -mr-5'>
          <img
            className='filter-green-500 rounded-l-xl'
            src={kichen}
            alt='kitchen'
          />
        </div>
        <div className=' flex flex-col justify-center items-center bg-teesaWhite p-5 w-full h-full rounded-lg  md:w-2/4 lg:w-1/4 '>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full h-fit bg-teesaWhite '
          >
            <h1 className='font-bold text-sm lg:text-2xl 2xl:text-4xl  -mt-4 mb-2 text-teesaBlueDark'>
              Ingresa
            </h1>
            <div className='flex flex-col'>
              <input
                placeholder='Email'
                className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight   bg-teesaGrey'
                type='email'
                {...register('correo', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Ingresa un email válido',
                  },
                })}
                onBlur={() => handleBlur('correo')}
              />
              {errors.correo ? (
                <span className='text-teesaBlueDark'>
                  {errors.correo.message}
                </span>
              ) : (
                <div className='h-[24px]'></div>
              )}
            </div>

            <div className='flex flex-col mt-3'>
              <input
                placeholder='Contraseña'
                className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight  bg-teesaGrey'
                type='password'
                {...register('contrasena', {
                  required: 'Este campo es obligatorio',
                })}
                onBlur={() => handleBlur('contrasena')}
              />
              {errors.contrasena ? (
                <span className='text-text-teesaBlueDark'>
                  {errors.contrasena.message}
                </span>
              ) : (
                <div className='h-[24px]'></div>
              )}
            </div>

            <div className='flex justify-center mt-1'>
              <button
                className='mb-[5px]  w-full rounded bg-green-600  px-6 p-2.5  text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-green-800  cursor-pointer'
                type='submit'
              >
                {loading ? 'Cargando...' : 'Ingresar'}
              </button>
            </div>
            <p className='text-end my-2 text-black text-sm lg:text-sm 2xl:text-lg'>
              ¿No tienes cuenta?{' '}
              <Link to='/signup'>
                <span
                  style={{
                    textShadow:
                      '0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0.5em rgba(0, 128, 0, 0.1)',
                  }}
                  className='text-green-600 hover:cursor-pointer hover:text-teesaGreenDark font-bold'
                >
                  Regístrate
                </span>
              </Link>
            </p>
          </form>
          <div className='w-full border-t-2 border-teesaBlueLight mb-4'></div>
          <div className='flex justify-center items-center mt-2 w-full'>
            <button
              className='flex mb-[5px]  w-full rounded bg-teesaWhite  py-2.5 text-sm 2xl:text-lg  font-medium uppercase leading-normal text-black shadow-lg  cursor-pointer border-2 border-teesaBlueLight hover:bg-gray-300 justify-center'
              type='submit'
              onClick={handleGoogleLogin}
            >
              <img src={googleIcon} className='w-5 h-5 mx-3 my-auto' /> Ingresa
              con Google
            </button>
          </div>
        </div>

        {/* <button
        className='mt-5 border-2 border-teesaBlueLight rounded-md px-2 hover:border-teesaBlueDark'
        onClick={fetchData}
      >
        Solucitud del Token
      </button> */}
      </div>
    </div>
  );
};

export default Login;

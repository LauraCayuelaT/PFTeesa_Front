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
//Icon
import googleIcon from '../../assets/icon/Google.svg';

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

  const token = useSelector((state) => state.loginState.token);

  // useEffect(() => {
  //   if (token) {
  //     console.log('Token actualizado:', token);
  //   }
  // }, [token]);

  //El boton sirve, pero tengo que crear una forma de que esta funcion se ejecute con el submit y no con el boton.

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
      window.open(googleAuthLink, '_blank');
    }
  };

  //  console.log(errorMessage);
  //  console.log(success);

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
      setTokenValue(ntoken);
      alertSucess();
    }
    reset();
    navigate('/home');
  };

  //Llamar a la  función Token Data.

  useEffect(() => {
    if (tokenValue) {
      setUserWithTokenData();
    }
  }, [tokenValue]);

  useEffect(() => {
    if (userData) {
      //console.log(`User Data: ${JSON.stringify(userData)}`);
    }
  }, [userData]);

  //Prueba Token

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://servidor-teesa.onrender.com/loginCheck',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error(error.response.data);
      // Aquí puedes manejar cualquier error ocurrido durante la solicitud
    }
  };

  //Tengo que llamar la funcion dos veces o no actualiza la data.

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen -mt-16'>
      <h1 className='font-bold text-4xl m-2 text-teesaBlueLight'>Ingresar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/5 h-fit'>
        <div className='flex flex-col'>
          <input
            placeholder='Email'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
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
            <span className='text-red-500'>{errors.correo.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col mt-3'>
          <input
            placeholder='Contraseña'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='password'
            {...register('contrasena', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('contrasena')}
          />
          {errors.contrasena ? (
            <span className='text-red-500'>{errors.contrasena.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex justify-center '>
          <button
            className='mb-[5px]  w-full rounded bg-teesaBlueLight   px-6 p-2.5  text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark cursor-pointer'
            type='submit'
          >
            {loading ? 'Cargando...' : 'Ingresar'}
          </button>
        </div>
        <p className='text-end mt-2'>
          ¿No tienes cuenta?{' '}
          <Link to='/signup'>
            <span className='text-teesaBlueLight hover:cursor-pointer font-bold'>
              Registrate.
            </span>
          </Link>
        </p>
      </form>
      <div className='w-1/5 border-t-2 border-black mb-4'></div>
      <div className='flex justify-center items-center mt-2 w-1/5'>
        <button
          className='flex mb-[5px]  w-full rounded bg-teesaWhite  py-2.5 text-md font-medium uppercase leading-normal text-black shadow-lg  cursor-pointer border-2 border-black'
          type='submit'
          onClick={handleGoogleLogin}
        >
          <img src={googleIcon} className='w-5 h-5 mx-3 my-auto' /> Ingresar con
          Google
        </button>
      </div>

      <button
        className='mt-5 border-2 border-teesaBlueLight rounded-md px-2 hover:border-teesaBlueDark'
        onClick={fetchData}
      >
        Solucitud del Token
      </button>
    </div>
  );
};

export default Login;

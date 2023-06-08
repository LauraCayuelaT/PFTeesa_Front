/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/reduxReducer/loginSlice';
//import { registerUser } from '../../features/reduxReducer/registerSlice';

//NPMs
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
//Icon
import googleIcon from '../../assets/icon/Google.svg';

const Login = () => {
  //Register Yose (acuerdate de importar el registerUser de la Slice):

  //const dispatch = useDispatch();
  //const loadingr = useSelector((state) => state.registerState.loading);
  //const errorr = useSelector((state) => state.registerState.error);
  //console.log(loadingr);
  //Ejecutar el Reducer Post.
  // const onSubmit2 = (data) => {
  //   console.log(data);
  //   dispatch(registerUser(data));
  //   reset();
  // };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loginState.loading);
  const error = useSelector((state) => state.loginState.error);

  //Alert
  const alertError = () => {
    Swal.fire({
      title: 'Sucedió un error',
      text: 'Lo sentimos, por favor inténtalo de nuevo.',
      icon: 'error',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };

  //Hook Form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
    reset();
    if (error) {
      alertError();
    }
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen -mt-16'>
      <h1 className='font-bold text-4xl m-2 text-teesaBlueLight'>Ingresar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/5 h-fit'>
        <div className='flex flex-col'>
          <input
            placeholder='Email'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='email'
            {...register('user_email', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Ingresa un email válido',
              },
            })}
            onBlur={() => handleBlur('user_email')}
          />
          {errors.user_email ? (
            <span className='text-red-500'>{errors.user_email.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col mt-3'>
          <input
            placeholder='Contraseña'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='password'
            {...register('user_password', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('user_password')}
          />
          {errors.user_password ? (
            <span className='text-red-500'>{errors.user_password.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>
        <p className='text-teesaBlueLight hover:cursor-pointer text-end font-bold mt-3'>
          ¿Olvidaste tu contraseña?
        </p>
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
          <span className='text-teesaBlueLight hover:cursor-pointer font-bold'>
            Registrate.
          </span>
        </p>
      </form>
      <div className='w-1/5 border-t-2 border-black mb-4'></div>
      <div className='flex justify-center items-center mt-2 w-1/5'>
        <button
          className='flex mb-[5px]  w-full rounded bg-teesaWhite  py-2.5 text-md font-medium uppercase leading-normal text-black shadow-lg  cursor-pointer border-2 border-black'
          type='submit'
        >
          <img src={googleIcon} className='w-5 h-5 mx-3 my-auto' /> Ingresar con
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;

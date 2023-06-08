/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
//NPMs
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
  //Alert
  const alertConfirm = () => {
    Swal.fire({
      title: '¡Gracias!',
      text: 'Por favor, acepta el correo de confirmación para ingresar.',
      icon: 'success',
      confirmButtonText: 'Ok.',
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen -mt-10'>
      <h1>Teesa - Ingresar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/6 h-fit'>
        <div className='flex flex-col'>
          <input
            placeholder='Email'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='email'
            {...register('email', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Ingresa un email válido',
              },
            })}
            onBlur={() => handleBlur('email')}
          />
          {errors.email ? (
            <span>{errors.email.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col'>
          <input
            placeholder='Contraseña'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='password'
            {...register('contrasenia', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('contrasenia')}
          />
          {errors.contrasenia ? (
            <span>{errors.contrasenia.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>
        <p className='text-teesaBlueLight hover:cursor-pointer text-end font-bold'>
          ¿Olvidaste tu contraseña?
        </p>
        <div className='flex justify-center mt-1'>
          <button
            className='mb-[5px]  w-full rounded bg-teesaBlueLight   px-6 pt-2.5  text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark cursor-pointer'
            type='submit'
          >
            Ingresar
          </button>
        </div>
        <p className='text-end'>
          ¿No tienes cuenta?{' '}
          <span className='text-teesaBlueLight hover:cursor-pointer font-bold'>
            Registrate.
          </span>
        </p>
      </form>
      <div className='w-1/6 border-t-2 border-black'></div>
      <div className='flex justify-center mt-1'>
        <button
          className='mb-[5px]  w-full rounded bg-teesaWhite  px-6 pt-2.5  text-md font-medium uppercase leading-normal text-black shadow-lg  cursor-pointer'
          type='submit'
        >
          Ingresar con Google
        </button>
      </div>
    </div>
  );
};

export default Login;

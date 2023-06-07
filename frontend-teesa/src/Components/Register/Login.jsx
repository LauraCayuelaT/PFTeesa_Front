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
    alertConfirm();
    reset();
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen -mt-10'>
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/6 h-fit'>
        <div className='flex flex-col'>
          <input
            placeholder='Nombre'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='text'
            {...register('nombre', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Ingresa solo letras y espacios',
              },
            })}
            onBlur={() => handleBlur('nombre')}
          />
          {errors.nombre ? (
            <span>{errors.nombre.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col'>
          <input
            placeholder='Celular'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='text'
            {...register('celular', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[0-9\s!@#$%^&*()]{6,14}$/,
                message: 'Ingresa un número de celular válido.',
              },
            })}
            onBlur={() => handleBlur('celular')}
          />
          {errors.celular ? (
            <span>{errors.celular.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

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
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                message:
                  'La contraseña debe contener al menos una letra, un número y una mayúscula',
              },
            })}
            onBlur={() => handleBlur('contrasenia')}
          />
          {errors.contrasenia ? (
            <span>{errors.contrasenia.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col'>
          <input
            placeholder='Dirección'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='text'
            {...register('direccion', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Za-z\s\d.,#-]+$/,
                message: 'Ingresa solo letras, números y símbolos',
              },
            })}
            onBlur={() => handleBlur('direccion')}
          />
          {errors.direccion ? (
            <span>{errors.direccion.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex flex-col'>
          <input
            placeholder='Ciudad'
            className=' min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-sm shadow-teesaBlueLight'
            type='text'
            {...register('ciudad', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Ingresa solo letras y espacios',
              },
            })}
            onBlur={() => handleBlur('ciudad')}
          />
          {errors.ciudad ? (
            <span>{errors.ciudad.message}</span>
          ) : (
            <div className='h-[24px]'></div>
          )}
        </div>

        <div className='flex justify-center mt-1'>
          <button
            className='mb-[50px]  w-full rounded bg-teesaBlueLight   px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark cursor-pointer'
            type='submit'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

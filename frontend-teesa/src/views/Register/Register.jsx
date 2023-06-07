import React from 'react'
import {useForm} from 'react-hook-form'

function Register() {
    const {register, handleSubmit, errors, reset, trigger, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    
      const password = watch('password');
      const confirmPassword = watch('confirmPassword');


    return (
      <div className="w-full h-full bg-teesaWhite flex flex-col justify-center align-center items-center">
        <h1 className='font-bold text-teesaGreenDark xl:text-4xl lg:text-4xl mt-[4%] mb-[2%]'>Registrate</h1>
        <div className='xl:w-[30%] flex flex-col justify-center align-center items-center gap-[1em]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-row justify-center align-center items-center gap-[3%]">
          <input type="text" name="name" placeholder='Nombre'className="bg-teesaGreenDark" />
          </label>
        </form>
        </div>
      </div>

    );
  }
  
  export default Register;
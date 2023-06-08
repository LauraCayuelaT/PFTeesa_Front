import React from 'react'
import {useForm} from 'react-hook-form'
import logo from '../../img/SVGs/TeesaAll.svg'

function Register() {
    const {register, handleSubmit, errors, reset, trigger, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    
      const password = watch('password');
      const confirmPassword = watch('confirmPassword');


    return (
      <div className="w-full bg-teesaBlueDark h-screen flex flex-row gap-[10%] justify-center align-center items-center">
        <div className='flex flex-col justify-center align-center items-center mt-[-15em]'>
          <img src={logo} alt="logo" className='xl:h-[600px]'/>
          <h1 className='text-center text-teesaWhite text-3xl mt-[-5em]'>Tecnología en Equipos Alimenticios</h1>
        </div>
        
        <div className=' xl:w-[30%] bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg h-[35em] flex flex-col justify-center align-center items-center mb-[5%]'>
          <h1 className='font-bold  xl:text-4xl lg:text-4xl text-teesaGrey mb-[10px] '>Registrate</h1>
            <div className='flex flex-col justify-center align-center items-center'>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center align-center items-center gap-[1em]'>
                <label className="flex flex-row justify-center align-center items-center ">
                <input type="text" name="name" placeholder=' Nombre' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="text" name="email" placeholder=' Email' className="bg-teesaBlueDark border-teesaGrey text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="text" name="city" placeholder=' Ciudad' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="text" name="address" placeholder=' Dirección' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="tel" name="phone" placeholder=' Teléfono' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="password" name="password" placeholder=' Contraseña' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <label className="flex flex-row justify-center align-center items-center gap-[3%]">
                <input type="password" name="password" placeholder=' Confirmar contraseña' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" />
                </label>
                <button className='bg-teesaGreen font-bold h-[2em] w-[12em] hover:bg-green-600 hover:transform hover:scale-105 rounded-md'>Crear Cuenta</button>
              </form>
            </div>
              <hr />
              <button className='bg-white mt-[3%] font-bold h-[3em] w-[12em] rounded-md hover:bg-teesaGrey hover:transform hover:scale-105'>
                <img src="" alt="" />
                Continuar con Google
              </button>
        </div>
        
      </div>

    );
  }
  
  export default Register;
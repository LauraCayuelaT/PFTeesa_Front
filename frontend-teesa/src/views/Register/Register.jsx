import logo from '../../img/SVGs/logoSolo.svg'

function Register() {
    return (
      <div className="w-full h-full bg-teesaWhite flex flex-col justify-center align-center items-center">
        <form action="">
        <h1 className='font-bold text-teesaGreenDark xl:text-4xl lg:text-4xl mt-[4%] mb-[2%]'>Registrate</h1>
        <div className='xl:w-[30%] flex flex-col justify-center align-center items-center gap-[1em]'>
            <div className='flex flex-row justify-center align-center items-center gap-[3%]'>
                <input type="text" name='name' placeholder='Nombre' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center gap-[3%]'>
                <input type="text" name='email' placeholder='Email' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center gap-[3%]'>
                <input type="text" name='ciudad' placeholder='Ciudad' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center gap-[3%]'>
                <input type="text" name='direccion' placeholder='Dirección' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center'>
                <input type="number" name='numero' placeholder='Telefono' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center'>
                <input type="password" name='password' placeholder='Contraseña' className='bg-teesaGreenDark'/>
            </div>
            <div className='flex flex-row justify-center align-center items-center'>
                <input type="password" name='password' placeholder='Confirma contraseña' className='bg-teesaGreenDark'/>
            </div>
            <button className='bg-teesaGreen'>Crear cuenta</button>
        </div>
        <div class="border-b border-black my-4"></div>
        <button></button>
        </form>
      </div>

    );
  }
  
  export default Register;
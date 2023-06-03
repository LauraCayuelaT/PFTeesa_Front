import logo from '../../img/SVGs/TeesaAll.svg'
import {Link} from 'react-router-dom'
import BlueCircleTeesa from '../../img/SVGs/BlueCircleTeesa.svg'
import CircleTeesa from '../../img/SVGs/CircleTeesa.svg'
import MiniCircleTeesa from '../../img/SVGs/MiniCircleTeesa.svg'


function Landing() {
  return (
    <div className="relative h-screen w-screen bg-cover bg-teesaBlueDark overflow-hidden " >
      <div className='flex justify-end mr-[12em] gap-10 pt-8 text-teesaWhite text-xl'>
        <Link to='/contact'>
        <button>Contacto</button>
        </Link>
        <Link to='/location'>
        <button>Dirección</button>
        </Link>
        <Link >
        <button>Acerca de</button>
        </Link>
        <h1> ° ° ° </h1>
      </div>
    <div className='flex flex-col justify-center ml-[42em] mt-[2em]'>
    <img src={logo} alt="logo" className='flex justify-items-end h-[33.5em] '/>
    <h1 className='mt-[-6em] text-teesaWhite text-2xl ml-[7em]'>Tecnologías en Equipos Alimenticios</h1>
    </div>
      <div className='flex gap-6 h-[3em] w-[30em] mt-[-13em] ml-[8em]  '>
        <Link to='/home'>
        <button className='bg-teesaGreen rounded-xl h-[3em] w-[10em] text-black text-xl hover:bg-green-600 hover:transform hover:scale-105'>Tienda</button>
        </Link>
        <Link to='/services'>
        <button className='bg-teesaGreen rounded-xl h-[3em] w-[10em] text-xl hover:transform hover:scale-105 hover:bg-green-600'>Servicios</button>
        </Link>
      </div>

       <img src={BlueCircleTeesa} alt="circulo" className='absolute bottom-[22em] right-[60em] select:none pointer-events-none '/>
      <img src={BlueCircleTeesa} alt="circulo" className='absolute h-[5em] bottom-[28em] right-[33em] select:none pointer-events-none'/>
      <img src={BlueCircleTeesa} alt="circulo" className='absolute bottom-[10em] right-[-35em] h-[45em] select:none pointer-events-none'/>
      <img src={MiniCircleTeesa} alt="circulo" className='absolute h-[30em] bottom-[27em] right-[50em] select:none pointer-events-none'/>
      <img src={MiniCircleTeesa} alt="circulo" className='absolute h-[5em] bottom-[10em] right-[75em] select:none pointer-events-none'/>
      <img src={CircleTeesa} alt="circulo" className=' absolute bottom-[-20em] right-[-17em] select:none pointer-events-none'/>
      <img src={BlueCircleTeesa} alt="circulo" className='select:none absolute h-[50em] bottom-[-30em] right-[30em] select:none pointer-events-none'/>
      <img src={MiniCircleTeesa} alt="circulo" className='absolute h-[30em] bottom-[15em] right-[65em] select:none pointer-events-none'/>
  
    </div>

    
  );
}

export default Landing;

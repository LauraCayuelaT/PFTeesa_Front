import { Link } from 'react-router-dom';
import logo from '../../img/SVGs/TeesaAll.svg';
import waves from "../../assets/icon/layered-waves.svg"
import LightsSvg from '../../img/SVGs/LightSVG'

function Landing() {
  return (
    <div className="relative bg-cover bg-no-repeat h-screen w-full overflow-hidden " style={{backgroundImage: `url(${waves})`}}>
      <div className="absolute pointer-events-none animate-pulse">
        <LightsSvg />
      </div>
      <div className="flex justify-end xl:text-2xl lg:text-xl gap-10 pt-4 md:text-lg sm:mr-[5%] sm:text-sm text-teesaWhite">
        <Link to="/contact">
          <button className='hover:text-gray-300'>Contáctanos</button>
        </Link>
        <Link to="/about">
          <button className='hover:text-gray-300'>Sobre nosotros</button>
        </Link>
        <h1> ° ° ° </h1>
      </div>
      <section className="flex flex-col justify-center items-center text-center my-auto xl:ml-[45%] lg:ml-[45%] lg md:ml-[]">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-full xl:max-w-[450px]  lg:max-w-[370px] md:max-w-[300px] sm:max-w-[290px] xs:max-w-[240px] h-auto" />
        </div>
        <h1 className="text-teesaWhite m-auto xl:text-4xl xl:mt-[-5em] lg:text-2xl lg:mt-[-6em] md:text-xl md:mt-[-6em] sm:text-xl sm:mt-[-6em] xs:mt-[-6em]">Tecnologías en Equipos Alimenticios</h1>
      </section>

      <div className='font-bold flex justify-center items-center h-screen w-[40%] m-auto xl:gap-12 xl:ml-[10%] lg:gap-12 lg:ml-[10%] mt-[-43%] md:gap-8 xs:gap-[1em]'>
        <Link to="/home"> 
          <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-lg md:h-[3em] md:w-[7em] md:text-lg sm:text-xl sm:h-[3em] sm:w-[8em] text-black hover:bg-green-600 hover:transform hover:scale-105 xs:w-[100px] xs:h-[50px] ">Tienda</button>
        </Link>
        <Link to="/services">
          <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-lg md:h-[3em] md:w-[7em] md:text-lg sm:text-xl sm:h-[3em] xs:w-[100px] xs:h-[50px] sm:w-[8em] hover:transform hover:scale-105 hover:bg-green-600">Servicios</button>
        </Link> 
      </div>
    </div> 
  );
}

export default Landing;
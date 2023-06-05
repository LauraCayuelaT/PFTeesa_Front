import { Link } from 'react-router-dom';
import logo from '../../img/SVGs/TeesaAll.svg';
import BlueCircleTeesa from '../../img/SVGs/BlueCircleTeesa.svg';
import GreenCircleTeesa from '../../img/SVGs/GreenCircleTeesa.svg';

function Landing() {
  return (
    <div className="relative bg-cover h-screen bg-teesaBlueDark overflow-hidden">
      <div className="flex justify-end xl:mr-[9em] xl:text-xl lg:mr-[5em] lg:text-xl gap-10 pt-8 md:mr-[] md:text-l sm:mr-[3em] sm:text-l text-teesaWhite">
        <Link to="/contact">
          <button>Contáctanos</button>
        </Link>
        <Link to="/about">
          <button>Sobre nosotros</button>
        </Link>
        <h1> ° ° ° </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-[2em] xl:ml-[45em] lg:ml-[35em] md:ml-[30em]">
        <img src={logo} alt="logo" className="xl-h-[35em] lg:h-[33em] md:h-[28em] sm:h-[28em]" />
        <h1 className="  text-teesaWhite xl:text-3xl xl:mt-[-5em] lg:text-3xl lg:mt-[-5em] md:text-xl md:mt-[-5em] sm:text-xl sm:mt-[-6em]">Tecnologías en Equipos Alimenticios</h1>
      </div> 
      
      <div className="flex flex-row font-bold xl:justify-start xl:items-center xl:gap-12 xl:mt-[-13em] xl:ml-[10em] lg:justify-start lg:items-center lg:gap-9 lg:mt-[-13em] lg:ml-[7em] md:justify-start md:items-center md:gap-9 md:mt-[-10em] md:ml-[4em] sm:justify-center sm:items-center sm:gap-6 sm:mt-[2em] sm:ml-[]">
      <Link to="/home">
        <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-xl md:h-[3.5em] md:w-[8em] md:text-xl sm:text-xl sm:h-[3.5em] sm:w-[8em] text-black  hover:bg-green-600 hover:transform hover:scale-105">Tienda</button>
      </Link>
      <Link to="/services">
      <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-xl md:h-[3.5em] md:w-[8em] md:text-xl sm:text-xl sm:h-[3.5em] sm:w-[8em] hover:transform hover:scale-105 hover:bg-green-600">Servicios</button>
      </Link>
</div>


<img src={BlueCircleTeesa} alt="circulochiqui" className="  hidden xl:block absolute xl:h-[2em] xl:bottom-[30em] xl: right-[30em] xl:transform xl:-translate-x-1/2" />
<img src={BlueCircleTeesa} alt="blueabajo" className=" hidden lg:block xl:block md:block absolute xl:h-[30em] xl:bottom-[-23em] xl:right-[30em] xl:transform xl:-translate-x-1/2 lg:h-[25em] lg:bottom-[-17em]  md:h-[20em] md:bottom-[-13em] md:left-[]" /> 

<img src={BlueCircleTeesa} alt="blueizq" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[20em] xl:bottom-[30em] xl:left-[-5em] lg:h-[13em] lg:bottom-[33em] lg:left-[-3em] md:h-[11em] md:bottom-[33em] md:left-[-3em] sm:h-[9em] sm:bottom-[34em] sm:left-[-2em] " />
<img src={GreenCircleTeesa} alt="greenizqabajo" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[17em] xl:bottom-[20em] xl:left-[-8em] lg:h-[13em] lg:bottom-[23em] lg:left-[-5em] md:h-[11em] md:bottom-[27em] md:left-[-7em] sm:h-[9em] sm:bottom-[27em] sm:left-[-4em]" />
<img src={GreenCircleTeesa} alt="izqarriba" className="hidden lg:block xl:block md:block sm:block absolute xl:h-[17em] xl:bottom-[34em] xl:left-[9em] lg:h-[13em] lg:bottom-[34em] lg:left-[6em] md:h-[11em] md:bottom-[37em] md:left-[5em] sm:h-[8em] sm:bottom-[37em] sm:left-[4em]"/>

<img src={GreenCircleTeesa} alt="greenabajo" className=" hidden lg:block xl:block md:block absolute xl:h-[30em] xl:bottom-[-25em] xl:left-[30em] lg:h-[25em] lg:bottom-[-20em] lg:left-[12em] md:h-[20em] md:bottom-[-15em] md:left-[12em] " />
<img src={BlueCircleTeesa} alt="bluederecha" className="hidden lg:block xl:block absolute xl:h-[25em] xl:bottom-[17em] xl:left-[78em] lg:h-[20em] lg:bottom-[17em] lg:left-[62em] "/>
    
    </div> 
  );
}

export default Landing;

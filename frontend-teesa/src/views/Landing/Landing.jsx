import { Link } from 'react-router-dom';
import logo from '../../img/SVGs/TeesaAll.svg';
import BlueCircleTeesa from '../../img/SVGs/BlueCircleTeesa.svg';
import GreenCircleTeesa from '../../img/SVGs/GreenCircleTeesa.svg';

function Landing() {
  return (
    <div className="relative bg-cover h-screen bg-teesaBlueDark overflow-hidden">
      <div className="flex justify-end xl:text-2xl lg:text-xl gap-10 pt-8 md:text-lg sm:mr-[5%] sm:text-sm text-teesaWhite">
        <Link to="/contact">
          <button>Contáctanos</button>
        </Link>
        <Link to="/about">
          <button>Sobre nosotros</button>
        </Link>
        <h1> ° ° ° </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center xl:ml-[45%] lg:ml-[45%] md:ml-[45%]">
        <img src={logo} alt="logo" className="w-full xl:max-w-[450px] lg:max-w-[400px] md:max-w-[300px] sm:max-w-[290px] h-auto" />
        <h1 className="  text-teesaWhite xl:text-4xl xl:mt-[-5em] lg:text-2xl lg:mt-[-6em] md:text-xl md:mt-[-6em] sm:text-xl sm:mt-[-6em]">Tecnologías en Equipos Alimenticios</h1>
      </div> 
      
      <div className="w-[35%] h-full flex flex-row font-bold xl:justify-start xl:items-center xl:gap-12 xl:mt-[-39%] xl:ml-[10%] lg:justify-start lg:items-center lg:gap-9 lg:mt-[-47%] lg:ml-[10%] md:justify-start md:items-center md:gap-9 md:mt-[-50%] md:ml-[10%] sm:justify-center sm:ml-[33%] sm:mt-[2%] sm:gap-6 ">
      <Link to="/home">
        <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-lg md:h-[3em] md:w-[7em] md:text-lg sm:text-xl sm:h-[3em] sm:w-[8em] text-black  hover:bg-green-600 hover:transform hover:scale-105">Tienda</button>
      </Link>
      <Link to="/services">
      <button className="bg-teesaGreen rounded-xl xl:h-[4em] xl:w-[10em] xl:text-xl lg:h-[3.5em] lg:w-[8em] lg:text-lg  md:h-[3em] md:w-[7em] md:text-lg sm:text-xl sm:h-[3em] sm:w-[8em] hover:transform hover:scale-105 hover:bg-green-600">Servicios</button>
      </Link>
</div>


<img src={BlueCircleTeesa} alt="circulochiqui" className="  hidden xl:block lg:block absolute xl:h-[3em] xl:bottom-[75%] xl:left-[58%] lg:h-[2em] lg:bottom-[74%] lg:left-[56%]" />

<img src={BlueCircleTeesa} alt="blueabajo" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[50%] xl:top-[83%] xl:left-[13%] lg:h-[50%] lg:left-[10%] md:h-[40%] md:top-[85%] md:left-[20%] sm:h-[40%] sm:top-[87%] sm:left-[26%] " />  
<img src={GreenCircleTeesa} alt="greenabajo" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[40%] xl:top-[88%] xl:left-[35%] lg:h-[40%] lg:top-[90%] lg:left-[30%] md:h-[30%] md:top-[90%] md:left-[45%] sm:h-[35%] sm:top-[90%] sm:left-[47%]"/>

<img src={BlueCircleTeesa} alt="blueizq" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[40%] xl:bottom-[75%] xl:left-[-8%] lg:h-[40%] lg:top-[-10%] lg:left-[-5%] md:h-[30%] md:bottom-[85%] md:right-[80%] sm:h-[30%] sm:bottom-[83%] sm:right-[78%] " />
<img src={GreenCircleTeesa} alt="greenizqabajo" className=" hidden lg:block xl:block md:block sm:block absolute xl:h-[35%] xl:top-[20%] xl:left-[-12%] lg:h-[35%] lg:top-[18%] md:h-[30%] md:bottom-[65%] md:right-[90%] sm:h-[30%] sm:bottom-[65%] sm:right-[88%]" />
<img src={GreenCircleTeesa} alt="izqarriba" className="hidden lg:block xl:block absolute xl:h-[35%] xl:bottom-[80%] xl:left-[10%] lg:h-[35%] lg:bottom-[80%] lg:left-[12%]"/>
-[4em]

<img src={BlueCircleTeesa} alt="bluederecha" className="hidden lg:block xl:block sm:block absolute xl:h-[50%] xl:left-[90%] lg:h-[50%] lg:bottom-[35%] lg:left-[90%] sm:h-[40%] sm:bottom-[45%] sm:left-[87%]"/>
    
    </div> 
  );
}

export default Landing;

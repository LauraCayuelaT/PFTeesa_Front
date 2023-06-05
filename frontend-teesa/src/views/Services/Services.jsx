import preventivo from '../../img/imgs/preventivo.png'
import correctivo from '../../img/imgs/correctivo.png'


function Services() {
    return (
      <div className="flex flex-col justify-center items-center bg-blue-100">
        <h1 className='text-teesaBlueDark font-bold mt-[2%] mb-[2%] xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl ' >Servicios</h1>
        <div className="flex flex-row justify-center items-center gap-[10%] mb-[3%] text-center">
          <div className="w-[25%] h-[40%] bg-teesaBlueDark flex flex-col justify-center items-center rounded-lg">
          <img src={preventivo} alt="prev" className='border-4 border-teesaBlueDark rounded-lg'/>
          <p className='text-teesaWhite mt-[2%] xl:text-xl lg:text-xl md:text-sm sm:text-sm mb-[2%]'>Mantenga sus equipos en óptimo estado para evitar fallos y pérdidas durante la producción.</p>
          </div>
          <div className="w-[25%] h-[40%] bg-teesaBlueDark flex flex-col justify-center items-center rounded-lg ">
          <img src={correctivo} alt="corr" className='border-4 border-teesaBlueDark rounded-lg'/>
          <p className='text-teesaWhite mt-[2%] xl:text-xl lg:text-xl md:text-sm sm:text-sm mb-[2%]'>Ayudamos a resolver las fallas de sus equipos con diagnósticos precisos y tiempos mínimos.</p>
          </div>
        </div>
        <div className="bg-teesaBlueDark w-full h-[10em] text-teesaWhite flex flex-row justify-center items-center text-center gap-[30%]">
          <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='xl:text-3xl font-bold lg:text-3xl md:text-xl sm:text-lg '>Agende su visita técnica:</h1>
          <p className='mt-[4%]'>gerencia.teesassas@gmail.com</p>
          <p className='mt-[4%]'>3182581421 - 3162432974</p>
          </div>
          <div className='flex flex-row justify-center items-center xl:gap-9 lg:gap-9 md:gap-4 sm:gap-2'>
            <a href="https://api.whatsapp.com/send?phone=%2B57+316+2432974&text=Hola%2C+vi+tu+pagina+web+y+deseo+mas+informaci%C3%B3n">
            <i className='fa-brands fa-square-whatsapp xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl'></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100068661421832&mibextid=ZbWKwL">
            <i className='fa-brands fa-square-facebook xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl'></i>
            </a>
            <a href="https://www.instagram.com/teesa.tec/">
            <i className='fa-brands fa-square-instagram xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl'></i>
            </a>
          </div>

      </div>
      </div>

    );
  }
  
  export default Services;
import tech from '../../../assets/about/tech-kitchen.jpg';
import tech1 from '../../../assets/about/kitone.jpg';
import tech2 from '../../../assets/about/kittwo.jpg';

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center aling-center w-full h-full mt-0'>
      {/* First Part */}
      <section className='py-10 lg:py-20 bg-stone-100 font-poppins '>
        <div className='max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
          <div className='flex flex-wrap '>
            <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 '>
              <div className='lg:max-w-md'>
                <div className='px-4 pl-4 mb-6 border-l-4 border-blue-500'>
                  <span className='text-sm text-gray-600 uppercase '>
                    Quienes somos
                  </span>
                  <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl '>
                    Nosotros
                  </h1>
                </div>
                <p className='px-4 mb-10 text-base leading-7 text-gray-500 '>
                  Somos una empresa Colombiana ubicada en Santiago de Cali,
                  Valle del Cauca, creada en 2017 como una empresa unipersonal
                  ofreciendo mantenimiento a las diferentes marcas en las
                  cocinas comerciales e industriales.
                  <br />
                  <br />
                  Somos un aliado estratégico productivo y confiable para
                  nuestros clientes y proveedores, buscando continuamente
                  ventajas competitivas. A través de un equipo Humano
                  comprometido, calificado y con amplia experiencia, dispuesto a
                  determinar y cumplir los requisitos de nuestros cliente y
                  proveedores con el propósito de aumentar la satisfacción y
                  evaluando las oportunidades de mejoras y la necesidad de
                  efectuar cambios en el sistema
                </p>
              </div>
            </div>
            <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
              <img
                src={tech}
                alt='img'
                className='relative z-40 object-cover w-full h-full rounded-3xl'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='flex items-start py-20 bg-gray-100 xl:h-screen font-poppins -mt-56 lg:-mt-20 '>
        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6'>
          <div className='relative max-w-xl mx-auto'>
            <img
              className='hidden lg:flex relative z-20 object-cover w-full rounded-2xl h-96'
              src={tech1}
              alt='photo'
              loading='lazy'
            />
            <div className='bottom-0 z-40 mt-10 -mb-20 lg:absolute lg:right-0 lg:-mr-44 lg:mt-0 '>
              <div className='w-full p-8 border shadow-sm  bg-gray-50 lg:w-96 rounded-2xl'>
                <h2 className='mb-4 text-4xl font-bold text-gray-600 '>
                  Misión
                </h2>
                <p className='pb-4 mb-4 text-gray-600  '>
                  Somos un aliado estratégico innovador brindando soluciones
                  integrales profesionales en mantenimientos, equipos y dotación
                  de cocinas industriales, de proveedores reconocidos por su
                  excelente calidad enfocados a la EFICIENCIA, para fortalecer
                  sus sistemas productivos con mano de obra calificada y
                  certificada, con equipos confiables, tecnología de punta,
                  diseñados con altos estándares de calidad a su necesidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col-reverse md:flex-row items-center md:items-start py-20 bg-gray-100 xl:h-screen font-poppins -mt-40 md:-mt-60 lg:-mt-[250px] 2xl:-mt-[600px]'>
        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6'>
          <div className='relative max-w-xl mx-auto'>
            <div className=' lg:bottom-0 z-40 md:mt-10 md:-mb-20 lg:absolute lg:left-0 lg:-ml-44 lg:mt-0'>
              <div className='w-full p-8 border shadow-sm bg-gray-50 lg:w-96 rounded-2xl'>
                <h2 className='mb-4 text-4xl font-bold text-gray-600'>
                  Visión
                </h2>
                <p className='pb-4 mb-4 text-gray-600'>
                  En el 2030 TEESA aumentará la participación en nuestro negocio
                  fundamental, soluciones integrales profesionales en
                  mantenimientos, equipos y dotación de cocinas industriales con
                  tecnológica eficaces apropiadas e innovadoras, apuntando a la
                  consolidación como uno de los principales proveedores en el
                  gremio gastronómico que permitan el crecimiento,
                  sostenibilidad, rentabilidad económica y social.
                </p>
              </div>
            </div>
            <img
              className='md:mt-40 lg:mt-0 relative z-20 object-cover w-full rounded-2xl h-96 md'
              src={tech2}
              loading='lazy'
              alt='photo'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

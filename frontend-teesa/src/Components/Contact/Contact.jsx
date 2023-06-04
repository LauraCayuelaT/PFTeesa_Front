import Map from './Map';

const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full '>
        <section className='mb-32 w-full'>
          <div className=" flex items-center justify-center relative mx-auto h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <h1 className='font-bold text-7xl text-white mt-[-80px] drop-shadow-xl shadow-black'>
              Contáctanos
            </h1>
          </div>
          <div className=' m-auto w-8/12 px-6 md:px-12'>
            <div className='flex rounded-lg bg-teesaWhite px-6 py-12  border-[3px] border-teesaBlueLight md:py-16 md:px-4 -mt-[100px] backdrop-blur-[30px] shadow-lg w-full justify-center'>
              <div className='flex flex-wrap w-full flex-row justify-center'>
                <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6'>
                  {/* FORM */}
                  <form>
                    <h1 className='font-bold text-4xl text-teesaBlueDark my-1'>
                      ¿Quieres tener más información?
                    </h1>
                    <h2 className=' my-3 font-medium text-[20px]'>
                      Escribe tus datos y te contactaremos.
                    </h2>
                    <div className='relative mb-6' data-te-input-wrapper-init>
                      <input
                        type='text'
                        className='peer block min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none border-2 border-teesaBlueLight shadow-lg'
                        placeholder='Nombre'
                      />
                    </div>
                    <div className='relative mb-6' data-te-input-wrapper-init>
                      <input
                        type='phone'
                        className='peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg'
                        placeholder='Celular'
                      />
                    </div>
                    <div className='relative mb-6' data-te-input-wrapper-init>
                      <input
                        type='email'
                        className='peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg'
                        placeholder='Email'
                      />
                    </div>
                    <div className='relative mb-6' data-te-input-wrapper-init>
                      <textarea
                        className='peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-teesaBlueLight shadow-lg'
                        rows='3'
                        placeholder='Escribe tu mensaje.'
                      ></textarea>
                    </div>
                    <div className=' inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex'></div>
                    <button
                      type='button'
                      data-te-ripple-init
                      data-te-ripple-color='light'
                      className='mb-6 inline-block w-full rounded bg-teesaBlueLight  px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark'
                    >
                      Enviar
                    </button>
                  </form>
                  {/* FORM */}
                </div>
                {/* DESING */}
                <div className='w-full shrink-0 grow-0 basis-auto lg:w-5/12'>
                  <div className='flex flex-wrap flex-col'>
                    <div className='mb-12  shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:w-5/12 lg:px-6 xl:w-5/12'>
                      <div className='flex items-start'>
                        <div className='shrink-0'>
                          <div className='inline-block rounded-md bg-primary-100 p-1 text-primary'>
                            <i
                              className='fa-solid fa-square-phone fa-3x '
                              style={{ color: '#192c8c' }}
                            ></i>
                          </div>
                        </div>
                        <div className='ml-4 grow'>
                          <p className='mb-2 font-bold text-3xl'>Contacto</p>
                          <p className='text-neutral-800 text-xl'>
                            Teléfono: 6023489128
                          </p>
                          <p className='text-neutral-800 text-xl'>
                            Celular: 3182581421
                          </p>
                          <p className='text-neutral-800 text-xl'>
                            gerencia.teesasas@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-full'>
                      <div className='align-start flex '>
                        <div className='shrink-0'>
                          <div className='inline-block rounded-md bg-primary-100 p-0 text-primary'>
                            <i
                              className='fa-solid fa-location-dot fa-3x m-2'
                              style={{ color: '#192c8c' }}
                            ></i>
                          </div>
                        </div>
                        <div className='ml-4 grow'>
                          <p className='mb-2 font-bold text-3xl'>Ubicación</p>
                          <p className='text-neutral-800 text-xl'>
                            Carrera 21 # 19a -03
                          </p>
                          <p className='text-neutral-800 text-xl'>
                            Aranjuez, Cali, Colombia
                          </p>
                          <p className='text-neutral-800 text-xl'>
                            Horarios: L-V 7:30 - 17:30
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-start mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12 ml-8'>
                    <div className='flex items-start'>
                      <div className='shrink-0'>
                        <div className='inline-block rounded-md bg-primary-100 p-4 text-primary'></div>
                      </div>
                      <div className='flex grow flex-col text-center'>
                        <p className='mb-2 font-bold text-3xl'>
                          Redes Sociales
                        </p>
                        <div className='flex justify-center items-center '>
                          <a
                            href='https://wa.link/76pmz1'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <i
                              className='fa-brands fa-square-whatsapp fa-4x m-2 hover:scale-125 duration-75'
                              style={{ color: '#192C8C' }}
                            ></i>
                          </a>
                          <a
                            href='https://www.facebook.com/profile.php?id=100068661421832&mibextid=ZbWKwL'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <i
                              className='fa-brands fa-square-facebook fa-4x m-2 hover:scale-125 duration-75'
                              style={{ color: '#192C8C' }}
                            ></i>
                          </a>
                          <a
                            href='https://www.instagram.com/teesa.tec/?igshid=YmMyMTA2M2Y%3D'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <i
                              className='fa-brands fa-square-instagram fa-4x m-2 hover:scale-125 duration-75'
                              style={{ color: '#192C8C' }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Map />
    </div>
  );
};

export default Contact;

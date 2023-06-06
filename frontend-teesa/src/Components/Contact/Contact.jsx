/* eslint-disable no-unused-vars */
import Map from './Map';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  //Validation:

  const [fieldErrors, setFieldErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formulario.user_name) {
      errors.user_name = 'Por favor, ingresa tu nombre';
    } else if (!/^[a-zA-Z\s]+$/.test(formulario.user_name)) {
      errors.user_name = 'El nombre solo debe contener letras';
    } else {
      delete errors.user_name;
    }

    if (!formulario.user_phone) {
      errors.user_phone = 'Por favor, ingresa tu número de celular';
    } else if (!/^[0-9\s+]+$/.test(formulario.user_phone)) {
      errors.user_phone = 'El celular solo debe tener números.';
    } else {
      delete errors.user_phone;
    }

    if (!formulario.user_email) {
      errors.user_email = 'Por favor, ingresa tu correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(formulario.user_email)) {
      errors.user_email = 'Por favor, ingresa un correo electrónico válido';
    } else {
      delete errors.user_email;
    }

    if (!formulario.message) {
      errors.message = 'Por favor, ingresa un mensaje';
    } else {
      delete errors.message;
    }

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  //Form - State
  const [formulario, setFormulario] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
    console.log(formulario);
  };

  const handleSubmit = () => {
    setFormulario({
      user_name: '',
      user_phone: '',
      user_email: '',
      message: '',
    });
  };

  //Alert
  const alert = () => {
    Swal.fire({
      title: 'Mensaje Enviado',
      text: 'Nos contactaremos pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  //EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          'service_prr11cf',
          'template_0glkzy9',
          form.current,
          'u-QBAzeFYmV_VDbW6'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert();
            handleSubmit();
            console.log('Mensaje Enviado.');
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log('Hay errores en el formulario, por favor corrígelos');
    }
  };
  return (
    <div className='w-full h-full'>
      <section className='mb-32 w-full'>
        <div className=" flex items-center justify-center relative mx-auto h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat -mt-1 bg-[url('https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <h1 className='font-bold text-7xl text-white mt-[-80px] drop-shadow-xl shadow-black'>
            Contáctanos
          </h1>
        </div>
        {/* Si le ponemos m-auto se centra el form */}
        <div className='m-auto flex w-11/12 px-6 justify-center'>
          <div className='flex rounded-lg bg-teesaWhite px-6 py-12  border-[3px] border-teesaBlueLight md:py-16 md:px-4 -mt-[100px] backdrop-blur-[30px] shadow-lg h-fit justify-center'>
            <div className='flex flex-wrap  flex-row justify-center'>
              <div className='mb-12  shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-0'>
                {/* FORM */}
                <form ref={form} onSubmit={sendEmail} className='w-full -m-1'>
                  <h1 className='font-bold text-3xl text-teesaBlueDark my-1'>
                    ¿Quieres tener más información?
                  </h1>
                  <h2 className=' my-3 font-medium text-[20px]'>
                    Escribe tus datos y te contactaremos.
                  </h2>
                  <div className='relative mb-1'>
                    <input
                      type='text'
                      name='user_name'
                      className='peer block min-h-[auto] w-full rounded border-10 bg-transparent py-[0.32rem] px-3 outline-none border-2 border-teesaBlueLight shadow-lg'
                      placeholder='Nombre'
                      value={formulario.user_name}
                      onChange={handleChange}
                    />
                    {fieldErrors.user_name ? (
                      <p className='text-red-500 text-sm'>
                        {fieldErrors.user_name}
                      </p>
                    ) : (
                      <div className='h-[20px]'></div>
                    )}
                  </div>
                  <div className='relative mb-1'>
                    <input
                      type='phone'
                      name='user_phone'
                      className='peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg'
                      placeholder='Celular'
                      value={formulario.user_phone}
                      onChange={handleChange}
                    />
                    {fieldErrors.user_phone ? (
                      <p className='text-red-500 text-sm'>
                        {fieldErrors.user_phone}
                      </p>
                    ) : (
                      <div className='h-[20px]'></div>
                    )}
                  </div>
                  <div className='relative mb-1'>
                    <input
                      type='email'
                      name='user_email'
                      className='peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg'
                      placeholder='Email'
                      value={formulario.user_email}
                      onChange={handleChange}
                    />
                    {fieldErrors.user_email ? (
                      <p className='text-red-500 text-sm'>
                        {fieldErrors.user_email}
                      </p>
                    ) : (
                      <div className='h-[20px]'></div>
                    )}
                  </div>
                  <div className='relative mb-1' data-te-input-wrapper-init>
                    <textarea
                      name='message'
                      className='peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none  border-2 border-teesaBlueLight shadow-lg'
                      rows='3'
                      placeholder='Escribe tu mensaje.'
                      onChange={handleChange}
                      value={formulario.message}
                    ></textarea>
                    {fieldErrors.message ? (
                      <p className='text-red-500 text-sm'>
                        {fieldErrors.message}
                      </p>
                    ) : (
                      <div className='h-[20px]'></div>
                    )}
                  </div>
                  <div className=' inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex'></div>
                  <input
                    type='submit'
                    value='Enviar'
                    className='mb-[50px] inline-block w-full rounded bg-teesaBlueLight  px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark cursor-pointer'
                  />
                </form>
                {/* FORM */}
              </div>
              {/* DESING */}
              <div className='w-full lg:w-6/12'>
                <div className='flex flex-wrap flex-col'>
                  <div className='mb-12  shrink-0 grow-0 basis-auto '>
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

                  <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12  lg:mb-12 lg:w-full  xl:w-full'>
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
                <div className='flex justify-start mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12 ml-2'>
                  <div className='flex items-start'>
                    <div className='shrink-0'>
                      <div className='inline-block rounded-md bg-primary-100 p-4 text-primary'></div>
                    </div>
                    <div className='flex grow flex-col text-center'>
                      <p className='mb-2 font-bold text-3xl'>Redes Sociales</p>
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
          <div className='-mt-[100px]'>
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

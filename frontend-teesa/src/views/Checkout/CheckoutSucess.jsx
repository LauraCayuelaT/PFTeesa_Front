import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector, useDispatch } from 'react-redux';
import waves from '../../assets/icon/waveschecklow.svg';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Cookies from 'universal-cookie';

const CheckoutSucess = () => {
  //R-R-D
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };
  //Tareas:

  //TODO: 0. Preeliminar: Preguntarle a Jhonny como traer el correo con nuestro login (si con Token o Query).
  //*1.Verifico si está logeado (Google o Nuestro)
  //*2. Si sí está logeado, saco el nombre y el email (Google o nuestro).
  //*3. Con el nombre y el user, le envío el mail.

  //Traer Data del User - Nuestro Login y Register (si no funciona así lo traemos de cookies).
  const allUser = useSelector((state) => state.userState);
  //1.
  //Si no detecta el user de Google - comprobamos con las cookies.
  useEffect(() => {
    if (allUser.user) {
      //2.
      const user_name = allUser.userData.userName;
      const user_email = allUser.userData.userEmail;
      //3.
      emailjs
        .send(
          'service_2rp9duo',
          'template_2y5jc5f',
          { user_email, user_name },
          'W5KJUGxF4wBdmUA3v'
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  }, [allUser]);

  return (
    <div
      style={{
        backgroundImage: `url(${waves})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
      className='allContainer flex flex-col justify-center items-center w-full h-screen bg-bottom bg-cover  border-t-8 border-teesaGreen -mt-[4px]'
    >
      <div className='flex flex-col justify-center items-center w-3/4  md:w-3/5 lg:w-1/4  lg:h-1/2 bg-white shadow-md rounded-md p-4'>
        <h2 className='text-4xl text-center font-bold mb-4'>
          ¡Felicitaciones!
        </h2>
        <h2 className='text-2xl text-center font-mediumn mb-4'>
          Tu compra ha sido procesada con éxito.
        </h2>
        <div className='transition duration-100 transform hover:scale-105 mt-2 mb-4'>
          <CheckCircleIcon
            sx={{ color: 'green', fontSize: 64 }}
            style={{ transition: 'transform 0.2s ease-in-out' }}
            className='hover:scale-110'
          />
        </div>

        <Button
          onClick={handleNavigateToHome}
          variant='contained'
          color='success'
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSucess;

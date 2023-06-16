import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLinkMercado } from '../../features/reduxReducer/mercadoSlice';

const CheckoutAlerts = () => {
  //Mailer Compra Exitosa:
  let data = {
    nombre: 'Juan',
    correo: 'juandgustin@gmail.com',
  };

  const user_email = data.correo;
  const user_name = data.nombre;

  let successBuy = () => {
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
  };

  //MercadoPago - Botón.

  const userId = useSelector((state) => state.userState.userData.userId);
  console.log(userId);

  const linkMercado = useSelector((state) => state.mercadoState.linkMercado);
  console.log(linkMercado);
  const status = useSelector((state) => state.mercadoState.status);
  const error = useSelector((state) => state.mercadoState.error);

  const dispatch = useDispatch();

  //*Al hacer la peticion me sale error: 404

  useEffect(() => {
    if (userId !== null) {
      dispatch(postLinkMercado(userId));
    }
  }, [dispatch, userId]);

  return (
    <div>
      <h1>Check</h1>
      <button
        className='m-4 p-4 border-2 border-blue-500 rounded-lg hover:bg-gray-300'
        onClick={successBuy}
      >
        Compra Exitosa
      </button>
      <h1>Mercado:</h1>
      <div>
        {status === 'pending' && <p>Cargando...</p>}
        {status === 'fulfilled' && (
          <p>
            Enlace del mercado:{' '}
            <a href={linkMercado} target='_blank' rel='noopener noreferrer'>
              Ir al MercadoPago
            </a>
          </p>
        )}
        {status === 'rejected' && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default CheckoutAlerts;

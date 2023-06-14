import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const CheckoutAlerts = () => {
  //Alerts:
  const alertSucess = () => {
    Swal.fire({
      title: '¡Felicidades!',
      text: 'Tu compra ha sido procesada con éxito.',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };

  const alertError = () => {
    Swal.fire({
      title: 'Sucedió un error',
      text: 'Por favor, inténta realizar la compra de nuevo.',
      icon: 'error',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };

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
        alertSucess();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  let errorBuy = () => {
    alertError();
  };

  return (
    <div>
      <h1>Check</h1>
      <button
        className='m-4 p-4 border-2 border-blue-500 rounded-lg hover:bg-gray-300'
        onClick={successBuy}
      >
        {' '}
        Compra Exitosa
      </button>
      <button
        className='m-4 p-4 border-2 border-blue-500 rounded-lg hover:bg-gray-300'
        onClick={errorBuy}
      >
        Fallo en la compra
      </button>
    </div>
  );
};

export default CheckoutAlerts;

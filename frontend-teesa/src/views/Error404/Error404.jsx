import { NavLink } from 'react-router-dom';
import error404 from '../../img/imgs/404.png';
function Error404() {
  return (
    <div className='flex flex-col lg:flex-row w-full items-center h-screen bg-teesaBlueLight overflow-hidden justify-items-center'>
      <div className='flex flex-col m-auto w-1/2 justify-center items-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-teesaWhite text-4xl mb-4'>
            Esta página no existe.
          </h1>
          <h2 className='text-start text-teesaWhite -webkit-line-clamp-3 overflow-hidden'>
            No pudimos encontrar la <br /> página que estabas <br /> buscando.
          </h2>
        </div>

        <div className='flex items-center justify-center mt-4'>
          <NavLink
            to='/home'
            className='bg-teesaBlueDark rounded-lg px-6 py-3 text-white font-bold transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen'
          >
            VOLVER
          </NavLink>
        </div>
      </div>
      <img
        src={error404}
        alt='Error 404'
        className='w-full md:w-1/2 -mt-10 lg:-mt-0'
      />
    </div>
  );
}

export default Error404;

/* eslint-disable react/prop-types */
const CardDetail = ({
  nombre,
  descripcion,
  caracteristicas,
  categoria,
  imagen,
  precio,
  stock,
  marca,
  estado,
}) => {
  return (
    <div>
      <div className='flex w-7/8 h-7/8  my-2 mx-6 transition duration-100 transform hover:scale-105 hover:cursor-pointer'>
        <div className=' shadow-md border  bg-teesaWhite border-gray-400 rounded-md'>
          <div className='imageContainer w-[290px] '>
            <img
              className='w-[290px] h-[260px] object-fill'
              src={imagen}
              alt='x'
            />
          </div>

          <div className='flex flex-col content-between p-5 h-[220px] items-start justify-between'>
            <p className='text-[15px] m-0 font-medium'>
              {categoria} {marca}
            </p>

            <h2 className='h-[55px]  text-[18px]  mb-1 text-black font-light'>
              {nombre}
            </h2>
            <h2 className='h-[55px]  text-[18px]  mb-1 text-black font-light'>
              {descripcion}
            </h2>

            <h2 className='h-[55px]  text-[18px]  mb-1 text-black font-light'>
              {caracteristicas}
            </h2>

            <h4 className='text-black text-[15px] font-bold'>{`$${precio}`}</h4>
            <h4 className='text-black text-[15px] font-bold'>
              {`Stock: ${stock}`}
            </h4>
            <h4 className='text-black text-[15px] font-bold'>
              {`Estado: ${estado}`}
            </h4>

            <div
              href='#'
              className='text-white   font-medium  text-md px-3 py-2 text-center items-end  dark:bg-blue-600 hover:bg-blue-700 flex justify-center w-45 m-auto'
            >
              <a href=''>
                Agregar al Carrito <i className='fa-solid fa-cart-shopping'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

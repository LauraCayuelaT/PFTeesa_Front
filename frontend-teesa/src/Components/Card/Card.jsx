//Imports:

export const Card = () => {
  return (
    <div className='flex w-[260px] h-[450px]  my-2 mx-4 transition duration-100 transform hover:scale-105 '>
      <div className=' shadow-md border  bg-teesaGrey border-gray-400'>
        <img
          className=''
          src='https://cdn.shopify.com/s/files/1/0484/9172/4964/products/HC-10000_3070ad9f-852f-407b-a39f-059aaf6d01ec_1800x1800.jpg?v=1663257518'
          alt='x'
        />

        <div className='flex flex-col content-between p-5 h-[190px] items-start justify-between'>
          <h2 className='  text-[18px]  mb-1 text-black font-light'>
            Horno Deshidratador (20 Bandejas)
          </h2>
          <h4 className='text-black text-[16px] font-md'>$12,692,900 COL</h4>
          <div
            href='#'
            className='text-white   font-medium  text-md px-3 py-2 text-center inline-flex items-end  dark:bg-blue-600 hover:bg-blue-700 '
          >
            <a href=''>
              Añadir al Carro <i className='fa-solid fa-cart-shopping'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

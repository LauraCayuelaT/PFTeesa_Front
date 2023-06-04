const Map = () => {
  return (
    <div className=' mt-[-100px]  mx-auto md:px-0'>
      <section className='mb-32 text-center'>
        <h1 className='font-bold text-4xl mb-[30px] text-teesaBlueLight'>
          ¿Dónde puedes encontrarnos?
        </h1>
        <div className='relative h-[700px] rounded-lg shadow-lg '>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.641228168729!2d-76.52390572526835!3d3.437165596537331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f3c0eb7bef%3A0x7aa457419aa6e22!2sCra.%2021%20%2319a-3%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1685841525689!5m2!1ses!2sco'
            className='absolute left-0 top-0 h-full w-full rounded-lg'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Map;

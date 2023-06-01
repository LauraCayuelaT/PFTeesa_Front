//Instalaciones:

function Home() {
  // Codigo del Sol:

  // Codigo de Juan:

  return (
    <div className='flex w-full h-full flex-col'>
      {/* Second Navbar */}
      <div className='flex bg-teesaBlueDark w-full m-0 items-center justify-center mt-[-1px] border-t-4 border-teesaGreen text-teesaWhite h-10 text-[18px]'>
        <h2 className='mx-3  hover:text-teesaGreen'>
          <a href='#'>Electrico</a>
        </h2>
        <h2 className='mx-3  hover:text-teesaGreen'>
          <a href='#'>Gas</a>
        </h2>
        <h2 className='mx-3  hover:text-teesaGreen'>
          <a href='#'>Refrigeración</a>
        </h2>
        <h2 className='mx-3  hover:text-teesaGreen'>
          <a href='#'>Hornos</a>
        </h2>
        <h2 className='mx-3  hover:text-teesaGreen'>
          <a href='#'>Repuestos</a>
        </h2>
      </div>
      {/* Hero */}
      <div className='heroContainer flex w-full h-80'>
        {/* Inicia parte de Sol. */}
        <div className='filters w-1/5 m-5 bg-slate-300 '>
          <h1>Filters</h1>
        </div>
        {/* Termina parte de Sol. */}
        {/* Inicia parte de Juan. */}
        <div className='cards w-4/5 m-5 bg-slate-300'>
          <h1>Cards</h1>
        </div>
        {/* Termina parte de Juan. */}
      </div>
    </div>
  );
}

export default Home;

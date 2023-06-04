//Instalaciones:
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
//Redux
import { getApiData } from '../../features/reduxReducer/productSlice';
//Gif
import loadingGif from '../../assets/icon/Loading.gif';

function Home() {
  // Codigo del Sol:

  // Codigo de Juan - Conexión con Back:

  const dispatch = useDispatch();
  const isDataLoaded = useSelector(
    (state) => state.productState.allProducts.length > 0
  );

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(getApiData());
    }
  }, [dispatch, isDataLoaded]);

  let productsTeesa = useSelector((state) => state.productState.allProducts);

  //isLoading
  let loading = useSelector((state) => state.productState.loading);

  return (
    <div className='flex w-full h-full flex-col flex-wrap'>
      {/* Second Navbar */}
      <div className='flex bg-teesaBlueDark w-full m-0 items-center justify-center mt-[-1px] border-t-4 border-teesaGreen text-teesaWhite h-[60px] text-[16px]'>
        <h2 className='mx-4  hover:text-teesaGreen cursor-pointer'>
          Eléctrico
        </h2>
        <h2 className='mx-4  hover:text-teesaGreen cursor-pointer'>Gas</h2>
        <h2 className='mx-4  hover:text-teesaGreen cursor-pointer'>
          Refrigeración
        </h2>
        <h2 className='mx-4  hover:text-teesaGreen cursor-pointer'>Hornos</h2>
        <h2 className='mx-4  hover:text-teesaGreen cursor-pointer'>
          Repuestos
        </h2>
      </div>
      {/* Hero */}
      <div className='heroContainer flex w-full h-[800px]'>
        {/* Inicia parte de Sol. */}
        <div className='filters w-1/6 m-4 bg-slate-300 '>
          <h1>Filters</h1>
        </div>
        {/* Termina parte de Sol. */}
        {/* Inicia parte de Juan. */}

        {loading && (
          <div className='flex justify-center items-center w-5/6 flex-col mt-[-200px]'>
            <img src={loadingGif} alt='gif' />
          </div>
        )}

        {!loading && (
          <div className=' flex cardsContainer w-5/6 h-fit m-5 bg-teesaWhite  items-end '>
            <div className='flex flex-wrap m-auto justify-center'>
              {productsTeesa.map((product) => (
                <Card
                  key={product.id}
                  nombre={product.nombre}
                  categoria={product.categoria}
                  precio={product.precio}
                  imagen={product.imagen}
                  marca={product.marca}
                />
              ))}
            </div>
          </div>
        )}
        {/* Termina parte de Juan. */}
      </div>
    </div>
  );
}

export default Home;

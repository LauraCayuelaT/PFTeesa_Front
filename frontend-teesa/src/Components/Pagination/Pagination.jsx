import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../features/reduxReducer/filterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const page = useSelector((state) => state?.filters?.page);

  const general = useSelector((state) => state?.filters?.products);
  const total = useSelector((state) => state?.filters);

  function arrayPaginas(total) {
    let pages = [];
    for (let index = 1; index < total + 1; index++) {
      pages.push(index);
    }
    return pages;
  }

  const paginasFinal = arrayPaginas(general.totalPages);

  const pagesChange = (number) => {
    dispatch(changePage(number));
  };

  const handlePrevClick = () => {
    if (page > 0) {
      dispatch(changePage(page - 1));
    }
  };

  const handleNextClick = () => {
    if (page < general.totalPages) {
      dispatch(changePage(page + 1));
    }
  };

  return (
    <div className='pagination-container'>
      {/* Renderizar los productos aquí */}
      <div className='products-container' style={{ marginTop: '50px' }}>
        {/* ... */}
      </div>

      {/* Paginación */}
      <div className='pagination-wrapper fixed bottom-0 left-0 right-0 bg-white py-4' style={{ marginTop: '20px' }}>
        <div className='pagination-inner flex justify-center'>
          <button
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage
                ? 'bg-teesaBlueDark text-teesaWhite'
                : 'bg-gray-300 text-teesaBlueDark'
            } ${page === 1 ? 'hidden' : 'flex'}`}
            onClick={handlePrevClick}
          >
            Anterior
          </button>
          {paginasFinal?.map((pagina) => (
            <button
              onClick={() => pagesChange(pagina)}
              className={`px-4 py-2 mx-1 rounded-lg ${
                page === pagina
                  ? 'bg-teesaBlueDark text-teesaWhite'
                  : 'bg-gray-300 text-teesaBlueDark'
              }`}
              key={pagina}
            >
              {pagina}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage
                ? 'bg-teesaBlueDark text-teesaWhite'
                : 'bg-gray-300 text-teesaBlueDark'
            }
          ${page === general.totalPages ? 'hidden' : 'flex'}`}
            onClick={handleNextClick}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

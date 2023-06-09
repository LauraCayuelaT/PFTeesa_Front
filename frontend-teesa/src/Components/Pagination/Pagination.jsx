import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPaginationData } from "../../features/reduxReducer/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPaginationData(currentPage));
  }, [dispatch, currentPage]);

  const general = useSelector((state) => state?.filters?.products);

  function arrayPaginas(total) {
    let pages = [];
    for (let index = 1; index < total + 1; index++) {
      pages.push(index);
    }
    return pages;
  }

  let paginasFinal = arrayPaginas(general.totalPages);

  let pagesChange = (number) => {
    setCurrentPage(number);
  };

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < general.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage 
            ? "bg-teesaBlueDark text-teesaWhite"
            : "bg-gray-300 text-teesaBlueDark"
        }`}
        onClick={handlePrevClick}
      >
        {" "}
        Back
      </button>
      {paginasFinal?.map((pagina) => (
        <button
          onClick={() => pagesChange(pagina)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === pagina
              ? "bg-teesaBlueDark text-teesaWhite"
              : "bg-gray-300 text-teesaBlueDark"
          }`}
          key={pagina}
        >
          {pagina}
        </button>
      ))}
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage 
            ? "bg-teesaBlueDark text-teesaWhite"
            : "bg-gray-300 text-teesaBlueDark"
        }`}
        onClick={handleNextClick}
      >
        {" "}
        Next
      </button>
    </div>
  );
};

export default Pagination;

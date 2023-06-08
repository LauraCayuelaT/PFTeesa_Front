import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPaginationData } from "../../features/reduxReducer/productSlice";
import { Card } from "../Card/Card";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPaginationData(currentPage));
  }, [dispatch, currentPage]);

  const allProducts = useSelector(
    (state) => state?.productState?.general?.products
  );
  console.log(allProducts);

  const general = useSelector((state) => state?.productState?.general);
  console.log(general);

  function arrayPaginas(total) {
    let pages = [];
    for (let index = 1; index < total + 1; index++) {
      pages.push(index);
    }
    return pages;
  }

  let paginasFinal = arrayPaginas(general.totalPages);

  console.log(paginasFinal);

  let pagesChange = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <div className="flex flex-wrap m-auto justify-center">
        {allProducts?.map((product) => (
          <Card
            id={product?.id}
            key={product?.id}
            nombre={product?.nombre}
            categoria={product?.categoria}
            precio={product?.precio}
            imagen={product?.imagen}
            marca={product?.marca}
          />
        ))}
      </div>
      {paginasFinal?.map((pagina) => (
        <button
          onClick={() => pagesChange(pagina)}
          className="w-5"
          key={pagina}
        >
          {pagina}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

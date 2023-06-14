import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

// import { useSelector } from 'react-redux';
import {
  fetchProducts,
  sortByName,
  sortByPrice,
  changePage
} from "../../features/reduxReducer/filterSlice";
import { getBrands } from "../../features/reduxReducer/productSlice";
// import NoRepuestosDisponibles from '../NoHayRep/NoRepuestos';
// import NoHayProductosRango from '../NoHayProductosRango/NoHayProductosRango';


const FilterComponent = ({currentPage, setCurrentPage}) => {
  const [estado, setEstado] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [orderName, setOrderName] = useState("");
  const [brands, setBrands] = useState([]);

  const pageState = useSelector((state) => state?.filters?.page);



  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      page: pageState ,
      estado: estado,
      tipo: tipo,
      marca: marca,

      precioMinimo: precio.split("-")[0],
      precioMaximo: precio.split("-")[1],

    };
    dispatch(fetchProducts(filters));
  }, [pageState, estado, tipo, marca, precio, dispatch]);


useEffect(() => {
  dispatch(getBrands())
    .then((response) => {
      setBrands(response.payload);
    })
    .catch((error) => {
      console.error("Error fetching brands:", error);
    });
}, [dispatch]);




  const handleChange = () => {
   dispatch(changePage(1))
   
  }


  const handleSort = (e) => {
    e.preventDefault();
    setOrderName(e.target.value);
    dispatch(sortByName(e.target.value));
  };

  const handleSortPrices = (e) => {
    e.preventDefault();
    setOrderPrice(e.target.value);
    dispatch(sortByPrice(e.target.value.toLowerCase()));
  };

  return (
    <div className="mb-4">
  <div className="block mb-2 font-semibold text-teesaBlueDark">
    <label htmlFor="sort" className="block mb-2 font-semibold">Orden Alfabético</label>
    <select
      id="sort"
      className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen"
      value={orderName}
      onChange={(e) => handleSort(e)}
    >
      <option value="" disabled>Seleccionar</option>
      <option value="ascendente">A-Z</option>
      <option value="descendente">Z-A</option>
    </select>
  </div>
  <div className="block mb-2 font-semibold text-teesaBlueDark">
    <label htmlFor="sortPrice" className="block mb-2 font-semibold">Precio</label>
    <select
      id="sortPrice"
      className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen"
      value={orderPrice}
      onChange={(e) => handleSortPrices(e)}
    >
      <option value="" disabled>Seleccionar</option>
      <option value="precio_min">Precio Mínimo</option>
      <option value="precio_max">Precio Máximo</option>
    </select>
  </div>
  <label className="block mb-2 font-semibold text-teesaBlueDark">
    Estado:
    <select
      value={estado}
      className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen"
      onChange={(e) => {setEstado(e.target.value); handleChange()}}
    >
      <option value="">Todos</option>
      <option value="usado">Usado</option>
      <option value="nuevo">Nuevo</option>
    </select>
  </label>
  <br />
  <label className="block mb-2 font-semibold text-teesaBlueDark">
    Tipo:
    <select
      value={tipo}
      className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen"
      onChange={(e) => {setTipo(e.target.value); handleChange()}}
    >
      <option value="">Todos</option>
      <option value="equipo">Equipo</option>
      <option value="repuesto">Repuesto</option>
    </select>
  </label>
  <br />
  <div className="flex flex-col mb-4 text-teesaBlueDark">
  <span className="mb-2 font-semibold">Marca:</span>
  {brands.map((brand) => (
    <label className="flex items-center mb-1" key={brand}>
      <input
        type="checkbox"
        value={brand}
        checked={marca === brand}
        onChange={(e) => {
          setMarca(e.target.checked ? brand : "");
          handleChange();
        }}
        className="mr-2 leading-tight focus:outline-none"
      />
      <span>{brand}</span>
    </label>
  ))}
</div>
  <br />
  <label className="block mb-2 font-semibold text-teesaBlueDark">
    Precio:
    <select
      value={precio}
      onChange={(e) => {setPrecio(e.target.value); handleChange()}}
      className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teesaGreen"
    >
      <option value="">Todos</option>
      <option value="0-10000000">0 - 10,000,000</option>
      <option value="10000000-20000000">10,000,000 - 20,000,000</option>
      <option value="20000000-30000000">20,000,000 - 30,000,000</option>
      <option value="30000000-40000000">30,000,000 - 40,000,000</option>
      <option value="40000000-50000000">40,000,000 - 50,000,000</option>
    </select>
  </label>
</div>
  );
};

export default FilterComponent;

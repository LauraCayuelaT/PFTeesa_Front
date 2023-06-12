import { NavLink } from "react-router-dom";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';     

import Carrusel from "../Carrusel/Carrusel"

/* eslint-disable react/prop-types */
const CardDetail = ({
  nombre,
  imagenes,
  descripcion,
  caracteristicas,
  categoria,
  imagenes,
  precio,
  stock,
  marca,
  estado,
}) => {
  return (
    <div className="mt-12 flex justify-center items-start">
    <div className="max-w-6xl rounded overflow-hidden shadow-lg flex relative">
      <NavLink className="mb-1 transition duration-300 ease-in-out transform hover:text-teesaGreen  focus:text-teesaGreen" to="/home">
        <button>Volver al listado</button>
      </NavLink>

      <div className="w-8/2 lg:w-1/3 xl:w-1/4 flex items-center justify-center ">
      <Carrusel/>
      </div>

      <div className="w-1/2 lg:w-2/3 xl:w-3/4 px-8 py-6">
        <div className="text-teesaBlueDark font-bold text-4xl mb-6">
          {categoria} {marca}
        </div>
        <h2 className="text-teesaBlueDark text-3xl  font-light mb-4">{nombre}</h2>
        <p className="text-gray-700 text-xl mb-6">Descripcion: {descripcion}</p>
        <p className="text-gray-700 text-xl mb-6">Caracteristicas: {caracteristicas}</p>
        <div className="flex justify-between mb-6">
          <div className="text-teesaGreenDark text-3xl font-bold">${precio}</div>
          <div className="text-xl" style={{ color: stock === 0 ? 'darkRed' : 'teesaGreenDark' }}>
             Stock: {stock === 0 ? 'Bajo pedido' : stock}
          </div> 
          <div className="text-gray-700 text-xl">Estado: {estado}</div>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="block text-center text-white font-medium py-3 px-6 bg-blue-600 rounded-md text-2xl hover:bg-blue-700 flex justify-center w-45 m-auto"
          >
            Agregar <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  );
};

export default CardDetail;
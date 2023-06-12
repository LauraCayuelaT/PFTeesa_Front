

import React from "react";
import { NavLink } from "react-router-dom";
import error404 from "../../img/imgs/404.png"
function Error404() {
  return (
    <div className="flex flex-row justify-center h-screen bg-teesaBlueLight overflow-hidden">
      <div className="flex flex-col m-auto mt-40">
        <h1 className="font-bold text-teesaWhite text-4xl mb-4">Esta página no existe.</h1>
        <h2 className="text-teesaWhite -webkit-line-clamp-3 overflow-hidden">
          No pudimos encontrar la
        </h2>
        <h2 className="text-teesaWhite"> página que estabas </h2>
        <h2 className="text-teesaWhite"> buscando. </h2>

        <div className="flex items-center justify-center mt-4">
          <NavLink
            to="/home"
            className="px-6 py-3 text-white font-bold transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen"
          >
            IR ATRÁS
          </NavLink>
        </div>
      </div>
      <img src={error404} alt="Error 404" />
    </div>
  );
}

export default Error404;

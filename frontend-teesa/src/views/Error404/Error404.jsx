import React from "react";
import error404 from "../../img/imgs/404.jpg";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className="flex h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <img src={error404} alt="Error 404" className="object-cover h-full w-full" />
      </div>
      <div className="absolute ml-20 top-0 left-0 right-30 bottom-0 flex items-center justify-center">
        <NavLink
          to="/home"
          className="px-6 ml-20 py-3  text-white font-bold transition duration-300 ease-in-out transform hover:text-teesaGreen focus:text-teesaGreen"
          >
          IR ATRÁS
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
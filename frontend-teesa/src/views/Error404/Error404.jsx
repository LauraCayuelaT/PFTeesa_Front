import React from "react";
import error404 from "../../img/imgs/404.jpg";
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img src={error404} alt="Error 404" /> 
      <Link to='/home'>
      <button className=" flex justify-center font-bold text-3xl text-teesaGreen  mt-[-27%] ml-[5%] w-[10em] h-[10em]">Ir a tienda</button>
      </Link>
    </div>
  );
}

export default Error404;
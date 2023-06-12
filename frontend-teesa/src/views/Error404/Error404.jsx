import React from "react";
import error404 from "../../img/imgs/404.png";

function Error404() {
  return (
    <div className="flex flex-row justify-center h-screen bg-teesaBlueDark overflow-hidden">
        <div className="flex flex-col m-auto ">
        <h1 className="font-bold text-teesaWhite">Esta página no existe.</h1>
        <h2>No pudimos encontrar la página que estabas buscando.</h2>
      </div>
      <img src={error404} alt="Error 404"/>
    </div>
  );
}

export default Error404;
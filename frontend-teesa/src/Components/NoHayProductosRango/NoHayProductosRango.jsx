import React from 'react';

const NoHayProductosRango = () => {
  return (
    <div className="flex justify-center items-center w-full h-40 bg-gray-200">
      <p>No hay productos en ese rango de precios.</p>
    </div>
  );
};

export default NoHayProductosRango;


//SOL:Revisar xq no renderiza cuando no hay producto en dicho rango
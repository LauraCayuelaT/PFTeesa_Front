import React from 'react';

const NoRepuestosDisponibles = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <p className="text-center text-gray-600 text-lg font-medium">
        No hay repuestos disponibles en este momento. Por favor, inténtelo más tarde.
      </p>
    </div>
  );
};

export default NoRepuestosDisponibles;


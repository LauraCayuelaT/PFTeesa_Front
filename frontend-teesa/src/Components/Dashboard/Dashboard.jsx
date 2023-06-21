import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getShopId, enableUser,enableUserfalse } from '../../features/reduxReducer/adminSlice';

function UserCard({ usuario }) {
  const dispatch = useDispatch();
  const [isUsuarioHabilitado, setIsUsuarioHabilitado] = useState(usuario.enable);

  const historialCompras = useSelector((state) => state?.admin?.historialCompras);
console.log(historialCompras);

  const handleHabilitarUsuario = () => {
    const enableValue = !isUsuarioHabilitado;
    setIsUsuarioHabilitado(enableValue);
    dispatch(enableUser(usuario.id));
  };

  const handleDesactivarUsuario = () => {
    const enableValue = false; // Cambiar el estado a false para desactivar el usuario
    setIsUsuarioHabilitado(enableValue);
    dispatch(enableUserfalse(usuario.id));
  };
  // const handleVerHistorial = () => {
  //   dispatch(getShopId(usuario.id));
  // };
  
  

  return (
    <div className={`bg-white rounded-lg shadow p-4 mb-4 ${isUsuarioHabilitado ? '' : 'opacity-50'}`}>
    <h3 className="text-lg font-semibold">{usuario.nombre}</h3>
    <p className="text-sm">
      <strong>Dirección:</strong> {usuario.direccion}
    </p>
    <p className="text-sm">
      <strong>Teléfono:</strong> {usuario.telefono}
    </p>
    <p className="text-sm">
      <strong>Correo:</strong> {usuario.correo}
    </p>
    
    <button
  onClick={isUsuarioHabilitado ? handleDesactivarUsuario : handleHabilitarUsuario}
  className={`rounded-md text-white p-2 mt-2 ${isUsuarioHabilitado ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
  style={{ marginRight: '10px' }} // Agrega margen derecho al botón "Habilitar Usuario"
>
  {isUsuarioHabilitado ? 'Inhabilitar Usuario' : 'Habilitar Usuario'}
</button>

<button
  
  className="bg-blue-600 rounded-md text-white hover:bg-blue-700 p-2 mt-2"
  style={{ marginLeft: '10px' }} // Agrega margen izquierdo al botón "Ver historial de compras"
>
  Ver historial de compras
</button>

  
        {/* {historialCompras.length ? ( 
        <ul>
          {historialCompras?.map ((compra) => (
            <li key={compra?.id}>
              Fecha: {compra?.fechaDeCompra}, Producto: {compra?.producto}
              {console.log(compra.fechaDeCompra)}
            </li>
            ) )}
        </ul>) : <h1>No hay historial</h1>} */}
        
    </div>
  );
}

function Dashboard() {
  const users = useSelector((state) => state.admin.users); // Obtener la lista de usuarios del estado
  const dispatch = useDispatch();
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleMostrarUsuarios = () => {
    setMostrarUsuarios(!mostrarUsuarios);
  };

  return (
    <div className="flex flex-col min-h-screen bg-teesaBlueDark">
      <button
        onClick={handleMostrarUsuarios}
        className="bg-blue-600 rounded-md text-white hover:bg-blue-700 p-2"
      >
        {mostrarUsuarios ? 'Ocultar Usuarios' : 'Mostrar Usuarios'}
      </button>

      {mostrarUsuarios && (
        <div className={`grid grid-cols-2 gap-4 mt-4 mx-4`}>
       {users?.map((usuario) => (
            <div key={usuario.id} className="p-4 bg-white rounded-lg shadow">

        <UserCard usuario={usuario} />
        </div>
      ))}

        </div>
      )}
    </div>
  );
}

export default Dashboard;
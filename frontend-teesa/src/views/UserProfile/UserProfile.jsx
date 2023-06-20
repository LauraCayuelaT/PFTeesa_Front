import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { putUser } from '../../features/reduxReducer/userSlice';
import { getProducts } from '../../features/reduxReducer/userSlice';
import 'boxicons/css/boxicons.min.css';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const UserProfile = () => {
  const nav=useNavigate()
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState);
  const userProducts=useSelector((state)=>state.userState.userProducts)

  useEffect(()=>{
    if(userProducts){
      console.log("userProfile",userProducts)
    }
  })


  const {
    user,
    userData: { userId, userName, userEmail, userNit, userAddress, userPhone, userType },
  } = userData;

  const [editing, setEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue,
    getValues,
  } = useForm();

   const cookies= new Cookies()
   const token= cookies.get('token')

   useEffect(()=>{
    if(!token){
     nav("/login")
    }
   })

   const onClose = () => {
    Swal.fire({
      title: 'Advertencia',
      text: '¿Estás seguro de que quieres cancelar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#192C8C',
      cancelButtonColor: '#FF0000',
      confirmButtonText: 'Si',
      cancelButtonText: 'No, seguir editando'
    }).then((result) => {
      if (result.isConfirmed) {
        setEditing(false);
      }
    });
  };
  
  
  useEffect(() => {
    setValue('userName', userName);
    setValue('userEmail', userEmail);
    setValue('userNit', userNit);
    setValue('userAddress', userAddress);
    setValue('userPhone', userPhone);
    setValue('userType', userType);
  }, [userName, userEmail, userNit, userAddress, userPhone, setValue, userType]);

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };
  
  
  const onSubmit = async (data) => {
    try {
      const payload = {
        userNit: data.userNit,
        userName: data.userName,
        userPhone: data.userPhone,
        userAddress: data.userAddress,
        userEmail,
        userType,
        userId
      };
  
      Swal.fire({
        title: 'Confirmación',
        html: `
          ¿Estás seguro de cambiar los datos?<br/>
          <strong>Nombre:</strong> ${data.userName}<br/>
          <strong>NIT/Cédula:</strong> ${data.userNit}<br/>
          <strong>Teléfono:</strong> ${data.userPhone}<br/>
          <strong>Dirección:</strong> ${data.userAddress}
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#192C8C',
        cancelButtonColor: '#FF0000',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(putUser(payload));
          setEditing(false);
        }
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  


  useEffect(() => {
    reset({
      userName,
      userEmail,
      userNit,
      userAddress,
      userPhone,
      userType,
    });
  }, [userName, userEmail, userNit, userAddress, userPhone, userType, reset])  

  useEffect(() => {
    if (userId) {
      dispatch(getProducts(userId));
    }
  }, [dispatch, userId]);
  

    return (
    <div className='allContainer bg-teesaBlueDark flex flex-row justify-center items-center gap-[5%] w-full h-screen overflow-hidden'
    >
      {/* info section */}
      <section className='bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg flex flex-col justify-center items-center h-auto w-[30em] gap-7'>
        {editing ? (
          <form onSubmit={handleSubmit(onSubmit)} 
          className='bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg flex flex-col justify-center items-center h-auto w-[30em] gap-2'>
            <h1 className='font-bold text-white text-3xl '>Editar tus datos</h1>
            <label className='flex flex-col justify-center align-center items-center gap-[0.5em]'>
              <input
            {...register('userName', { 
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Solo se aceptan letras y espacios',
              },
            
            })}
              onBlur={() => handleBlur('userName')}
              placeholder='Nombre'
            />
            {errors.userName ? (
                <span className='text-red-500'>{errors.userName.message}</span>
              ) : (
                <div className='h-[5px]'></div>
              )}
            </label>
            
            <label className='flex flex-col justify-center align-center items-center gap-[0.5em]'>
            <input
              {...register('userNit', { 
                required:'Este campo es obligatorio',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo se aceptan números',
                },
              })}
              onBlur={() => handleBlur('userNit')}
              placeholder='Nit'
            />
            {errors.userNit ? (
                <span className='text-red-500'>{errors.userNit.message}</span>
              ) : (
                <div className='h-[5px]'></div>
              )}
             </label>

            <label className='flex flex-col justify-center align-center items-center gap-[0.5em]'>
              <input
              {...register('userAddress', { 
                required:'Este campo es obligatorio',
                pattern: {
                  value: /^[a-zA-Z0-9\s\-\#\.\']+$/,
                  message: 'Ingrese una dirección válida',
                },
              })}
              onBlur={() => handleBlur('userAddress')}
              placeholder='Dirección'
            />
            {errors.userAddress ? (
                <span className='text-red-500'>{errors.userAddress.message}</span>
              ) : (
                <div className='h-[5px]'></div>
              )}
            </label> 


            <label className='flex flex-col justify-center align-center items-center gap-[0.5em]'>
              <input
              {...register('userPhone', { 
                required:'Este campo es obligatorio',
                  pattern: {
                    value: /^[0-9]{7,14}$/,
                    message: 'Solo se aceptan números',
                  },
                })}
              onBlur={() => handleBlur('userPhone')}
              placeholder='Número de teléfono'
            />
            {errors.userPhone ? (
                <span className='text-red-500'>{errors.userPhone.message}</span>
              ) : (
                <div className='h-[5px]'></div>
              )}
            </label>
            <div className='flex flex-row justify-center items-center gap-[15%] text-lg text-white mb-[3%]'>
            <button type='submit' className='bg-teesaGreen rounded-xl p-[3%] hover:bg-green-600'>Guardar</button>
            <label onClick={onClose} className='cursor-pointer bg-red-700 rounded-xl p-[3%] hover:bg-red-800'>Cancelar</label>
            </div>
          </form>
        ) : (
          <>
          <div className='flex flex-row gap-10 justify center align-middle items-center mt-[3%]'>
            <div className=''>
            <i
              className='bx bxs-user ml-5 flex transition duration-300 ease-in-out transform text-white'
              style={{ fontSize: '5em' }}
            ></i>
            </div>
            
            <div className='flex flex-col gap-1 text-teesaWhite'>
            <h1 className='font-bold text-3xl'>{userName}</h1>
            <div className='flex flex-row gap-[45%]'>
            <h1 className='text-2xl'>{userEmail}</h1>
            <button onClick={() => setEditing(true)}><i className="bx bx-pencil text-white hover:text-slate-600" style={{ fontSize: '22.5px' }}></i></button>
            </div>
            <div className='w-[20em] border-t-2 border-white '></div>           
            </div>          
          </div>
          <div className='flex flex-col justify-center items-center gap-5 text-teesaWhite text-xl pb-[5%]'>
            <h3>NIT/Cédula: {userNit}</h3>
            <h3>Dirección: {userAddress}</h3>
            <h3>Teléfono: {userPhone}</h3>
          </div>
          </>
        )}
      </section>
      {/* Products section */}
      
      
      <section className='flex flex-col items-center mb-[5%] bg-gradient-to-r from-teesaGreenDark to-teesaGreen overflow-y-scroll rounded-lg xl:w-[55%] h-[80%]'>
      <h1 className='font-bold text-teesaWhite mt-[2%] text-2xl'>Mis Compras</h1>
      <article className='w-[95%]  '>
        
    {userProducts && userProducts.map((product) => (
      <section className='bg-slate-300 w-[100%] my-[3%] h-[20%] rounded-xl'>
      <div key={product.id} className="flex flex-row items-center space-x-4">
        <Link to={`/home/${product.ProductId}`}>
        <img src={product.Product.imagenes[0]} alt={product.Product.nombre} className="w-16 hover:transform hover:scale-105 h-16 ml-[1%]"/>
        </Link>
        <div>
          <h3 className="text-2xl font-bold text-teesaBlueDark">{product.Product.nombre}</h3>
          <section>
  <div className="grid grid-cols-2 gap-4">
    <div className="col-span-1">
      <p className='text-teesaGreen'>{product.estado}</p>
      <p>Cantidad: {product.cantidad}</p>
    </div>
    <div className="col-span-1 flex flex-col justify-between">
      <div>
        <p>Precio: {product.precio}</p>
      </div>
      <div>
        <p>Fecha de compra: {new Date(product.fechaDeCompra).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
</section>

          
        </div>
      </div>
      </section>
    ))}
  </article>
</section>
    </div>
  );
};


export default UserProfile;

import React, { useState, useEffect } from 'react';
import waves from '../../assets/icon/waves.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { putUser } from '../../features/reduxReducer/userSlice';


const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState);

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
      console.log("Esto es payload en userProfile",payload);
      dispatch(putUser(payload));
      setEditing(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  

  return (
    <div className='allContainer bg-teesaBlueDark flex flex-row justify-center items-center gap-[10%] w-full h-screen bg-bottom bg-cover -mt-1 overflow-hidden'
    >
      {/* info section */}
      <section className='bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg flex flex-col justify-center  h-auto w-[30em] gap-10'>
        {editing ? (
          <form onSubmit={handleSubmit(onSubmit)} className='bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg flex flex-col justify-center  h-auto w-[30em] gap-10'>
            <input
            {...register('userName', { required: true })}
              onBlur={() => handleBlur('userName')}
              placeholder='Nombre'
            />
            {errors.userName && <span>This field is required</span>}
            <input
              {...register('userNit', { required: true })}
              onBlur={() => handleBlur('userNit')}
              placeholder='Nit'
            />
            {errors.userNit && <span>This field is required</span>}
            <input
              {...register('userAddress')}
              onBlur={() => handleBlur('userAddress')}
              placeholder='Dirección'
            />
            {errors.userAddress && <span>This field is required</span>}
            <input
              {...register('userPhone', { required: true })}
              onBlur={() => handleBlur('userPhone')}
              placeholder='Número de teléfono'
            />
            {errors.userPhone && <span>This field is required</span>}
            <button type='submit'>Guardar</button>
          </form>
        ) : (
          <>
          <div className='flex flex-col gap-3 justify center align-middle items-center'>
            <h1 className='font-bold text-3xl'>{userName}</h1>
            <h1>{userEmail}</h1>
            <div className='w-[90%] border-t-2 border-black '></div>
          </div>
          
            <h3>NIT/Cédula: {userNit}</h3>
            <h3>Dirección: {userAddress}</h3>
            <h3>Teléfono: {userPhone}</h3>
            <button onClick={() => setEditing(true)}>Editar</button>
          </>
        )}
      </section>
      {/* Products section */}
      <section className='bg-teesaGrey rounded-lg xl:w-[30%]'>Productos comprados</section>
    </div>
  );
};

export default UserProfile;

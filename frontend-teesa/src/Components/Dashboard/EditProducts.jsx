import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBrands } from '../../features/reduxReducer/productSlice';

const EditProducts = () => {
  //Marcas
  const [brands, setBrands] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands())
      .then((response) => {
        setBrands(response.payload);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      });
  }, [dispatch]);

  console.log(brands);

  //Alert
  const alertConfirm = () => {
    Swal.fire({
      title: 'Producto Actualizado',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#192C8C',
    });
  };

  //Hock Form

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    // trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //After
    alertConfirm();
    reset();
  };

  //   const handleBlur = (fieldName) => {
  //     trigger(fieldName);
  //   };

  return (
    <div className='flex justify-center items-center w-2/3'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full m-auto md:w-full lg:-m-1'
      >
        <h1 className='font-bold text-2xl md:text-3xl text-teesaBlueDark my-1'>
          Editar Producto
        </h1>
        <h2 className='my-3 font-medium text-20px'>
          Escribe la información actualizada.
        </h2>

        <h1 className='font-bold text-2xl md:text-3xl text-teesaBlueDark my-1'>
          Producto:
        </h1>

        <div className='relative mb-1'>
          <input
            type='number'
            name='stock'
            className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg ${
              errors.stock ? 'border-red-500' : ''
            }`}
            placeholder='Stock'
            {...register('stock', {
              required: 'Este campo es obligatorio',
            })}
          />
          {errors.stock && (
            <span className='text-red-500'>{errors.stock.message}</span>
          )}
          {!errors.stock && <div className='h-[24px]'></div>}
        </div>
        <div className='relative mb-1'>
          <input
            type='number'
            name='precio'
            className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  border-2 border-teesaBlueLight shadow-lg ${
              errors.stock ? 'border-red-500' : ''
            }`}
            placeholder='Precio'
            {...register('precio', {
              required: 'Este campo es obligatorio',
            })}
          />
          {errors.precio && (
            <span className='text-red-500'>{errors.precio.message}</span>
          )}
          {!errors.precio && <div className='h-[24px]'></div>}
        </div>

        <Controller
          name='imagenes'
          control={control}
          defaultValue={null}
          rules={{ required: 'Este campo es obligatorio' }}
          render={({ field }) => (
            <div className='relative mb-1'>
              <input
                type='file'
                accept='image/*'
                className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none  border-2 border-teesaBlueLight  ${
                  errors.imagenes ? 'border-red-500' : ''
                }`}
                onChange={(e) => field.onChange(e.target.files[0])}
              />
              {errors.imagenes && (
                <span className='text-red-500'>{errors.imagenes.message}</span>
              )}
              {!errors.imagenes && <div className='h-[24px]'></div>}
            </div>
          )}
        />
        <div className='inline-block min-h-1.5rem justify-center pl-1.5rem md:flex'></div>
        <input
          type='submit'
          value='Enviar'
          className='mb-[50px] inline-block w-full rounded bg-teesaBlueLight  px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white shadow-lg hover:bg-teesaBlueDark cursor-pointer'
        />
      </form>
    </div>
  );
};

export default EditProducts;

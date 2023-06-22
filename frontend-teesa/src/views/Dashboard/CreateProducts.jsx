import { useForm, Controller } from 'react-hook-form';
import { createProduct } from '../../features/reduxReducer/admproductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { getBrands } from '../../features/reduxReducer/productSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateProducts = (id) => {
  //*Validar Admin - Juan:

  const navigate = useNavigate();
  const alertGoodbye = () => {
    Swal.fire({
      title: '¡Un momento!',
      text: 'No eres admin, no puedes estar aquí.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#192C8C',
    }).then(() => {
      navigate('/home');
    });
  };

  const userAdmin = useSelector((state) => state.userState.userData.userType);
  console.log('data' + userAdmin);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    if (userAdmin === null) {
      const timeout = setTimeout(() => {
        if (waiting) {
          alertGoodbye();
        }
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setWaiting(false);
    }
  }, [userAdmin, waiting]);

  useEffect(() => {
    if (userAdmin !== null && !waiting) {
      // Validar los datos después de que se hayan obtenido
      if (userAdmin === false) {
        alertGoodbye();
      }
    }
  }, [userAdmin, waiting]);

  //*Yose

  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const selectedFileRef = useRef([]);

  useEffect(() => {
    dispatch(getBrands())
      .then((response) => {
        setBrands(response.payload);
        console.log(response.payload);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      });
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  const handleInputChange = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = () => {
          setSelectedFile([reader.result]);
          selectedFileRef.current = [...selectedFileRef.current, reader.result];
        };
      }
    }
  };

  const onSubmit = (data) => {
    if (selectedFileRef.current) {
      data.imagenes = selectedFileRef.current;
    }
    console.log('esto es data', data);
    dispatch(createProduct(data));

    reset();
  };

  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-teesaGreen to-teesaBlueDark h-screen w-screen gap-2'>
      <h1 className='text-white text-3xl font-bold mt-[2%]'>Crear productos</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center items-center'
      >
        {/* nombre */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='text'
            name='nombre'
            placeholder=' Nombre'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('nombre', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Solo se aceptan letras y espacios',
              },
            })}
            onBlur={() => handleBlur('nombre')}
          />
          {errors.nombre ? (
            <span className='text-red-500'>{errors.nombre.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* TIPO */}
        <label className='flex flex-col justify-center align-center items-center'>
          <select
            name='tipo'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('tipo', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('tipo')}
          >
            <option value=''>Selecciona un tipo</option>
            <option>Equipo</option>
            <option>Repuesto</option>
          </select>
          <div className='h-[5px]'></div>
        </label>
        {/* caracteriticas */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='text'
            name='caracteristicas'
            placeholder=' Caracteristicas'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('caracteristicas', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Solo se aceptan letras y espacios',
              },
            })}
            onBlur={() => handleBlur('caracteristicas')}
          />
          {errors.caracteristicas ? (
            <span className='text-red-500'>
              {errors.caracteristicas.message}
            </span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* categoria */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='text'
            name='categoria'
            placeholder=' Categoria'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('categoria', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Solo se aceptan letras y espacios',
              },
            })}
            onBlur={() => handleBlur('categoria')}
          />
          {errors.categoria ? (
            <span className='text-red-500'>{errors.categoria.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* imagenes */}
        <label className='flex flex-col justify-center align-center items-center'>
          <Controller
            name='imagenes'
            control={control}
            defaultValue={[]}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  name='imagenes'
                  // filelist={selectedFile}
                  type='file'
                  onChange={(e) => {
                    handleInputChange(e);
                    field.onChange(e.target.files);
                  }}
                  className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
                  accept='image/*'
                  multiple
                />
                {errors.imagenes && (
                  <span className='text-red-500'>
                    {errors.imagenes.message}
                  </span>
                )}
              </>
            )}
          />
        </label>
        {/* precio */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='number'
            name='precio'
            placeholder=' Precio'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('precio', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'Ingresa un precio válido',
              },
            })}
            onBlur={() => handleBlur('precio')}
          />
          {errors.precio ? (
            <span className='text-red-500'>{errors.precio.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* stock */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='number'
            name='stock'
            placeholder=' Stock'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('stock', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'Ingresa un precio stock válido',
              },
            })}
            onBlur={() => handleBlur('stock')}
          />
          {errors.stock ? (
            <span className='text-red-500'>{errors.stock.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* marca */}
        <label className='flex flex-col justify-center align-center items-center'>
          <select
            name='marca'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('marca', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('marca')}
          >
            <option value=''>Selecciona una marca</option>
            {brands.map((brand) => (
              <option
                key={brand}
                value={brand.id}
              >
                {brand}
              </option>
            ))}
          </select>
          {errors.marca ? (
            <span className='text-red-500'>{errors.marca.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>

        {/* descripcion */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='text'
            name='descripcion'
            placeholder=' Descripción'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('descripcion', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Solo se aceptan letras y espacios',
              },
            })}
            onBlur={() => handleBlur('descripcion')}
          />
          {errors.descripcion ? (
            <span className='text-red-500'>{errors.descripcion.message}</span>
          ) : (
            <div className='h-[5px]'></div>
          )}
        </label>
        {/* ref */}
        <label className='flex flex-col justify-center align-center items-center '>
          <input
            type='text'
            name='ref'
            placeholder=' Referencia'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('ref')}
            onBlur={() => handleBlur('ref')}
          />
          <div className='h-[5px]'></div>
        </label>
        {/* estado */}
        <label className='flex flex-col justify-center align-center items-center'>
          <select
            name='estado'
            className='bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]'
            {...register('estado', {
              required: 'Este campo es obligatorio',
            })}
            onBlur={() => handleBlur('estado')}
          >
            <option value=''>Selecciona un estado</option>
            <option>Nuevo</option>
            <option>Usado</option>
          </select>
          <div className='h-[5px]'></div>
        </label>
        <button
          type='submit'
          className='bg-white'
        >
          Crear producto
        </button>
      </form>
    </div>
  );
};

export default CreateProducts;

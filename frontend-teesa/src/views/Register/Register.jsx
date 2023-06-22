import { useForm } from 'react-hook-form';
import logo from '../../img/SVGs/logoSolo.svg';
import { registerUser } from '../../features/reduxReducer/registerSlice';
import { setUser } from '../../features/reduxReducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import googleIcon from '../../assets/icon/Google.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { loginUser } from '../../features/reduxReducer/loginSlice';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
//EmailJS - Mailer
import emailjs from '@emailjs/browser';
import waves from '../../assets/icon/layered-waves.svg';

function Register() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.registerState.loading);
  const error = useSelector((state) => state.registerState.error);
  const errorMessage = useSelector((state) => state.registerState.errorMessage);
  const userData = useSelector((state) => state.userState.userData);
  const nav = useNavigate();
  console.log(loading);

  //Data del Usuario - Token.

  const [tokenValue, setTokenValue] = useState('');
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const token = useSelector((state) => state.loginState.token);

  const setUserWithTokenData = () => {
    if (tokenValue) {
      //Decodificamos el Token
      const decodedToken = jwt_decode(tokenValue);
      //Sacamos la data.
      const userId = decodedToken.sub;
      const userName = decodedToken.nombre;
      const userType = decodedToken.tipo;
      //Despachamos la action.
      dispatch(setUser({ userId, userName, userType }));
    }
  };

  const alertErrorMessage = (errorMessage) => {
    Swal.fire({
      title: 'Sucedió un error',
      text: JSON.stringify(errorMessage),
      icon: 'error',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };
  useEffect(() => {
    if (errorMessage) {
      alertErrorMessage(errorMessage);
    }
  }, [errorMessage]);

  const alertSucess = () => {
    Swal.fire({
      title: '¡Felicidades!',
      text: 'Se ha creado tu cuenta con exito',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
  };
  
      //Ejecutar el Reducer Post.
      const onSubmit = async (data) => {
        const resultAction = await dispatch(registerUser(data));
        console.log(data)
        if (resultAction.error) {
          const errorMessage = resultAction.error.response.data.message;
          alertErrorMessage(errorMessage);
        } else {
          const { correo, contrasena } = data; // Obtener correo y contraseña del formulario de registro
          const loginData = { correo, contrasena };
          console.log(loginData)
          const loginAction = await dispatch(loginUser(loginData)); // Hacer el inicio de sesión automático
      
          if (loginAction.error) {
            const errorMessage = loginAction.error.response.data.message;
            alertErrorMessage(errorMessage);
          } else {
            const ntoken = loginAction.payload;
            setTokenValue(ntoken);
            await setUserWithTokenData();
            setIsUserLoaded(true);
            alertSucess();
            const cookies= new Cookies()
            const tokenExists = cookies.get('token'); 
      if (tokenExists) {
        nav('/home');
      }
          }

        }
        //EmailJS - Mailer
        const user_email = data.correo;
        const user_name = data.nombre;
        emailjs
          .send(
            'service_2rp9duo',
            'template_ogrchsj',
            { user_email, user_name },
            'W5KJUGxF4wBdmUA3v'
          )
          .then((result) => {
            console.log(result.text);
          })
          .catch((error) => {
            console.log(error.text);
          });
          reset();
      }
 


  //Llamar a la  función Token Data.

  useEffect(() => {
    if (tokenValue) {
      setUserWithTokenData();
    }
  }, [tokenValue]);

  useEffect(() => {
    if (userData) {
      //console.log(`User Data: ${JSON.stringify(userData)}`);
    }
  }, [userData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm();

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  const contrasena = watch('contrasena');
  const confirmarContrasena = watch('confirmarContrasena');


    return (
      <div className="relative bg-cover w-screen h-screen flex flex-row justify-center align-center items-center overflow-hidden m-auto" style={{backgroundImage: `url(${waves})`}}>
        <div className='flex-col xl:mb-[] lg:mb-[]'>
          <img src={logo} alt="logo" className='mt-[15%] xl:h-[800px] lg:h-[700px] md:h-[400px] xs:hidden'/>
        </div>
        <div className='bg-gradient-to-r from-teesaGreenDark to-teesaGreen rounded-lg flex flex-col justify-center align-center items-center h-auto mb-[12%] lg:mt-[12%]'>
          <h1 className='font-bold  xl:text-4xl lg:text-3xl text-teesaGrey  mt-[5%] '>Registrate</h1>
            <div className='flex flex-col justify-center align-center items-center p-8'>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center align-center items-center gap-[0.5em]'>
                <label className="flex flex-col justify-center align-center items-center ">
                <input type="text" name="nombre" placeholder=' Nombre' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]" {...register('nombre', { 
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
            <label className='flex flex-col justify-center align-center items-center gap-[3%]'>
              <input
                type='text'
                name='correo'
                placeholder=' Email'
                className='bg-teesaBlueDark border-teesaGrey text-teesaGrey rounded-md h-[2em] w-[15em]'
                {...register('correo', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Ingresa un email válido',
                  },
                })}
                onBlur={() => handleBlur('correo')}
              />
              {errors.correo ? (
                <span className='text-red-500'>{errors.correo.message}</span>
              ) : (
                <div className='h-[5px]'></div>
              )}

                </label>
              
                <label className="flex flex-col justify-center align-center items-center gap-[3%]">
                <input type="password" name="contrasena" placeholder=' Contraseña' className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]"
                {...register('contrasena', { 

                  required: 'Este campo es obligatorio',
                  minLength: {
                    value: 6,
                    message: 'La contraseña debe tener al menos 6 caracteres',
                  },
                  maxLength: {
                    value: 20,
                    message:
                      'La contraseña debe tener como máximo 20 caracteres',
                  },
                  pattern: {
                    value:
                      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()])[a-zA-Z\d!@#$%^&()]+$/,
                    message:
                      'La contraseña debe contener al menos una mayúscula, un número y un caracter especial',
                  },
                })}
                onBlur={() => handleBlur('contrasena')}
              />
              {errors.contrasena ? (
                <span className='text-red-500'>
                  {errors.contrasena.message}
                </span>
              ) : (
                <div className='h-[5px]'></div>
              )}
                </label>
                <label className="flex flex-col justify-center align-center items-center gap-[3%]">
          <input
            type="password"
            name="confirmarContrasena"
            placeholder=" Confirmar contraseña"
            className="bg-teesaBlueDark text-teesaGrey rounded-md h-[2em] w-[15em]"
            {...register('confirmarContrasena', { 
              required: 'Este campo es obligatorio',
              validate: value => value === contrasena || 'Las contraseñas no coinciden',
            })}
            onBlur={() => handleBlur('confirmarContrasena')}
          />
          {errors.confirmarContrasena && (
            <span className="text-red-500">{errors.confirmarContrasena.message}</span>
          )}
        </label>
                <button className='bg-teesaGreen font-bold h-[2em] w-[12em] hover:bg-green-600 hover:transform hover:scale-105 rounded-md'>INGRESAR</button>
                <p className='text-end'>
          ¿Ya tienes cuenta?{' '}
          <Link to='/login'>
            <span className='text-teesaBlueDark hover:cursor-pointer hover:text-teesaBlueLight font-bold'>
              Log In
            </span>
          </Link>
        </p>
      <div className='w-[75%] border-t-2 border-black '></div>
      
              </form>
              <div className='flex justify-center items-center align-center text-center mt-2 w-[70%]'>
            <a href="https://servidor-teesa.onrender.com/google/signup">
            <button
              className='flex justify-cetner items-center mb-[5px] w-[16em] h-[2.5em] justify-center rounded  bg-teesaWhite text-md font-medium uppercase leading-normal text-black shadow-lg border-2 border-black hover:bg-gray-300 hover:transform hover:scale-105'
              type='submit'>
              <img src={googleIcon} className=' w-22  h-5 mx-3 my-auto' /> Ingresar con Google</button>
              </a>
          </div> 
            </div>
            
          
        </div>
      </div>
  );
}

export default Register;
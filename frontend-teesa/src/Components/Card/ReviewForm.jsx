/* eslint-disable react/prop-types */
import { useForm, Controller } from 'react-hook-form';
import { Rating, Button, TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { postReview } from '../../features/reduxReducer/reviewSlice';

const ReviewForm = ({ productId, userId }) => {
  //Alert

  const alertConfirm = () => {
    Swal.fire({
      title: '¡Opinión Enviada!',
      text: 'Gracias por compartinos tu review.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#192C8C',
    });
  };

  //Form

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Form Data
  const dispatch = useDispatch();

  const myProductId = productId;
  const myUserId = userId;

  const onSubmit = (data) => {
    const { comentario, estrellas } = data;
    const reviewData = {
      userId: myUserId,
      estrellas: estrellas,
      comentario: comentario,
      ProductId: myProductId,
    };
    dispatch(postReview(reviewData));
    console.log(reviewData);
    alertConfirm();
    reset();
  };

  return (
    <div className='mt-10 mx-5 lg:mx-0'>
      <h1 className='font-bold text-lg'>¿Quieres darnos tu opinón?</h1>
      <form
        className='mt-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Controller
            name='estrellas'
            control={control}
            rules={{ required: 'Debes calificar el producto.' }}
            render={({ field }) => (
              <div className='flex  items-center'>
                <h1 className='font-bold text-md'>Puntuación:</h1>
                <Rating
                  name={field.name}
                  value={parseInt(field.value)} // Convertimos el valor a un número utilizando parseInt
                  onChange={field.onChange}
                  emptyIcon={<StarBorderIcon style={{ color: '#192C8C' }} />}
                  icon={<StarIcon style={{ color: '#192C8C' }} />}
                />
                {errors.rating && <p>{errors.rating.message}</p>}
              </div>
            )}
          />
        </div>
        <div className='my-4'>
          <TextField
            {...register('comentario')}
            label='Comentarios'
            multiline
            rows={2}
            fullWidth
            required
          />
        </div>

        <Button
          type='submit'
          variant='contained'
          color='primary'
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;

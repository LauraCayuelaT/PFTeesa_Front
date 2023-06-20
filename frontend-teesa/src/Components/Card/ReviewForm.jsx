import { useForm, Controller } from 'react-hook-form';
import { Rating, Button, TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Swal from 'sweetalert2';

const ReviewForm = () => {
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
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alertConfirm();
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
            name='rating'
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
            {...register('titulo')}
            label='Título'
            fullWidth
            required
          />
        </div>
        <div className='my-4'>
          <TextField
            {...register('comentarios')}
            label='Comentarios'
            multiline
            rows={4}
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

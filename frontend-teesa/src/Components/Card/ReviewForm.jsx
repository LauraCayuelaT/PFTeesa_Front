import { useForm, Controller } from 'react-hook-form';
import { Rating, Button, TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ReviewForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='mt-10'>
      <h1>¿Quieres darnos tu opinón?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div>
          <Controller
            name='rating'
            control={control}
            rules={{ required: 'Debe seleccionar una revisión' }}
            render={({ field }) => (
              <>
                <Rating
                  name={field.name}
                  value={parseInt(field.value)} // Convertimos el valor a un número utilizando parseInt
                  onChange={field.onChange}
                  emptyIcon={<StarBorderIcon style={{ color: '#192C8C' }} />}
                  icon={<StarIcon style={{ color: '#192C8C' }} />}
                />
                {errors.rating && <p>{errors.rating.message}</p>}
              </>
            )}
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

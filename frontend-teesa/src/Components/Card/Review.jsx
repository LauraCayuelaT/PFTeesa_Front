/* eslint-disable react/prop-types */
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Review = ({ userName, userRating, userDate, userComment }) => {
  return (
    <article className=' rounded   flex flex-col  m-4'>
      {/* Form Review */}

      {/* Reviews */}
      <div className='flex items-center mb-1 '>
        <AccountCircleIcon
          style={{ fontSize: '30px' }}
          className=' rounded-fulls mr-2'
        />
        <div className='space-y-1 font-bold text-lg'>
          <p>{userName} </p>
        </div>
      </div>
      <div className='flex items-center'>
        <Rating
          name='size-medium'
          defaultValue={userRating}
          precision={1}
          size='medium'
          readOnly
          emptyIcon={<StarBorderIcon style={{ color: '#192C8C' }} />}
          icon={<StarIcon style={{ color: '#192C8C' }} />}
        />
        <h3 className='pt-[3px] text-lg  text-gray-800 ml-2'>{userDate}</h3>
      </div>
      <p className='my-2 text-gray-800 text-lg'>{userComment}</p>
    </article>
  );
};

export default Review;

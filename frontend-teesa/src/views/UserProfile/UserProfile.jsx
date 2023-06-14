import React from 'react'
import waves from '../../assets/icon/waves.svg';

const UserProfile = () => {
  return (
    <div style={{
      backgroundImage: `url(${waves})`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat',
    }}
    className='allContainer flex flex-row justify-center items-center gap-[10%] w-full h-screen bg-bottom bg-cover -mt-1 overflow-hidden'>
    
    <div className='bg-teesaGrey rounded-lg xl:w-[50%]'>
      <h1>Nombre</h1>
      
    </div>
    <div className='bg-teesaGrey rounded-lg xl:w-[30%]'>Productos comprados</div>

    </div>
  )
}

export default UserProfile
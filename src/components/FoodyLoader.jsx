import React from 'react';
import Loader from './Loader';

const FoodyLoader = () => {
  return (
    <div className='min-h-[96vh] grid place-items-center content-center gap-2'>
      <div className='text-headingColor text-xl font-bold'>
        <span className='text-orange-500'>Foody</span> Yummy
      </div>
      <Loader width='25px' />
    </div>
  );
};

export default FoodyLoader;

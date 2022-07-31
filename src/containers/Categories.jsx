import React from 'react';
import Carousel from 'components/carousel/CarouselCategory';
import { categories } from 'utils/data';

export default function Categories() {
  return (
    <div className='relative w-full my-[35px]'>
      <Carousel data={categories} infinite={false} itemClass='px-[10px]' />
    </div>
  );
}

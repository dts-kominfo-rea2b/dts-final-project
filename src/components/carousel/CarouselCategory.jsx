import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import {
  ButtonGroupBase,
  ArrowButtonBase,
  PrevButtonRadius,
  NextButtonRadius,
} from 'utils/theme';
import { useSearch } from 'context/search/use-search';
import { motion } from 'framer-motion';

const PrevButton = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label='prev-button'
      className={ArrowButtonBase + ' ' + PrevButtonRadius}
    >
      {children}
    </button>
  );
};
const NextButton = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label='next-button'
      className={ArrowButtonBase + ' ' + NextButtonRadius}
    >
      {children}
    </button>
  );
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className={ButtonGroupBase}>
      <PrevButton onClick={() => previous()}>
        <ChevronLeft height='12px' />
      </PrevButton>
      <NextButton onClick={() => next()}>
        <ChevronRight height='12px' />
      </NextButton>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 8,
  },
  smallScreen: {
    breakpoint: { max: 1279, min: 851 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 850, min: 601 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const Carousel = ({
  data,
  autoPlay,
  infinite,
  itemClass,
  className,

  ...props
}) => {
  const { setSearchTerm } = useSearch();

  return (
    <MultiCarousel
      arrows={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      showDots={false}
      slidesToSlide={2}
      infinite={infinite}
      containerClass='carousel-container'
      itemClass={itemClass}
      autoPlay={autoPlay}
      autoPlaySpeed={3000}
      renderButtonGroupOutside={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      additionalTransfrom={0}
      customButtonGroup={<ButtonGroup />}
      className={className}
      {...props}
    >
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className='p-2 text-center border-0 rounded cursor-pointer'
            onClick={() => setSearchTerm(item?.urlParamName)}
          >
            <div>{item?.imageSrc}</div>
            <h5 className='py-2 truncate'>{item.name}</h5>
          </motion.div>
        </React.Fragment>
      ))}
    </MultiCarousel>
  );
};

const defaultProps = {
  autoPlay: false,
  infinite: true,
  className: '',
};

Carousel.defaultProps = defaultProps;

export default Carousel;

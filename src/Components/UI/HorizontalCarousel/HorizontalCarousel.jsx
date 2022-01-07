import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import classes from './HorizontalCarousel.module.css';

const HorizontalCarousel = (props) => {
  const [sliderRef] = useKeenSlider({
    ...props.sliderConfig,
  });

  return (
    <div ref={sliderRef} className={`keen-slider ${classes.carouselContainer}`}>
      {props.children}
    </div>
  );
};

export default HorizontalCarousel;

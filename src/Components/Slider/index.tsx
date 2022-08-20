import React, { ReactNode } from 'react';

import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface SliderProps {
  showDots?: boolean;
  isCenter?: boolean;
  isDraggable?: boolean;
  isInfinite?: boolean;
  isSwipeable?: boolean;
  isVertical?: boolean;
  shouldAutoPlay?: boolean;
  showArrows?: boolean;
  slideSpeed?: number;
  slidesToShow: number;
  slidesToScroll?: number;
  children: ReactNode;
}

const Slider = ({
  showDots = false,
  isCenter = false,
  isDraggable = true,
  isInfinite = false,
  isSwipeable = true,
  isVertical = false,
  shouldAutoPlay = false,
  showArrows = false,
  slideSpeed = 500,
  slidesToScroll = 1,
  slidesToShow,
  children,
}: SliderProps) => {
  const config = {
    arrows: showArrows,
    autoplay: shouldAutoPlay,
    centerMode: isCenter,
    dots: showDots,
    draggable: isDraggable,
    infinite: isInfinite,
    slidesToShow,
    slidesToScroll,
    speed: slideSpeed,
    swipe: isSwipeable,
    vertical: isVertical,
    verticalSwiping: isVertical,
  };

  return <SlickSlider {...config}>{children}</SlickSlider>;
};

export default Slider;

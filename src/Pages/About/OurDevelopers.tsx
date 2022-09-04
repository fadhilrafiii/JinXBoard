import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import useWindowDimensions from 'Shared/Hooks/useWindowDimensions';

import { RootState } from 'Redux/Store';

import Slider from 'Components/Slider';

import { ContentWithImage } from 'Shared/Types';

import { LARGE_WINDOW_SIZE, SMALL_WINDOW_SIZE } from 'Shared/Constants/General';

import { developersContent } from './constants';

import styles from './index.module.css';

const OurDevelopers = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const { width } = useWindowDimensions(isSidebarOpen);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  let numberOfSlides = 3;
  if (width <= SMALL_WINDOW_SIZE) numberOfSlides = 1;
  else if (width <= LARGE_WINDOW_SIZE) numberOfSlides = 2;

  return (
    <>
      <h2 className={styles.subtitle} style={{ textAlign: 'center' }}>
        <b>Our Developers</b>
      </h2>
      <Slider slidesToShow={numberOfSlides} isCenter isInfinite shouldAutoPlay>
        {developersContent.map(({ image, title, description }: ContentWithImage, index: number) => {
          return (
            <div
              key={title}
              className={styles.developerCard}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={image}
                alt={title}
                className={index === hoveredCard ? styles.hovered : ''}
              />
              <div className={styles.developerText}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default OurDevelopers;

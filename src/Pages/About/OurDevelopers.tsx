import React from 'react';

import useWindowDimensions from 'Shared/Hooks/useWindowDimensions';

import GlassBox from 'Components/GlassBox';
import Slider from 'Components/Slider';

import { ContentWithImage } from 'Shared/Types';

import { LARGE_WINDOW_SIZE, SMALL_WINDOW_SIZE } from 'Shared/Constants/General';

import { developersContent } from './constants';

import styles from './index.module.css';

const OurDevelopers = () => {
  const { width } = useWindowDimensions();

  let numberOfSlides = 3;
  if (width <= SMALL_WINDOW_SIZE) numberOfSlides = 1;
  else if (width <= LARGE_WINDOW_SIZE) numberOfSlides = 2;

  return (
    <>
      <h2 className={styles.subtitle} style={{ textAlign: 'center' }}>
        <b>Our Developers</b>
      </h2>
      <Slider slidesToShow={numberOfSlides} isCenter isInfinite shouldAutoPlay>
        {developersContent.map(({ image, title, description }: ContentWithImage) => {
          return (
            <GlassBox key={title} className={styles.developerCardContainer}>
              <div className={styles.developerCard}>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </GlassBox>
          );
        })}
      </Slider>
    </>
  );
};

export default OurDevelopers;

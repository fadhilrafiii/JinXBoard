import React from 'react';

import '@dotlottie/player-component';

import styles from './index.module.css';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <dotlottie-player
      src="https://assets10.lottiefiles.com/dotlotties/dlf10_mvUTlTUIDL.lottie"
      mode="bounce"
      background="rgba(0, 0, 0, 0)"
      speed="1"
      style={{
        width: 300,
        height: 300,
      }}
      loop
      autoplay
    />
  </div>
);

export default Loading;

import React from 'react';

import IconSVGProps from '../types';

const CycleIcon = ({ fill, width, height }: IconSVGProps) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      style={{
        width,
        height,
      }}
      fill={fill}
    >
      <path
        fill="none"
        stroke={fill}
        strokeWidth={2}
        d="M13,20 C19,19 21,14 21,10 M14,16 L12,20 L16,23 M0,9 L4,6 L7,10 M9.00000008,20 C3,17 2.00000006,12 3.99999998,6 M20,6.99999999 C16,0.99999995 10,1 6,4.00609254 M20,2 L20,7 L15,7"
      />
    </svg>
  );
};

export default CycleIcon;

import React from 'react';

import { IconSVGProps } from '../types';

const ChartIcon = ({ fill, width, height }: IconSVGProps) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      style={{
        width,
        height,
      }}
      fill={fill}
    >
      <g id="dashboard">
        <line
          style={{
            fill: 'none',
            stroke: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          x1="3"
          x2="29"
          y1="29"
          y2="29"
        />
        <line
          style={{
            fill: 'none',
            stroke: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          x1="3"
          x2="3"
          y1="3"
          y2="29"
        />
        <line
          style={{
            fill: 'none',
            stroke: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          x1="16"
          x2="16"
          y1="7"
          y2="25"
        />
        <line
          style={{
            fill: 'none',
            stroke: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          x1="22"
          x2="22"
          y1="11"
          y2="25"
        />
        <line
          style={{
            fill: 'none',
            stroke: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          x1="10"
          x2="10"
          y1="16"
          y2="25"
        />
      </g>
    </svg>
  );
};

export default ChartIcon;

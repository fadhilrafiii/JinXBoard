import React from 'react';

import { IconSVGProps } from '../types';

const BulletIcon = ({ fill, width, height }: IconSVGProps) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512px"
      height="512px"
      viewBox="-96 0 512 512"
      xmlSpace="preserve"
      style={{
        width,
        height,
      }}
      fill={fill}
    >
      <path d="M160 352Q120 352 92 324 64 296 64 256 64 216 92 188 120 160 160 160 200 160 228 188 256 216 256 256 256 296 228 324 200 352 160 352Z" />
    </svg>
  );
};

export default BulletIcon;

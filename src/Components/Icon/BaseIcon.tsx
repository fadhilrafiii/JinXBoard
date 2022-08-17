import React from 'react';

import IconName from './constants';
import { HomeIcon, PeopleIcon } from './Icons';
import LeftArrowIcon from './Icons/LeftArrow';

interface IconProps {
  name: string;
  fill?: string;
  width?: number;
  height?: number;
}

const Icon = ({ name, fill = '#fff', width = 24, height = 24 }: IconProps) => {
  switch (name) {
    case IconName.Home:
      return <HomeIcon fill={fill} width={width} height={height} />;
    case IconName.People:
      return <PeopleIcon fill={fill} width={width} height={height} />;
    case IconName.LeftArrow:
      return <LeftArrowIcon fill={fill} width={width} height={height} />;
    default:
      return <HomeIcon fill={fill} width={width} height={height} />;
  }
};

export default Icon;

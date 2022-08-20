import React from 'react';

import IconName from './constants';
import {
  BulletIcon,
  ChartIcon,
  CheckIcon,
  CheckShieldIcon,
  CircuitIcon,
  CycleIcon,
  EarthIcon,
  EyeIcon,
  HomeIcon,
  IncreaseDiagramIcon,
  LeftArrowIcon,
  PeopleIcon,
  PowerPlantIcon,
  ThumbIcon,
} from './Icons';

interface IconProps {
  name: string;
  fill?: string;
  width?: number;
  height?: number;
}

const Icon = ({ name, fill = '#fff', width = 24, height = 24 }: IconProps) => {
  switch (name) {
    case IconName.Bullet:
      return <BulletIcon fill={fill} width={width} height={height} />;
    case IconName.Chart:
      return <ChartIcon fill={fill} width={width} height={height} />;
    case IconName.Check:
      return <CheckIcon fill={fill} width={width} height={height} />;
    case IconName.CheckShield:
      return <CheckShieldIcon fill={fill} width={width} height={height} />;
    case IconName.Circuit:
      return <CircuitIcon fill={fill} width={width} height={height} />;
    case IconName.Cycle:
      return <CycleIcon fill={fill} width={width} height={height} />;
    case IconName.Earth:
      return <EarthIcon fill={fill} width={width} height={height} />;
    case IconName.Eye:
      return <EyeIcon fill={fill} width={width} height={height} />;
    case IconName.Home:
      return <HomeIcon fill={fill} width={width} height={height} />;
    case IconName.IncreaseDiagram:
      return <IncreaseDiagramIcon fill={fill} width={width} height={height} />;
    case IconName.LeftArrow:
      return <LeftArrowIcon fill={fill} width={width} height={height} />;
    case IconName.People:
      return <PeopleIcon fill={fill} width={width} height={height} />;
    case IconName.PowerPlant:
      return <PowerPlantIcon fill={fill} width={width} height={height} />;
    case IconName.Thumb:
      return <ThumbIcon fill={fill} width={width} height={height} />;

    default:
      return <HomeIcon fill={fill} width={width} height={height} />;
  }
};

export default Icon;

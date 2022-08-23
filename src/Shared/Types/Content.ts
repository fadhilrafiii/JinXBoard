import { IconName } from 'Components/Icon';

export type Content = {
  title: string;
  description?: string;
};

export type ContentWithIcon = {
  iconName: IconName;
} & Content;

export type ContentWithList = {
  descriptionList: string[];
} & Content;

export type ContentWithIconAndList = {
  descriptionList: string[];
} & ContentWithIcon;

export type ContentWithImage = {
  image: string;
} & Content;

export type TimelineContent = {
  title: string;
  description: string;
  date?: string;
  node: IconName | string;
};

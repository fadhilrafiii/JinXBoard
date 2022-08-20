import { IconName } from 'Components/Icon';

export type Content = {
  title: string;
  description?: string;
  iconName: IconName;
};

export type ContentWithList = {
  descriptionList: string[];
} & Content;

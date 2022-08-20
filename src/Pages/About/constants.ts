import { IconName } from 'Components/Icon';

import { ContentWithIcon, ContentWithIconAndList, ContentWithImage } from 'Shared/Types/Content';

export const goalsContent: ContentWithIcon[] = [
  {
    title: 'Health & Safety Environment',
    iconName: IconName.Earth,
    description:
      'Reducing the risk of H2S leakage to the environment by providing real-time monitoring of H2S in the geothermal field',
  },
  {
    title: 'Flow Assurance',
    iconName: IconName.Cycle,
    description:
      'Prevent unnecessary downtime and earlier flow-related action plan implementation through faster monitoring',
  },
  {
    title: 'Power Plant Operation',
    iconName: IconName.PowerPlant,
    description:
      'Prevent unnecessary downtime and earlier power-plant related action plan implementation through faster monitoring',
  },
];

export const valueContent: ContentWithIconAndList[] = [
  {
    title: 'Efficient',
    iconName: IconName.IncreaseDiagram,
    descriptionList: ['Reduction of manpower needs', 'Cost  savings', 'Faster decision making'],
  },
  {
    title: 'Smooth',
    iconName: IconName.Thumb,
    descriptionList: ['Easy monitoring through dashboard', 'Fluent integration with surroundings'],
  },
  {
    title: 'Reliable',
    iconName: IconName.CheckShield,
    descriptionList: ['Highly-integrated with other systems', 'Accurate presented data'],
  },
];

export const featureContent: ContentWithIcon[] = [
  {
    title: 'Smart & Real-time Device Monitoring',
    iconName: IconName.Eye,
  },
  {
    title: 'Aid Decision Making with Artificial Intelligence',
    iconName: IconName.Circuit,
  },
  {
    title: 'Integrated and Intuitive Dashboard',
    iconName: IconName.Chart,
  },
];

export const developersContent: ContentWithImage[] = [
  {
    image: 'images/fadhil.jpg',
    title: 'Nanda Rizkika R.',
    description: 'Computer Vision & ML Engineer',
  },
  {
    image: 'images/fadhil.jpg',
    title: 'M. Fajril Afkaar',
    description: 'Geothermal Expert & Edge Engineer',
  },
  {
    image: 'images/fadhil.jpg',
    title: 'Fadhil Muhammad R.',
    description: 'Fullstack Web Engineer',
  },
  {
    image: 'images/fadhil.jpg',
    title: 'Nanda Rizkika R.',
    description: 'Computer Vision & ML Engineer',
  },
  {
    image: 'images/fadhil.jpg',
    title: 'M. Fajril Afkaar',
    description: 'Geothermal Expert & Edge Engineer',
  },
  {
    image: 'images/fadhil.jpg',
    title: 'Fadhil Muhammad R.',
    description: 'Fullstack Web Engineer',
  },
];

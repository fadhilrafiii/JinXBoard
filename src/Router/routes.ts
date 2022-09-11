import { IconName } from 'Components/Icon';

export const mainRoutes = [
  {
    label: 'Home',
    path: '/',
    iconName: IconName.Home,
  },
  {
    label: 'HSE',
    path: '/hse',
    iconName: IconName.Earth,
  },
  {
    label: 'Flow Assurance',
    path: '/flow-assurance',
    iconName: IconName.Cycle,
  },
  {
    label: 'Power Plant',
    path: '/power-plant',
    iconName: IconName.Circuit,
  },
];

export const secondaryRoutes = [
  {
    label: 'Development Plan',
    path: '/development-plan',
    iconName: IconName.IncreaseDiagram,
  },
  {
    label: 'About Us',
    path: '/about',
    iconName: IconName.People,
  },
];

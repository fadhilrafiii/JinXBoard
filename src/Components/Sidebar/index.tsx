import React, { useMemo, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Icon, IconName } from 'Components/Icon';

import { Route } from 'Shared/Types';

import styles from './index.module.css';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  mainRoutes: Route[];
  secondaryRoutes: Route[];
}

const Sidebar = ({ mainRoutes, secondaryRoutes }: SidebarProps) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const onToggleSidebar = () => setIsOpen((prevState) => !prevState);

  const eventStyles = useMemo(() => {
    if (isOpen)
      return {
        container: styles.container,
        logoImg: styles.logoImg,
        logo: styles.logo,
      };

    return {
      container: styles.wrappedContainer,
      logoImg: styles.smallLogoImg,
      logo: styles.smallLogo,
    };
  }, [isOpen]);

  return (
    <div className={eventStyles.container}>
      <div className={styles.toggleSidebar} onClick={onToggleSidebar}>
        {isOpen && <Icon name={IconName.LeftArrow} width={20} height={20} />}
      </div>
      <div>
        <div className={eventStyles.logo} onClick={!isOpen ? onToggleSidebar : () => null}>
          <img src="/logo-white.png" className={eventStyles.logoImg} alt="JinxBoard-logo" />
          {isOpen && <h5 className={styles.logoText}>JinxBoard</h5>}
        </div>
        <div className={styles.mainMenu}>
          {mainRoutes.map(({ iconName, label, path }: Route) => {
            return (
              <SidebarItem
                key={path}
                iconName={iconName}
                label={label}
                path={path}
                isWrapped={!isOpen}
                isActive={path === pathname}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.secondaryMenu}>
        {secondaryRoutes.map(({ iconName, label, path }: Route) => {
          return (
            <SidebarItem
              key={path}
              iconName={iconName}
              label={label}
              path={path}
              isWrapped={!isOpen}
              isActive={path === pathname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

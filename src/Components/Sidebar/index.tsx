import React, { useMemo, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import useWindowDimensions from 'Shared/Hooks/useWindowDimensions';

import { Icon, IconName } from 'Components/Icon';

import { Route } from 'Shared/Types';

import { MEDIUM_WINDOW_SIZE, SMALL_WINDOW_SIZE } from 'Shared/Constants/General';

import SidebarItem from './SidebarItem';

import styles from './index.module.css';

interface SidebarProps {
  mainRoutes: Route[];
  secondaryRoutes: Route[];
}

const Sidebar = ({ mainRoutes, secondaryRoutes }: SidebarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onToggleSidebar = () =>
    setIsOpen((prevState: boolean) => {
      if (width > SMALL_WINDOW_SIZE) return !prevState;

      return false;
    });

  const onLogoClick = () => navigate('/');

  const eventStyles = useMemo(() => {
    if (isOpen && width > MEDIUM_WINDOW_SIZE)
      return {
        container: styles.container,
        logoImg: styles.logoImg,
        logo: styles.logo,
        toggleIcon: styles.toggleSidebarOpen,
        logoWidth: 16,
        logoHeight: 16,
      };

    return {
      container: styles.wrappedContainer,
      logoImg: styles.smallLogoImg,
      logo: styles.smallLogo,
      toggleIcon: styles.toggleSidebarClose,
      logoWidth: 12,
      logoHeight: 12,
    };
  }, [isOpen, width]);

  return (
    <div className={eventStyles.container}>
      {width > MEDIUM_WINDOW_SIZE && (
        <div className={eventStyles.toggleIcon} onClick={onToggleSidebar}>
          <Icon
            name={IconName.LeftArrow}
            width={eventStyles.logoWidth}
            height={eventStyles.logoHeight}
          />
        </div>
      )}
      <div>
        <div className={eventStyles.logo} onClick={onLogoClick}>
          <img src="/images/logo-white.png" className={eventStyles.logoImg} alt="JinxBoard-logo" />
          {isOpen && width > MEDIUM_WINDOW_SIZE && <h5 className={styles.logoText}>JinxBoard</h5>}
        </div>
        <div className={styles.mainMenu}>
          {mainRoutes.map(({ iconName, label, path }: Route) => {
            return (
              <SidebarItem
                key={path}
                iconName={iconName}
                label={label}
                path={path}
                isWrapped={!isOpen || width <= MEDIUM_WINDOW_SIZE}
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
              isWrapped={!isOpen || width <= MEDIUM_WINDOW_SIZE}
              isActive={path === pathname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

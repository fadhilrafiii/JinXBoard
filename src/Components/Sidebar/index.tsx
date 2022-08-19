import React, { useMemo, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Icon, IconName } from 'Components/Icon';

import { Route } from 'Shared/Types';

import styles from './index.module.css';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  mainRoutes: Route[];
  secondaryRoutes: Route[];
}

const Sidebar = ({ mainRoutes, secondaryRoutes }: SidebarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const onToggleSidebar = () => setIsOpen((prevState) => !prevState);

  const onLogoClick = () => navigate('/');

  const eventStyles = useMemo(() => {
    if (isOpen)
      return {
        container: styles.container,
        logoImg: styles.logoImg,
        logo: styles.logo,
        toggleIcon: styles.toggleSidebarOpen,
        logoWidth: 20,
        logoHeight: 20,
      };

    return {
      container: styles.wrappedContainer,
      logoImg: styles.smallLogoImg,
      logo: styles.smallLogo,
      toggleIcon: styles.toggleSidebarClose,
      logoWidth: 12,
      logoHeight: 12,
    };
  }, [isOpen]);

  return (
    <div className={eventStyles.container}>
      <div className={eventStyles.toggleIcon} onClick={onToggleSidebar}>
        <Icon
          name={IconName.LeftArrow}
          width={eventStyles.logoWidth}
          height={eventStyles.logoHeight}
        />
      </div>
      <div>
        <div className={eventStyles.logo} onClick={onLogoClick}>
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

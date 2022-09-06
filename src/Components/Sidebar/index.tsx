import React, { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useWindowDimensions from 'Shared/Hooks/useWindowDimensions';

import { RootState } from 'Redux/Store';

import { actionCloseSidebar, actionOpenSidebar } from 'Redux/Reducers/Sidebar';

import { Icon, IconName } from 'Components/Icon';

import { Route } from 'Shared/Types';

import { isMediumWindow, isSmallWindow } from 'Shared/Helpers/window';

import { MEDIUM_WINDOW_SIZE } from 'Shared/Constants/General';

import SidebarItem from './SidebarItem';

import styles from './index.module.css';

interface SidebarProps {
  mainRoutes: Route[];
  secondaryRoutes: Route[];
}

const Sidebar = ({ mainRoutes, secondaryRoutes }: SidebarProps) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const shouldShowDesktopSidebar = !isMediumWindow(width) && !isSmallWindow(width);

  const onToggleSidebar = () => {
    if (isOpen) dispatch(actionCloseSidebar());
    else dispatch(actionOpenSidebar());
  };

  const onLogoClick = () => {
    if (isMediumWindow(width)) return;

    if (shouldShowDesktopSidebar) navigate('/');
    else onToggleSidebar();
  };

  const onClickMenu = (path: string) => {
    navigate(path);

    if (isSmallWindow(width)) onToggleSidebar();
  };

  useEffect(() => {
    if (width <= MEDIUM_WINDOW_SIZE) dispatch(actionCloseSidebar());
  }, [dispatch, width]);

  const eventStyles = useMemo(() => {
    if (isOpen)
      return {
        container: styles.container,
        logoImg: styles.logoImg,
        logo: styles.logo,
        toggleIcon: styles.toggleSidebarOpen,
        logoWidth: 16,
        logoHeight: 16,
        mainMenu: styles.mainMenu,
      };

    return {
      container: styles.wrappedContainer,
      logoImg: styles.smallLogoImg,
      logo: styles.smallLogo,
      toggleIcon: styles.toggleSidebarClose,
      logoWidth: 12,
      logoHeight: 12,
      mainMenu: !isSmallWindow(width) ? styles.mainMenu : styles.mainMenuHidden,
    };
  }, [isOpen, width]);

  return (
    <div className={eventStyles.container}>
      {shouldShowDesktopSidebar && (
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
          {isOpen && shouldShowDesktopSidebar && <h5 className={styles.logoText}>JinxBoard</h5>}
        </div>
        <div className={eventStyles.mainMenu}>
          {mainRoutes.map(({ iconName, label, path }: Route) => {
            return (
              <SidebarItem
                key={path}
                iconName={iconName}
                label={label}
                path={path}
                isWrapped={!isOpen}
                isActive={path === pathname}
                onClickMenu={onClickMenu}
              />
            );
          })}
        </div>
      </div>
      <div className={eventStyles.mainMenu}>
        {secondaryRoutes.map(({ iconName, label, path }: Route) => {
          return (
            <SidebarItem
              key={path}
              iconName={iconName}
              label={label}
              path={path}
              isWrapped={!isOpen}
              isActive={path === pathname}
              onClickMenu={onClickMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

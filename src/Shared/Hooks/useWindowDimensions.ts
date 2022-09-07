import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'Redux/Store';

import { actionCloseSidebar } from 'Redux/Reducers/Sidebar';

import { getWindowDimensions } from 'Shared/Helpers/window';

import { MEDIUM_WINDOW_SIZE } from 'Shared/Constants/General';

const useWindowDimensions = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(isSidebarOpen));

  useEffect(() => {
    const handleResize = () => {
      const dimension = getWindowDimensions(isSidebarOpen);
      setWindowDimensions(dimension);

      if (dimension.width <= MEDIUM_WINDOW_SIZE) dispatch(actionCloseSidebar());
    };

    setWindowDimensions(getWindowDimensions(isSidebarOpen));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return windowDimensions;
};

export default useWindowDimensions;

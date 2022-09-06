import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from 'Redux/Store';

import { getWindowDimensions } from 'Shared/Helpers/window';

const useWindowDimensions = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(isSidebarOpen));

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions(isSidebarOpen));
    };

    setWindowDimensions(getWindowDimensions(isSidebarOpen));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return windowDimensions;
};

export default useWindowDimensions;

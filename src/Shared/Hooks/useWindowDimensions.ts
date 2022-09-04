import { useEffect, useState } from 'react';

import { getWindowDimensions } from 'Shared/Helpers/window';

const useWindowDimensions = (isSidebarOpen?: boolean) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(isSidebarOpen));

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;

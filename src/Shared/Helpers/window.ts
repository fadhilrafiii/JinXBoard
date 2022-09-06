import {
  LARGE_WINDOW_SIZE,
  MEDIUM_WINDOW_SIZE, // SIDEBAR_WIDTH,
  // SIDEBAR_WRAPPED_WIDTH,
  SMALL_WINDOW_SIZE,
} from 'Shared/Constants/General';

export const getWindowDimensions = (isSidebarOpen?: boolean) => {
  console.log(isSidebarOpen);
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const isSmallWindow = (width: number) => width <= SMALL_WINDOW_SIZE;
export const isMediumWindow = (width: number) =>
  width <= MEDIUM_WINDOW_SIZE && width > SMALL_WINDOW_SIZE;
export const isLargeWindow = (width: number) =>
  width <= LARGE_WINDOW_SIZE && width > MEDIUM_WINDOW_SIZE;
export const isExtraLargeWindow = (width: number) => width > LARGE_WINDOW_SIZE;

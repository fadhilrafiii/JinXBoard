import { createSlice } from '@reduxjs/toolkit';

import { getWindowDimensions, isMediumWindow, isSmallWindow } from 'Shared/Helpers/window';

export type SidebarState = {
  isOpen: boolean;
};
const { width } = getWindowDimensions();

const sidebarInitialState: SidebarState = {
  isOpen: isMediumWindow(width) || isSmallWindow(width) ? false : true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: sidebarInitialState,
  reducers: {
    actionOpenSidebar: (state: SidebarState) => {
      state.isOpen = true;
    },
    actionCloseSidebar: (state: SidebarState) => {
      state.isOpen = false;
    },
  },
});

export const { actionOpenSidebar, actionCloseSidebar } = sidebarSlice.actions;

const sidebarReducer = sidebarSlice.reducer;
export default sidebarReducer;

import { createSlice } from '@reduxjs/toolkit';

import { getWindowDimensions } from 'Shared/Helpers/window';

import { MEDIUM_WINDOW_SIZE } from 'Shared/Constants/General';

export type SidebarState = {
  isOpen: boolean;
};
const { width } = getWindowDimensions();

const sidebarInitialState: SidebarState = {
  isOpen: width < MEDIUM_WINDOW_SIZE ? false : true,
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

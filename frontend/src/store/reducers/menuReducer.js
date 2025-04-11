import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  selectedID: null,
  drawerOpen: false,
  menuDashboard: {},
  globalSearch: ''
};

// ==============================|| SLICE - MENU ||============================== //

export const menuReducer = createSlice({
  name: 'menuReducer',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    getGlobalData(state, action) {
      state.globalSearch = action.payload;
    }
  }
});

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, activeID, getGlobalData } = menuReducer.actions;

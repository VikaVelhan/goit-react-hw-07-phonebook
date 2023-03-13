import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterValue } = filterSlice.actions;

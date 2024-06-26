import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

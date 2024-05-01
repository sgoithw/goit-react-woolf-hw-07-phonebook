import { createSlice } from '@reduxjs/toolkit';

const phonesSlice = createSlice({
  name: 'phones',
  initialState: {
    phones: [],
  },
  reducers: {
    addPhone: {
      reducer: (state, { payload }) => {
        state.phones.push(payload);
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: (Math.random() * 1000).toString(32).replace(/\./g, ''),
            name,
            number,
          },
        };
      },
    },
    removePhone: (state, { payload }) => {
      state.phones = state.phones.filter(phone => phone.id !== payload);
    },
  },
});

export const { addPhone, removePhone } = phonesSlice.actions;
export default phonesSlice.reducer;

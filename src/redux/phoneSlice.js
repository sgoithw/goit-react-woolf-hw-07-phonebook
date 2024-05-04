import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  phones: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.phones = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.phones.push(payload);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.phones = state.phones.filter(phone => phone.id !== payload);
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default phonesSlice.reducer;

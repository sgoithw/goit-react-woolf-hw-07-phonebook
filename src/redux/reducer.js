import { combineReducers } from 'redux';
import phonesReducer from './phoneSlice';
import filterReducer from './filterSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistedPhoneReducer = persistReducer(
  {
    key: 'phones',
    storage,
  },
  phonesReducer
);

export const reducer = combineReducers({
  phones: persistedPhoneReducer,
  filter: filterReducer,
});
